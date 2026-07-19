# EVSRC-2026-000299 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=restored`** (2nd-reader signed 2026-07-19; minor anchor/counterweight restore)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000299_yc-paper-club-inference-diffusion-world-models.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000299`  ·  filename: `EVSRC-2026-000299_yc-paper-club-inference-diffusion-world-models.md` (firm-slug SUGGESTION: `EVSRC-2026-000299_yc-paper-club-inference-diffusion-world-models.md` — NOT renamed per run hard-rule)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=wE1ZgJdt4uM`  ·  source_title: `Inference, Diffusion, World Models, and More | YC Paper Club`
- channel_or_org: `Y Combinator`  ·  speaker: `François Chaubard (host); Tanishq Kumar; Guangyao "Stannis" Zhou; Isaac Ward; Akshay Vegesna; Konwoo Kim`  ·  published_at: `2026-05-28`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`  ·  metadata_source: `Knox Review 001 block (pasted header carried STALE id EVSRC-2026-000287 — ignored per run rule; canonical id = filename 299); no screenshot supplied THIS session → identity fields carried as `inferred``
- content_type: `research paper club / multi-paper technical presentations (5 papers)`  ·  source_reliability_context: `researcher (practitioner-grade paper authors + one YC-partner host/investor); strong for inference/diffusion/world-model/generalization/data-efficiency MECHANISMS, weaker for benchmark-extrapolation + "path to AGI" framing`  ·  topic_tags_light: `[inference_systems, speculative_decoding, speculative_speculative_decoding, diffusion_MPC, model_predictive_control, world_models, latent_world_models, JEPA, uncertainty_detection, prediction_residual, surprise_quantification, generalization, PAC_Bayes, inductive_bias, overparameterization, data_efficiency, ensembling, distillation, self_distillation, intelligence_per_watt, intelligence_per_sample, deliberation_capacity, trust_horizon, Reactor, Agent_Runtime, Platform_Loop, Care_Operating_Model]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `François Chaubard` · role_in_source: `host / organizer / introductory speaker` · affiliation_at_publication: `Y Combinator — Visiting Partner (inaugural YC Paper Club)` · speaker_type: `investor` · authority_context: `frames the event + introduces presenters; his interstitial remarks (sample efficiency, intelligence-per-watt/per-sample) are informed-practitioner commentary, not paper authorship` · identity_confidence: `inferred` (from Knox Review 001 metadata; no screenshot supplied this session)
  - name: `Tanishq Kumar` · role_in_source: `presenter / paper author` · affiliation_at_publication: `Stanford — graduate student` · speaker_type: `researcher` · authority_context: `author presenting Speculative Speculative Decoding (SSD); strong for inference-as-capability + speculative/verify mechanism` · identity_confidence: `inferred`
  - name: `Guangyao "Stannis" Zhou` · role_in_source: `presenter / paper author` · affiliation_at_publication: `Google DeepMind — research scientist (co-leads world-modeling-for-robotics)` · speaker_type: `researcher` · authority_context: `presents Diffusion Model Predictive Control (DMPC); strong for action-proposal / dynamics-model factorization + novel-dynamics adaptation` · identity_confidence: `inferred`
  - name: `Isaac Ward` · role_in_source: `presenter` · affiliation_at_publication: `Yann LeCun's group (LeJEPA/LeWorldModel context; specific title not established in transcript)` · speaker_type: `researcher` · authority_context: `presents latent JEPA-style world model + model-error/surprise quantification; strong for prediction-residual-as-signal` · identity_confidence: `inferred`
  - name: `Akshay Vegesna` · role_in_source: `presenter / startup co-founder` · affiliation_at_publication: `Q Labs — President/co-founder (works with Andrew Gordon Wilson)` · speaker_type: `founder` · authority_context: `presents Wilson's "Deep Learning is Not So Mysterious" — PAC-Bayes, overparameterization, soft inductive bias; strong for inductive-bias-as-governance analogy` · identity_confidence: `inferred`
  - name: `Konwoo Kim` · role_in_source: `presenter / paper co-lead` · affiliation_at_publication: `co-led with Suhas, Percy Liang, Tatsu (Stanford-adjacent; not explicitly stated)` · speaker_type: `researcher` · authority_context: `presents "Pretraining Under Infinite Compute" — data-constrained scaling, regularization, ensembling, distillation; strong for training-time-plurality→runtime-distillation` · identity_confidence: `inferred`
- publisher / channel: `Y Combinator`  ·  interviewer / moderator / host: `François Chaubard`
- event_context: `Inaugural YC Paper Club, held ~2026-05-20 at the YC office (Pioneer, Mountain View, CA); five technical paper presentations to a curated ~100-person research/founder audience`  ·  perspective / conflict notes: `curated research-discussion event, NOT peer review. Several presenters are the paper authors or close collaborators → high technical relevance but advocacy incentive; benchmark results + scaling extrapolations ("5x/17x data-efficiency win", "300 tok/s", "path to AGI") must be verified against the original papers before any architectural reliance. Host is an investor curating an investable-frontier narrative. Treat all forward claims as `research hypothesis | informed speculation | future-watch`, not doctrine (`GRD-039`).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
[music]
0:07
All right. [music] Hello everyone. How you guys doing? Welcome to the first
0:14
ever YC paper club. This is like a very exciting thing. [applause]
0:21
Absolutely thrilled with the response. We had over a thousand folks that applied to come in. It was a very hard
0:27
selection. If you guys have friends that didn't make the cut, I'm very sorry. We're we kind of we need to keep it to
0:32
about a hundred. Um and so we selected a very very cool group. Um
0:38
the mission is to create this kind of community of great founders and great
0:45
researchers and try to pull them together. I guess just for you guys to get a sense for how cool the people in
0:51
this room are. Um, raise your hand if you have at least five citations,
0:59
10 citations, a 100 citations,
1:04
a thousand citations. Wow, this is insane. Okay, 10,000
1:10
citations. Oh my god. Okay. All right. This is awesome. I I would go up to
1:15
300,000, but I think it's like Chris Manning and that's about it. Um, so, uh, raise your hand if you've raised at
1:21
least a million dollars. Raise your hand if you've re raised at least $5 million.
1:28
At least $10 million, at least $50 million.
1:35
We still got one. We still got two over here. All right. [laughter] Okay. Awesome. The hidden mission that I'll
1:41
also kind of add on this is we had uh Har and I had um this uh awesome uh
1:46
breakfast in uh Woodside and this place is so so unique and special and we kind
1:53
of just don't use it enough at YC. So the hidden mission is to make Pioneer great again. And so I went through
1:58
winter 16 here. Um it was an unbelievable time. I think 140 companies
2:04
went through that batch. 10 of 15 of them are unicorns. It's an insane number. um WPY, uh Astronis, um Deep
2:12
Graham, all these companies were in the batch and during that time uh Sam was still running the show and basically
2:19
sitting right there would be me, Undercarpathy, Vaj Deremba and Greg Brockman because they were starting this
2:25
thing called OpenAI and it was like the very early stages and there was like not that many AI companies. So they would
2:31
ask me and Steve from Debb like what are you guys what are you working on? What are the problems you're working on? and
2:36
they're looking for problems because they didn't even know what to research. And so it was such a such a special time. This place is so special uh to to
2:43
me in particular uh to Har as well. And we just it's it we don't really use it enough. So I wanted um to kind of make
2:50
this community down here. And I also think that 100% of the AI talent or AI
2:56
people in the Bay Area, probably about half of them are in the city maybe is a good number. There's anthropic, uh
3:02
there's open AI, there's cursor, there's all this stuff in the city. Then there's a lot that are down here that are not making the trek up to the city to join
3:09
YC. And so he's like, "Yes, emphatically, yes." Um, and so you have Google DeepMind right on the corner. You
3:15
have um Tesla, you have XAI, you have Thinking Machines, you have all these other people in Palo Alto, you have a
3:20
lot of startups. And so uh I wanted to kind of like solve six birds with one stone and kind of pull together this
3:26
community down here as well. And Harj uh uh is super excited about it as well. And so thank you very much Har for
3:31
letting us do this. We got uh five great papers here coming up. The first one is Tanishk Speculative Speculative
3:38
Decoding. You want to come up? All right.
3:45
Do you want me to pull it on? Yeah, I got you. Cool.
3:51
I know it uh looks like maybe I was sloppy and I added an extra word in the title, but uh it is intentional um and
3:56
it'll make sense in uh good time. Um my name is Tanishk. I'm a grad student at Stanford. Um, this is a project I worked
4:02
on with Triau and Aar May. I'm going to be evangelizing inference for people
4:08
today. Hopefully, you'll be inference enjoyers by the end. So, I'm not sure
4:13
how much I have to motivate inference. I worked on training before inference. And I sort of the sort of mental model I had
4:20
in mind for how inference works was you know you do this beautiful craftsmanship during the training process and you get
4:25
these like you know very intricate weights and then you kind of just hand it off and use them to generate tokens.
4:31
In my mind it's sort of like you have the weights just multiply the matrices it's why do you need a team for it? Um I
4:40
was very confused but there is in fact a lot of subtlety involved. Um it's a lot of fun the algorithms and systems behind
4:45
inference at scale. I'm not sure I need to spend too long talking about why inference is important. Um there is one
4:53
point I want to make that I don't hear people talk about enough. So things you may have heard are that inference costs
5:00
are high. They dominate training costs when you're serving a model for billions of users or you know 10 claud code power
5:09
users. That's trillions of tokens. Um, not only are inference costs dominating
5:14
training costs, but even within training, RL is starting to exceed the
5:19
compute requirements of pre-training. And what is RL but a wrapper on inference, right? So, these are two
5:26
things you've probably heard before. The third is one I fear isn't really talked about, but it's the reason that I
5:32
started working on inference, and I use the phrase working on inference lightly. This was the only inference project I've
5:38
ever done. Um, but the the reason I got interested in making inference fast was not because of cost or for convenience.
5:45
It was entirely because of capability. So the claim I'm going to make and maybe this is the one thing to take away from
5:52
the message I'm trying to send in this talk is that inference today is seen as
5:57
a sort of like cost or convenience lever. But uh in one two or 3 years
6:02
inference is going to be seen as a capability. And what I mean by that is that if you have a method, an algorithm,
6:09
a system where its performance scales with the amount of thinking it does, then fundamentally the speed at which
6:16
you can do inference, the tokens per second is exactly the peak intelligence that you can deliver.
6:23
So inference should be thought of as not so much as a a cost or or convenience factor, but as a capability. Um, and
6:29
that's why I got interested in it. I I wanted to work towards the future where we have an entire data data center of
6:34
20,000 B200s just working on the reman hypothesis. Um okay, yes, that's the
6:42
future that uh I had in mind. Perhaps this meme is a little outdated because it has an A100 on it, but uh yeah. Okay.
6:49
So to motivate things, here is an example of fast inference. So I'm going
6:54
to give you a little demo of uh three algorithms side by side. We're going to sample, you know, a code prompt from VLM
7:01
with just normal auto reggressive decoding. We're going to use their speculative decoding. And then I'm going to put next to it the sort of janky
7:08
handrolled inference engine I wrote over a summer for this project. Um, whose main strength is just that it implements
7:13
a new algorithm and so you can see them side by side. SSDs on the right and you
7:18
can see it is quite a bit faster than what you can get if you try to use an open source engine. Um, and it's not the
7:24
systems, it's it's the algorithm. Um so yeah that's what we want to work towards understanding both how speculative
7:30
decoding works as well as the algorithm on the right. Okay. Um I'll start by introducing what
7:38
speculative decoding is how it works and then we'll move into what speculative speculative decoding is. I hope that if
7:44
you have like a reasonably strong understanding of how speculative decoding works the the problem that SSD
7:50
is trying to solve will feel very motivated and and the algorithm should just become clear in good time.
7:56
Okay, so this is the schematic I'm going to use to explain how vanilla speculative decoding works. Um, it has a
8:02
small model, the tiny llama up top, as well as a big model, the big llama. And our goal is simply to sample fast from
8:10
the big llama. We want tokens generated from the big model. And we're going to use a small model as a sort of proxy or an instrument to be able to sample
8:16
quickly from the big model. Okay. So, what the draft is going to be responsible for is basically generating
8:22
a bunch of tokens one by one. One by one is important. It's auto reggressive. So you need to do three forward passes on
8:27
the draft or you know however many some constant number. Um and these are going to be guesses for what the draft
8:33
believes that the big model is going to output next. It wants to sort of predict ahead of time. The job that the big
8:40
model has, I'm going to call it the target model, is verifying these guesses. What does verification mean?
8:46
Verification means doing one forward pass over these generated tokens to see
8:51
how likely it is that the big model would have generated them. The sort of key asymmetry here, the reason that
8:57
speculation works is that it is easier to verify than to generate. This is a
9:04
feature of the transformer architecture where you can get the probabilities for many tokens in a sequence in parallel in
9:09
one forward pass. Um but you can't generate them in parallel. auto reggressive decoding as uh one at a
9:16
time. Um so we're leaving the auto reggressive decoding which is slow uh to a very quick and small model and then
9:22
we're doing just one forward pass on these tokens. And the way you verify tokens is basically by having the big
9:28
model look at the probabilities of each of the generated tokens and see how plausible it is that it would have
9:34
generated those tokens. And sort of the intuition here is that we will accept precisely those tokens that the big
9:40
model could plausibly have generated. Its probabilities were reasonably high. There subtleties in exactly what the
9:46
algorithm is um that I'm going to gloss over, but that's the way to think about it. Um and then we're going to find a point perhaps where we don't think it's
9:52
plausible the big model would have generated those tokens and we're going to reject those tokens. So in the little schematic on the right uh there the
9:59
draft samples three and the big model verifies them and concludes that only the first token was something it would
10:05
plausibly have generated. It will reject the second token onwards and importantly
10:10
this is a sort of critical but subtle detail of vanilla specular decoding because you have the probabilities at
10:16
each of the sequence positions. You can sample an extra token at the point at which you rejected a token for free as
10:23
in without doing any more forward passes. And so that yellow token is what I'm going to call a bonus token that you sample for free. This is going to be
10:29
important in SSD. Um, so yeah, that's uh that's an important conceptual point.
10:35
And this sort of sets the stage for how SSD
10:41
works. Okay, we have our schematic. And the way we've set up speculative
10:47
decoding is that it's a way to exchange flops for latency. So speculation in general is not actually something that
10:54
uh only LLMs do. It's like a a deep idea in computer science. It's used in CPUs as well where the general philosophy is
11:00
that you premputee something ahead of time. Some of what you premputee may be useless because it may be an incorrect
11:06
prediction of the future, but if you're right, you get to fast forward in time um and you get lower latency as a
11:11
result. So the the sort of like moral philosophy of speculative decoding is that it's currency exchange. The difficulty with normal speculative
11:18
decoding is that you can't push this arbitrarily far. You cannot keep
11:23
sampling more and more tokens on the draft and keep getting speed ups because at some point you're going to get to a point where you're spending a lot of
11:28
time drafting and you're not accepting all that many tokens. And in particular, like a big bottleneck in vanilla
11:33
speculative decoding is the sequential dependence between the small llama and the big llama. Um the drafting in round
11:39
t has to take place before the verification of those tokens. um and the drafting in round t+1 can't take place
11:46
before you know the outcome of verification of the previous round because you need that as a prefix to draft on top of. So there's a logical
11:54
dependency here. The goal of SSD is very simple. There's a lot of gnarly and
11:59
subtle details but the highle idea is incredibly simple. It is simply to parallelize this sequential operation.
12:06
We want drafting and verification to be happening at the same time.
12:12
Normally in speculation they happen on the same hardware and that's fine because there's only one of them happening at a time. In our setup
12:18
they're going to be happening at the same time. So we're not going to be collocating them. And the main question basically becomes how do you parallelize
12:26
this inherently sequential algorithm that has a logical dependency. Um and the way we're going to do that is we are
12:32
going to have the draft model send back its draft tokens in a certain round. So
12:37
we've sent back a bunch of blue tokens. That's now the job of the verifier to do a forward passover and verify. And this
12:44
is going to take a while because a verifier is a big model. What we on the draft are going to do is basically start
12:50
anticipating the most likely verification outcomes immediately. As soon as we send back like a certain
12:57
round of speculation and once we we have in mind some of the most likely verification outcomes, we are going to
13:03
start drafting the next round on top of those immediately while verification is taking place. If we're right, the next
13:10
time the verifier asks for a draft, we'll have it ready immediately. We're entirely hiding the latency of drafting.
13:16
If we're wrong, well, we'll have to figure out a backup strategy. And there's uh there's there's there's some subtleties on what you do and how you do
13:22
it there. Um so yeah, the way that speculative decoding looks like this. And perhaps unsurprisingly, the analog
13:29
for SSD is this diagram on the right. We're now drafting and verification happen in parallel. um the the principal
13:37
difficulty or algorithmic design space in SSD is how do you predict verification outcomes ahead of time. I
13:44
thought verification is where you are leveraging the intelligence of the big model that should by construction be difficult to predict. Um and the
13:51
intuition for why it's plausible at all is that you can make many guesses on the draft for what a verification outcome
13:57
is. And a verification outcome here is just you know a plausible number of accepted tokens and then a bonus token
14:04
on top of that. Now this is hard to predict because a bonus token comes from a vocabulary which has size you know
14:09
tens to hundreds of thousands. Um so it's a large space to cover um but it turns out you can do it well um
14:15
reasonably well. You can get it right about 80 to 90% of the time which is more than enough to get big speed ups.
14:20
And the way we do that, the short of it is basically we use information on the draft to predict what the verification
14:26
outcome is likely to be. When we generated the blue tokens on the draft, we had other tokens that we chose not to sample. Those other tokens are plausible
14:33
verification bonus token candidates. And so you basically use information from the token distributions of the draft
14:40
model to predict what likely outcomes on the target are. And then once you have all of these predictions, you can decode
14:45
them in parallel as just different sequences that you're decoding on top of a shared prefix. And voila, it uh it's
14:53
it gives you speedups because you get to hide the latency of drafting altogether. Um there's also a an additional bonus
15:00
that since verification actually kind of takes a while, you get more time to draft uh in the first place. So you can
15:05
draft more tokens which increases the expected tokens per round and sort of gives you further speed ups. There's a
15:11
bunch of stuff that we work through in the paper that's uh that's sort of reckoning with the the implementation
15:17
details of this. One of it is how you handle cache misses. One plausible thing you could do perhaps naively is to just
15:23
fall back to ordinary speculation just in time. Turns out that actually this is not always optimal. Um there's
15:28
trade-offs. You know, as batch size increases, you're going to fail to predict some of the sequences verification outcomes. Um and so you
15:35
need different ways to predict and handle cache misses. Should you be allocating your compute on the draft
15:41
equally amongst plausible prefix length? Uh the short answer is no. You can be clever about it. And all
15:48
of this trickery just helps you increase your cash hit rate, so to speak, the
15:53
amount of time you're able to correctly predict verification outcomes. And there's there's some trade-offs between
15:58
cash hit rate and the actual quality of the drafting you're doing. Um and this is totally non-obvious. Um, and and and
16:06
we we go into why that exists and how you can navigate it in the paper. Um, I'm happy to talk about it in in in Q&A
16:11
as well. Um, okay. So, what do you get for the the price of this uh
16:18
mind-numbing complexity and uh pain wrangling an inference engine? Well, you get the
16:25
privilege of watching a number go up, which I guess is the north star of all AI research. And so here we have uh a
16:33
bunch of inference algorithms and inference engines. The blue ones are sort of uh my inference engine and uh
16:39
the light blue is just the baseline implementation of speculative decoding. The red is SG lang which is you know of
16:46
all the inference engines we tried the fastest with speculative decoding and the dark blue is is SSD. Um and normally
16:52
speculative decoding um is a is a win for latency but it's sort of unclear whether it's useful for throughput. um
16:58
for us it turn in in in this setting it's actually a win for both um and so you get numbers going up and you also
17:04
get the ability next time you are at a San Francisco house party um to see other people dancing and knowing in the
17:11
corner that uh you know what it takes to sample at 300 tokens per second uh for
17:16
llama 370B on 4H100s. So this is uh sensitive information um but yeah that's
17:22
that's about it. you. [applause]
17:28
[applause] All right, that was awesome. Okay, so
17:35
for this next paper, this is um my first experience being
17:42
scooped. The only issue is that he didn't talk to me and he did it six months before me. Um [laughter]
17:49
but uh Isaac can vouch for me on this and maybe Robert as well. I basically
17:54
fell in love with the diffusion policy paper. I was like this is definitely like you know a full uh predicting like
18:01
th horizon steps for your robotic control. Um we have these amazing video
18:07
models. Why don't we just use the video model to like run this like at test time to like play out the movie and where do
18:14
I end up? And then you have your classic push t. And then I started like looking around uh and then DM mind of course
18:20
already did it. So [laughter] so I wasted like a month and it was not happy. But anyway, thank you very much.
18:26
Please welcome Stannis.
18:33
Hi everyone. I'm Stannis. I'm a star research scientist at Google DeepMind. Uh currently I'm co-leading a new
18:39
project on word modeling for robotics. uh where we try to build general purpose policies on top of video and word
18:46
models. But uh this is an early work that I did about two years ago. Uh so
18:52
this is before I switched to working on hardcore robotics and uh going into hardware really scaling up the data but
18:59
uh you can probably see a lot of very similar ideas early version of ideas
19:04
demonstrated on toy problems. Okay. So uh first to give some background what is
19:10
the model predictive control. So model predictive control also called the receding horizon control uses a dynamics
19:16
model or some people also call it a word model and uh action selector mechanism
19:22
uh which is a planner to construct agents that can solve a wide variety of tasks by means of maximizing a no
19:29
objective. So the main advantages of model predictive control is uh it can
19:34
adapt to normal reward functions at test time. So uh the dynamics model are also easier to learn and generates better
19:41
than just policies and the action proposal dynamics model factorization also allows easy adaptation to normal
19:49
dynamics. So we're going to uh demonstrate some of these in later experiments but basically here we are
19:55
showing the overall idea which is extremely simple. We have a action proposal which proposes a sequence of
20:01
actions. We have a dynamics model which can evolve these actions and give you the future states. And uh finally we
20:08
have some objective functions that we are trying to optimize. We basically use a planner to optimize that and uh pick
20:14
the actions and execute it in the environment. So what is diffusion model operative control? So the motivation
20:22
mainly is uh uh there are a couple of problems we need to address in order to make MPC effective in practice. One the
20:29
dynamics model need to be accurate to avoid the problem of compounding errors and uh two the planning algorithm also
20:35
needs to be powerful enough to select a good sequence of actions. So with DMPC
20:40
what we did is to use diffusion models to learn both multi-step action proposals and multi-step uh dynamics
20:48
models. So the advantages are mainly to reduce compounding errors and we also
20:54
found that uh it can simplify the planning algorithm. Essentially we can just use a very simple uh sampling based
21:00
planner and we can already outperform a lot of the previous uh approaches. So uh
21:05
before we dive into the details also want to give a hierarchical view of some related works we organized. So there are
21:12
a lot of related works in the literature and uh we organize it uh uh in this way where we basically look at how different
21:19
approaches um so basically all approaches essentially try to build a joint uh distribution of the states and
21:26
the actions but they do it in different ways and also use the different components in different ways. So for
21:32
example, you can build it in a factorized way where you have row a which is your policy predicting the
21:39
actions and then collision on the action predict the state which is a dynamics model and uh for this you have the dynam
21:45
paradigm where you basically learn a model and use the model to also generate
21:51
data in the imagination and the learn policy. But uh you can also do MPC uh
21:56
where you uh essentially use a planner to select the actions and uh we also
22:01
have uh some uh uh there are also approaches where you build a joint model of the state and actions and you're
22:07
essentially also doing MPC and there are also model free approaches where you directly learn a policy. uh I won't dive
22:13
into the full details but uh uh there are basically different trade-offs in terms of runtime plan uh whether we can
22:20
do runtime planning and uh adapting to normal rewards and adapting to normal dynamics leveraging non-expert data and
22:27
also the uh general speed at runtime and there is also the distinction between
22:33
whether you're doing singlestep modeling or multi-step modeling. Okay. So coming to diffusion model,
22:40
diffusion model has enjoyed a lot of successes uh in uh generating AI
22:45
especially for generating images and videos. But uh in recent years they also found a lot of successes in robotics. So
22:52
currently uh so here I'm also showing a slide where uh this is a kind of the exploration space for uh diffusion based
23:00
uh I would calling diffusion based agents. So we of course start with the diffusion policy where we condition all
23:06
the observation and generate future actions. But then we also have this work called the diffuser which uh is uh you
23:15
can think of it as a way to joint jointly model uh observations and states
23:20
but in toy space. There are of course these ideas are explored in tons of
23:25
different papers but this is just a very simple and uh uh conceptual way to
23:30
describe it. And uh then there's also decision diffuser where we collision on the observations we directly generate
23:37
future uh we condition on the history directly generate future observations and then try a separate inverse dynamics
23:43
model to derive the actions and uh finally we have the diffusion model predictive control where we first have
23:51
an action proposal to propose future actions and use a dynamics model to evolve it and uh then use planner to
23:58
select the actions. There are different uh trade-offs among these. So for example, diffusion policy is sort of on
24:06
complex uh complex control like day-to-day we still rely on it a lot. But this requires expert demonstrations.
24:13
So essentially you can't move out of the behavior cloning paradigm. Uh for diffuser it's a jointly modeling state
24:20
and action. So it has implicit word modeling and also model based planning.
24:25
And this is actually something that we are trying to explore at scale similar ideas. But uh and then there's also uh
24:32
decision diffuser where you do observation only learning. The main benefit of this is it allows you to
24:39
leverage uh uh video only data to learn from video only data because for
24:45
robotics uh the data is a many bottleneck. And then finally there's a division MPC which allows us to do
24:51
runtime adaptation to normal rewards and normal dynamics. So what does the
24:57
algorithm look like? It actually is extremely simple. We have uh often data set and uh we have uh some
25:05
hyperparameters. Essentially we are learning a couple of u uh learning a
25:10
couple of models all from the offline data sets. We're learning a policy which u uh given the current observation
25:17
predicts the actions. We're learning a dynamics model which uh given the uh given the actions uh evolves the
25:24
observations to predict the future states. And uh uh basically after
25:29
learning all this at uh um at uh inference time when we actually deploy
25:34
it as a policy we uh sampled action proposal and score it uh rank it and uh
25:41
pick the best. But uh the main difference uh compared to previous approaches is uh we adopted a multi-step
25:49
action proposal which uh is uh essentially very similar to a diffusion policy but if you train on more diverse
25:55
data it can give you uh more coverage in terms of the action space and uh we are
26:01
also using a multi-step um uh dynamics model which uh allows you
26:07
to uh evolve for a long time horizon without a lot of compounding error. And
26:13
uh this allows us uh to and also uh there's a fact that we leverage
26:19
diffusion model which is a really powerful way to model data especially multimodel data and uh uh what we
26:26
observed empirically is the uh stronger modeling uh capabilities also allows us
26:34
uh to uh simplify the planning algorithm so that we can just use such a simple uh
26:39
planner to do to solve the task. tasks. Yeah. Um also contrasting with a few of
26:46
the representative uh uh path works uh including uh model based offline control
26:51
offline planning and this diffuser work which I mentioned it learns a joint
26:57
model and uses a classifier free guidance for planning.
27:02
Okay. Uh so yeah next to dive into some uh results uh there are lots of numbers
27:10
but the short answer is uh we obtain very competitive results in fixed reward
27:15
single task setups. This is just to demonstrate that uh uh the approach uh
27:20
when you deploy it in uh single reward uh fixed reward single task setup it can
27:26
perform competitively to the current state-of-the-art uh previous state-of-the-art approaches. But uh I
27:32
think uh there are a couple of uh more interesting uh properties of DMPC. One
27:39
is it can adapt to no rewards at runtime. Here we are showing some uh
27:44
examples where uh essentially we train the model to uh these are very simple
27:50
modulo tasks but we train the model to just uh local motion tasks run forward
27:55
and jump etc. But uh at inference time we can just by changing the reward
28:01
function to uh make it uh exhibit uh novel behaviors like uh jumping etc. So
28:09
uh here's another example where we show that uh uh DMPC can adapt to novel
28:14
dynamics while uh this kind of uh joint modeling approaches struggle. This is
28:19
really the benefit of the factorization of the action proposal and the dynamics
28:24
model. So the here the idea is uh we can keep the action proposal the same but uh
28:30
we uh we have uh scenarios where the dynamics of the environment changed. So
28:36
for example the walker has a broken left ankle and as a result when it starts to execute actions the consequence of the
28:44
actions change. So in such cases because of the factorized representation in DMPC
28:50
we can uh simply just adapt the dynamics model on some play data collected in the
28:56
new environment and uh we observe that we can recover a lot of the performance
29:02
because of the changing dynamics. Finally, we dug into the various components of uh the DMPC design and we
29:11
demonstrated that uh the different components in DMPC basically contributed to improved performance. Uh this uh
29:19
these include uh the diffusion active proposals, action proposals, improve performance and simplify the planning.
29:26
We do multi-step diffusion action proposals and the the fact that we do multi-step also uh contributes to
29:33
improved performance and finally multi-step dynamics modeling also uh contributes to improved performance.
29:41
Uh that's it. [applause]
29:50
All right. And that was the last Google Deep Mind paper that they're going to publish. So, good luck out there. Um,
29:57
this next one is one of my lab mates that I work with a lot that is the most
30:02
world model pled person that I know. [laughter]
30:08
And so, I can't imagine, you know, anyone else presenting this paper other than Yan Lun himself. Um, [laughter]
30:16
Isaac Ward. There you go. Thanks a lot.
30:22
All right, guys. Is Is that a good distance? You all can hear me at the back. Cool. Cool. Yeah, I'm enjoying a
30:28
uh a cool little period in life where I started working on world models a couple years ago, kind of before they got really hot and now they're enjoying a
30:34
moment in the sun and suddenly everyone wants to talk to me which is nice. I'm presenting lay world model which is a
30:39
call out of course out of Yan Lacun's group. Uh QR code here if you want to follow along with the project page, but I'll explain through it and yeah, really
30:46
excited to talk to you about this one. Uh hidden in this presentation is really like a billion-dollar question and it's not hyperbole. uh Yan Lakun's raise of
30:53
$1.03 billion dollars back in March basically just to train world models is sort of what this presentation is about.
30:58
I want to get at some of the questions that they're going to be testing. First five slides here just going to do some basics on world models. I think we've
31:04
all heard the term but I want to just make sure we're all on the same page and then we'll jump into uh what this paper
31:10
is really uh offering and what it means for world models at large. But first of all, world models, what are they? Why do
31:16
we care about them? So really it's about learning the dynamics of the world, which is to say we're trying to come up with some model Typically, we're using
31:22
like a big neural network to predict how a system will change over time based on its inputs. So, you have your current
31:27
state or scenario using S for notation here. You're playing some action, maybe that's like a movement or a command for
31:33
a robot, um, or a language command for a robot, and then you're trying to predict like what its outcome is going to be, like what scenario will it end up in
31:39
once it's executed that action. So, you're really trying to model the system or the environment that the robot is in, modeling the world. It's a world model.
31:46
Uh, these kinds of models are really cool. They enable a few really interesting capabilities. One of them is generating imagined outcomes. We've
31:53
probably all seen like the sort of weird kind of um hallucinity uh imagination
31:58
sequences coming out of world models over the last couple years. We'll talk more about those and why they're useful. Uh this allows us to get to model based
32:04
control. I'm glad Stannis kind of explained that in the last talk for me, so I'll skip over it. Um and the last piece is really cool. Surprise
32:10
quantification. Uh I'll get to that later. Um but a really powerful capability of world models. I wanted to
32:15
communicate to you all that this is not a new idea at all. It's really just kind of new advertising or packaging on an
32:21
old idea. So I started going back through Google Scholar and this is a paper that I think is older than the average age of this room. Um from
32:27
Europe's 1990 and of course Richard S. Sutton who we know from reinforcement learning basically describes exactly a
32:33
modern world model a black box that takes as input its situation and its action that it's going to execute and outputs a prediction of its immediate
32:39
next situation. So really really old idea and uh that's the flyer from Europe's 1990.
32:45
Great. Right. So, getting a little bit more explicit um and changing the notation from state to observation just because in real world systems, we
32:50
typically don't have access to the exact true state. We typically have some observation from sensors. This is just an example that I pulled up from some
32:56
world models that we're training on a quadrotor. So, as an example, the observation that the quadrotor gets
33:02
might be its current kinematic state, position, velocity, this kind of thing. In addition to the images that it's taken from a forward- facing camera, the
33:08
action might be a control input, in this case a yaw, and move back to the left. And then we want to make a prediction
33:13
that says well if you do that action you're going to end up slightly back in the room and looking to the left. And we actually want to generate what the
33:19
sensor um would result uh in in this case. So highly uh dimensional observations images uh and also LAR and
33:25
things like that are completely on the table in world models. Uh they're really challenging because action sequences can be quite long. Um and the really big
33:32
thing is that the minimum in the optimization landscape for these kinds of models may not correspond to the desired behavior. And more on that
33:38
later. Um, but hopefully you'll agree that if you have trained a system that's capable of doing this thing, it must have an internal model of the world. And
33:44
imbuing agents with an internal model of the world, um, is potentially a very useful capability. And that really is
33:50
the big question. Are we going to have model free or model based policies? Are our agents going to have an internal
33:55
model of the world or are they not? And this is sort of being fought out right now both in the research community and in like the startup community. So on the
34:02
left, model free. The idea is you're taking some observations, you're feeding this into some kind of big neural
34:08
network potentially with a bunch of interesting learning tricks there, but you're getting some optimal action out. So, it's just mapping between
34:13
observation and some optimal action. But at no point is there an explicit representation of what the future might
34:18
look like if you execute that action. These kinds of models are pretty good. There is growing evidence to show that
34:24
internal to these neural networks are highly obuscated and challenging to interpret world models uh sort of in the
34:30
in the weights. uh I'll talk about a paper very briefly that's um speaks to that and maybe someone can present on it
34:36
in a future week. And then over on the um other side, model based approaches, right? So now we're saying we're going to train this world model up explicitly
34:42
and actually use that in our policy to be able to explicitly predict the outcome of potential actions. So yeah,
34:48
totally like two different species of policies. The model free stuff, some of the weaknesses is they show a little bit of brittleleness to out of distribution.
34:56
Um, model based ones are great because you can kind of quantify modeling error and this is really important when you're deploying things in the real world. Uh,
35:02
we'll talk a little bit about this. I have a little asterisk here, some biological precedent which we'll speak to more. Um, and you have to have this
35:08
additional mechanism of course which is a downside where you actually need to propose action candidates to evaluate with the world model um, which Stannis
35:15
spoke to in the previous talk. This is a great paper. But I just wanted to chuck this in there uh which talks about how even model free base policies do have
35:22
world models in them and a really really cool paper that hopefully can be presented in a future week. Uh just to
35:28
make it concrete before we jump into the paper I wanted to just bring a little toy here just to show you what this looks like. So of course went to push t
35:34
like all good researchers do and in push t we basically just have an image of a little blue ball agent and you're trying to push the blue tea into the green
35:40
slot. uh the state is comprised the observation is comprised of that image plus the 2D position of the endeector
35:46
and the 2D action of where you're going to move the endector. So you can make a little architecture that looks like this. I just whipped this up. Couple
35:52
hundred thousand parameters and um oh let's play this. So if that's the actual
35:57
roll out, this is what the model thinks the action sequence is going to do. So you can see it's a little bit wobbly
36:03
because it's a tiny model, but we can certainly train up models of these kinds of toy environments and indeed more complex ones. So what are the challenges
36:10
associated with training this kind of model? Well, one is you're trying to learn the representation of the world. So how you're going to compactly
36:16
represent those highly dimensional images or LAR inputs or highly dimensional sensor inputs at the same
36:22
time as you're trying to learn how actions change that representation. So you're co-learning representation and
36:27
dynamics. And there are many solutions in the optimization landscape that will
36:32
essentially just cause you to do nothing. So for example a a local min minima in the optimization landscape is
36:38
to say well every state is just the same it's a trivial collapse basically um and there are many techniques in the
36:44
literature to say how can you avoid these so there are solutions of a variety different kinds that basically
36:49
say there a way to avoid the collapse associated with training world models and that's really where the world model comes in. It says, well, instead of
36:55
having to use some manner of trick or like special method or a bunch of like hyperparameter tuning schedule, we're
37:01
instead going to really drastically simplify this and go for a more elegant method. So, if you know a little bit about world models, there's some popular
37:08
ones in the top right here. This is a figure straight out of the paper. So, PLDM is planning in with latent dynamic models, dino, dino, um, distillation
37:15
with no labels, world model, dreamer out of deep mind, and then temporal difference MPC as the final one. So, in
37:20
some way, shape or form, I'll explain this. they use some kind of trick or um like challenging to configure design to
37:27
get away with uh this collapse to avoid this collapse and the world models coming in and saying basically we can do
37:33
this with sort of one hyperparameter and one loss term which I'll talk about there's really no time to go through all
37:38
the different tricks that different world model approaches use because it really is the wild west out there right now so many different methods but they
37:45
basically fall into one of these three categories so one is you could do some explicit heristic that stops collapse by
37:50
like enforcing some special um healthiness in like the latent space of your embeddings. Um the language trick
37:57
is maybe a bit unfair here, but it's what's used in the paper. Uh you could use some foundational methods. So you could take some like existing
38:02
autoenccoder or diffusion model or video model and use that as a basis for your world model and add an action
38:08
conditioning element in there. Um or you could use some privilege data that may not be usually available to the model
38:14
outside of train time uh to be able to avoid collapse. and lay well model even though it says that it's doing something
38:19
very different I really think uh it's just offering a new kind of trick uh which I'll talk about here so jer is
38:25
joint embedding predictive architecture it's sort of yan lakun's main work and lay world model is a kind of jepper model uh basically the way it works is
38:32
you're going to take an autoenccoder um or I should say an image encoder uh encode this observation in this case
38:37
it's of a robot doing a push cube task that's going to turn that image into a latent vector in the latent space of
38:44
this encoder uh you're going to train an action condition forecasting module this predictor to be able to predict what is
38:49
the next latent embedding going to look like when I execute this action. So not what the next image is going to look like but what's the next latent going to
38:55
look like and you can use the decoder attached to that encoder to decode that back out into a useful image. But for
39:01
the most part all the interesting work is going to be done in the latent space. And basically what they say is over a batch all of those latent embeddings uh
39:08
should be in a healthy distribution which they describe as a gausian distributed uh distribution in in the
39:14
latent space and thus enters the sigg regularizer which is the sort of new term they add. So sigg for sketching as
39:21
in uh doing one-dimensional passes over a high dimensional data. Um I for isotropic so this should look the same
39:27
when you slice it in any direction and g for gaus and distributed cigar. So basically you're taking all of these embeddings of your different predictions
39:34
doing a one-dimensional slice over each direction like in that highdimensional space and then you want each of the
39:40
curves across those slices to be gausian distributed and if that's true then your
39:45
um distribution in the latent space must be very healthy. Uh so the idea is you can quite cheaply evaluate how gausian
39:51
distributed your embeddings are and thus how healthy your world model is and how non-olapsing it is. So essentially I
39:57
just say instead of training up on the normal predict the next uh latent you add on this additional sigg term. So I'd
40:03
argue that basically this paper is just um providing a very elegant kind of regularization. And to finish off I'll just talk about three capabilities that
40:09
you get from this. So one is the openloop prediction quality. This is what world models do. So you feed in
40:14
like the context this push t at the top and you can see the top row is the real example. The bottom is the imagined and
40:20
they look about the same. This is good. It means your world model is really good at predicting what your next action is going to do. They do that on push t and
40:25
then on a slightly um like a 3D analog task like a push cube. This is all great. I love seeing these um these
40:32
plots. Um but really what matters is how does this actually affect the policy like for the actual task completion. How
40:38
is this useful? Um and that sort of brings us into how you can use these models for model predictive control.
40:43
Basically you take your initial observation and a goal observation. I put an asterisk there because how often
40:48
do you have a goal observation in a robotics task? Like you don't always know exactly the situation that you want to end up in. But in this case, that's
40:54
how they frame it. So they say, you know, the world looks like this right now. I want the world to look like this. You encode both of those. And then
41:00
you're basically doing a search over the actions that will get you in the latent space from this starting point to this
41:06
ending point. And there are well- definfined optimization methods to um to achieve that. It works pretty well. I'll
41:11
make it um make it simple. The world model is better than the competition on these like small 2D tasks. As soon as
41:17
you go to 3D, Dino World model wins. It does have a big foundational backbone trained on that kind of image data. So
41:23
you'd expect it to um to win. Um they run on a really simple environment called two room and kind of say you know
41:29
we don't do so well on this but that's because we're promoting like really high dimensional healthy embeddings and it's a very low dimensional problem. I'm not
41:36
sure if I'd truly go for that. Um but a good takeway is that it's about 50 times faster than any of the competition across the board because it's doing all
41:42
this work in the latent space and it doesn't have to have any like additional tricks relating to more forward passes
41:48
or like having two copies of the model in memory. And uh you can actually boot this thing up on like a single card, less than 24 gigabytes of VRAM and it's
41:54
only 15 million parameters. So that is pretty nice. Final piece, this is what I think is a really cool capability of
42:01
world models. Um you can quantify the model error. So basically they just come up with some trajectories that kind of
42:06
screw with the world model. So the top one is going from left to right. That's time. Uh so that's just like a nominal example. Everything's normal. Then they
42:12
take the same example, but they change the color of the tea. And then they take the same example, but they just teleport the tea into a different location. And
42:19
this is really cool because you can actually see the moment they apply those perturbations, you get a spike in the model error and this is detectable which
42:26
is to say world model enabled agents can quantify how poor their predictions are. They have good estimates of their
42:31
uncertainty. This is really powerful. Model freebased approaches don't natively give you this stuff.
42:37
This is my last slide. Um a few discussion points and broader themes maybe we can chat about here. Obviously, you know, are we going to go with model
42:42
based? Are we going to go with model free? Um what's going to be the best way to enable intelligent agents to do interesting things in the world?
42:48
regularization and representation learning. Um, in this paper they are co-learning the representation of the
42:55
world that the agent has and the dynamics of the world. Should this be separated? Can we take some bio inspiration? Should we use pre-existing
43:01
um like foundation models and stuff like that? And then finally, how can we fight uh representational collapse elegantly?
43:07
I think this work does a really great job of that, but the question is still out on what the best way to do it is. So
43:12
um that's my talk. Thanks very much for your attention. [applause]
43:21
All right. Okay. So, for the next two,
43:27
um, we're kind of focusing on, um, less world model stuff and more heady, high
43:35
level stuff that I think is pretty interesting. Um, this is a a paper
43:40
that's going to be presented by Ashe, one of the YC uh, startups here named QABs. and your co-founder president.
43:47
You're president of QABs. Is that right? Okay. Welcome Ashe.
43:53
[applause] Hey everybody. Today I'm going to be talking through Andrew Gordon Wilson's paper uh deep learning is not so
44:00
mysterious or different. Uh we actually work with Andrew on the generalization problem at Q Labs. So I'm really excited
44:06
for more people to know about his work. The current state of machine learning is that we know that scaling that scaling
44:11
models leads to better generalization. But we don't have a mechanistic understanding of why that is the case.
44:18
Um yeah, if we can understand general generalization, then we might be able to
44:23
optimize for it as well. So the payoff to understanding it is actually really really large. Um when you talk to people
44:29
in the field, they often explain that generalization is a mystery and they point to examples like
44:34
overparameterization, benign overfitting and and double descent as reasons why we might not be
44:40
able to understand generalization at all. So Andrew's work here basically dispels those mysteries by using
44:47
classical theories of generalization uh which which have to date not really been used to explain things like like
44:53
overparameterization thus far. So the first classical theory that we'll go through is uh pack bay. So pack bay
45:00
basically bounds the test loss which is the generalization. This is the quantity that we care about with a training loss
45:06
and a compression term. Um the thing is in the past when people overparameterize
45:12
models this compression term tends to dominate and so in practice these bounds become loose and vacuous meaning that we
45:18
can't use them for anything at all. This was basically due to a mislication of the bound. You can compute the the
45:25
compression term in an alternative way as we'll get into sort of later in the talk here. So let's go through the first
45:31
mystery that uh Andrew goes through in his paper. Um the the mystery that he talks about is overparameterization. And
45:39
this is basically the idea that as you scale up the the model parameter size from the bias various variance
45:44
trade-off, you would expect that you might overfit. But in practice, we see the opposite. The scaling laws tell us
45:51
that we actually get better generalization. Um the the the scaling
45:56
and the better generalization from overparameterization is is is due to like the the the massive gains in model
46:01
capability over the last couple of years. But we still don't really understand why it impro why it improves
46:07
generalization. So the packbased framework gives us a pretty useful way to think about the
46:13
success of over par parameterization. The first is with empirical risk. Empirical risk is basically training
46:18
loss. When you increase the number of parameters you can fit your data better. Um so the empirical risk the left uh the
46:24
first term goes down. And Andrew's work also finds that when
46:30
we increase the model, when we increase the number of parameters, um we also find more compressible solutions. So
46:37
this is work by Lotfi at all at all and they develop methods to basically compress the uh yeah they compress the
46:44
the training set you and and and the model and they basically find a negative correlation between the the bits
46:51
required to encode the training set and the number of parameters. Um and so we find that as we increase the model size
46:57
we can find more efficient encodings of the training set. So the the second term
47:03
in this bound also gets lower. Another perspective on this model
47:08
compressibility point is a perspective of flatness. As you increase the number of parameters, it turns out that the
47:14
number of the volume of flat minima in parameter space exponentially increases.
47:19
This is the green region and uh and comparatively the the volume of sharp minima increases much less and uh this
47:27
is interesting and this is useful the compressibility view because flat minima are known to be more compressible than
47:33
sharp minima and so overparameterization fits within existing theories and
47:38
through Andrew's work we actually see useful bounds on generalization even for models at at like a billion parameter
47:44
scale and so we go to the next so-called mystery of deep learning which is called uh benign overfitting which Andrew also
47:51
dispels in or at least partially explains in his paper. So the idea of benign overfitting is that deep neural
47:58
networks are able to fit totally random noise but at the same time they are able to to to generalize well when you have
48:04
structured data. The mystery is how can you have an inductive bias that allows you to generalize well if you can also
48:11
fit totally random data. I think a regularized polomial model um in Andrew's paper gives us pretty good
48:17
intuition for how this might be the case. Here you can see that on random data, so section C of the figure that we
48:23
have enough parameters to fit the data and so we we can we can fit the totally random data. But on structured data, the
48:30
the regularization pushes us to use the lower order terms. And so we are able to both get the flexibility but also have
48:37
inductive bias that allows us to generalize. And generally this is this is the view to take um for for neural
48:44
networks like there are expressive models with a soft inductive bias. Um we
48:50
can go through this concept um just using this figure right here. So uh on the left hand side we have an example of
48:56
of what's like a flexible hypothesis space. And a flexible hypothesis space would allow you to fit the data that you
49:02
have. But the problem is that you would almost certainly overfit if you if you um if you do not have a bias towards one
49:10
solution over the other. But on the other hand, if you have an inductive bias, you would solve this overfitting
49:15
problem, but instead you wouldn't you wouldn't be able to model all of the details of reality. Um and so the middle
49:21
ground is to have a very expressive hypothesis space, but also have a bias towards solutions that might generalize.
49:28
For example, in the pack bay framework, we might want to bias towards more compressible models if we can. And so we
49:34
see that uh deep learning so-called mysteries are actually consistent and partially explained by existing theories
49:40
such as soft inductive biases and pack bays. And sort of the thing I want to leave
49:46
you with is that um if if we can find the right inductive biases building on
49:51
these theories, we might be able to optimize for them as well. And by the no free lunch theorem, the only way that we
49:57
get improvements in learning efficiency is through inductive biases. So I I think that this is that working on this
50:02
problem is is a really good bet to make. Given the massive sample efficiency gap between AI and humans, we might actually
50:08
see massive gains in capability. If we work on this problem um and so yeah, that's where I want to leave you with
50:14
short presentation. [applause] Okay. Um so for this last paper then
50:23
after this we have some boba for everyone. So sit tight 15 minutes. Um
50:30
this is an idea that you know I've been obsessed with. Back to the sample efficiency thing. I think that like the two major problems we have left really
50:36
to solve in in AI is intelligence per watt um and intelligence per sample. And if you compare that to to where we're at
50:42
today compared to humans, um I would say that we're still or an order or two
50:48
magnitude off on intelligence per watt. Uh and we're me like orders of magnitude off on intelligence per sample. I don't
50:55
know what percent of the internet that you guys have read, but I have not read the entire internet. In Chris Ray's lab in particular, we've been obsessed with
51:01
this idea that um if I have uh under the the a fixed size amount of data and I
51:08
have infinite compute, just go nuts, how much generalization can I actually achieve? And so this is exactly uh the
51:15
paper that starts to answer that question. And I'm really excited to uh introduce uh Con Woo.
51:24
Uh hi, I'm Ku. Um this is a paper that I co-led with my amazing collaborator
51:30
Suhas as well as Percy and Potsu. So part of the motivation for this paper
51:37
is just the fact that over the past uh six or seven years pre-training has
51:42
continued to improve model capabilities in pretty surprising ways. So in 2020
51:47
with GPT3 we had sort of the emergence of incontext learning. In 2022 with
51:54
Anthropics RHF, we had sort of the advent of alignment. And maybe most
51:59
notably in 2024 with both 01 from OpenAI and then later Deepseek R1, we had the
52:05
emergence of reasoning. And in fact, even still today, we see that with these newer and bigger pre-training runs like
52:12
Mythos and 5.5, the models just continue to keep better. And so because pre-training is very expensive, a lot of
52:19
the focus on the research side of things has been on how do we improve compute efficiency. And in general, people have
52:26
found that to improve compute efficiency, you need to scale both the number of parameters in your model and
52:32
the number of data points that you train your model on. And so these were quantified with the so-called chinchilla
52:37
scaling laws. The problem with compute efficiency is that we're soon going to be constrained by data. And so if you
52:43
look at these sort of public projections of the rate of growth of internet data, they suggest that the amount of sort of
52:49
human generated text on the internet grows by roughly 3% per year. And the amount of compute that we're spending on
52:55
pre-training is growing by roughly four or 5x per year. And so what this
53:01
suggests is that as time passes on, the amount of compute that we're willing to
53:07
spend per data point is going to continue to increase by roughly 4x year-over-year. And so this sort of
53:12
motivates the core question in this paper which is how should you approach pre-training when you're constrained by
53:18
data but totally unconstrained by compute. And it's worth maybe spending a
53:23
few seconds to think for yourself if you haven't already seen this paper like what would you do in this situation.
53:29
This is a very different algorithmic regime from sort of the computer efficient pre-training world that we've
53:34
sort of lived in for sort of most of uh uh modern time. And it's also worth
53:39
noting that this question is not that different from how machine learning worked before the modern alm. So for
53:47
things like classical statistics where maybe you really care about your rates with respect to the number of points of data you have and you don't care about
53:53
compute or even older benchmarks like emnest and pen treebank where you're sort of implicitly data constrained
53:59
because the benchmarks don't have that many data points. And so sort of the core contribution
54:05
that I'll explain in this paper is that we bring the modern toolkit of scaling laws to to sort of answer this problem.
54:13
And so what we'll show is that we'll propose a few different scaling recipes and we'll sort of chase scaling recipes
54:20
that monotonically decrease your iid validation laws. So sort of in distribution generalization and we'll
54:26
show that these scaling laws have a really clean functional form and they follow a super clean power law. And when
54:31
you're able to fit these power laws, what you can do is you can estimate the best possible loss of your recipe by
54:38
looking at the asmtote of the power law. And this is in some sense a quantification of your best possible
54:43
performance under infinite compute. And our goal in this paper is sort of to
54:48
think more carefully about what types of algorithms allow you to lower your compute asmtote. Uh and we're sort of
54:54
going to chase these types of infinite compute wins. And so to start, I'm going to introduce this canonical setting that
55:00
we referenced in this paper, which is that we're going to simulate a data constrained world by just constraining
55:05
the number of pre-training tokens we have to be a very small amount. So we're going to assume access to only 200 million tokens from DCLM, which is
55:12
general web data. And what we're going to do is we're going to pre-train large and larger models, which is the x-axis,
55:18
using different kinds of pre-training recipes. And the y-axis here is going to be again our ID validation loss on DS
55:25
DCLM. And our goal is going to be to find recipes that allow us to spend more compute and train larger models while
55:32
monotonically decreasing our loss. So to start, we can consider sort of the obvious approach that you might take when you're in this setting, which is
55:39
first to epoch your data. So to train on the same data points over and over again until you start overfitting as well as
55:45
scaling up your model. So making your model larger and larger. And what we can do is we can do both of these at the
55:50
same time. And we can do sort of an exhausted grid search over these parameters until we start over until we
55:56
start overfitting and then we do early stopping. And this is sort of the red line which is what we call the standard recipe. And what you'll see with the
56:03
standard recipe is that even if you are willing to spend more compute, as you train more and more overparameterized
56:10
models, you start to overfit more quickly and your loss starts to increase after a certain point.
56:16
And so if you see this line, sort of the natural instinct you should have is how do we fix this? And one possible
56:21
approach is to do really aggressive regularization. And so sort of the first baseline in this paper is going to be
56:28
doing really aggressive regularization by cranking up your weight decay. And so what we do is we show that if you
56:34
optimally tune your weight decay for each total parameter count. So we're going to optimally tune learning rate,
56:40
weight decay, and epoch count for each one of these purple points. You can show that your loss follows a really clean
56:46
power law as you increase the number of parameters in your model. And this is
56:51
really aggressive regularization. So for context, we use weight decays that are something like 30 times larger than the
56:57
weight decays that people do for compute optimal pre-training. And so on the legend here, you can see
57:02
the the sort of the form of this power law. And it has a few nice properties. One is that the exponent on the model
57:10
parameters n is one. And this is actually predicted by sort of the data constraint theory. The second nice
57:16
property that it has is that the scaling law has an asmtote which is 3.43 in this
57:21
case. And this characterizes the performance of the best possible regularized model in this setting if you
57:28
had like infinite compute. So you'll notice that the baseline approaches because they overfit more quickly. They
57:34
don't even have a measurable asmtote. And so once we start going down the rabbit hole of regularization and these other types of classical machine
57:40
learning techniques, there's a whole basket of techniques to to get into. And so perhaps maybe the most famous one is
57:46
to do ensembling. And so what we show in this paper is that you can bring back ensembling in
57:52
the modern world of pre-training language models and they turn out to be incredibly data efficient. So what these
57:59
light blue points correspond to is they correspond to 300 million parameter models that were ensembling with more
58:06
and more members. So the fifth point will correspond to 1.5 total billion
58:11
total parameters which is five five ensemble of 300 million parameter models. We show that you can also fit
58:17
really clean scaling laws to ensembles. So you also get a power law that has exponent one and the number of ensemble
58:23
members and it also has an asmtote. But most importantly the asmtote of ensembling is much lower than the
58:30
asmtote of the regularized recipe. So it's giving you a true data efficiency win if you had an infinite amount of
58:36
compute. There's also this interesting property which is that ensemblings if you do a compute matched comparison so
58:42
the same number of parameters are actually better than the regularized recipe. So if your goal is just to train
58:48
the best 1.5 billion parameter model it's better to train an ensemble of a bunch of small models when you're data
58:54
constrained than to train one really large model. The last thing we show in this plot is that you can actually
59:00
compose the benefits of regularization and ensembling. So one way to think about this is that regularization gives
59:07
you this ability to continue to make the models larger and larger while ensembling introduces this new axis for
59:15
scaling compute which is by training more and more models. And so what this gold line which we call the joint
59:21
scaling recipe is we quantify this hypothetical performance if we were able to train an ensemble an infinitely large
59:29
ensemble of infinitely large models. And so the way in which we actually quantify this performance is we fit two scaling
59:36
laws. So we'll take a double limit. What we'll first do is we'll train ensembles
59:41
of 150 million parameter models, 300 million parameter models and so on and so forth. And then we'll look at the
59:48
asmmptotes of the ensembles. And then we'll take a second we'll fit a second scaling law to the asmmptotes of these
59:53
ensembles. And this is essentially taking the first limit is taking the limit over K. And the second limit is
59:59
taking the limit over n. And what we find is that if you're willing to sort of go through the effort of training
1:00:05
infinitely large models and infinitely many ensembles, uh you get a huge loss improvement. And so all of these
1:00:11
experiments are sort of in this toy data constrained setup of 200 million tokens. And obviously this is very different
1:00:17
from sort of the standard regime of pre-training. So what we also do in this paper is we spend some effort on trying
1:00:22
to confirm that our recipes scale. So the first way in which we do this is that we build data scaling laws. So what
1:00:28
data scaling laws are is that we repeat the exact same set of experiments from the previous slide at four different
1:00:34
pre-training token counts up to 1.7 billion uh tokens. And so for each slice
1:00:40
on the x-axis at each seat token count, we're going to quantify the best possible performance of each recipe if
1:00:46
we had an infinite amount of compute. So for the red points, they overfit more quickly. So these will be actual models.
1:00:52
While for the purple and the gold points, these will correspond to sort of a single limit or a double limit. What
1:00:58
these data scaling laws let us do is they let us quantify the data efficiency numbers of our approaches. So one way in
1:01:04
which we do this is if we have some new recipe that we believe should improve upon the standard recipe that we're
1:01:10
using right now, you can take the loss of your new recipe and you can project it onto the data scaling law. So the red
1:01:17
line of a standard recipe and this projection lets you measure essentially the effective number of extra tokens
1:01:23
that your algorith algorithmic improvement is buying you. So in this case what we see is that this joint
1:01:29
scaling recipe gives you roughly a 5x data efficiency win over uh the the
1:01:34
standard recipe. It's also worth noting that uh these data efficiency wins are something that we can realize with sort
1:01:41
of finite models not just double limits. So for example if you're willing to train a five ensemble of 1 billion
1:01:46
parameter models this will give you roughly a 3.7x data efficiency win. The other interesting aspect about these
1:01:52
data scaling laws is if you look at the functional form in the legend, you'll see that they all have really similar
1:01:57
exponents and they all have very similar asmtotes. And so the reason why this matters is this suggests that even if
1:02:04
you repeated these experiments at a much much larger token scale, if you believe that these data scaling law laws
1:02:10
extrapolate, this data efficiency win is going to be constant over the actual number of token counts that you have. So
1:02:17
they suggest that this double joint scaling well recipe has a 5x data efficiency win even if you are willing
1:02:23
to send the seed token count to like 10 trillion tokens or whatever people are doing pre-training at these days. So now
1:02:29
I'll go over some methods to sort of make this data efficiency win perhaps slightly more practical. And so even
1:02:35
though these recipes require a lot of training compute we also show that you can reduce the amount of inference compute you need by using distillation.
1:02:43
So the plot on the right here, the purple line corresponds to the same regularized recipe. The light blue
1:02:48
points correspond to the same ensemble skilling. So we first show that what you can do is you can take an eight ensemble
1:02:54
which is roughly 2.4 billion total parameters and you can distill it into a single dense 300 million parameter model
1:03:01
which is the pink star in the bottom. And you can do this while retaining roughly 83% of the loss improvement. So
1:03:08
this shows you that data efficiency is not something that you need a large amount of inference compute for. If
1:03:15
you're willing to amort amortize the test time compute during training time, you can get an extremely data efficient
1:03:21
model that's still very very small. The other surprising result we show in this section is that you can do
1:03:28
self-distillation to even improve your loss. So with self-distillation, what we're doing is we're starting with the
1:03:33
300 million parameter model at the start of the light blue curve and then we're distilling this model into a fresh 300
1:03:41
million parameter model which is the green star. And what we find is very surprisingly even doing self
1:03:46
distillation gives you huge loss improvement. It even beats the asmtote of the regularized recipe. This is
1:03:52
actually pretty counterintuitive and we have a longer sort of uh description of this result in the paper but it turns
1:03:58
out to have pretty surprising connections to uh ensembling and there's actually a view uh from prior work on
1:04:05
viewing self-distillation as implicitly training a two ensemble. We also show that even though we're only chasing IID
1:04:11
VAT loss in all of our experiments, pretty much all of the trends in this paper directly work on downstream
1:04:18
benchmarks. And this is like a fully held out sort of test set where we only
1:04:23
looked at the benchmarks at the very end of the paper because the advisers told us to. Um, and you can see that
1:04:29
everything tracks the standard recipe overfits. Still model scaling gives you improvements. Ensembling is even better.
1:04:36
and you can still retain a lot of the benefits through distillation. And finally, we also show that you can do this for other settings beyond
1:04:43
pre-training. So things like continued pre-training. So we consider a setup where you're trying to CPT a 3B model
1:04:49
and we assume access to sort of this restricted set of 4 billion math related tokens where the whole corpus of data is
1:04:57
actually 73 billion tokens. And what we show is that if you're willing to do these data efficiency tricks like
1:05:03
aggressive epoing and things like ensembling, you can match the performance of training on the full 73
1:05:08
billion tokens even using only 4 billion tokens which is roughly a 17x data
1:05:14
efficiency win. So to sort of wrap up this talk, maybe the main point I want to make is that when you're constrained
1:05:20
by data and you're unconstrained by compute and this sort of new algorithmic regime, the types of algorithmic choices
1:05:26
you make matter a lot and we should be willing to sort of rethink every aspect of a stack. In this paper, we mostly do
1:05:33
this by revisiting a lot of these classical ideas from uh machine learning and deep learning. Things like
1:05:39
regularization, ensembling, distillation have existed for for many many years.
1:05:44
And we also introduced this evaluative tool of asmmptotes. And maybe the hope is that if you're willing to chase
1:05:50
algorithms that have lower compute asmmptotes, uh these will give you like better ideas for data efficiency. But
1:05:56
like ultimately what we really want to do is we want these asmtotes to help us develop new and better ideas under
1:06:02
infinite compute that that don't already exist. And so if you're interested in the details, that's a QR code for the
1:06:08
paper. And we've also done some follow-up work on looking at how synthetic data interacts with data efficiency. So feel free to check that
1:06:14
out as well if you're interested. Thanks. [applause]
1:06:22
All right. Thank you guys so much for coming. This is like a dream come true. I'm in one of my favorite places that um
1:06:29
was most important places of my life and now I get to talk about AI here. So super super fun. I think there's a lot
1:06:36
of potential for this club. I think I don't have nearly, you know, 1% of all
1:06:41
the ideas that we probably have to make this club really great um in all of your
1:06:46
heads. And so we want to make sure all of you guys get in on the Slack. So I'll make sure that you know, please send me
1:06:52
a note if you're not already on there. And then we can kind of make this thing whatever we want. So it's kind of fun
1:06:57
and I intend to. So like please come with ideas. We want to make this super fun. Um obviously, you know, there's
1:07:03
some round rules, be respectful, all that kind of stuff. Um, and definitely be involved. And that's kind of the the the biggest thing that we really only
1:07:10
really ask. That's all I got. That's a wrap. Go get some boba tea. Thank you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

# EVSRC-2026-000287 — Inference, Diffusion, World Models, and More | YC Paper Club

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000287`  ·  filename: `EVSRC-2026-000287_yc-paper-club-inference-diffusion-world-models.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=wE1ZgJdt4uM`
- source_title: `Inference, Diffusion, World Models, and More | YC Paper Club`
- channel_or_org: `Y Combinator`
- speaker: `François Chaubard; Tanishq Kumar; Guangyao "Stannis" Zhou; Isaac Ward; Akshay Vegesna; Konwoo Kim`
- published_at: `2026-05-28`
- captured_at: `2026-07-18`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `research paper club / multi-paper technical presentations`
- source_reliability_context: `researcher`
- topic_tags_light: `[inference_systems, speculative_decoding, diffusion_MPC, world_models, model_predictive_control, uncertainty_detection, generalization, data_efficiency, ensembling, distillation]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `François Chaubard`
    · role_in_source: `host / organizer / introductory speaker`
    · affiliation_at_publication: `Y Combinator — Visiting Partner`
    · speaker_type: `investor`
    · authority_context: `Organizer framing YC Paper Club and introducing the technical presenters`
    · identity_confidence: `high_from_screenshot`

  - name: `Tanishq Kumar`
    · role_in_source: `presenter / paper author`
    · affiliation_at_publication: `Stanford — graduate student`
    · speaker_type: `researcher`
    · authority_context: `Author presenting Speculative Speculative Decoding and its inference-speed results`
    · identity_confidence: `high_from_screenshot_and_transcript`

  - name: `Guangyao "Stannis" Zhou`
    · role_in_source: `presenter / paper author`
    · affiliation_at_publication: `Google DeepMind — research scientist`
    · speaker_type: `researcher`
    · authority_context: `Researcher presenting Diffusion Model Predictive Control; states that he co-leads work on world modeling for robotics`
    · identity_confidence: `high_from_screenshot_and_transcript`

  - name: `Isaac Ward`
    · role_in_source: `presenter`
    · affiliation_at_publication: `Not established in supplied screenshot or transcript`
    · speaker_type: `researcher`
    · authority_context: `Presenter explaining LeWorldModeling, latent world models, model error, and surprise quantification`
    · identity_confidence: `high_from_screenshot`

  - name: `Akshay Vegesna`
    · role_in_source: `presenter`
    · affiliation_at_publication: `Q Labs — President`
    · speaker_type: `researcher`
    · authority_context: `Presents Andrew Gordon Wilson’s work on deep-learning generalization, PAC-Bayes, overparameterization, and inductive bias`
    · identity_confidence: `high_from_screenshot_and_transcript`

  - name: `Konwoo Kim`
    · role_in_source: `presenter / paper co-lead`
    · affiliation_at_publication: `Not explicitly established in supplied screenshot or transcript`
    · speaker_type: `researcher`
    · authority_context: `Co-lead presenting Pretraining Under Infinite Compute, data-constrained scaling, regularization, ensembles, and distillation`
    · identity_confidence: `high_from_screenshot`

- publisher / channel: `Y Combinator`
- interviewer / moderator / host: `François Chaubard`
- event_context: `Inaugural YC Paper Club discussion held May 20, 2026, at the Y Combinator office in Mountain View, California; five technical paper presentations`
- perspective / conflict notes: `This is a curated research-discussion event rather than peer review. Several presenters are paper authors or close collaborators, which raises technical relevance but also advocacy incentives. Claims, benchmark results, and scaling extrapolations should be verified against the cited original papers before architectural promotion.`

## §2 — Screenshot / visible source details

- visible_duration: `1:07:10`
- visible_views_at_capture: `124,177`
- visible_capture_date: `2026-07-18`
- event_recorded_at: `2026-05-20`
- event_location: `Y Combinator office, Mountain View, California`
- papers_presented:
  - `Speculative Speculative Decoding`
  - `Diffusion-MPC`
  - `LeWorldModeling`
  - `Deep Learning is Not So Mysterious or Different`
  - `Pretraining Under Infinite Compute`




Review 001 — Knox strategic read

Signal: 4.7/5 — high-value substrate source
Why: not because the papers are individually “relevant to healthcare,” but because together they expose a missing operational layer between candidate generation, consequence prediction, runtime capacity, uncertainty detection, and governed action.

Core contribution

Intelligence is not just the model. It is the amount of governed deliberation the system can complete before the consequence window closes.

OMNI already has trust_horizon, world-model honesty, candidate≠commit, and blast-radius-keyed authority. This source adds machinery beneath those laws.

1. Inference becomes part of the capability envelope

The first talk’s strongest claim is that inference speed is not merely cost or convenience. For systems whose performance improves with additional reasoning, inference throughput determines how much intelligence can be delivered before a deadline.

For OMNI, a capability should therefore not be described only by:

model;
tools;
accuracy;
authority ceiling.

It also needs an effective deliberation envelope:

available time × inference throughput × compute budget × context quality × verification burden

A model may be highly capable in a laboratory but operationally incapable of safely resolving a time-sensitive event if it cannot complete the required deliberation and verification before the decision window closes.

This sharpens trust_horizon:

Authorized autonomy is bounded not only by what the system knows, but by how much governed reasoning it can finish before acting becomes stale or unsafe.

Candidate addition: deliberation_capacity / decision_time_envelope within the AI capability/runtime profile.

2. Speculative decoding supplies a powerful governance pattern

The technical mechanism is:

cheap draft model predicts ahead;
expensive target model verifies;
accepted prefixes survive;
rejected branches are discarded;
speculation and verification can run concurrently.

The OMNI analogy is useful but must be translated carefully:

Speculate broadly, verify narrowly, commit only through the owner

Low-cost agents can precompute:

likely context needs;
candidate actions;
likely objections;
possible next steps;
draft communications;
anticipated fulfillment paths.

But speculation must remain:

cheap to reject;
isolated from authoritative state;
clearly labeled;
prevented from creating custody or obligation;
verified against the owning domain and current world state.

This is especially valuable where waiting until the authority gate to begin all downstream reasoning creates avoidable latency.

Example: while a clinician reviews a refill, OMNI may speculate likely pharmacy availability, required labs, contraindication checks, patient messaging, and fallback fulfillment routes. None may commit until the clinical stance and relevant authority gates resolve.

This is more than “parallel agents.” It is authority-safe precomputation across a future-state tree.

Candidate pattern: speculative_work_branch with expiration, dependency, verification owner, and zero-commit authority.

3. Separate action proposals from consequence models

Diffusion MPC contributes the most important architecture separation in the source:

one model proposes possible actions;
another predicts how the world may evolve under those actions;
a planner evaluates the possibilities against an objective.

OMNI currently has strong laws around candidates and resolutions, but this suggests a sharper internal decomposition:

Proposal layer: what could we do?
Consequence-model layer: what might happen if we do it?
Governed-resolution layer: which stance is admissible and authorized?
Owning-domain commitment: what actually becomes authoritative?
Observed outcome: what really happened?

The consequence model must not be hidden inside the proposing agent. Separating them allows the system to update its understanding of environmental dynamics without rewriting every action-generation mechanism.

That matters in care because the same nominal action behaves differently when:

the pharmacy is out of stock;
the patient’s insurance changes;
renal function deteriorates;
the caregiver disappears;
transportation fails;
the operator’s staffing changes;
a device or integration degrades.

Keeper line:

The action may remain valid while the world in which it was expected to work has changed.

This directly strengthens Reactor’s distinction between intent, execution, and patient consequence.

4. World-model residual should become an operational event

The world-model talk demonstrates something more valuable than imagined futures: the model’s prediction error spikes when reality changes unexpectedly.

That suggests a concrete OMNI mechanism:

World-model residual / surprise event

predicted consequence − observed consequence = residual evidence

A material residual should be able to:

shorten the trust_horizon;
downgrade autonomy;
invalidate speculative branches;
trigger context refresh;
reopen a Governed Resolution;
flag changed environmental dynamics;
route model or policy review;
become Prove/Learn evidence.

Examples:

predicted medication availability, actual stockout;
predicted patient follow-through, actual non-response;
predicted eligibility, payer denial;
predicted routine recovery, unexpected deterioration;
predicted task completion, custody never accepted.

This is not merely “monitor outcomes.” It is explicitly comparing what the system expected with what reality produced, while preserving the original prediction and context.

Potential architecture candidate: prediction_residual_event linked to the original world model, action, observed state, uncertainty, and reopening decision.

This may be the strongest additive contribution in the video.

5. Novel dynamics adaptation is safer than silent policy mutation

DMPC can adapt when environmental dynamics change while preserving its action-proposal model.

Translated correctly:

changed environment → update consequence assumptions;
changed goal or policy → separate authorized change;
do not treat those as the same operation.

In healthcare, “the pharmacy is closed” is a changed dynamic.
“Prefer the cheapest medication regardless of clinical fit” is a changed objective.

The first may justify rerouting. The second requires policy and authority review.

New guardrail pressure:

Runtime adaptation to changed dynamics must not become runtime mutation of clinical objectives.

Reward functions, optimization criteria, and tradeoff weights are governed policy—not convenient inference-time knobs.

6. Data-scarce, compute-rich learning has a major OMNI implication

The final paper asks how to improve when data is finite but compute is abundant. Its answer revisits regularization, ensembles, and distillation.

For OMNI, the strategic lesson is:

When legitimate data is scarce, the answer is not automatically to capture more human data. It may be to reason, validate, simulate, ensemble, and reuse the permitted data more intelligently.

Healthcare data is not merely scarce; it is:

consent-bound;
purpose-bound;
operator-scoped;
unevenly authoritative;
temporally unstable;
often non-independent.

This suggests a healthier development posture:

preserve data minimization;
spend more compute on bounded evidence;
use ensembles to explore uncertainty;
evaluate disagreements;
distill validated capability for runtime efficiency.

But:

five models trained on the same corpus are not five independent witnesses;
distilled models inherit teacher blind spots;
ensemble consensus does not create clinical authority;
synthetic data does not silently acquire source authority.
Training-time plurality, runtime simplicity

A useful potential pattern is:

plural models / critics / simulations during E&V → validated distilled runtime capability

That can reduce production cost and complexity while preserving evidence that the compact model was tested against broader deliberation.

This belongs in Platform E&V and AI capability lifecycle—not clinical truth.

7. The generalization talk adds an architectural warning

Highly expressive systems can fit both real structure and meaningless noise. Generalization depends on inductive bias.

The OMNI version:

A powerful agent without architectural bias can satisfy almost any local prompt—including the wrong one.

OMNI’s contracts, ownership boundaries, candidate/commit split, authority gates, and proof requirements are not constraints added after intelligence. They are the inductive bias that directs intelligence toward legitimate system behavior.

This is why “just give the model the full context” is insufficient. The agent also needs a structure that makes some solutions easier and some solutions impossible.

What not to import
The target model in speculative decoding is a verifier, not an authority.
Faster inference does not rescue stale, incomplete, or unauthorized context.
Predicted trajectories remain candidates, never reality.
Low model error does not prove clinical appropriateness.
Surprise detection does not explain causality or choose the remedy.
Runtime reward changes must not alter clinical objectives without governance.
Ensemble agreement does not imply evidentiary independence.
Distillation preserves capability imperfectly and never transfers authority.
“Infinite compute” is not permission for infinite data retention, surveillance, or patient experimentation.
Hard verdict

This source materially strengthens the corpus.

Genuine architecture candidates:

Deliberation-capacity envelope — how much governed reasoning can finish within the consequence window.
Speculative work branches — precomputed, expiring, zero-authority future work awaiting verification.
Action-proposal / consequence-model factorization — separate what may be done from what is expected to happen.
Prediction-residual event — explicit difference between expected and observed reality, capable of shortening trust and reopening resolution.
Training-time plurality → validated runtime distillation — E&V pattern for data-constrained capability development.

Strong guardrails:

dynamics adaptation ≠ objective mutation;
ensemble multiplicity ≠ independent authority;
world-model confidence ≠ world truth.

One-line read: OMNI already governs decisions; this source helps specify the intelligence machinery beneath them—speculate cheaply, model consequences separately, measure surprise when reality diverges, and let runtime capacity constrain how much autonomy is honestly available.

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

**Method note.** Formalizes Knox Review 001 (`full_semantic`, signal 4.7/5), verified against the §1 full timestamped transcript (five paper presentations at the inaugural YC Paper Club). This is a **sibling** to `EVSRC-2026-000294` (YC Decoded world-models/JEPA) and to `EVSRC-2026-000290` (Deep Agents harness) — much of the world-model + rollout-budget material is already dense in those reads, so this extraction dedups hard against them and does NOT re-derive the JEPA/MPC cluster; its distinctive contribution is the **inference-throughput-as-capability** framing (the "deliberation-capacity envelope") and the **speculate-broadly / verify-narrowly / commit-through-owner** precomputation pattern, both of which sharpen `trust_horizon` and `capability_envelope`. The pasted Knox header carried a STALE id (`EVSRC-2026-000287`) — ignored per run rule; canonical id = filename `EVSRC-2026-000299`. `build_status` grounded by run brief: repo has NO agent runtime, AI-gateway, world-model/planner, or model-gateway — so nearly every cluster is `doctrine=AFFIRM/PARTIAL × build=absent`; a few evidence/observation primitives are `partial`. PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis/registry/matrix/anchor-ledger edited. Anchors carry real transcript timestamps where a verbatim line exists; `[Knox §N]` loci mark where Knox synthesized across the talks.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Inference throughput is part of the CAPABILITY envelope, not just cost/convenience** | For any method whose quality scales with the amount of reasoning, tokens/sec at the decision moment *is* the peak intelligence deliverable before the consequence window closes; a lab-capable model can be *operationally incapable* of safely resolving a time-sensitive event if it cannot finish the required governed deliberation + verification in time | thesis §B (AI substrate) · **Reactor** (deadline-aware routing) · Agent Runtime (rollout/latency budget) · Platform Loop (capacity) | "inference is going to be seen as a capability" [5:52]; "tokens per second is exactly the peak intelligence" [6:16] | PARTIAL / sharpens trust_horizon × build=absent | strategy/spine | promote |
| B | **Deliberation-capacity / decision-time envelope (sharpening of `trust_horizon` + `capability_envelope`)** | A capability is not fully described by model + tools + accuracy + authority ceiling; it also needs an *effective deliberation envelope* ≈ `available time × inference throughput × compute budget × context quality × verification burden`; authorized autonomy is bounded not only by what the system knows but by how much governed reasoning + verification it can COMPLETE before acting becomes stale/unsafe | **capability_envelope** (add deliberation dimension) · trust_horizon · Reactor · Agent Runtime | "how much governed reasoning it can finish before acting becomes stale" [Knox §1] | PARTIAL / important sharpening × build=absent | capability-topology/spine | promote (as sharpening) |
| C | **Speculative decoding → a governance PATTERN: speculate broadly, verify narrowly, commit only through the owner** | Cheap draft precomputes likely context needs / candidate actions / objections / next steps / draft comms / fulfillment paths WHILE the expensive owner/verifier is busy; accepted prefixes survive, rejected branches are discarded for free — an *authority-safe precomputation across a future-state tree*, not "parallel agents" | Agent Runtime (precompute) · **Reactor** · CNS (orchestrates not owns) · candidate≠commit | "easier to verify than to generate" [8:57]; "speculate cheaply… commit only through the owner" [Knox §2] | AFFIRM (candidate≠commit) / new mechanism × build=absent | runtime | promote (pattern) |
| D | **Speculative work must be cheap-to-reject, isolated, labeled, zero-custody, zero-obligation, owner-verified** | The verifier is a *verifier, not an authority*: speculative branches may never create custody/obligation/authoritative state, must expire, must carry dependency + verification owner, and are verified against the owning domain + current world before anything commits (e.g. while a clinician reviews a refill, OMNI may pre-explore pharmacy availability / needed labs / contraindication checks / messaging / fallback routes — none commits until the clinical stance + authority gate resolve) | Agent Runtime · Care Operating Model · REV-184 (non-action-as-commit) · one-owner-per-fact | "None may commit until the clinical stance and authority gates resolve" [Knox §2] | AFFIRM × build=absent | runtime/spine | promote |
| E | **Action-proposal / consequence-model / resolution / commitment / outcome factorization (diffusion-MPC decomposition)** | Separate *what could we do* (proposal) from *what might happen if we do it* (consequence model) from *which stance is admissible + authorized* (governed resolution) from *what becomes authoritative* (owning-domain commit) from *what really happened* (observed outcome); the consequence model must NOT be hidden inside the proposing agent — separation lets the system update its understanding of environmental dynamics without rewriting action generation | **Reactor** · Care Operating Model · thesis §B · CNS | "a dynamics model which can evolve these actions and give you the future states" [~19:55]; five-layer split [Knox §3-derived, no single §1 line] | AFFIRM (extends 294 clusters C/H) × build=absent | architecture/spine | promote |
| F | **The action remains valid while the world it assumed may have changed (dynamics drift ≠ intent change)** | The same nominal action behaves differently when pharmacy is out of stock / insurance changes / renal function drops / caregiver disappears / transport fails / staffing changes / a device or integration degrades — strengthens Reactor's intent≠execution≠consequence separation; revalidate the world before consequential execution | **Reactor** · Care · Accountability Loop | "the action may remain valid while the world… has changed" [Knox §3] | AFFIRM (= 294 cluster K) × build=absent | care/spine | promote |
| G | **World-model residual / surprise as an operational EVENT (`predicted − observed = residual evidence`)** | The world-model talk's real value is that prediction error SPIKES when reality changes unexpectedly; a material residual should be able to shorten `trust_horizon`, downgrade autonomy, invalidate speculative branches, trigger context refresh, reopen a Governed Resolution, flag changed dynamics, route model/policy review, and become Prove/Learn evidence — while PRESERVING the original prediction + context (examples: predicted med availability vs stockout; predicted follow-through vs non-response; predicted eligibility vs payer denial; predicted routine recovery vs deterioration; predicted completion vs custody-never-accepted) | Platform Loop (calibration/drift) · **REV-184** (world-model honesty; outcome-reads-frozen-context) · Accountability Loop · Reactor | "you get a spike in the model error and this is detectable" [42:19]; "predicted consequence − observed consequence = residual evidence" [Knox §4] | PARTIAL × build=absent | Platform/proof/spine | promote (pairs 294 `actual_vs_predicted`) |
| H | **Runtime adaptation to changed DYNAMICS must not become runtime mutation of clinical/business OBJECTIVES** | DMPC adapts to novel dynamics while preserving its action-proposal model; translated: "the pharmacy is closed" is a changed *dynamic* (may justify rerouting); "prefer the cheapest med regardless of clinical fit" is a changed *objective* (requires policy + authority review); reward functions / optimization criteria / trade-off weights are governed policy, NOT inference-time knobs | Care (objective governance) · governance · Reactor · REV-184 | "adapt the dynamics model on some play data" [28:50]; "must not become runtime mutation of clinical objectives" [Knox §5] | AFFIRM (= 294 cluster U + Q) × build=absent | spine-guardrail | promote |
| I | **Data-scarce / compute-rich learning → reason/validate/simulate/ensemble/reuse permitted data, don't reflexively capture more** | When legitimate data is scarce (consent-bound, purpose-bound, operator-scoped, unevenly authoritative, temporally unstable, non-independent), the answer is not automatically more human data — preserve data minimization + spend more compute on bounded evidence; a healthier development posture, NOT a surveillance license | Platform Loop / E&V · Care (data minimization) · §B · Knowledge Reservoirs | "constrained by data but totally unconstrained by compute" [53:12]; "the answer is not automatically to capture more human data" [Knox §6] | PARTIAL × build=absent | strategy/care | promote |
| J | **Training-time plurality → validated runtime distillation (plural critics/sims/ensembles during E&V → one distilled, tested runtime capability)** | Ensembling + distillation are data-efficient (paper: distill an 8-ensemble into one 300M model retaining ~83% of the loss win; self-distillation even beats the regularized asymptote) — OMNI can spend plurality during Evaluation & Validation and ship a compact runtime capability WITH evidence it was tested against broader deliberation; belongs in Platform E&V + AI capability lifecycle, NEVER clinical truth | Platform Loop / E&V · §B AI lifecycle · Intelligence Foundry (FWREG-007) | "retaining roughly 83% of the loss improvement" [1:03:01]; "plural models/critics/simulations during E&V → distilled runtime" [Knox §6] | PARTIAL × build=absent | Platform/E&V | promote |
| K | **Ensemble multiplicity ≠ evidentiary independence; distillation inherits teacher blind spots; consensus ≠ authority** | Five models on the same corpus are not five independent witnesses; distilled models inherit the teacher's blind spots; ensemble agreement does not create clinical authority; synthetic data does not silently acquire source authority — the multiplicity law (dedup vs 284 parallel-agents≠evidentiary-independence) | REV-184 · Platform E&V · Care authority · guardrail | "five models trained on the same corpus are not five independent witnesses" [Knox §6] | AFFIRM (= 284 multiplicity law) × build=absent | spine-guardrail | promote |
| L | **OMNI's contracts/gates/ownership ARE the inductive bias that directs intelligence toward legitimate behavior (generalization talk)** | Highly expressive systems fit both real structure and meaningless noise; generalization depends on inductive bias (soft bias toward compressible/legitimate solutions). OMNI analogue: a powerful agent without architectural bias can satisfy almost any local prompt — including the wrong one; candidate/commit split, ownership boundaries, authority gates, proof requirements are NOT constraints bolted on after intelligence — they are the bias that makes some solutions easy and some *impossible*. This is why "just give the model the full context" is insufficient | thesis (physics as inductive bias) · Reactor · Build-OS · Care | "expressive models with a soft inductive bias" [48:44]; "the inductive bias that directs intelligence toward legitimate behavior" [Knox §7] | AFFIRM (doctrine-affirming) × build=partial (contracts/gates exist) | spine | promote (affirms canon) |
| M | **A faster/cheaper inference substrate does not rescue stale, incomplete, or unauthorized context** | Speed is a capability lever, not an authority lever: faster inference + lower model error + surprise-detection do NOT prove clinical appropriateness, do not explain causality, and do not choose the remedy; "infinite compute" is not permission for infinite data retention / surveillance / patient experimentation | REV-184 · Care · security · guardrail | "Faster inference does not rescue stale… unauthorized context" [Knox what-not-to-import] | AFFIRM × build=absent | spine-guardrail | promote |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; net-new DOMAIN objects = 0)
Knox proposed 5 "genuine architecture candidates". Dedup vs cumulative baseline (wave-6 registry §2/§3; 294 world-model cluster; 290 harness; 284 multiplicity + model-telemetry; REV-184; candidate≠commit; capability_envelope; one-owner-per-fact) + `EVRUN-000004 §0.5` retired terms + `D0OL-GRD-001..008`:
- **`deliberation_capacity` / `decision_time_envelope`** → **dedup-as-EXISTS**: a *sharpening dimension added to* `capability_envelope` + `trust_horizon` (add `available time × throughput × compute × context quality × verification burden`), NOT a new object. **Route INVESTIGATE** (capability-topology watch) — this is the single most genuinely-additive pressure in the source; pairs with 291 economic/cost-passport + 296 verification-debt-as-capacity-control + 294 rollout-budget (cluster J).
- **`speculative_work_branch`** (expiring, zero-authority, verification-owner-bound) → **dedup-as-EXISTS candidate≠commit + Reactor + one-owner-per-fact**; it is a *runtime pattern* (speculate/verify/commit-through-owner), not a new domain object. **Route INVESTIGATE** (Agent Runtime + Reactor watch); pairs with 290 harness precompute + 285/293 compiler-manifest family.
- **action-proposal / consequence-model factorization** → **dedup-as-EXISTS**: extends 294 clusters C/E/H (action-conditioned transition model + model-based/model-free composition) + Reactor decomposition; sharpening, not net-new.
- **`prediction_residual_event`** (predicted vs observed, linked to original world model + action + observed state + uncertainty + reopening decision) → **dedup-as-EXISTS** 294 `actual_vs_predicted` calibration receipt + REV-184 world-model-honesty. **Route INVESTIGATE** (Platform Loop calibration + Accountability lineage); the second-strongest additive pressure; reviewer decides distinct-vs-merge with 294 receipt.
- **training-time-plurality → validated-runtime-distillation** → **dedup-as-EXISTS**: Platform E&V + AI capability lifecycle + 284 adaptation-stack/multiplicity; an E&V *practice*, not a domain object.
- **net-new DOMAIN objects: 0.** No "inference-engine domain", no "world-model domain" (Knox-consistent; 294 explicit). Retired terms not re-minted (`EVRUN-000004 §0.5`); `D0OL-GRD-001..008` not re-minted as primitives.
- **INVESTIGATE-lane summary (route to owning-home watch; NOT minted):** (1) `deliberation_capacity`/`decision_time_envelope` → capability-topology + Reactor; (2) `speculative_work_branch` → Agent Runtime + Reactor; (3) `prediction_residual_event` → Platform Loop + Accountability + REV-184 (merge-candidate with 294 `actual_vs_predicted`). These fold into wave-6 registry families **F2** (evidence-stream/monitor-health), **F3** (cost/compute as runtime property), and **F5** (agent-runtime lifecycle) — no new family.

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED or rejected-with-reason; NEVER inverted)
Knox's "What not to import" list (9 cautions) — all preserved verbatim-in-intent:
1. **The target model in speculative decoding is a VERIFIER, not an authority** — precompute may propose; the owning domain commits. [kept — C/D]
2. **Faster inference does not rescue stale, incomplete, or unauthorized context** — speed is a capability lever, not an authority lever. [kept — M]
3. **Predicted trajectories remain candidates, never reality** — a plan is not an occurrence. [kept — E/G, candidate≠commit]
4. **Low model error does not prove clinical appropriateness** — calibration ≠ correctness-of-decision. [kept — G/M]
5. **Surprise detection does not explain causality or choose the remedy** — a residual opens inquiry, it does not adjudicate. [kept — G]
6. **Runtime reward changes must not alter clinical objectives without governance** — dynamics adaptation ≠ objective mutation. [kept — H]
7. **Ensemble agreement does not imply evidentiary independence** — same-corpus models are not independent witnesses. [kept — K]
8. **Distillation preserves capability imperfectly and never transfers authority** — the compact model inherits blind spots. [kept — J/K]
9. **"Infinite compute" is not permission for infinite data retention, surveillance, or patient experimentation** — compute abundance ≠ consent/minimization override. [kept — I/M]
- **REJECT-as-OMNI-doctrine (mechanism kept, claim not canonized — `GRD-043`):** "inference is THE capability" as a monocausal thesis (keep the throughput-as-capability *dimension*, reject the reduction — care authority is never inference-throughput); "path to AGI" framing (research narrative → future-watch); benchmark/scaling extrapolations ("5x / 17x data-efficiency win", "300 tok/s", monotone power-law asymptotes) as OMNI facts (author-advocated, unverified → future-watch); "world models required for AGI" (= 294 reject); self-distillation-beats-teacher as a universal law (paper-local result); "spend more compute" as license for surveillance-scale data capture (rejected — I/M). (Recorded, not silently dropped.)

### Care implications (NOT swept by "0 net-new")
- **Speculative precomputation is a latency win FOR care safety only if it is custody-free (cluster D):** OMNI may pre-explore pharmacy/labs/contraindications/messaging/fallbacks while a clinician reviews — but none may create obligation, enter the record, or commit before the clinical stance + authority gate resolve; the danger is a speculative branch silently becoming an order or a message.
- **The prediction-residual event (G) is a first-order care-safety mechanism:** "predicted routine recovery, unexpected deterioration" / "predicted eligibility, payer denial" / "predicted completion, custody never accepted" should each be able to shorten trust, downgrade autonomy, and reopen a Governed Resolution — while preserving the original prediction + frozen context (REV-184 outcome-reads-frozen-context).
- **Dynamics-vs-objective separation (H) protects care from silent cost/throughput optimization:** rerouting around a closed pharmacy is fine; "prefer cheapest med regardless of fit" is a governed policy change with a named owner — never an inference-time knob.
- **Deliberation-capacity honesty (A/B) is a care-safety property:** if OMNI cannot finish the required governed reasoning + verification before the consequence window closes, the honest move is abstain/escalate/hand-to-human — not act fast on incomplete deliberation.
- **Data-scarcity posture (I):** care data is consent/purpose/operator-bound; the lesson is spend compute on bounded evidence + simulation + ensembling, preserve minimization — NOT capture more PHI.

### Guardrail candidates → `08` (gated, `user_knox_required`; dedup noted)
- **G-cand-1:** *Speculative/precomputed work is cheap-to-reject, expiring, labeled, and zero-custody/zero-obligation; it may never create authoritative state, an order, a message, or an obligation before the owning domain verifies + commits* [dedup vs candidate≠commit + one-owner-per-fact + REV-184 non-action-as-commit].
- **G-cand-2:** *Inference speed / model confidence / low prediction error are capability signals, never authority signals; faster or more-confident inference does not rescue stale, incomplete, or unauthorized context* [dedup vs capability_envelope≠delegated_authority_envelope + REV-184].
- **G-cand-3:** *A material prediction-residual (predicted ≠ observed) must be able to shorten trust_horizon / downgrade autonomy / invalidate speculative branches / reopen a Governed Resolution — while preserving the original prediction and frozen context* [dedup vs 294 `actual_vs_predicted` + REV-184 world-model-honesty].
- **G-cand-4:** *Runtime adaptation to changed environmental dynamics must not mutate governed objectives (reward/optimization/trade-off weights); objective change is a policy + authority event with a named owner* [dedup vs 294 cluster U + Q + AI-never-care-authority].
- **G-cand-5:** *Ensemble agreement ≠ evidentiary independence; distillation transfers capability imperfectly and never transfers authority; synthetic/derived data does not acquire source authority* [dedup vs 284 multiplicity law].
- **G-cand-6:** *"Unconstrained compute" is not "unconstrained data"; compute abundance never overrides consent, purpose-binding, minimization, or the care/proof floor* [dedup vs D0OL-GRD data-minimization guardrails].

### Reread flags
- Cluster A/B (deliberation-capacity envelope) is the **strongest capability-topology sharpening in the source** — reopen when `capability_envelope` / `trust_horizon` are next authored; pairs with 291 (economic/cost-passport), 296 (verification-debt-as-capacity-control), 294 (rollout budget / receding horizon, cluster J).
- Cluster G (prediction-residual event) → reopen with 294 `actual_vs_predicted` calibration receipt + REV-184 world-model-honesty; reviewer decides distinct-object-vs-merge (likely merge into one calibration/residual receipt).
- Clusters C/D (speculative work branch) → reopen with 290 Deep-Agents harness (externalize-with-custody) + Reactor precompute routing; map-depth only — do NOT build a speculative-execution runtime pre-spine.
- Cluster L (contracts-as-inductive-bias) is a **doctrine-affirming keeper** — useful framing for the thesis/Reactor authoring (why physics-first is more sample-efficient than context-dumping), not a new object.
- This source is DEPTH INPUT to the Reactor / Agent-Runtime / capability-topology / Platform-E&V maps — NOT license to build any inference/speculation/world-model runtime pre-spine.

### One-line hard read
`full_semantic`, 4.7/5, **0 net-new domain objects + 3 INVESTIGATE sharpenings (`deliberation_capacity`/`decision_time_envelope`, `speculative_work_branch`, `prediction_residual_event` [merge-candidate w/ 294])** — a sibling to 294 that specifies the *intelligence machinery beneath* OMNI's existing decision laws: **speculate cheaply, model consequences separately, measure surprise when reality diverges, and let runtime deliberation capacity (not lab benchmarks) constrain how much autonomy is honestly available** — while OMNI's contracts/ownership/authority gates remain the inductive bias that makes illegitimate solutions impossible; inference speed, ensemble agreement, low model error, and infinite compute are capability signals that NEVER become authority, care-truth, or a data-capture license.

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§B (AI substrate: inference-as-capability, data-efficiency posture) · OMNI Reactor (deadline-aware routing, action-proposal/consequence-model decomposition; frozen) · Agent Runtime & Harness (deliberation/rollout budget, speculative precompute) · capability-topology (deliberation_capacity dimension on capability_envelope/trust_horizon) · Platform Loop / E&V (prediction-residual calibration, training-plurality→runtime-distillation) · REV-184 (world-model honesty, non-action-as-commit) · Care Operating Model (custody-free speculation, residual-as-safety-event, objective-governance)` · promotion: `watch` (6 guardrail candidates + 3 INVESTIGATE sharpenings → `08`; net-new domain objects 0) — parent folds cross-source into registry centrally

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, second batch; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Review 003): canonical id = 299 (pasted Knox header carried STALE id 287 — ignored per run rule; this is the YC Paper Club inference/diffusion/world-models source, sibling to 294/290); slug firmed (SUGGESTION only — not renamed); §0/§0.1 filled from Knox Review 001 metadata (no screenshot this session → `inferred`; 5 presenters + host); §3 Review 003 written (13 clusters, **0 net-new domain objects + 3 INVESTIGATE sharpenings** `deliberation_capacity`/`decision_time_envelope` · `speculative_work_branch` · `prediction_residual_event` [merge-candidate w/ 294 `actual_vs_predicted`], 9 counterweights preserved + reject set, 6 guardrail candidates → 08); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off. PROPOSE-ONLY (`GRD-036`); shared run artifacts NOT edited (parent folds centrally).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

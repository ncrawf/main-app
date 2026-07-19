# EVSRC-2026-000301 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=faithful`** (2nd-reader signed 2026-07-19)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000301_yc-decoded-recursion-hrm-trm-scaling-law.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000301`  ·  filename: `EVSRC-2026-000301_yc-decoded-recursion-hrm-trm-scaling-law.md`  *(firm slug SUGGESTION — not renamed: `EVSRC-2026-000301_yc-decoded-recursion-hrm-trm-scaling-law.md`)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=DGtUUMNYLcc`  ·  source_title: `Recursion Is The Next Scaling Law In AI`
- channel_or_org: `Y Combinator`  ·  speaker: `Ankit Gupta; François Chaubard`  ·  published_at: `2026-05-01`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `technical research discussion / paper analysis`  ·  source_reliability_context: `investor`  ·  topic_tags_light: `[recursive_reasoning, HRM, TRM, latent_reasoning, inference_time_compute, recurrent_models, hidden_state, task_specific_models, ARC_Prize, capability_scaling]`
- *(canonical id = filename EVSRC-2026-000301; the pasted Knox §3 block carries a STALE header id `EVSRC-2026-000289` — IGNORED per run brief; topic verified from §1 transcript + Knox metadata as the recursion/HRM/TRM source. No screenshot supplied → metadata carried from the pasted Knox Review 001 §0 block; identity_confidence downgraded to `inferred`.)*

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Ankit Gupta` · role_in_source: `host / technical discussant` · affiliation_at_publication: `Y Combinator — General Partner` · speaker_type: `investor` · authority_context: `technically informed YC partner framing and interrogating recent research on hierarchical and tiny recursive models` · identity_confidence: `inferred` (no screenshot; corroborated by §1 transcript + Knox §0)
  - name: `François Chaubard` · role_in_source: `principal technical presenter / discussant` · affiliation_at_publication: `Y Combinator — Visiting Partner` · speaker_type: `investor` · authority_context: `technical presenter explaining recurrent-model history, HRM/TRM mechanics, training behavior, benchmark results, and possible future combinations with foundation models` · identity_confidence: `inferred` (no screenshot; corroborated by §1 transcript)
- publisher / channel: `Y Combinator`  ·  interviewer / moderator / host: `Ankit Gupta`
- event_context: `Episode of YC's "Decoded" series analyzing two 2025 recursive-model papers — Hierarchical Reasoning Models (HRM, Sapient) and Tiny Recursive Models (TRM, Alexia Jolicoeur-Martineau)`  ·  perspective / conflict notes: `Speakers are interpreting and ADVOCATING for a research direction, not presenting a neutral systematic review. Benchmark and parameter-efficiency claims are paper-derived and should be verified against the original papers before any technical adoption. Claims about recursion enabling first-principles discovery or becoming "the next scaling law" are forward-looking.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

n this video



Chapters

Transcript
Search in video
Intro
0:00
Welcome back to another episode of Decoded. Today, I'm back with YC visiting partner Francois Shaard to talk
0:05
about one of the most interesting recent trends in AI research, recursion. Specifically, we're going to talk about
0:11
how we can improve a model's reasoning performance by using recursion at inference time [music] rather than by just making the model bigger and bigger.
0:18
There were two papers that made the power of this approach really clear in 2025. One on hierarchal reasoning models
0:24
or HRM and another on tiny recursive models, TRM.
0:29
[music]
Model Foundations
0:35
Franis, thanks for joining us. Um, can you tell us a little bit about these two models and what was so interesting about
0:42
them? Sure. I guess, um, to set up a little bit of a foundation, uh, you already did an amazing lecture on RNN's and LM in
0:49
one of the previous videos, so I won't overdo it, but just to give the cliff notes, um, an RNN is just a model that
0:56
you, uh, recursively call again and again and again. um on itself and we
1:01
were very much in the belief that this was required to get to AGI. Um peak RNN
1:07
use was probably until 2016 with Alex Graves um Nur's keynote which is just fantastic and all his his his adaptive
1:14
comput time work. So this is about 10 years ago people were working on these models. This was in the era of LSDMs and LSTMs with
RNN Limits and LLM Contrast
1:20
attention. Yeah. And uh depending which professors you talk to uh before attention was invented.
1:26
Yes. Yes. Totally. [laughter] Yeah. Um and uh and I think what really was the the the limiting step on uh RNNs in
1:34
general was this thing called back prop through time where you have to you roll out the model and then to update the
1:39
weights you need to approximate the gradient and you step back back back and you keep rolling out and as the the model um gets uh bigger and bigger and
1:46
as you roll out for more and more steps then you have all these uh uh accumulation of errors and the gradient
1:51
gets noisier and noisier and then it just kind of stops to work. Yeah. you have these like vanishing or exploding gradient problems and it's cuz if you have an input with 20 steps,
1:58
you're like multiplying these matrices 20 times and that causes talking about doing context length of like a million or like a billion. And so
2:05
like it's not even just 20, it's like a billion. And even worse, you have to retain the activations at every single
2:10
step. And so like if this were happening in your brain, you would need like a million copies of your brain at every
2:16
single activation so that I can back prop through it. There's tricks around this that you can you can do and you can do um a gradient checkpointing and
2:23
things like that to reduce that issue. But then you're just like trading off memory for um wall clock time and and
2:28
compute. Right? So now if you contrast that with um LLMs, the ones that people are widely using these while at face value they
2:35
appear to be similar at training time they're doing basically this one on oneot feed forward process for every
Reasoning Limits and Sorting Analogy
2:42
input right the the LLM the transformer block can take all the inputs in parallel. It's not actually iteratively
2:47
going over them one at a time at train time. So you don't have this needing to store tons of activations
2:53
problem or this giant vanishing gradients problem with them. Yeah, exactly. Like it it's actually un like all happening in time in one shot
2:59
magically. And that was like the the trill or lower triangle trick that kind of happens this causal mask that occurs.
3:06
And so you actually do all all time steps in one shot. And you forward pass a feed forward model on all time steps
3:12
in one shot and you backwards in one shot. And it's amazing uh uh for uh
3:17
train time in terms of like a wall clock. Um it requires a lot of flops and it still requires a lot of the memory.
3:23
You still need it there, but you don't have the vanishing gradient issue. Um and the what you actually paid for that
3:29
you have to give up is this latent reasoning thing and this [snorts] compression in the time direction. There is no compression in LM. Every single
3:36
decode that I do, I still have to retain the entire, you know, Shakespeare novel just to like decode a little bit. And in
3:42
RNNs, you don't have to do that. It's all compressed in this hidden state that you kind of roll out. Okay. So, let's talk about that in a
3:48
little bit more detail. Like you refer to this um inherent reasoning ability.
3:54
You know, many people think about LLMs as doing reasoning. And we're going to talk about that a little bit later, but
4:00
help me understand where you see the biggest limitations in LM's reasoning ability or is in terms of what the model
4:06
does in an actual forward pass. Yeah. And so, um I guess we go back to chat GPT2.
4:12
GPD2 was this uh landmark uh uh architecture and paper that um basically
4:18
was just get next token, next token, next token and it kind of worked and like we just watched val loss go down,
HRM Paper Introduction
4:24
perplexity goes down, like the model just is more performant, looks better, starts to make some Shakespeare that
4:30
actually sounds somewhat plausible, right? And then we have to get these things to reason and to actually solve some really
4:35
hard problems. And um and I've done extensive experiments on this but like if you take uh for example sort you get
4:43
you have infinite amounts of unsorted list and you give it sorted lists you keep feeding it to the model it should
4:48
work right um it's actually impossible for the model to map from unsorted list
4:54
to sorted lists if I have in a one shot basically in a one shot basis it's like it's like literally that we know a theoretical
4:59
lower bound that um for uh comparison sort you can't do better than m login uh
5:04
steps and if I have a list that's 31 uh uh uh uh uh characters or elements long
5:12
and my transformer is 30, I run out of steps to do comparisons. It's not possible for me to like do all the steps
5:18
that is needed to be done. Um in HRM and TRM, they use uh Sudoku as an
5:23
incompressible problem. Similarly, and so are mazes. Those are incompressible problems. Rolling sum incompressible
HRM Architecture and Intuition
5:28
problem. So when you mention the sorting algorithm, when I think back to my algorithms class from college, the one way you could get faster than n login in
5:35
a sorting algorithm is if you had some access to an external memory cache. If you had some tape you could write to,
5:41
then you can actually do faster than n login by basically selectively putting things onto this memory. And I suspect
5:46
that's you know a key limitation of these LLMs in that because there's no external memory tape inbuilt into the
5:52
model you lose certain performance possibilities in terms of how fast you could go.
5:57
That's right. And so I guess like radic sort would be like the most common one. You like depending on on this the number
6:02
of buckets that you have you can kind of get from n login to order n. You can't get less than n. You have to touch all
6:08
the the elements. Sorry. You have to do that. And if you run out of um uh um
6:14
layers in in transformer layers in your uh neural network then you ran out of chances to do that.
6:20
Yeah. Yeah. So this is just like a tur this is like going back to like Alan Allen Turing now and like a touring machine right like what so what's the analogy there exactly that we should
6:26
think about in terms of LLM's I guess not quite satisfying how you think about a touring machine. Yeah. So if we let's just talk about
6:31
like chat GBT2 GBT2 the original like no bells and whistles um it's just a feed
6:38
forward model and so it's just forward passing one step and taking an input creating a bunch of outputs
6:44
in the Sudoku case um if I have 50 different uh
6:50
And it's provable that I can only do one given this information then and I have this many layers then that's all I can
6:57
do and the cheat this the cheat is the the chain of thought and so it's completely true that at test time they
7:04
are uh turn complete and you can simulate all turn computable functions at test time but how do you get it to
7:10
learn it you need to train it and that's where uh unless you're training it on humanlabeled uh uh traces uh for which
7:17
there's a lot of problems like the millennial prize home. We don't have the trace for it. [laughter] So, we'd love to have the trace for it. Just doesn't
7:22
exist. Totally makes sense. Okay. So, with that context in mind, now let's talk about these two papers because I think that
7:29
sets up a lot of the the contrast we're going to draw between these papers and
7:34
the models that people are maybe more used to. So, let's talk about HRM first. Um, walk me through a little bit about
HRM Results and Outer Loop
7:40
how this model works and some of the intuition behind it. Sure. So um the the the this is directly
7:47
in the lineage of RNN's. There's not that much novel from like the RNN standpoint. Uh at least in my opinion,
7:54
they do have this idea of uh you know from a inspired by the brain where I
7:59
have like um there's different parts of the brain that operate on different frequencies. There's some that operate at a really high frequency which is on
8:05
the low level of the hierarchy. Some that operate in a really a low frequency which is the the higher level of the hierarchy. And the interplay between
8:12
those things is really interesting. So this is like literally in the human brain there's some like bio inspiration here which is that like you have like
8:18
different waves running at different frequencies at different parts of the brain or something like that. Cool. And um and I guess that interpret that's
8:24
one interpretation of it of the way that they they're talking about um you know classifying these these hierarchies of
8:30
frequencies and the way the most interesting part at least for me is the way that they train the neural network.
8:38
You take in some X, some input, whether it's a incomplete Sudoku puzzle, uh a
8:43
maze or an art prize challenge. Um you uh do TL steps with the L the the lower
8:52
level uh uh module. Then you do go to go to H. You do that um TH times and then
8:59
you have uh N sub outer refinement steps. Yeah. So you basically are like running
9:04
through the input with a given uh matrix with with a given transformation repeatedly on it and
9:11
you're doing that through two levels of refinement and then basically running that process several times. Yes. So there's exactly three levels of
9:18
recursion occurring here. There's the low level, there's the high level and then there's the outer refinement steps. And we're calling it recursion because
9:23
it's the same weights that are being applied repeatedly. We're not changing the weights in between these steps. Exactly. Right. You get to recurse on on
9:30
the LNET LTL times. You recurse on the th and the TL this looped recursion th
9:36
times and then you do n sub you do this whole out of refinement step n sub times.
9:42
Cool. And so what's the basic intuition for why that works? Like why does that produce an effective paper result and
TRM Paper Overview
9:48
what even were the results that this paper showed? Yeah. And so I mean this got state-of-the-art um on arc prize uh one
9:55
and two. uh this was a only a 27 million parameter model that was only trained on
10:02
uh arc prize so it's like a thousand inputs or something like that like puzzles basically literally a thousand task which is
10:08
extremely small there is no pre-training at all this is starts from like literally tabularasa weights and it can
10:14
outperform at that time if we go back you know we had um 03 if you remember back way back when [laughter]
10:21
um and it d and it o3 gets zero literally zero and got like something
10:27
like 70% on arc prize one at least um at the time which was just a huge breakthrough and so kind of the the way
10:33
you can kind of think this is like variable scoping and so like if I have like um you know three nested uh
10:40
functions I guess the first uh uh the lowest level function has like scoped variables which they'll call ZL which is
10:46
the carry that init variable latent variable in like traditional um
10:52
RNN literature they would call this the hidden state the low-level hidden And I get to recurse, recurse, recurse. And
10:57
then I pass back that ZL back to the the outer scoped function, the higher level
11:03
one. I let that one do one iter. It goes back and calls the lower level again. It does this whole thing in a third uh
11:10
outer loop, which is called the adder find instead. Okay. But when you describe it like that, it seems like it would have the same back prop through time problem that
11:16
you would have at ends. And I think they came up with a clever trick to basically get around that. So like what was that
TRM Training and Fixed Point
11:21
trick that they figured out? And this is really the the crux of the paper that like differentiates it in my opinion in
11:26
the literature is they instead of doing what Alex Graves did in all of his
11:32
papers from neural touring machines to uh adaptive compute time um to
11:38
differential neurocomputers is he always backropped through all of the recursion
11:44
steps and he was limited by back through time. So you can only make the model so big you have all these issues vanishing
11:49
gradients etc etc. And what they do is they they kind of have this uh deeq uh
11:55
of method of doing fixed point iteration. So that's like deep equilibrium. Deep equilibrium learning. Um where if I
12:03
um take a batch and this this is completely counterintuitive as a computer vision person because you'd
12:09
never do this but it actually does make sense and I'll explain why. If I take a batch of like imageet or cif 10 and I
12:15
forward pass through the model and I get some loss and I back prop and I update the weights, I would go get a different
12:21
batch for the next one. But what they do instead is they actually do that 16 times. And so and as you do that, you
12:27
actually can see the change uh in your residuals get less and less and less. And why it actually makes sense is
12:33
because when in the RNN case the ZL and the Z which are the carry the task
12:39
carries start out the hidden states the hidden states start off at zeros. Those are zeros. Then we go through this
12:45
whole loopy recursion three the the the at least the two loops the two lower loops t the the TL and TH steps and then
12:52
I uh back prop just through the two modules just once and I don't recurse
12:59
all the way back. I do a stop grad. I stop right there. And then there's a huge residual and then I don't reset ZL
13:05
and Z. I do it again at a different point in the carry or hidden variable
13:10
spa uh space. And so one can actually look at it as like a different batch
13:16
every time even though it's the same exact X's. Yeah. Yeah, like the way I kind of think about it is like the the 16 or whatever
13:22
that you're recursing over, it's like constructing a mini batch not from
13:29
different inputs but from like different memory states basically. It's like across this um hidden or carry
Detailed HRM Summary
13:37
memory access basically and and that math holds and it works. it follows DEQ directly in the event that
13:45
the ZL and the delta in ZL and the delta in ZH go to zero
13:51
which it actually just doesn't do and so we'll get to TRM but Alexia basically shows that it's just not the case and
13:57
you can't actually apply this math um and that's why it's working that's not
14:02
sufficient support for why it's working we actually don't know why it's really working um and she figures out that you
14:08
actually uh can uh back prop through all the way to the deep recursion which we're going to get into TRM in a second.
14:14
Um and that actually improves performance much much more interesting. Okay. So before we get into TRM yeah on you know on this paper you
14:21
know I think there's a bunch of different ways people have looked at this right in terms of how they came up
14:27
with it and then why this may or may not be working. One is a sort of biolausibility argument. Now as you know
14:32
I'm usually not super keen on these. You know, I think machine learning tends to have a long history of people starting
14:37
with boplausible arguments and then realizing that there's some variant of them that seems highly bioimplasible
14:42
that actually works better. I think you have example, right? a the classic the first p deep learning paper that started
14:49
this whole um craziness is alexnet and in Alexnet there's actually this funny little thing called like local receptive
14:55
activation or depression or something like that where like once this uh activation fires then like I have this
15:01
like you know refractory region or something like that it actually doesn't work at all like it didn't work and you
15:06
didn't need that and then VGG came out and said get rid of all that just go deeper and 3x3 comp and it actually just
15:12
like outperforms dramatically and so like this is always the maybe you need to do it to get accepted into Nurups and
15:18
some totally you're definitely the expert here but what do you consider to be bioplausible and what's not
15:24
well I think that a lot of machine learning literature has over overlapped a lot with people working in neuroscience and I think it is very
15:30
natural for us to ask questions about how does our brain work because our brain is like an incredible instrument that does a ton of computing obviously
15:36
and does it in a very shockingly efficient manner it seems like and so a lot of machine learning research has for a long time sought analog from how we
15:45
think to understand our brain to work and try to encode that in various machine learning systems. So from the
15:52
very basic concept of what a neural network is, it's called a neural network because we think it's some basic model
15:58
for what a neuron is. How certain activation functions work are meant to be inspired by certain biological
16:03
premises. The thing about them is that often we use bioplausibility to inspire us to
16:08
come up with ideas, but we end up veering away from the bioplausible to something adjacent to
16:15
them that is likely bioimplausible, but that seems to work better. And something that runs better on a GPU. Exactly. It runs better on a GPU. It's
16:21
more efficient in some capacity that is relevant to how we actually encode it in a computational system. So, I find
16:27
thinking about biolausibility fun and interesting and it's definitely a great way to inspire us to think about new
16:32
things. But I tend to not be bounded by boplausibility when I think about what machine learning systems we should
16:38
prioritize working on or think as particularly exciting other than as you know an interesting scientific launching
16:44
point for a deeper exploration. I think the the version of this that I find more compelling is actually that original discussion we were having around automa
16:51
theory basically and and honestly just actually like fundamental data structures and algorithms theory which
16:57
is that if you're running a complex algorithm having access to sort of a memory cache is actually
17:02
very useful for being able to run that algorithm efficiently and I kind of think of this set of hidden states or
17:08
carry as akin to a turning machine tape or akin to the radic sort uh memory Mor
17:15
bank where you can basically train a model to use this memory cache in an intelligent way in a single forward pass
17:21
so that you can get a more efficient time operation that would otherwise require some sort of more complicated
17:27
reasoning. Yeah, I think the a point I wanted to make uh earlier is that like we did this coot stuff and this tool use thing as uh
17:36
ways to get beyond the the uh the the in the the limitations of of GPT2. And so
17:42
the way that we get um we you can actually I've done this experiment you can actually if you give me infinite amounts of uh unsorted list and sorted
17:49
list if I h can do chain of thought and I can do every single step and teach it
17:54
to do every single step then I can actually get it to do uh to do sort and become a touring machine at test time.
18:01
Uh and similarly an even cheaper one that is much easier to do is you teach
18:07
it and you say hey there's this Python function called sort just call the function just call the function and like that's
18:12
the easiest thing to do and you don't need backrop at all and so um those are the two hacks now well Franuis this is
18:18
solved like we're done right no because I needed to know what sort was what
18:24
happens if we didn't know what merge the chain of thought is not going to inherently discover sorting from first
18:29
principles it's it's finding it from historical knowledge of everything it's trained on. Yeah. I mean, this is like the the Demis
18:34
had this whole thing about like the ultimate uh test is the Einstein test. Like go back to 1911 and then like have
18:39
it rebuild all the physics up until now. Similarly, let's just pretend that we only had bubble sort. We knew other no
18:45
other sort uh system. If you chain of thought it on all the bubble sort input and output, it will only do bubble sort.
18:51
In fact, it won't even do bubble sort that well. Like so. [laughter] So, this is the best situation. And then the tool use, of course, it can only know bubble
18:57
sort. I want to get to merge sort. How do I discover merge source? And and I think the interesting thing just to um emphasize here because it may
19:05
not have been extremely clear is there already exists some type of recursion that people are used to in LLM which is
19:12
chain of thought we mentioned earlier but that is a recursion that's happening in the token space of the model's
19:18
outputs not inherent to the model itself. That's sort of the fundamental limitation is that the model can only do
19:26
a feed forward oneshot output and then we basically just have this hack that if you keep letting it output things then
19:33
it can read its outputs and do somewhat intelligent seeming things with it but it seems to sort of be upper bounded by
19:40
the data that we feed it that you know the labs are very hungrily buying right now and not the sort of like inherent
19:45
underlying recursive reasoning. Yeah. So both in both cases, both hacks to solve this in coot and tool use um
19:52
you're bounded by the bounds of human knowledge. In the event it's outside the set of human knowledge, then like you're
19:58
kind of so and so that's that's one. The other you make a great point about discrete versus latent space. um
20:05
reasoning in uh a discrete it can only output the carry in the case of LLMs has
20:13
to be snapped back to some discrete token space and in the case of RNN's in
20:19
general they remain in this uh continuous latent space which is much higher dimensional if you give me like a
20:25
tape that's this long and you cut it up into 10 buckets like versus all the possible values it's much more
20:31
expressive to being continuous space but we can't train it that way because we actually, you know, because you're inhibited by back prop through time
20:37
largely. Um, and this is why this paper's so exciting. Okay. So, before we then go over to the TRM paper, um, let's just summarize
Comparing HRM and TRM
20:46
here. What matters most from the HRM paper that we should take away before we transition and contrast it with the TRM
20:51
paper. Yeah, I think that the the number one piece uh to take away is this outer refinement loop. The outer refinement
20:58
loop scales. And there's a a great uh breakdown. Um basically the the Sapion
21:06
uh authors, which huge kudos for this paper because there's so many innovations in this paper, um didn't
21:12
really do like scaling ablations on every single one of the inputs, but uh
21:18
this guy Constantine at Fronto Chalet's company India actually did. And it's this amazing breakdown that he put on
21:24
posted on uh YouTube that you can go check out. But um basically the main uh takeaway is that um the outer refinement
21:31
loops uh is the main uh uh beneficiary is is the main reason why these things work so well which uh uh Alexia
21:39
basically takes the she found I think in parallel and uh and scales up and and
21:44
shows that you can get rid of a lot of all this other stuff. Okay. So like a lot of machine learning the follow on paper is basically delete
21:50
75% of the first paper as we've often done in videos here and keep the magic basically. Yeah.
21:55
So, okay. So, so what's the magic then? Like what's the part that actually matters in terms of what stays in the
22:00
TRM paper and let's now contrast the core architectural differences between these two papers. Yeah. So, I think that I guess if I
22:06
break it down into uh two major things is this outer refinement loop thing is really great and works really well. Um
22:13
and that this like truncated back prop through time which is back prop through time except I
22:19
truncate at some time earlier point uh called t t back t equals 1 is actually
22:26
completely sufficient and so truncated back up to time t equals 1 completely sufficient and that's very
22:32
counterintuitive which is what hrm found which hm found and trm does a little bit
22:38
further rather than going through just one call to the hnet and the lnet it actually goes through one full recursion
22:45
loop. So if I do it 16 times I just go back through one time and that is is is
22:51
kind of sufficient. And if you do it with this like um fixed point iteration
22:56
thing pseudo fixed point iteration thing where you keep hitting it with a gradient at every single step it like
23:03
weirdly works and this batch size across the carry space like actually works. So that part is also kept between these
23:09
two models. Yeah, it seemed like another thing that changed was having these this sort of double layer of like, you know,
23:16
higher order thinking and lower order thinking. It seems like it collapsed that down into just a single one. What's
23:22
the intuition there and how does that actually work in the TRM paper? Yeah. So, it's interesting. Um, she actually ablates having two separate
23:28
networks versus just having one. I guess the more important space is the variable scope is that you should have low-level
23:33
features and high level features but the same network and so the the the best performance the same network can extract both
23:39
basically yeah you weight share between the lnet and the hnet and it's just called net and and you do just one transformer
23:45
layer versus the four like they do in sapient and just whittle it down to one and do more of a
23:52
but you keep ZL and Zh to be distinct and separate and she she calls it X and
23:58
Y which I found very confusing Z XYZ which is very confusing and it's just like Zh and ZL is just cleaner.
24:04
So if you read the paper Y is actually like latent space. It's like it's like Z basically and it is not a label [laughter] which
24:11
really threw me. Uh but anyway, so I I we'll go through some code here and uh I'll walk you
24:16
through it. So I replaced all of her nomenclature and used the the sapient notation which is much cleaner and and
24:22
more straightforward to me at least. Okay, cool. Now before we you know dive into the the code for a sec like in
24:28
terms of how these TRM actually work you know it's pretty interesting because these this recursion advantage now gives
24:34
you a bunch of advantages over transformers where rather than having you know 500 or a thousand or a million
24:39
or whatever transformer layers and having tons and tons of parameters. You get compute depth basically without this
24:45
parameter depth. Um and the optimization proc process looks like more of like an
24:51
iterative um kind of like expectation maximization algorithm. You want to talk about how that worked in the TRM paper because I thought that was also pretty
24:56
interesting. Um so both of them kind of had the same kind of uh um EM feeling thing where
25:02
like we uh update ZL condition upon the input X and Z. Yep.
25:09
Z the last Zh Tminus one let's say. Um, and then we keep updating ZL, ZL, ZL,
25:15
ZL, ZL, and we keep updating it. And then we go holding, we update Z condition upon uh ZL, and actually it's
25:23
just ZL. It's not even X. And then we just update Z. And uh, and the way to think about ZL and Z is ZL is like your
25:32
uh, local scoped variables that are just being overwritten and updating, updating, updating. And then Z and Aelia
25:38
makes this point, sorry, Aelia, Alexia makes this point. Um that is uh that is
25:44
a candidate uh answer a proposed latent answer that is just an embedding space
25:50
away uh one uh MLP lookup away from the true answer. So you're kind of like emming just to
25:56
like zoom out a little bit. you're you're kind of maximizing the probability of the correct, you know,
26:03
information stored in your memory conditioned on a given output and
26:08
maximizing the right output conditioned on the information stored in your memory quote unquote
26:13
in parallel. Yeah. And like that optimization algorithm leads to you ultimately
26:19
learning a recursive method that stores the right information to this local memory basically and then outputs the
26:25
right thing. It really like if we actually think of Sudoku, it's actually a really natural way to think about
26:30
what's actually happening under the hood where Sudoku is an incomplete puzzle. You can't guess every cell at any one
26:36
time. You can actually it's designed where you can only guess one or two cells based on the available information. So it's not it's an
26:43
incompressible problem. You actually can't do it unless you're just randomly guessing and guessing and guessing which is uh a very high combinatoral space.
26:50
And so what uh the ZL is doing is is some type of let me try this, try that, do some computation, think about things
26:56
and and then it proposes and then we go to condition upon like something that it may have found. It sends it to Z. Z
27:02
fills it in and now we have a little bit more of of a filledin pseudo puzzle. And the training process is training the
27:10
algorithm to know to do that, right? It's like it's maximizing that. It's like, oh, this strategy for what you
27:15
save tends to lead to correct outputs without chain of thought. Without chain of thought. That's the most important part is like
27:21
if we had Sudoku and we didn't know how to solve sudoku because like we were just, you know, dumb homo sapiens that
27:27
didn't know how to solve sudoku like it would just have solved it. And that's why it's cool because it actually is able to discover things
27:33
without being teacher forced via chain of thought. Right. Interesting. Yeah. Should we look at some code?
27:38
Let's do it. Okay, let's dive in. And I would love to see what these papers or models look
27:44
like just distilled down to their core essence. I know there's lots of details in how you train them, but kind of the core training algorithm. And it'd be
27:51
great to contrast the two methods. Yeah. So I mean they're remarkably similar. Um and so largely one is and
27:58
learning one is learning the other, but basically you start out with some Z and ZL that are just zeros. Yep.
28:04
Um you have some input embedding space. we go from x raw to x which is the maze
28:10
state or whatever it is uh initial maze state and then with nrad uh you don't
28:15
pass any gradients back through this you so this is the trick basically to not back back prop time
28:20
here are two of the three recursion levels so you have this is like the the the do for for for simplicity but I hit
28:28
zl uh t- low times and then uh once for
28:34
modulo t low then I hit the Z and then I do it again again and like you said I'm
28:39
updating ZL conditioned upon Z and X right and then I update Z conditioned upon ZL
28:45
right so this is the like expectation maximization style exact approach yeah and then you don't really need this this is like just for
28:52
cleanlin cleanliness to show clearly that there's no gradients occurring above this line just freezing the weights past that
28:58
exactly and then I hit ln and hnet one more time and then which is the same thing as up above so this is just okay it's literally just
29:04
the no grad thing running one more Exactly. Yeah. And just make it really clear and then there you go. And that's
29:10
your HRM model. Cool. And they use quite simple two two and two is completely uh uh
29:16
sufficient. Um if you actually go much higher the uh Constantine showed very clearly that it doesn't actually help.
29:22
Um so that's two of the three recursions. You said the third happens in the actual the third is in the train loop and at
29:28
the test loop. They both have this um M test or end supervision which uh uh
29:33
Alexia calls deep supervision. They call it adder refinement steps. It's just whatever you want to call it, call it n
29:39
sub. And so you do this n subtime times during training and then during test time there's a different hyperparameter
29:45
for how many times it recurses over each model which is m test. Basically they're actually the same. And so the
29:51
these this and this we can probably just call this the same. Yeah. Um and uh but it's it's it's the same.
29:58
And if you actually uh Constantine does a good job of this. If you actually train um on 16 and you test on only one,
30:07
you get like sevens of the performance or like almost all the performance. So
30:12
it's actually quite interesting that this is just a redund too much compute and it doesn't actually help you all
30:18
that much. Um so setting this to one is actually like but presumably for like more complicated
30:24
problems having more test time compute is still useful is like the reason you would set it up this way. For sure. And so we call our HRM, we get
30:32
some loss, we backrop through just the those two little uh parts here, and then
30:38
we step, we zero out the gradient, but we do not update uh Z and ZL. These are
30:43
still the same in it. So that's the really important detail there. Um and then so we go back, we pass in the Z and
30:50
the ZL from the previous one. So now this is actually not the same batch, right? Because we have updated uh Z and ZL. So
30:57
it's in a different part of the latent space. Cool. Yeah. And that's the key like mini batch construction through memory space
31:04
concept. Yeah. Cool. Exactly. And then at test time it's simply the three loops. So there's your outer refinement
31:10
loop uh which turns out like just at train time train time recursion was important but test time recursion was
31:16
actually not that important. Uh which is kind of kind of counterintuitive. And then the HRM inside that has your two
31:22
other loops. Makes sense. And and that's it. So pretty simple. Now that
31:27
the only two changes, the main two changes here is that they collapse lnet and hnet into just net.
31:33
Great. They and it's important detail. These are four transformer layers. This is four transformer layers and this is just
31:39
one transformer layer. Uh and uh Alexi actually shows that going deeper actually didn't help.
31:44
Yeah. And actually on some tasks it was just the feed forward net actually worked just as well as a transformer there, right? It was like on sudoku I
31:49
think. Yeah, sudoku. MLP actually outperformed the the attention. it was um it scored zero on the maze. Uh the MLP scored zero
31:57
on the maze. And so there's it's not clear it's not obvious that uh the transformer is always better. Um so
32:03
there's the weight sharing and then instead of going back just the one two
32:08
uh the h this back propping through just these two you actually back prop through
32:14
one latent recursion step all the way through one latent recursion step. So let me just walk through this a little
32:19
bit. So we have the same thing here. Same starting point. Yeah, it's mainly the same thing here. We're
32:25
doing this uh six times uh and then we we go uh one more time here and then we
32:31
do our deep recursion. This is the outer loop uh uh n sub uh times and so again
32:37
we have the ngrad, we have the detach and then this is where it's different. So I I am calling this latent recursion
32:43
after the detach. Yeah. So it's one full recursive loop is happening here. Yeah.
32:49
And so that's the main uh difference in the optimization. Otherwise, it's effectively the same and then it outputs and then you're good
32:56
to go and you train [snorts] it uh exactly as same way before and then at test time it's the same
33:02
thing uh again and so largely the same. Cool. And so in many ways it's sort of a simplification, right? You're collapsing
33:08
certain parts of it. You're simplifying this net architecture. Mhm.
33:14
It's slightly more complicated along this backpack through time, this back back prop through time part because
33:19
you're actually backropping through more than you did before, but it's like taking a bunch of lessons from the first one and basically simplifying most of
33:24
it, which is actually why she need I think is why she needs to make the model smaller. And so it's a 28 million
33:30
parameter model for HRM. Now she brings it down to a 7 million perimeter model. It actually gets from 70% to 87% on uh
33:38
um on ARP prize uh one and uh and does actually quite well on ARP prize 2 as well. And so um yeah so she makes this
33:45
the model model you know three four times smaller um but because it has that
33:50
recursion um it it actually outperforms and there is one like there's this uh
33:56
researcher named Melanie Mitchell that writes this book uh uh talking about this very phenomenon which is like it is
34:03
um sufficient not necessary to go uh bigger and get better performance um and
34:08
it is sufficient and not necessary to to add more recursion and So where I'm really excited is what
34:14
happens if you do both, right? And you're still limited by back prep through time. Even uh Alexia is is
34:21
limited by backrop that last step. Um from a memory perspective for sure. Um
34:26
and so if you can make the model really big and you have lots of recursion and we do something else other than back
34:32
proper time, uh then we can get exact all the benefits of this and all the benefits of the giant LLMs and then you
34:38
can get some crazy stuff. So now to wrap up, why don't we talk a little bit about the bigger picture? What does this mean
34:44
for the field of AI research? How should people think about where these models fit into the current span of research
Future Outlook and Outro
34:49
happening, especially given that it seems like a bit of a departure from a lot of the methods that people are used to hearing about and increasingly seeing
34:55
in products that people use. Well, I think for one uh this from the arguments that Schmid Huber makes and
35:02
that we've talked about today, recursion is important and it's not going away. And it clearly the benefit is here of
35:08
adding recursion into models and you've seen things like the recursion uh language models out of Google um that are pretty powerful and cool. Um and so
35:15
uh that's that's definitely one piece that's I don't think going away anytime soon. Um the next one is this add a
35:21
refinement loop like back tbt like t equals one truncated back wrap through time t equals 1. I think that
35:27
that is a really powerful idea and the fact that that works so well. Uh we have yet to really explore that extremely uh
35:34
uh really understand what's happening there. Um and then the third is that idea of like okay we know that recursion
35:41
works. We have these tiny recursive models that are seven million parameters. can solve a
35:48
hundred million 100 billion hundred billion trillion model can't solve
35:55
trained on the entire internet and a 7 million parameter wins like the right answer is to like take the amazingness
36:01
here and take the amazingness here which probably is already in Gemini already or some of these these it might be at least
36:07
in some part um but when you when you take um the benefit of both these TRM
36:13
and these giant models and you actually slam them together, I think that it's just going to take off and it's going to be really huge.
36:19
Yeah. One of the things that's really interesting about these TRMs and HRM is they're not general purpose models, right? These were task specific models,
36:24
right? The model trained to do Sudoku cannot do ARC price inherently. It has to be trained on the ARP price set to do so versus the LMS that are used on these
36:33
tasks are general purpose models that maybe get some additional fine-tuning data or in context learning data on
36:39
those tasks. And so I think that's where the interesting overlap might come is if you can make these more general purpose agents that
36:45
can somehow be general purpose in the way that the sort of next token prediction algorithm has given us and do
36:50
more complex reasoning to achieve that. Seems like you can have really efficient architectures to do scaled up reasoning.
36:57
Right. A lot of the view of what these LMS are doing is finding really amazing embedding representation spaces. Yes.
37:05
But reasoning inside that that space is actually not done all that much. Yeah. It's it's always through the token
37:10
space. Go through the token space. And so like what you can imagine is we found mapping
37:15
from token space or from vision from pixels some really cool latent space where like things are just nicely
37:22
semantically separated and we can you know makes it really easy for downstream tasks to do. But now in that space use
37:28
this like tiny reasoning models use some some type of uh recursion inside that and train those those those that model
37:35
on that a little small model on that reasoning space. [music] I think that's really going to work. Prince, thanks so much for breaking it
37:41
all down for us. See you all on the next episode of Decoded. Thank you.
37:49
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

# EVSRC-2026-000289 — Recursion Is The Next Scaling Law In AI

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `raw_dropped`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

## §0 — Source identity / metadata

- evsrc_id: `EVSRC-2026-000289`
- filename: `EVSRC-2026-000289_recursion-next-scaling-law-hrm-trm.md`
- source_platform: `YouTube`
- source_url: `https://www.youtube.com/watch?v=DGtUUMNYLcc`
- source_title: `Recursion Is The Next Scaling Law In AI`
- channel_or_org: `Y Combinator`
- speaker: `Ankit Gupta; François Chaubard`
- published_at: `2026-05-01`
- captured_at: `2026-07-18`
- captured_by: `Nick`
- capture_method: `transcript paste + screenshot`
- content_type: `technical research discussion / paper analysis`
- source_reliability_context: `investor`
- topic_tags_light: `[recursive_reasoning, HRM, TRM, latent_reasoning, inference_time_compute, recurrent_models, hidden_state, task_specific_models, ARC_Prize, capability_scaling]`

## §0.1 — People / authorship / authority context

- primary speaker(s):
  - name: `Ankit Gupta`
    · role_in_source: `host / technical discussant`
    · affiliation_at_publication: `Y Combinator — General Partner`
    · speaker_type: `investor`
    · authority_context: `Technically informed YC partner framing and interrogating recent research on hierarchical and tiny recursive models`
    · identity_confidence: `high_from_screenshot`

  - name: `François Chaubard`
    · role_in_source: `principal technical presenter / discussant`
    · affiliation_at_publication: `Y Combinator — Visiting Partner`
    · speaker_type: `investor`
    · authority_context: `Technical presenter explaining recurrent-model history, HRM/TRM mechanics, training behavior, benchmark results, and possible future combinations with foundation models`
    · identity_confidence: `high_from_transcript`

- publisher / channel: `Y Combinator`
- interviewer / moderator / host: `Ankit Gupta`
- event_context: `Episode of YC’s Decoded series analyzing two 2025 recursive-model papers: Hierarchical Reasoning Models and Tiny Recursive Models`
- perspective / conflict notes: `The speakers are interpreting and advocating for a research direction rather than presenting a neutral systematic review. Benchmark and parameter-efficiency claims are paper-derived but should be verified against the original papers before technical adoption. Claims about recursion enabling first-principles discovery or becoming a new scaling law remain forward-looking.`

## §2 — Screenshot / visible source details

- visible_duration: `37:49`
- visible_views_at_capture: `18,566`
- visible_capture_date: `2026-07-18`
- description_context: `Discussion of small recursive models that reportedly outperform much larger general models on structured reasoning tasks by repeatedly refining latent state at inference and training time.`


Review 001 — Knox strategic read

Signal: 4.6/5 — high-value Agent Runtime and E&V source
Net-new: no new care-domain object; two serious runtime candidates and one audit correction

Core contribution

Capability can scale through repeated refinement of state, not only through larger models, longer prompts, or more external tool calls.

The practical implication is not “recursion replaces LLMs.” It is that OMNI’s capability topology cannot describe an AI component only by model name and parameter scale. It must also describe how the system reasons over time.

1. Reasoning architecture belongs in the capability contract

Two systems using similarly sized models may have radically different capabilities depending on whether they:

perform one feed-forward pass;
emit tokenized chain-of-thought;
call tools repeatedly;
refine a persistent latent state;
recurse until convergence;
use a hierarchy of fast and slow update loops.

OMNI therefore needs more than model, tools, and context.

A serious capability profile should include:

reasoning_mode;
recursion_depth_max;
state_carried_between_iterations;
stop_condition;
convergence_signal;
time_and_compute_budget;
failure_on_nonconvergence;
evaluation_scope;
authority_ceiling.
Candidate: recursive_deliberation_profile

This is a runtime characteristic, not a new domain object.

Keeper line:

Model size describes capacity; reasoning architecture describes how that capacity is spent.

2. Latent reasoning changes what OMNI should audit

The source distinguishes:

token-space reasoning, where intermediate work appears as emitted text;
latent-space reasoning, where the model repeatedly updates hidden internal state without producing a human-readable chain.

That exposes an important correction:

Auditability cannot depend on exposing chain-of-thought.

A recursive solver may reach a strong result without a useful textual reasoning transcript. Conversely, a fluent chain-of-thought can be fabricated, post-hoc, or misleading.

OMNI’s proof should therefore preserve externally verifiable objects:

source evidence used;
candidate set considered;
policy and constraints applied;
expected consequences;
confidence and residual uncertainty;
authority path;
final disposition;
observed outcome.

The system does not need the model’s private latent state to establish accountable reasoning. It needs a decision evidence record sufficient to verify that the result was admissible and properly authorized.

This is a meaningful corpus addition because it prevents “explainability” from collapsing into “show us the model’s thoughts.”

3. Small recursive models suggest verified reasoning appliances

The strongest architectural opportunity is not replacing OMNI’s general agents with tiny models. It is composing general orchestration with narrow recursive solvers.

Possible bounded homes:

schedule and resource optimization;
deterministic reconciliation;
protocol-constraint checking;
medication-interaction search;
entitlement or eligibility consistency;
longitudinal contradiction detection;
routing under multiple hard constraints.

These could be:

small;
cheap;
task-shaped;
independently benchmarked;
easier to sandbox;
invoked as tools by broader agents.
Candidate: bounded_recursive_solver

Required properties:

one declared problem family;
typed inputs and outputs;
no independent authority;
deterministic or bounded stopping;
task-specific evaluation;
explicit out-of-distribution behavior;
no silent transfer to adjacent tasks.

The source itself acknowledges that the Sudoku model is not automatically an ARC model. That limitation is not a weakness to hide; it is exactly what makes the component governable.

Keeper line:

A narrow solver that knows its boundary may be safer and more useful than a general agent pretending not to have one.

4. Recursive hidden state is operational memory and needs lifecycle law

HRM/TRM repeatedly update carried latent state across refinement steps. That state may materially influence the answer even though it is not readable.

In OMNI, any carried reasoning state needs:

mission scope;
initialization and reset rules;
maximum lifetime;
tenant and subject isolation;
contamination controls;
version binding;
replay or reproducibility expectations;
disclosure when prior state affected the result.

The hidden state should normally die with the bounded computation. It must not quietly become longitudinal memory, clinical truth, or cross-patient learning.

Guardrail

Reasoning state is not memory authority.

A latent state may support computation. It does not become an assertion, preference, fact, or durable reservoir entry unless separately externalized, reviewed, and adopted through the owning domain.

5. Convergence must be observable and failure must remain visible

Recursive refinement creates a new failure class:

the model stops because it converged;
the model stops because the budget expired;
the model cycles;
the state collapses;
additional iterations cease improving quality;
the solver becomes confidently wrong.

A governed recursive loop therefore needs more than max_iterations.

It needs:

convergence criteria;
residual or change magnitude;
quality-vs-depth curve;
timeout behavior;
uncertainty on termination;
escalation when no stable result is reached.

This connects directly to REV-184:

failure to converge may shorten the trust horizon;
it may require human resolution;
it may justify honest non-action;
it must not be rendered as a normal confident answer.
Candidate: deliberation_termination_state

Possible states:

converged;
budget_exhausted;
oscillating;
insufficient_signal;
out_of_distribution;
solver_failure.

That is materially better than a generic success/error flag.

6. Train-time recursion and runtime recursion must not be conflated

One subtle finding in the discussion is that additional recursive depth during training may drive much of the performance, while extra test-time iterations sometimes add relatively little.

OMNI should therefore evaluate separately:

what the architecture learned because it was trained recursively;
what additional runtime compute actually improves;
whether deeper inference remains monotonic;
where additional iterations only add latency or instability.

This prevents a common mistake: assuming that “more thinking” at runtime always means better results.

E&V implication: every recursive capability needs a depth-response curve, not just one benchmark score.

What not to import
Parameter efficiency as proof of general intelligence.
ARC or Sudoku performance as evidence of clinical reasoning.
Recursive refinement as evidence of first-principles scientific discovery.
Hidden-state persistence across patients, operators, or missions.
More recursion as automatically better.
Latent convergence as clinical correctness.
A general model’s embedding space as an authoritative world model.
Benchmark victory as permission to expand task scope.
Hard verdict

This source materially sharpens the AI substrate.

Architecture candidates:

recursive_deliberation_profile
bounded_recursive_solver
deliberation_termination_state

Important doctrine correction:

auditable decision evidence must not depend on access to private chain-of-thought.

Principal guardrail:

recursive hidden state is computation state, not durable memory or domain truth.

One-line read: Recursion offers OMNI a new way to buy reasoning depth without buying a larger universal model—but only if the recursive state is bounded, termination is honest, task scope is explicit, and accountability rests on external evidence rather than exposed model thoughts.










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

**Method note:** formalizes Knox Review 001 (`Signal 4.6/5 — high-value Agent Runtime + E&V source`), verified against the §1 full timestamped transcript. The pasted Knox block carries a STALE header id (`EVSRC-2026-000289`) and a stale internal title — **ignored** per run brief; canonical id/topic = filename `EVSRC-2026-000301`, the YC "Decoded" recursion / HRM / TRM episode (sibling in method + channel to `EVSRC-2026-000294` world-models). This does NOT overturn any care/spine doctrine; it makes the **reasoning-architecture** dimension of capability legible and supplies strong **capability-topology · Agent Runtime · REV-184 · Reactor · Platform-E&V** pressure, plus a load-bearing **audit doctrine correction** (auditability must not depend on exposed chain-of-thought). `build_status` grounded by run brief: repo has NO agent runtime, AI-gateway, model-gateway, or skill-registry — so every cluster is `doctrine=AFFIRM/PARTIAL × build=absent` (a couple `partial` via `requireCapability`/`chart_ai_reviews`+`lab-observations` audit surfaces). PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis/registry edited. Knox's own posture is honored: these are runtime/topology characteristics, **not** new domain objects, and recursion is a way to buy reasoning depth — **not** a source of authority. Anchors carry real transcript timestamps where a verbatim line was located; `[Knox §X]` loci mark points Knox synthesized across the dialogue.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Reasoning architecture is a first-class capability property — model size ≠ reasoning depth** | Two AI components using similarly-sized models can differ radically (one feed-forward pass vs tokenized chain-of-thought vs repeated tool calls vs refining a persistent latent state vs recursing to convergence vs fast/slow update hierarchy); an OMNI capability profile therefore cannot be described by model name + parameter scale alone — it must also declare `reasoning_mode · recursion_depth_max · state_carried_between_iterations · stop_condition · convergence_signal · time+compute_budget · failure_on_nonconvergence · evaluation_scope · authority_ceiling` (candidate `recursive_deliberation_profile` — a runtime characteristic, NOT a new domain object) | capability-topology (`capability_envelope`) · Agent Runtime · §B AI-substrate · Reactor | "recursion because it's the same weights applied repeatedly" [9:18]; "outer refinement loop scales" [20:53] | PARTIAL / important sharpening × build=absent | vocabulary/runtime | promote (sharpening) |
| B | **Auditability must NOT depend on exposing the model's chain-of-thought or latent state** (doctrine correction) | The source distinguishes token-space reasoning (intermediate work appears as emitted text) from latent-space reasoning (hidden state repeatedly updated, no human-readable chain); a recursive solver may reach a strong result with NO useful textual trace, and a fluent chain-of-thought can be fabricated/post-hoc/misleading. OMNI accountability must rest on an externally-verifiable **decision evidence record** (source evidence used · candidate set considered · policy/constraints applied · expected consequences · confidence + residual uncertainty · authority path · final disposition · observed outcome) — it does not need the model's private latents to be accountable | Care (explainability) · REV-184 (world-model honesty) · Accountability Loop · proof/audit | "reasoning inside that space is actually not done all that much" [37:05]; "it's always through the token space" [37:10] | **AFFIRM** (283 explainability=replayable-chain-not-CoT · 288 conversation≠truth) × build=partial (`chart_ai_reviews`/audit) | spine (doctrine correction) | promote |
| C | **Bounded recursive solver = a governed narrow reasoning appliance invoked as a tool** (candidate `bounded_recursive_solver`) | The architectural opportunity is NOT replacing general agents with tiny models — it is composing general orchestration with narrow recursive solvers for bounded families (schedule/resource optimization · deterministic reconciliation · protocol-constraint checking · medication-interaction search · eligibility/entitlement consistency · longitudinal contradiction detection · routing under hard constraints). Required properties: one declared problem family · typed I/O · **no independent authority** · deterministic/bounded stopping · task-specific eval · explicit out-of-distribution behavior · no silent transfer to adjacent tasks | Agent Runtime (tool invocation) · §B (narrow model as tool) · security (sandbox) · capability projection | "27 million parameter model … no pre-training at all" [9:55]; "task specific models … trained to do Sudoku cannot do ARC" [36:19] | PARTIAL × build=absent | investigate/runtime | investigate (route) |
| D | **Recursive hidden/carry state is computation state — NOT durable memory or domain truth** | HRM/TRM repeatedly update a carried latent ("ZL/Z", the hidden state) across refinement steps; that state materially influences the answer yet is not readable. In OMNI any carried reasoning state needs mission scope · init/reset rules · max lifetime · tenant+subject isolation · contamination controls · version binding · reproducibility expectation · disclosure when prior state affected the result — and it must **die with the bounded computation**. It does not become an assertion/preference/fact/reservoir-entry unless separately externalized, reviewed, and adopted through the owning domain | Clinical Memory · candidate≠commit · one-owner-per-fact · Knowledge-Reservoirs | "it's all compressed in this hidden state that you roll out" [3:42]; "the carry … the hidden states start off at zeros" [26:32] | PARTIAL × build=absent | spine-guardrail | promote (guardrail) |
| E | **Convergence must be observable and non-convergence must remain visible** (candidate `deliberation_termination_state`) | Recursive refinement creates a new failure class beyond `max_iterations`: the solve may converge · exhaust budget · oscillate/cycle · collapse · plateau · or become confidently wrong. A governed recursive loop needs convergence criteria · residual/change magnitude · quality-vs-depth curve · timeout behavior · uncertainty-on-termination · escalation when no stable result. Termination states worth typing: `converged · budget_exhausted · oscillating · insufficient_signal · out_of_distribution · solver_failure` — materially better than a generic success/error flag. Ties directly to REV-184: non-convergence may shorten the trust horizon, require human resolution, or justify honest non-action, and must NOT render as a normal confident answer | REV-184 (trust_horizon · non-action-as-commit) · Reactor (termination/routing) · Agent Runtime | "it just kind of stops to work" [1:51]; "16 … you actually see the change in your residuals get less and less" [12:27] | PARTIAL × build=absent | investigate/spine | investigate (route) |
| F | **Train-time recursion ≠ runtime recursion; a recursive capability needs a depth-response CURVE, not one score** | A subtle finding: extra recursive depth during TRAINING drove much of the performance, while extra TEST-time iterations sometimes added little ("train on 16, test on 1 → ~7/8 of the performance"). OMNI must evaluate separately what the architecture learned from recursive training vs what runtime compute actually improves vs where deeper inference stays monotonic vs where it only adds latency/instability — i.e. "more thinking at runtime" is not automatically better; every recursive capability needs a depth-response profile, not a single benchmark number | Platform Loop / E&V (depth-response eval) · projection≠authority (score≠fitness) · Reactor (compute budget) | "train time recursion was important but test time recursion was actually not that important" [31:10]; "train on 16 … test on only one … sevens of the performance" [29:58] | **AFFIRM** (registry conv.2: metric/score ≠ owning fitness) × build=absent | E&V/vocabulary | promote (sharpening) |
| G | **Recursion buys reasoning depth without a bigger universal model → compose general orchestration + narrow recursive solvers** | A 7M-parameter recursive model beat much larger general models on ARC by spending compute-depth (recursion) instead of parameter-depth; the forward-looking bet is "slam them together" (big model's representation + small recursive reasoner). OMNI reading: this is a **model-strategy + capability-projection** lever — a way to get scaled reasoning cheaply in bounded regions — governed exactly like any other model choice (build-vs-buy, model gateway, Reactor routing). Pairs with 294's fast-vs-deliberative Reactor selector and 284's "own the system that selects/adapts/evaluates models, not the model" | §B AI-substrate (model strategy) · Reactor (fast-vs-deliberative) · capability projection · model-gateway | "7 million parameter wins" [35:55]; "recursion is important and it's not going away" [35:02] | PARTIAL × build=absent | strategy | promote (watch) |
| H | **Task-specific ≠ general; benchmark victory ≠ permission to expand scope — the boundary is what makes it governable** | The Sudoku model cannot do ARC; the ARC model must be trained on ARC. That limitation is not a weakness to hide — it is exactly what makes a narrow solver governable. OMNI re-derivation of capability≠authority: a solver's declared boundary is a first-class governable property; a benchmark win in one family confers no authority in an adjacent one | capability≠authority · Agent Runtime (scope) · Care (no clinical-reasoning inference from puzzle wins) | "the model trained to do Sudoku cannot do ARC price inherently" [36:22]; "o3 gets zero literally zero" [10:21] | **AFFIRM** (capability≠authority · 286 adoption≠proof) × build=absent | spine | promote (affirms canon) |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; net-new DOMAIN objects = 0)
Knox named 3 architecture candidates + a doctrine correction + a principal guardrail. Dedup vs cumulative baseline (`capability_envelope` / capability-topology, Agent Runtime & Harness map, REV-184, Reactor candidate, candidate≠commit, one-owner-per-fact, wave-6 registry §2 conv.1/2/5/6 + §3 F2/F5 + 294 fast-vs-deliberative Reactor family):
- **`recursive_deliberation_profile`** → dedup-as-EXISTS: sharpening of **`capability_envelope` / capability-topology** + Agent Runtime reasoning-mode declaration. A capability profile must describe *how capacity is spent* (reasoning_mode/recursion_depth/state/stop/convergence/budget/authority_ceiling), not just model+params. NOT a domain object → **route INVESTIGATE (capability-topology watch)**.
- **`bounded_recursive_solver`** → dedup-as-EXISTS: composes **Agent Runtime tool-invocation + capability projection + §B (narrow model as governed tool) + security sandbox**; pairs with registry F5 (agent-runtime lifecycle/isolation) + 286 shadow-agent promotion. NOT a domain object → **route INVESTIGATE (Agent Runtime + §B watch)**.
- **`deliberation_termination_state`** → dedup-as-EXISTS: sharpening of **REV-184** (trust_horizon · non-action-as-commit · world-model honesty) + **Reactor** termination/routing + Agent Runtime; pairs with 294 fast-vs-deliberative routing + 290 delegation/fanout budgets. NOT a domain object → **route INVESTIGATE (REV-184 + Reactor watch)**.
- **Doctrine correction (auditability ≠ exposed chain-of-thought)** → dedup-as-EXISTS + **AFFIRM**: directly reinforces 283 (explainability = replayable evidence-and-authority chain, not a generated paragraph/CoT) + 288 (conversation ≠ truth) + REV-184 (outcome-reads-frozen-context). Not net-new; strengthens existing canon → guardrail candidate (below).
- **net-new DOMAIN objects: 0.** No "recursion domain," no "reasoning-engine domain." Retired terms not re-minted (`EVRUN-000004 §0.5`); `D0OL-GRD-001..008` not re-minted as primitives.

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED or rejected-with-reason; NEVER inverted)
Knox's "What not to import" (8 cautions) — all preserved verbatim in intent:
1. **Do NOT treat parameter efficiency as proof of general intelligence.** [kept — G/H]
2. **Do NOT treat ARC or Sudoku performance as evidence of clinical reasoning.** [kept — H, CARE]
3. **Do NOT treat recursive refinement as evidence of first-principles scientific discovery.** [kept — perspective note; the CoT/tool-use "sort" discussion shows both hacks are bounded by human knowledge]
4. **Do NOT persist hidden state across patients, operators, or missions.** [kept — D]
5. **Do NOT treat "more recursion" as automatically better.** [kept — F]
6. **Do NOT treat latent convergence as clinical correctness.** [kept — B/E, CARE]
7. **Do NOT treat a general model's embedding space as an authoritative world model.** [kept — G; pairs 294 digital-twin/world-model-not-truth]
8. **Do NOT treat benchmark victory as permission to expand task scope.** [kept — H]
- **REJECT-as-OMNI-doctrine (mechanism kept, claim not canonized — `GRD-043`):** "recursion is *the* next scaling law" as settled architecture (forward-looking research thesis → future-watch); bio-plausibility (brain-frequency/hierarchy inspiration) as implementation proof (the speakers themselves reject bio-plausibility as binding — "I tend to not be bounded by bioplausibility"); "7M beats trillion" as evidence tiny models are generally superior (task-specific, no pre-training); latent/continuous-space reasoning as inherently more trustworthy than token-space. (Recorded, not silently dropped.)

### Care implications (NOT swept by "0 net-new")
- **The audit correction is the load-bearing care contribution:** OMNI must NEVER let "explainability" collapse into "show us the model's thoughts." A recursive/latent solver can be strong *and* opaque; a fluent CoT can be fabricated. Care accountability rests on the **external decision-evidence record** (evidence·candidates·policy·consequences·confidence·authority·disposition·outcome), reproducible without the model's private latents (cluster B — AFFIRMS 283/288).
- **Termination honesty is a care-safety mechanism (cluster E):** a care-relevant solver that oscillated, exhausted budget, or ran out-of-distribution must surface `insufficient_signal`/`solver_failure` and shorten the trust horizon / escalate to human resolution — never emit a confident answer. Direct REV-184 (non-action-as-commit · trust_horizon).
- **Hidden-state hygiene is a clinical-memory rule (cluster D):** a recursive solve's carry state must die with the computation and must not silently become longitudinal clinical memory or cross-patient learning (pairs 295 self-learning-memory must be partitioned/consented/promotion-gated).
- **Puzzle/benchmark wins confer no clinical authority (cluster H):** a solver that tops ARC/Sudoku has demonstrated nothing about medication safety or care reasoning; AI is never care authority.

### Candidate guardrails → `08` (gated, `user_knox_required`; dedup noted)
- **G-cand-1:** *Auditable decision evidence must NOT depend on access to a model's private chain-of-thought or latent state; accountability rests on an externally-verifiable decision-evidence record (evidence·candidates·policy·consequences·confidence·authority·disposition·outcome)* [dedup vs 283 G-7 explainability=replayable-chain + 288; strengthens REV-184].
- **G-cand-2:** *Recursive hidden/carry state is computation state, not durable memory or domain truth; it dies with the bounded computation and becomes an assertion/fact/reservoir-entry only via separate externalization + owning-domain adoption* [dedup vs candidate≠commit + 295 care-memory partitioned].
- **G-cand-3:** *Convergence and non-convergence must be an explicit, honest termination state; a budget-exhausted, oscillating, or out-of-distribution solve must not be rendered as a confident answer (it may shorten the trust horizon, require human resolution, or justify honest non-action)* [dedup vs REV-184 world-model-honesty/trust-horizon].
- **G-cand-4:** *"More recursion / more runtime thinking" is not automatically better; a recursive capability requires a depth-response curve, not a single benchmark score* [dedup vs registry §5.1 #2 score-is-a-projection].
- **G-cand-5:** *Reasoning architecture (reasoning_mode·recursion_depth·carried-state·stop/convergence·budget·authority_ceiling) belongs in the capability contract; model name + parameter scale under-describe a capability* [dedup vs `capability_envelope`].
- **G-cand-6:** *A narrow solver's task-boundary is a governable property, not a defect to hide; benchmark victory in one family is not permission to expand scope into an adjacent one* [dedup vs capability≠authority + 286 adoption≠proof].

### Reread flags
- Clusters A/C/E (`recursive_deliberation_profile` / `bounded_recursive_solver` / `deliberation_termination_state`) → reopen with **capability-topology + Agent Runtime & Harness** authoring; strongest pairing is **294** fast-vs-deliberative Reactor routing + **290** delegation/fanout budgets + **284** model-selection/telemetry + **286** shadow-agent promotion. Map-depth only (Agent Runtime is map-depth per boot; do NOT build a recursive runtime pre-spine).
- Cluster B (audit ≠ chain-of-thought) → reopen with **REV-184 + Care explainability + 283 + 288** as a doctrine-affirming correction; candidate `08` guardrail is the highest-value output of this source.
- Cluster E ↔ **Reactor** termination/routing → reopen when Reactor is unfrozen (currently frozen/unpromoted).
- This source is DEPTH INPUT to the AI-substrate / capability-topology / Agent Runtime / REV-184 maps — NOT license to build a reasoning runtime or adopt tiny recursive models pre-spine.

### One-line hard read
`full_semantic` (transcript-native + rich Knox read), 4.6/5, **0 net-new domain objects + 3 INVESTIGATE sharpenings (`recursive_deliberation_profile`, `bounded_recursive_solver`, `deliberation_termination_state`) + 1 load-bearing audit doctrine-correction** — recursion offers OMNI a way to buy reasoning depth without buying a larger universal model, but only if the recursive **state is bounded, termination is honest, task scope is explicit, and accountability rests on external decision evidence rather than the model's exposed thoughts** — reasoning architecture (not model size) is the capability property that must be declared and governed.

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `capability-topology (capability_envelope) · Agent Runtime & Harness (reasoning-mode/recursion/termination; map-depth only) · §B AI-substrate (model strategy) · REV-184 (audit ≠ chain-of-thought; termination honesty) · OMNI Reactor (fast-vs-deliberative selector; frozen) · Platform Loop / E&V (depth-response curve) · Clinical Memory (hidden-state hygiene) · Care (auditability = external evidence)` · promotion: `watch` (6 guardrail candidates + 3 INVESTIGATE sharpenings → `08`; net-new domain objects 0)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold, second batch; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Review 003): slug firmed (SUGGESTION only — NOT renamed: `…_yc-decoded-recursion-hrm-trm-scaling-law`); §0/§0.1 filled from pasted Knox Review 001 metadata (no screenshot → `inferred`; stale Knox header id `EVSRC-2026-000289` IGNORED, canonical id = filename 301, topic verified from §1 transcript = YC "Decoded" recursion/HRM/TRM); §3 Review 003 written (8 clusters, **0 net-new domain objects + 3 INVESTIGATE sharpenings** `recursive_deliberation_profile` / `bounded_recursive_solver` / `deliberation_termination_state` + 1 audit doctrine-correction, 8 counterweights preserved, 6 guardrail candidates → 08); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

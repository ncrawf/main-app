# EVSRC-2026-000204 — KV Cache & Paged Attention: LLM Inference Runtime Economics (explainer)

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000204_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000204`  ·  filename: `EVSRC-2026-000204_kv-cache-paged-attention-llm-inference.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=o0gkdZBtwEg`  ·  source_title: `How KV Cache Speeds Up LLMs for Faster AI Models on GPUs`
- channel_or_org: `IBM Technology and Red Hat`  ·  speaker: `Legare Kerrison`  ·  published_at: `Jun 30, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `screenshot + pasted transcript`
- content_type: `LLM inference / KV cache / paged attention / prefill / decode / GPU memory / prefix caching / chunked prefill / speculative decoding / runtime economics`  ·  source_reliability_context: `Technical explainer from IBM/Red Hat. Strong vocabulary for inference runtime economics and context-memory management; implementation specifics (tuning values) should not become OMNI doctrine.`  ·  topic_tags_light: `[inference_runtime, KV_cache, paged_attention, vLLM, prefill_decode, prefix_caching, chunked_prefill, speculative_decoding, context_memory, runtime_economics, workflow_lane, AI_substrate]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Legare Kerrison` · role_in_source: `presenter/educator` · affiliation_at_publication: `IBM Technology and Red Hat` · speaker_type: `educator/practitioner (engineering)` · authority_context: `IBM/Red Hat technically credible runtime mechanics (prefill/decode, KV cache, paged attention, vLLM); value is the definitions, not speaker authority` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `IBM Technology and Red Hat`  ·  interviewer / moderator / host: `n/a (solo explainer)`
- event_context: `~11-min whiteboard explainer on WHY LLM inference degrades under concurrent load — the bottleneck is GPU-memory usage during context storage/retrieval, not the model. Walks prefill/decode → KV cache → paged attention → fragmentation → prefix caching → chunked prefill → speculative decoding, with vLLM tuning knobs.`  ·  perspective / conflict notes: `vLLM/tooling-specific tuning values (0.9/0.95, 2048) are illustrative — do NOT hardcode into doctrine. Prefix-cache reuse is the key OMNI guardrail surface (must respect tenant/PHI/RBAC/model-lineage boundaries).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [ ] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata (inferred; no screenshot/metadata block) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** · [x] update EVRUN concept registry (cross-source) · [x] update coverage matrix · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
You've got a large language model running.
0:02
With one user, time to first token is super quick.
0:06
And at 10 users, we're starting to see latency climb.
0:09
But then at a hundred, you're watching GPU memory spike and throughput tank.
0:15
And every cycle is wasted money.
0:17
Your model is most likely not the culprit here, but rather how your memory is being used during inference.
0:27
Specifically how the model stores and retrieves the context it's building token by token.
0:34
Today, we're going to unpack two mechanisms for reducing wait time and cost associated with inferencing models.
0:41
They are KV cache.
0:45
And paged attention.
0:52
They both come out of the open source inference engine, VLLM.
0:58
And they've helped us make strides in what's possible for LLMs that we are inferencing at scale.
1:06
Now, by the end of this video, you'll know exactly how these two techniques work,
1:09
why they work, and how you can configure them to get dramatically more
1:14
throughput out of a GPU that you already have.
1:17
If you've used an LLM API, you've noticed this.
1:21
You'll submit a long prompt and then wait for a bit.
1:24
Then suddenly tokens will stream back fast.
1:26
That lag before your first token is the model processing your prompt.
1:31
This is the pre-fill phase.
1:37
It's one of the two phases in LLM inferencing, and it's highly compute bound.
1:45
This is where the model has to run your input through every transformer layer to
1:49
build a mathematical representation of everything you said before it can produce a single output token.
1:56
Now, imagine that you're doing this for those 100 simultaneous users.
2:01
And every request has its own growing context.
2:04
And every step of token generation, the system has to reach back into GPU memory and retrieve that context.
2:11
This is the decode phase.
2:19
This is Memory Bound.
2:29
And it's using KV cache.
2:37
Now if memory is fragmented, if it's full, if it is being recomputed, it will become latency you can see.
2:44
Okay, now that we understand the two phases of LLM imprints, prefill, and decode, let's discuss KV cache and page detention.
2:53
When a transformer generates a new token, every layer computes three things for each token it's attending to.
3:06
A query, a value, and a key.
3:11
Now, the query is the concurrent token asking, what's relevant?
3:21
To me.
3:22
And then the key and the value are answering that question.
3:27
The problem is that in autoregressive generation, you're producing one token at a time,
3:33
but you have to rerun attention over all previous tokens on every single step.
3:38
Without a cache, generating a thousand-token response means that the thousandth token
3:44
has to recompute the keys and values for all 999 tokens before it. The KV cache just stores those keys
3:53
and value matrices from previous steps so they don't recompute what you already know.
4:01
Each new token only needs to compute its own KVQ.
4:07
Then it attends over the cached KV history.
4:10
KV cache is a memory for compute trade-off, but it's proven to be worth it for long sequences.
4:17
Memory is the real bottleneck in LLM serving.
4:20
So now let's look at how this naive serving allocates GPU memory.
4:27
So a 13 billion parameter model, something like the Llama 13B, takes
4:30
about 26 gigabytes of GPU memory just for its weights on an A140 gigabyte card.
4:38
That's already 65% of our available memory.
4:45
Just for the weights.
4:48
That's VRAM before the user hits a single endpoint.
4:52
Now, the remaining 35% has to support the KV cache for every active request.
4:58
And here's where this traditional system starts to fall apart.
5:02
They pre-allocate a fixed contiguous block of memory for each request based on the maximum possible output length.
5:11
So if your max context is 2048 tokens, but the average user sends in 200 tokens and gets 300 back,
5:22
that's 1,500 tokens of reserved memory just sitting empty per request.
5:32
So research shows that these traditional systems are wasting about 60 to 80% of
5:38
this 35% used for KV cache memory, leaving only a small bit actually usable.
5:48
While page detention treats GPU memory like OS treats RAM.
5:53
Now, the KV cache is powerful, but it creates a new problem.
5:57
How do you store it efficiently for many concurrent requests of wildly different lengths?
6:03
Traditional systems store each request KV cache as a giant contiguous block,
6:08
like reserving an entire hotel floor for a single guest.
6:12
So if your max sequence length is 2,048 tokens, that's how much memory you have on reserve.
6:18
Even if the user only generates 200 tokens, the rest is wasted and unavailable for anyone else.
6:25
And this is called internal fragmentation.
6:28
It can be the culprit for KV cache memory waste along with external fragmentation,
6:33
where a request of varying lengths leave large gaps between allocations.
6:38
So if a new request needs 500 tokens, you may very well have enough memory,
6:42
but no continuous region big enough for this to work.
6:47
Also, look out for redundant duplication where the system prompt is stored separately for every concurrent request.
6:55
Now, page attention eliminates each one of these issues and applies the exact same insight
7:01
that operating systems use for RAM, virtual memory paging.
7:05
And instead of one contiguous block, it breaks KV cache into small fixed page sizes by default, 16 tokens each.
7:14
Now these pages can live anywhere in GPU memory, non-contiguous, allocated on demand.
7:22
So a lightweight block table maps logical page addresses,
7:26
and this is what the model sees, to physical page addresses where they
7:29
actually are in VRAM so that your GPU memory allocation looks more like this.
7:38
Where you have 65% still allocated to these weights,
7:44
but then the rest of this 35%.
7:50
Finally, here are three things you can tune on your deployment to get the most out of your GPU.
7:56
First, tune GPU memory utilization.
8:01
This controls what fraction of remaining VRAM goes to KV cache.
8:05
The default is 0.9.
8:07
Push it to 0.95 on stable workloads to pack more concurrent requests and pull
8:13
it to .8 if you're seeing OOM errors under load burst.
8:17
And you can benchmark your specific model before you commit here.
8:21
If you need something to do that, you can check out guide LLM.
8:24
It's an open source part of the LLM project.
8:28
Second, enable prefix caching.
8:32
Page detention hashes each KV block by its token sequence.
8:37
Requests sharing a system prompt point to the same physical memory.
8:41
VLLM computes and stores it once.
8:44
In RAG pipelines, multi-turn chat and coding agents that are gonna hit rates of 75 to 95% are common,
8:52
with time to first token dropping dramatically because shared prefill is skipped entirely.
8:59
Third, enable chunked prefill.
9:02
For throughput heavy workloads, by default VLLM runs prefill to completion before resuming decode,
9:10
which causes streamed tokens to stutter when long prompts arrive.
9:15
Chunked prefilled batches inflate decode request first, then fills remaining compute budget with prefilled chunks.
9:24
Production deployments have seen 50% throughput improvement.
9:28
And you can also set max-num batch tokens to greater than 2048 alongside it.
9:37
Finally, a bonus feature for latency-sensitive workloads is enabling a speculative decoding model.
9:46
Speculative-model.
9:51
Now, during decode, your GPU has spare compute idle between memory reads.
9:58
A small draft model.
10:01
Proposes a series of output tokens.
10:08
And then a larger model verifies these in one forward pass.
10:15
And if they're good to go, they get sent forward.
10:18
And if not, the wrong ones get corrected.
10:20
Output quality here is mathematically identical to running the large model alone.
10:25
And at very high concurrency, the gains shrink since the batch is already keeping the GPU busy.
10:31
So reach for this when interactive latency matters more than raw throughput.
10:36
The LLM also ships a zero cost Ingram speculator via dash dash speculative dash model Ingram.
10:51
And that's for structured or repetitive outputs.
10:54
I hope this was helpful, and I'd love to know what the biggest memory-related
10:57
problem you've hit in production AI development.
11:00
Feel free to drop it in the comments and like and subscribe. Thanks.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️



IBM / Red Hat — KV Cache

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=o0gkdZBtwEg
source_title: How KV Cache Speeds Up LLMs for Faster AI Models on GPUs
channel_or_org: IBM Technology and Red Hat
speaker: Legare Kerrison
published_at: Jun 30, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: screenshot + pasted transcript
content_type: LLM inference / KV cache / paged attention / prefill / decode / GPU memory / prefix caching / chunked prefill / speculative decoding / runtime economics
source_reliability_context: Technical explainer from IBM/Red Hat. Strong vocabulary for inference runtime economics and context-memory management. Implementation specifics should not become OMNI doctrine.
priority: 3.75/5
depth: medium_full_semantic
recommended_status: route to §B AI substrate, inference-runtime economics, context-router, model-placement policy, Build-OS load testing, operating_metrics for AI cost/latency.

Topic tags:
[KV_cache, paged_attention, prefill, decode, prefix_caching, chunked_prefill, speculative_decoding, context_memory_budget, inference_budget_policy, runtime_cost, GPU_memory, workflow_lane_routing, AI_substrate]




Priority: 3.75/5
Depth: medium-full semantic
Recommended status: route to §B AI substrate / inference-runtime economics / context-router / Build-OS load testing. This is not a thesis-frame source, but it is very useful runtime substrate vocabulary. Preserve the definitions.

Core takeaway

This video explains why LLM inference slows down under concurrent load:

The model is often not the problem. The bottleneck is how GPU memory is used while storing and retrieving growing context during inference.

OMNI translation:

Context is not free. Long prompts, shared system prompts, RAG packets, multi-turn chat, coding agents, and patient context packets create memory pressure. Runtime policy has to understand prefill, decode, KV cache, prefix reuse, chunking, and latency-vs-throughput tradeoffs.

This belongs under the same family as Fireworks / inference economics / workflow-lane routing.

Key concepts to preserve
1. Prefill phase

The prefill phase is the lag before the first token. The model processes the full input prompt through transformer layers to build the internal representation before output begins.

OMNI keeper: long context packets increase time-to-first-token.

Applies to:

provider chart summaries
patient context packets
D7 document packets
RAG answers
long intake histories
Build-OS corpus reads
clinical evidence prompts
2. Decode phase

The decode phase is token generation after prefill. It is memory-bound because the model repeatedly reads prior context from GPU memory while generating each new token.

OMNI keeper: after prefill, generation speed is often constrained by memory bandwidth and KV cache efficiency, not pure model intelligence.

3. KV cache

The KV cache stores previously computed key/value matrices so the model does not recompute attention over all prior tokens for every new token.

OMNI keeper: KV cache is a memory-for-compute tradeoff. It speeds long generation but consumes scarce GPU memory.

This matters for OMNI because “giant context everywhere” can destroy concurrency.

4. Paged attention

Paged attention treats GPU memory like OS virtual memory. Instead of reserving one large contiguous block for each request, it breaks KV cache into small pages allocated on demand.

OMNI keeper: paged attention solves memory waste from variable-length requests.

This gives OMNI a useful analogy:

Context memory should be allocated like a governed resource, not assumed as infinite.

5. Fragmentation

The video names three memory waste patterns:

internal fragmentation — reserving max context memory even when request is short
external fragmentation — enough total memory exists, but not in one contiguous block
redundant duplication — the same system prompt stored separately for many concurrent requests

OMNI keeper: OMNI’s repeated system prompts, policy prompts, tenant instructions, service rules, and common RAG prefixes should not be naively recomputed/stored per request.

6. Prefix caching

Prefix caching lets requests sharing the same prefix/system prompt point to the same cached memory.

The video specifically calls out RAG pipelines, multi-turn chat, and coding agents as good fits.

OMNI keeper: prefix caching is directly relevant to OMNI.

Likely shared prefixes:

tenant/operator policy
service-line instructions
clinical safety rubric
provider-note style rules
D7 extraction instructions
campaign-generation rules
Build-OS agent instructions
patient-facing safety disclaimers
standard context-packet scaffolds

Guardrail:

Shared prefix caching must respect tenant, PHI, RBAC, and model-lineage boundaries. Never let cross-patient/cross-operator cache reuse leak context.

7. Chunked prefill

Chunked prefill prevents long prompts from blocking decode for everyone else. It lets streaming decode proceed while prefill is batched into chunks.

OMNI keeper: long-context jobs should not starve interactive care surfaces.

Use this idea for routing:

patient chat = latency-sensitive
provider live assist = latency-sensitive
D7 batch extraction = throughput-heavy
Build-OS corpus digestion = throughput-heavy
operating metrics rollups = batch
clinical interrupt reasoning = premium/latency-sensitive
8. Speculative decoding

A small draft model proposes tokens and the larger model verifies them. Useful when interactive latency matters more than raw throughput.

OMNI keeper: speculative decoding is a latency tool, not a reasoning doctrine.

Potential use:

patient-facing chat latency
provider live drafting
staff assistant
low-risk structured/repetitive outputs

Do not use it as a safety substitute. The verifying model still needs the normal authority and validation gates.

OMNI translation

This source sharpens the runtime substrate:

AI runtime is not just model selection. It is context-memory management, cache policy, concurrency policy, prefill/decode scheduling, and latency/throughput routing by workflow lane.

OMNI should not treat all AI calls the same.

Different lanes need different serving policies:

OMNI lane	Runtime posture
patient chat	low latency, bounded context, safe prefix caching
provider assist	medium latency, cached patient context, higher quality
clinical escalation	premium reasoning, strict validation, no cheap-route
D7 extraction	batch throughput, chunking, OCR/multimodal cost control
RAG/evidence answer	prefill-heavy, citation/provenance, prefix reuse
Build-OS agents	batch/async, large context allowed, cost budgeted
marketing copy	cheap/fast, low-risk
billing reconciliation	deterministic validation, lower creativity
security scanning	isolated, rule-heavy, auditable
Likely OMNI landing zones

§B AI substrate

prefill_decode_awareness
KV_cache_policy
paged_attention_runtime
prefix_cache_policy
chunked_prefill_policy
speculative_decode_policy
context_memory_budget

CNS

context packet sizing
workflow-lane runtime routing
interactive-vs-batch scheduling
latency-sensitive escalation lanes

Build-OS

load testing
context-size regression tests
agent runtime telemetry
cost/latency benchmarking
prompt/prefix reuse tests

Knowledge Reservoirs / RAG

repeated prefix caching
context compaction
retrieved-context budget
avoid giant always-on packets

Security / Polaris

cache isolation
tenant/patient/operator cache boundaries
no cross-PHI reuse
lineage for cached prompts/model versions

Operating metrics / BIZOPS

AI unit cost per workflow
TTFT
throughput
GPU memory utilization
cache hit rate
cost per completed work unit
Doctrine candidates
Context is a runtime resource, not a free string.
Long context creates memory pressure even when the model is unchanged.
Prefill and decode are different runtime phases and should be optimized differently.
Shared prompts should be cached only inside safe authority/privacy boundaries.
Interactive and batch AI lanes should not compete blindly for the same serving path.
Runtime policy must choose between latency, throughput, memory, and cost per workflow.
Net-new / sharpen / affirm
Net-new candidates

context_memory_budget
Per-workflow limit and allocation policy for context size, KV cache, prefix reuse, and cache isolation.

prefill_decode_runtime_split
Runtime policy that treats prefill-heavy and decode-heavy workloads differently.

prefix_cache_boundary
Governance rule defining when shared prompt/context prefixes may be reused without violating tenant, patient, PHI, or operator boundaries.

Sharpen existing

workflow_lane_as_architecture_unit
This gives the low-level serving reason why lanes matter.

inference_budget_policy
Adds memory/cache/concurrency dimension, not just model cost.

context_packet_policy
Patient context packets must be bounded, cached safely, and freshness-aware.

runtime_cost_dominates_law
Adds GPU memory waste and throughput collapse as cost drivers.

Affirm
Different workflows need different inference lanes.
Context engineering is architecture.
Batch and interactive workloads should be separated.
Runtime optimization is a stack, not a setting.
Cheap calls are not always cheap if they waste memory/concurrency.
Reject / do not over-import
Do not make vLLM or any specific inference engine doctrine.
Do not hardcode specific tuning values like 0.95 or 2048 into thesis.
Do not assume prefix caching is safe across patients/operators.
Do not equate faster inference with safer output.
Do not make GPU optimization a top-level OMNI domain.
Hard read

This is a technical runtime-economics source.

It does not change the OMNI thesis, but it gives important mechanics behind why the thesis is right:

The workflow lane is the unit of inference architecture because each lane has different prefill cost, decode behavior, context length, cache reuse potential, latency need, concurrency profile, privacy boundary, and validation requirement.

Shortest OMNI version:

OMNI cannot just “send a big patient context packet to the best model.” It needs runtime policy that knows when context should be compacted, cached, chunked, isolated, reused, or routed to a different lane. Context has memory cost, concurrency cost, latency cost, and privacy cost.

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

**Formalizes Knox Review 001 (medium-full/3.75); does not re-derive.** Grounded vs §1. Two-axis reality-check: `doctrine` (vs §B AI-substrate runtime-economics + context-router + workflow-lane from EVRUN-000002 registry) + `build` (repo grep: `lib/ai` exists but no KV/paged-attention/prefix-cache/inference-runtime policy — OMNI consumes models via API, does not self-host vLLM). Binds nothing (`GRD-036`/`GRD-044`).

**Headline:** the strongest **runtime-mechanics** source so far — it supplies the *why* under OMNI's existing "workflow-lane is the unit" + "runtime cost dominates" doctrine, and yields **3 genuine net-new §B primitives** (context_memory_budget · prefill_decode_runtime_split · prefix_cache_boundary). The load-bearing OMNI guardrail: **prefix-cache reuse must respect tenant/PHI/RBAC/model-lineage boundaries** — a cross-patient/cross-operator cache leak is a safety failure. Do NOT canonize vLLM or specific tuning values.

### A. Concept clusters (medium-full)

| # | concept | OMNI meaning | downstream homes | anchor (≤12w + [ts]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **prefill vs decode phases** | prefill = compute-bound (build representation, drives time-to-first-token); decode = memory-bound (repeated KV reads). Optimize differently per lane | §B runtime · CNS context-packet sizing | "This is the pre-fill phase… highly compute bound" [1:31-1:45]; "decode phase… Memory Bound" [2:11-2:19] | PARTIAL | absent | none | vocabulary | watch |
| 2 | **KV cache = memory-for-compute tradeoff** | caching keys/values avoids recompute over prior tokens; but consumes scarce GPU memory → "giant context everywhere" destroys concurrency | §B runtime · Knowledge-Reservoirs/RAG budget · CNS | "KV cache is a memory for compute trade-off" [4:10]; "worth it for long sequences" [4:17] | PARTIAL | absent | none | vocabulary | watch |
| 3 | **paged attention (OS-virtual-memory analogy)** | allocate context memory as governed non-contiguous pages on demand, not a reserved contiguous block — context is a *governed resource, not infinite* | §B runtime · CNS context-packet | "treats GPU memory like OS treats RAM" [5:48]; "breaks KV cache into small fixed page sizes" [7:05] | ABSENT (as-named) | absent | none | vocabulary | watch |
| 4 | **fragmentation (internal/external/redundant-duplication)** | OMNI's repeated system/policy/tenant/RAG prefixes should not be naively recomputed/stored per request | §B runtime · Knowledge-Reservoirs · CNS | "wasting about 60 to 80% of… KV cache memory" [5:32]; "system prompt stored separately for every request" [6:47] | ABSENT | absent | none | vocabulary | watch |
| 5 | **prefix caching (the OMNI-load-bearing one)** | shared prefixes (tenant policy · clinical-safety rubric · note-style · D7-extraction rules · patient-safety disclaimers · Build-OS instructions) reuse cached memory — **BUT only inside tenant/PHI/RBAC/model-lineage boundaries** | §B runtime · **Security/Polaris (cache isolation)** · Knowledge-Reservoirs · CNS | "Requests sharing a system prompt point to same physical memory" [8:37]; RAG/multi-turn/coding-agents "75 to 95%" hit [8:44-8:52] | PARTIAL | absent | **direct_conflict-if-unguarded** (perf reuse vs PHI/tenant isolation — safety wins) | spine (§B) | promote (as a governed §B primitive w/ boundary) |
| 6 | **chunked prefill** | long-context jobs must not starve interactive care surfaces; interleave decode + prefill chunks | §B runtime · CNS interactive-vs-batch scheduling | "streamed tokens to stutter when long prompts arrive" [9:10]; "50% throughput improvement" [9:24] | PARTIAL | absent | none | vocabulary | watch |
| 7 | **speculative decoding** | small draft model proposes, large model verifies (output identical) — a *latency tool, not a reasoning/safety doctrine*; verifying model still needs authority/validation gates | §B runtime · patient-chat/provider-draft latency | "draft model. Proposes… larger model verifies" [10:01-10:15]; "mathematically identical" [10:20] | ABSENT (as-named) | absent | none | low-authority-watch | watch |
| 8 | **workflow-lane runtime routing** (the synthesis) | AI runtime = context-memory mgmt + cache policy + concurrency + prefill/decode scheduling + latency/throughput routing PER LANE — not "send big packet to best model" | §B runtime · CNS · Build-OS telemetry · operating-metrics (AI unit cost) | "your model is most likely not the culprit… how your memory is being used" [0:17-0:27] | AFFIRM | absent | none | spine | watch |

**Lane routing table (OMNI translation, from Knox — preserve):** patient-chat = low-latency/bounded-context/safe-prefix-cache · provider-assist = medium-latency/cached-patient-context · clinical-escalation = premium/strict-validation/no-cheap-route · D7-extraction = batch/chunked · RAG-answer = prefill-heavy/provenance/prefix-reuse · Build-OS-agents = batch/large-context/budgeted · marketing = cheap/fast · billing = deterministic · security-scan = isolated/auditable.

### B. Net-new primitives (dedup vs EVRUN-000001 §2A + 000002 registry)
- `context_memory_budget` — per-workflow limit/allocation policy for context size + KV cache + prefix reuse + cache isolation — **EXISTS-AS: net-new (sharpens `inference_budget_policy` with a MEMORY dimension).** Mint (§B).
- `prefill_decode_runtime_split` — runtime policy treating prefill-heavy vs decode-heavy workloads differently — **EXISTS-AS: net-new (§B runtime).** Mint.
- `prefix_cache_boundary` — governance rule for WHEN shared prompt/context prefixes may be reused without violating tenant/patient/PHI/operator boundaries — **EXISTS-AS: net-new; composes with consent-specificity §7.5.4 + Federation operator-neutrality + model-lineage.** Mint (§B + Security/Polaris) — **the highest-value net-new here.**
- (sharpen, EXISTS-AS) `workflow_lane_as_architecture_unit` (low-level serving reason WHY lanes matter) · `inference_budget_policy` (+memory/cache/concurrency dim) · `context_packet_policy` (bounded/cached/freshness-aware) · `runtime_cost_dominates_law` (+GPU-memory-waste/throughput-collapse) — all prior; sharpened.

### C. Reread flags
- No screenshot / no Knox metadata block → channel/speaker/title/URL inferred or `TK` (style ≈ IBM Technology, unverified).
- Cluster 5 `conflict=direct_conflict-if-unguarded`: prefix-cache performance reuse vs PHI/tenant isolation — flagged to the Tension Register (the resolution: safety boundary wins; reuse only within boundary). This is the one real tension in the source.
- vLLM-specific values (0.9/0.95, 2048, 16-token pages) captured as illustrative only — do not hardcode.

### D. Two-axis roll-up
- `doctrine=AFFIRM/PARTIAL · build=absent`: all 8 — §B runtime-economics doctrine exists at the concept level (workflow-lane, runtime-cost-dominates, context-router), the specific inference mechanics (KV/paged-attention/prefix-cache/chunked-prefill/speculative-decode) are ABSENT-as-named and uncoded. → these are **build-gap + §B-sharpening**, with 3 net-new primitives worth minting.
- No `ABSENT·present`. Genuine net-new: the 3 primitives above.

### E. One-line hard read
**Best runtime-mechanics source of the batch — medium-full, 3 net-new §B primitives:** it doesn't change the thesis, it supplies the *why* under "workflow-lane is the inference unit" and mints `context_memory_budget` / `prefill_decode_runtime_split` / `prefix_cache_boundary`; the load-bearing guardrail is prefix-cache isolation (tenant/PHI/RBAC/lineage) — a leak is a safety failure, not a perf regression. Do not canonize vLLM or tuning constants.

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§B AI-substrate runtime (primary) · CNS context-packet/scheduling · Security/Polaris (prefix-cache isolation) · Build-OS telemetry · operating-metrics (AI unit cost)` · promotion: `watch → promote candidate (3 net-new §B primitives: context_memory_budget · prefill_decode_runtime_split · prefix_cache_boundary)`

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — transcript (§1) + Knox Review 001 pasted (Nick); §0 metadata inferred (no screenshot/metadata block); §3 Review 003 written (Opus; medium-full, 8 clusters + lane-routing table + 3 net-new §B primitives + prefix-cache tension flagged, two-axis reality-check); §4 filled; status → `analyzed`. Folded to `EVRUN-2026-000003` registry + coverage + anchor. Slug firmed → `kv-cache-paged-attention-llm-inference`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.

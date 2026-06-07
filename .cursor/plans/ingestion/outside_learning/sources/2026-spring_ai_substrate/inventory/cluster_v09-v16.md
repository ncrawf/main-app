# Cluster Inventory — v09–v16 (AI Substrate 2026)

- cluster: v09–v16 (IBM Technology AI-substrate primers: optimization methods, RAG/CAG, vector DBs, agentic RAG, AI vocab, multi-agent safety, agent memory, retrieval evolution)
- sources: `videos/v09.md`, `videos/v10.md`, `videos/v11.md`, `videos/v12.md`, `videos/v13.md`, `videos/v14.md`, `videos/v15.md`, `videos/v16.md`
- date: 2026-06-04
- classification: lossless concept inventory — non-binding evidence
- method: mechanical persistence pass — read §1 (transcript=anchors) + §2 (distillation=concepts) for each video; one block per distinct concept; no cap.

---

## v09 — RAG vs Fine-Tuning vs Prompt Engineering

### v09 — Three optimization methods (the router question)
- concept: Three ways to improve LLM output
- anchor: "But how could we improve the model's answer? Well, there's three ways." (0:32–0:38)
- diluted: An LLM's answer can be improved by RAG (search/add external data), fine-tuning (specialized model), or prompt engineering (better specifying the query). Each has pluses and minuses.
- why_it_matters: Establishes that "use AI" is not one decision — it is a routing choice among distinct optimization levers.
- omni_impact: affirm — OMNI must treat AI optimization as an explicit selection, not a default.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, thesis §8 (Sense/Act loops), CNS
- flag: new
- confidence: high
- requires_reread: no

### v09 — RAG = retrieval + augmentation + generation
- concept: Retrieval Augmented Generation breakdown
- anchor: "First there's retrieval... Then there's augmentation... And then finally there's generation." (2:06–2:22)
- diluted: RAG searches a corpus, augments the original prompt with retrieved info, then generates a response grounded in that enriched context. Valuable for up-to-date and domain-specific facts.
- why_it_matters: Defines the canonical grounding mechanism OMNI will use to inject governed truth into model context.
- omni_impact: affirm — RAG is the primary path for current/private/domain facts into AI workflows.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, Clinical Memory, Observation, D7 documents, Federation/RBAC gates
- flag: new
- confidence: high
- requires_reread: no

### v09 — Vector embeddings / semantic similarity
- concept: Embeddings capture meaning for similarity match
- anchor: "RAG converts both your question, the query, and all of the documents into something called vector embeddings... capture their meaning." (3:01–3:20)
- diluted: RAG matches on mathematical/semantic similarity, not keywords, so it finds "fourth quarter performance" for a "revenue growth" query.
- why_it_matters: Explains why OMNI retrieval can surface semantically relevant records even with mismatched phrasing.
- omni_impact: affirm — semantic recall complements keyword precision.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, vector index, retrieval evals
- flag: new
- confidence: high
- requires_reread: no

### v09 — RAG costs (latency, processing, infrastructure)
- concept: RAG operational overhead
- anchor: "you have this retrieval step here, and that adds latency to each query... it adds to infrastructure costs to make this solution work." (4:45–5:17)
- diluted: RAG incurs retrieval latency plus embedding/storage/infrastructure costs versus a simple prompt.
- why_it_matters: OMNI must budget cost/latency for retrieval-heavy clinical/ops workflows.
- omni_impact: change — adds cost/latency as a design constraint on AI workflow routing.
- landing_zone: BuildOS(P6) + contract(P1:AI substrate)
- affected_artifacts: AI#12, Build OS rollout, cost governance
- flag: sharpen
- confidence: med
- requires_reread: no

### v09 — Fine-tuning = updating model weights
- concept: Fine-tuning on specialized data
- anchor: "during fine tuning, we're updating the model's internal parameters through additional training." (5:58–6:05)
- diluted: Fine-tuning takes a broad model and adjusts its weights via supervised input-output pairs to bake in domain expertise; faster at inference, no vector DB needed.
- why_it_matters: Clarifies that fine-tuning changes the model itself — a different risk class than retrieval/prompting.
- omni_impact: affirm — fine-tuning is a last-resort lever, not a truth store.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, AI lineage, model governance
- flag: new
- confidence: high
- requires_reread: no

### v09 — Catastrophic forgetting
- concept: Fine-tuning can erode general capability
- anchor: "there is a risk of something called catastrophic forgetting... the model loses some of its general capabilities while it's busy learning these specialized ones." (8:27–8:44)
- diluted: Fine-tuning a model on narrow data can degrade its broad abilities.
- why_it_matters: A direct safety argument against encoding OMNI's volatile/clinical knowledge in weights.
- omni_impact: change — informs guardrail forbidding fine-tuning of volatile facts.
- landing_zone: boot/governance
- affected_artifacts: AI#12, Guardrail Anti-pattern Digest (06)
- flag: new
- confidence: high
- requires_reread: no

### v09 — Fine-tuning downsides (complexity, compute, maintenance)
- concept: Fine-tuning operational burden
- anchor: "You're going to need thousands of high quality training examples... computational cost... challenges related to maintenance as well." (7:54–8:27)
- diluted: Fine-tuning demands large gold datasets, heavy GPU compute, and re-training to update — unlike RAG's incremental document adds.
- why_it_matters: Confirms fine-tuning is only justified for stable, high-volume, well-evidenced tasks.
- omni_impact: affirm — fine-tuning gated behind evidence threshold.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: AI#12, Build Entry Gate
- flag: new
- confidence: high
- requires_reread: no

### v09 — Prompt engineering = activating existing capability
- concept: Prompt engineering directs model attention
- anchor: "a well-engineered prompt can transform a model's output without any additional training or without data retrieval." (9:49–9:59)
- diluted: By including examples, context, format, and step-by-step framing, prompts steer the model to relevant learned patterns — no infrastructure change, immediate results.
- why_it_matters: Cheapest first lever for OMNI AI workflows when capability already exists.
- omni_impact: affirm — prompt/template first in the optimization router.
- landing_zone: contract(P1:AI substrate) + surface/projection(P5/P4)
- affected_artifacts: AI#12, prompt/template registry, skills
- flag: new
- confidence: high
- requires_reread: no

### v09 — Prompt engineering limitations
- concept: Prompting can't add new knowledge
- anchor: "No additional amount of prompt engineering is going to teach it truly new information." (11:23–11:28)
- diluted: Prompting is limited to the model's existing knowledge and is part art/part trial-and-error; it cannot supply current/private facts.
- why_it_matters: Defines the boundary where OMNI must escalate from prompting to RAG.
- omni_impact: affirm — escalation rule from prompt → RAG.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, optimization router
- flag: new
- confidence: high
- requires_reread: no

### v09 — Combination mode (all three together)
- concept: Methods commonly combined
- anchor: "they're commonly used actually in combination... consider a legal AI system. RAG... prompt engineering... fine-tuning..." (11:57–12:24)
- diluted: Serious workflows blend RAG (extend knowledge), prompt engineering (format/flexibility), and fine-tuning (deep domain) per their strengths.
- why_it_matters: OMNI's default for serious workflows is composed, not single-lever.
- omni_impact: affirm — combination mode (prompt + retrieved context + tools + evals).
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, CNS orchestration
- flag: new
- confidence: high
- requires_reread: no

### v09 — OMNI AI optimization strategy router
- concept: Optimization method router (distillation)
- anchor: "OMNI needs an AI optimization strategy router." (§2 distillation)
- diluted: For any AI workflow OMNI should decide: prompt/template first; RAG/context when current/private/domain facts are needed; fine-tuning only later with a gold dataset; combination for serious workflows.
- why_it_matters: Names a concrete substrate component governing how every AI workflow is optimized.
- omni_impact: change — introduces a formal router primitive in the AI substrate.
- landing_zone: contract(P1:AI substrate) + thesis(P0)
- affected_artifacts: AI#12, CNS, thesis §8
- flag: new
- confidence: high
- requires_reread: no

### v09 — Guardrail: no fine-tuning of volatile facts
- concept: Fine-tuning exclusion rule (distillation)
- anchor: "Do not use fine-tuning to encode volatile facts, policies, clinical knowledge, operator-specific data, or workflow rules." (§2 distillation)
- diluted: Volatile/governed knowledge belongs in retrieval, Settings/config, rules/templates, skills, capability servers, and domain truth — never baked into weights.
- why_it_matters: Protects longitudinal coherence and governance from being frozen into a model.
- omni_impact: change — new boot-visible guardrail candidate.
- landing_zone: boot/governance
- affected_artifacts: AI#12, Guardrail Anti-pattern Digest (06), RBAC, Federation
- flag: new
- confidence: high
- requires_reread: no

### v09 — Layered method mantra
- concept: Method-role separation phrase (distillation)
- anchor: "Prompting shapes behavior. RAG supplies facts. Fine-tuning changes the model. Skills teach procedure. MCP exposes tools. Evals decide whether any of it works." (§2 distillation)
- diluted: A one-line taxonomy assigning each AI mechanism a distinct role.
- why_it_matters: Candidate canonical sentence for the AI substrate doctrine; prevents conflating mechanisms.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, thesis §3.5 comparator registry, doctrine
- flag: new
- confidence: high
- requires_reread: no

---

## v10 — RAG vs CAG

### v10 — The LLM knowledge problem
- concept: Training-cutoff / proprietary knowledge gap
- anchor: "If a piece of information wasn't in their training set, they won't be able to recall it." (0:00–0:10)
- diluted: LLMs cannot recall post-cutoff news or proprietary data (e.g., a client's purchase history) without augmentation.
- why_it_matters: Root justification for all augmented-generation in OMNI.
- omni_impact: affirm — augmentation is mandatory for current/private truth.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, Clinical Memory, Observation
- flag: affirm
- confidence: high
- requires_reread: no

### v10 — CAG = preload entire knowledge base
- concept: Cache Augmented Generation
- anchor: "the core idea of CAG is to preload the entire knowledge base... we put it all into the context window. All of it." (1:40–1:58)
- diluted: CAG front-loads a bounded knowledge set into the model context/cache rather than retrieving per-query.
- why_it_matters: Introduces a second context-mode distinct from retrieval for bounded case work.
- omni_impact: change — adds CAG/working-packet as a context mode in the substrate.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, case context cache
- flag: new
- confidence: high
- requires_reread: no

### v10 — KV cache (key-value cache)
- concept: Model internal state after digesting docs
- anchor: "this internal state blob, it's actually got a name, it's called the KV cache, or the key value cache." (5:59–6:09)
- diluted: CAG processes all knowledge in a forward pass and stores the model's encoded state (KV cache) so queries reuse it without reprocessing.
- why_it_matters: Technical basis for low-latency repeated reasoning over a fixed case set.
- omni_impact: affirm — KV cache enables fast case follow-ups.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: AI#12, runtime optimization
- flag: new
- confidence: med
- requires_reread: no

### v10 — RAG two-phase system
- concept: Offline index + online retrieve
- anchor: "You've got an offline phase where you ingest and index your knowledge, and then you've got an online phase where you retrieve and generate on demand." (2:28–2:38)
- diluted: RAG separates offline chunking/embedding/indexing from online similarity retrieval and generation.
- why_it_matters: Defines OMNI's ingestion vs runtime split for governed retrieval.
- omni_impact: affirm — ingestion pipeline distinct from query pipeline.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: AI#12, D7 ingestion, vector index
- flag: new
- confidence: high
- requires_reread: no

### v10 — RAG modularity
- concept: Swappable components
- anchor: "you can swap out the vector database, you could swap out a different embedding model, or you could change the LLM without rebuilding this entire system." (4:47–5:01)
- diluted: RAG's components (vector DB, embedding model, LLM) are independently replaceable.
- why_it_matters: OMNI should keep AI substrate components loosely coupled / vendor-swappable.
- omni_impact: change — modularity/portability design principle.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, model/provider abstraction
- flag: new
- confidence: med
- requires_reread: no

### v10 — Accuracy: RAG depends on retriever vs CAG on model extraction
- concept: Where accuracy risk lives
- anchor: "When we talk about accuracy with RAG, we are talking about the retriever... with CAG, all of the work is handed over to the model to extract the right piece of information from that large context." (8:00–8:52)
- diluted: RAG accuracy hinges on retriever quality (and shields the LLM from noise); CAG risks confusion/mixing because the model must extract from a large blob.
- why_it_matters: Tells OMNI where to place evals per context mode.
- omni_impact: change — retrieval evals (RAG) vs extraction evals (CAG).
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, eval harness
- flag: new
- confidence: high
- requires_reread: no

### v10 — Latency: RAG higher, CAG lower
- concept: Latency tradeoff
- anchor: "with CAG, once the knowledge is cached, answering a query is just one forward pass... There's no retrieval lookup time." (9:24–9:40)
- diluted: RAG adds retrieval/embedding/search overhead per query; cached CAG answers in a single pass.
- why_it_matters: Latency-sensitive OMNI workflows may prefer a cached case packet.
- omni_impact: affirm — latency informs context-mode choice.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v10 — Scalability: RAG huge, CAG context-bounded
- concept: Scale ceiling difference
- anchor: "RAG can scale to as much as you can fit into your vector database... but CAG... that does have a hard limit... related to the model context size." (9:43–10:32)
- diluted: RAG indexes millions of docs and pulls slices; CAG is capped at the context window (~32–100K tokens).
- why_it_matters: Large/longitudinal corpora must use RAG; only bounded sets fit CAG.
- omni_impact: affirm — corpus size drives mode selection.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, longitudinal corpora
- flag: new
- confidence: high
- requires_reread: no

### v10 — Data freshness: RAG incremental, CAG re-compute
- concept: Update cost difference
- anchor: "when knowledge changes, RAG... can just update the index very easily... CAG... is going to require some re-computation when anything actually changes." (10:46–11:26)
- diluted: RAG updates incrementally; CAG must reload/recompute when source data changes, negating cache benefit for dynamic data.
- why_it_matters: For frequently changing clinical/ops truth, RAG (or aggressive cache invalidation) is required.
- omni_impact: change — freshness drives invalidation policy.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, cache invalidation, consent/medication/lab change triggers
- flag: new
- confidence: high
- requires_reread: no

### v10 — Hybrid clinical decision support (RAG + CAG)
- concept: Retrieve then cache for a case
- anchor: "the system could first use RAG to retrieve the most relevant subset... then... load all that retrieved content into a long context model that uses CAG, creating a temporary working memory... for the specific patient case." (14:22–14:56)
- diluted: For clinical decision support, retrieve narrowly from the big corpus, then cache that bounded set as working memory for repeated follow-ups.
- why_it_matters: Likely the default OMNI pattern for serious clinical/provider workflows.
- omni_impact: change — hybrid retrieve→assemble→cache→reason pattern.
- landing_zone: contract(P1:AI substrate) + thesis(P0)
- affected_artifacts: AI#12, CNS, Clinical Memory, Observation
- flag: new
- confidence: high
- requires_reread: no

### v10 — Case Context Cache / Working Context Packet
- concept: OMNI primitive (distillation)
- anchor: "Case Context Cache or Working Context Packet" (§2 distillation)
- diluted: A scoped, source-labeled, freshness-aware, permission-gated, replayable, invalidatable working packet assembled for bounded case reasoning.
- why_it_matters: Names a concrete, governed substrate object for case-scoped AI work.
- omni_impact: change — introduces a new substrate primitive.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, Federation, RBAC, consent, audit
- flag: new
- confidence: high
- requires_reread: no

### v10 — Cache invalidation as safety-critical
- concept: Aggressive invalidation rule (distillation)
- anchor: "cached context must expire or invalidate when patient data, consent, visibility, clinical adoption, medication list, lab values, or policy changes." (§2 distillation)
- diluted: In OMNI, stale cached context is a safety hazard; caches must invalidate on changes to governed truth.
- why_it_matters: Prevents acting on out-of-date patient/policy state.
- omni_impact: change — invalidation triggers tied to domain truth changes.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, consent, Clinical Memory, RBAC, audit
- flag: new
- confidence: high
- requires_reread: no

### v10 — Retrieval evals required
- concept: Did we retrieve the right thing? (distillation)
- anchor: "retrieval evals are required: did we retrieve the right patient record, the right doc, the right policy, the right observation, the right timestamp?" (§2 distillation)
- diluted: RAG accuracy depends on retriever quality, so OMNI must evaluate retrieval correctness as a safety gate.
- why_it_matters: Missing the right source becomes a clinical safety problem.
- omni_impact: change — retrieval eval harness obligation.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: AI#12, eval harness, proof obligations
- flag: new
- confidence: high
- requires_reread: no

### v10 — Retrieve broadly / assemble narrowly mantra
- concept: Context lifecycle phrase (distillation)
- anchor: "OMNI should retrieve broadly, assemble narrowly, cache temporarily, reason traceably, and invalidate aggressively." (§2 distillation)
- diluted: A one-line lifecycle for governed context handling.
- why_it_matters: Candidate canonical phrasing for context governance.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine
- flag: new
- confidence: high
- requires_reread: no

---

## v11 — What is a Vector Database

### v11 — The semantic gap
- concept: Storage vs human understanding mismatch
- anchor: "that disconnect between how computers store data how humans understand it has a name. It's called the semantic gap." (1:34–1:45)
- diluted: Structured fields (metadata/tags) fail to capture meaning like similar color palettes or landscapes; the gap between storage and understanding is the semantic gap.
- why_it_matters: Frames why OMNI needs a semantic access path over its governed truth.
- omni_impact: affirm — justifies the vector layer.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, vector index
- flag: new
- confidence: high
- requires_reread: no

### v11 — Relational DB limits for unstructured data
- concept: Keyword/structured query falls short
- anchor: "select star where color equals orange, it kind of falls short because it doesn't really capture the nuanced multi-dimensional nature of unstructured data." (1:45–2:00)
- diluted: Traditional queries can't express semantic/multi-dimensional intent over unstructured content.
- why_it_matters: OMNI cannot rely solely on relational queries for meaning-based retrieval.
- omni_impact: affirm — vector layer complements relational truth.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v11 — Vector embeddings capture semantic essence
- concept: Arrays of numbers encoding meaning
- anchor: "these vectors, they capture the semantic essence of the data where similar items are positioned close together in vector space." (2:19–2:30)
- diluted: Embeddings are number arrays where each dimension encodes a learned feature; similar items sit close, dissimilar far apart.
- why_it_matters: Core mechanism for OMNI similarity retrieval.
- omni_impact: affirm — embeddings underpin semantic recall.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v11 — Similarity search as math operation
- concept: Nearest-vector = semantically similar
- anchor: "we can perform similarity searches as mathematical operations, looking for vector embeddings that are close to each other." (2:30–2:43)
- diluted: Retrieval becomes finding closest vectors, translating to semantically similar content.
- why_it_matters: Defines the retrieval operation OMNI runs over its index.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v11 — Multimodal unstructured data
- concept: Images, text, audio embeddable
- anchor: "image files of course like our mountain sunset. We could put in a text file as well or we could even store audio files as well in here." (2:51–3:04)
- diluted: Vector DBs hold many modalities (image/text/audio) transformed into embeddings.
- why_it_matters: OMNI clinical photos, before/after media, lab reports, transcripts, intake text all become retrievable.
- omni_impact: change — multimodal retrieval scope.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, D7 documents, clinical media
- flag: new
- confidence: high
- requires_reread: no

### v11 — Embedding models + layered feature extraction
- concept: CLIP/GloVe/Wav2vec, progressive abstraction
- anchor: "through embedding models that have been trained on massive data sets... each layer is extracting progressively more abstract features." (5:48–6:38)
- diluted: Each data type has a specialized embedding model; deeper layers capture more abstract features (edges→objects, words→context).
- why_it_matters: OMNI must choose/govern embedding models per modality.
- omni_impact: change — embedding-model selection per data type.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, model governance
- flag: new
- confidence: med
- requires_reread: no

### v11 — Vector indexing / ANN (HNSW, IVF)
- concept: Approximate nearest neighbor tradeoff
- anchor: "vector indexing uses something called approximate nearest neighbor or ANN algorithms... trading a small amount of accuracy for pretty big improvements in search speed." (8:09–8:57)
- diluted: At scale you can't compare every vector; ANN (HNSW/IVF) trades a little accuracy for speed.
- why_it_matters: Introduces an accuracy-for-speed tradeoff that becomes a safety concern in OMNI.
- omni_impact: change — index tuning + eval to bound accuracy loss.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: AI#12, retrieval evals
- flag: new
- confidence: high
- requires_reread: no

### v11 — Vector DB as core of RAG
- concept: Embeddings store powers retrieval
- anchor: "vector databases are a core feature of something called RAG... store chunks of documents... and feeds those to a large language model." (8:57–9:26)
- diluted: Vector DBs both store unstructured data and provide fast semantic retrieval for RAG.
- why_it_matters: Confirms the vector layer is infrastructure underneath OMNI RAG.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v11 — Vector DB is an index, not a truth store
- concept: Retrieval index ≠ canonical truth (distillation)
- anchor: "the vector index should never become canonical truth. It should point back to authoritative sources." (§2 distillation)
- diluted: In OMNI the vector index points back to D7 artifacts, Observation, Clinical Memory, messages, policies — it does not own truth.
- why_it_matters: Preserves single-source-of-truth governance against a shadow memory.
- omni_impact: change — non-canonical status of vector layer.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, System Map, D0THES-DEC-033 (surfaces own no truth)
- flag: new
- confidence: high
- requires_reread: no

### v11 — Every embedding needs lineage
- concept: Per-vector provenance (distillation)
- anchor: "Each vector should know: source object, source version, timestamp, tenant/operator, visibility grant, consent state, authority level, freshness, and invalidation rules." (§2 distillation)
- diluted: Embeddings must carry full lineage to remain governable, fresh, and permission-aware.
- why_it_matters: Lineage is what makes retrieval safe, auditable, and invalidatable in OMNI.
- omni_impact: change — embedding lineage schema requirement.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, Federation, RBAC, consent, audit, AI lineage
- flag: new
- confidence: high
- requires_reread: no

### v11 — Approximate search needs evals
- concept: ANN tradeoff is a safety risk (distillation)
- anchor: "missing the right source can become a safety problem." (§2 distillation)
- diluted: Because ANN sacrifices some accuracy, retrieval quality must be evaluated in OMNI.
- why_it_matters: Ties index tuning to patient-safety obligations.
- omni_impact: change — eval obligation on the index.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: AI#12, eval harness
- flag: sharpen
- confidence: high
- requires_reread: no

### v11 — Semantic similarity ≠ authority
- concept: Closeness is not truth/permission (distillation)
- anchor: "A chunk being 'close' to a query does not mean it is true, current, clinically adopted, or visible to this user." (§2 distillation)
- diluted: Retrieval results must still pass Federation/RBAC/consent/policy/context gates before use.
- why_it_matters: Prevents OMNI from treating a similar chunk as authoritative or permitted.
- omni_impact: change — gating layer between retrieval and use.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, Federation, RBAC, consent
- flag: new
- confidence: high
- requires_reread: no

### v11 — Semantic access path mantra
- concept: Vector layer phrasing (distillation)
- anchor: "OMNI's vector layer is a semantic access path over governed truth, not a second memory of truth." (§2 distillation)
- diluted: One-line statement of the vector layer's non-canonical role.
- why_it_matters: Candidate canonical phrasing.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine
- flag: new
- confidence: high
- requires_reread: no

---

## v12 — RAG vs Agentic AI

### v12 — "It depends" / context-dependence
- concept: No universal best method
- anchor: "Is RAG always the best option?... It depends." (0:53–1:00)
- diluted: Whether RAG/agentic AI is best depends on the workflow; the right answer is conditional.
- why_it_matters: Reinforces OMNI's router posture — choose mechanisms per context.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, optimization router
- flag: affirm
- confidence: high
- requires_reread: no

### v12 — Agentic AI loop
- concept: Perceive → memory → reason → act → observe
- anchor: "the first thing on the loop might be to perceive... consult memory... reason... act... observe what happened, and kind of round and round we go in a loop." (1:41–2:13)
- diluted: Agents form a closed loop of perception, memory, reasoning, action, and observation toward goals with minimal human intervention.
- why_it_matters: Maps directly onto OMNI's CNS Sense/Act operating loop.
- omni_impact: affirm — agentic loop ≈ CNS loop.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, CNS, thesis §8
- flag: affirm
- confidence: high
- requires_reread: no

### v12 — Agents operate at application level
- concept: Decision-making, tool use, agent-to-agent comms
- anchor: "each agent operates at the application level. They're making decisions, they're using tools and they can communicate with each other." (2:06–2:18)
- diluted: Agents decide, call tools, and talk to one another at the application layer.
- why_it_matters: OMNI must govern agent-to-agent communication and tool use, not just single calls.
- omni_impact: change — multi-agent coordination governance.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, CNS, Federation
- flag: new
- confidence: med
- requires_reread: no

### v12 — Coding agents = mini dev team
- concept: Architect / implementer / reviewer loop
- anchor: "like a mini developer team... an architect agent that... plans... the implementer that's going to... write the code... the reviewer that checks out that code." (2:43–3:12)
- diluted: Coding agents split into planning, implementation, and review roles in a feedback loop.
- why_it_matters: A direct template for OMNI's Build OS agent work model.
- omni_impact: change — Build OS agent role pattern.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, Build OS, Agent Work Protocol
- flag: new
- confidence: high
- requires_reread: no

### v12 — Human as conductor
- concept: Orchestrator not instrument
- anchor: "our job is to be more of a conductor of an orchestra, right, than play a single instrument." (3:12–3:25)
- diluted: With agents, humans orchestrate rather than manually perform each task.
- why_it_matters: Frames the operator's role in OMNI's agentic build/run model.
- omni_impact: affirm — human-as-conductor model.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: AI#12, Agent Work Protocol, operator model
- flag: new
- confidence: med
- requires_reread: no

### v12 — Routing/support agents + tool calling + MCP
- concept: Specialized agents invoke services via MCP
- anchor: "specialized agents can autonomously filter and query this to the right agent... use tool calling in order to use services or an API, using some type of protocol like model context protocol." (3:37–3:57)
- diluted: Agents route requests and call services/APIs through a standard protocol (MCP).
- why_it_matters: OMNI capability/tool access should be standardized and governed.
- omni_impact: affirm — capability-server/MCP layer.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, capability servers, RBAC
- flag: new
- confidence: high
- requires_reread: no

### v12 — Agents hallucinate without grounding
- concept: RAG limits misinformed decisions
- anchor: "without reliable access to external information, these agents, they can quickly hallucinate, or they can make misinformed decisions." (4:10–4:23)
- diluted: Agents acting without reliable context hallucinate; RAG grounds them in real documents/records.
- why_it_matters: Justifies mandatory grounding before agentic action in OMNI.
- omni_impact: affirm — grounding precondition for action.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, CNS, authority gates
- flag: affirm
- confidence: high
- requires_reread: no

### v12 — More retrieved context can degrade performance
- concept: Accuracy vs token volume curve
- anchor: "the more we add sometimes can have a marginal increase... but afterwards can... result in degraded performance because of noise or redundancy." (6:30–6:47)
- diluted: Dumping more tokens yields marginal gains then degrades accuracy while raising cost/latency.
- why_it_matters: OMNI must compress/prioritize context, not flood the model.
- omni_impact: change — context-budget discipline.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, context engineering
- flag: new
- confidence: high
- requires_reread: no

### v12 — Ingestion / data curation (Docling, PDF→Markdown)
- concept: Make documents LLM-readable
- anchor: "using perhaps open-source tools like Docling... starting from... PDF types to m-machine-readable and LLM-readable types like Markdown, with their associated metadata." (6:59–7:22)
- diluted: Curate documents (text, tables, graphs, images, truncated pages) into LLM-readable formats with metadata before indexing.
- why_it_matters: OMNI D7/document ingestion must be AI-ready, not just file storage.
- omni_impact: change — AI-ready ingestion requirement.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: AI#12, D7 documents, ingestion pipeline
- flag: new
- confidence: high
- requires_reread: no

### v12 — Context engineering (compressed, prioritized)
- concept: Form context, don't dump it
- anchor: "context engineering, as the name implies, allows us to form our context for the LLM... into a compressed and prioritized... result." (7:41–7:54)
- diluted: Retrieval should produce a compressed, prioritized context package, not raw chunks.
- why_it_matters: Names the discipline behind OMNI's context-packet composer.
- omni_impact: change — context engineering layer.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, context-packet composer
- flag: new
- confidence: high
- requires_reread: no

### v12 — Hybrid recall + rerank + chunk combination
- concept: One coherent source of truth for the LLM
- anchor: "hybrid recall... use both the semantic meaning... but also do keyword search... re-rank them for relevance... combination of chunks... one single coherent source of truth." (8:01–8:50)
- diluted: Combine semantic + keyword recall, rerank by relevance, merge related chunks into one coherent context — yielding higher accuracy, faster, cheaper.
- why_it_matters: Defines the concrete retrieval pipeline OMNI should run.
- omni_impact: change — hybrid+rerank+merge pipeline.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, retrieval pipeline
- flag: new
- confidence: high
- requires_reread: no

### v12 — Local/open-source runtimes + data sovereignty
- concept: vLLM / Llama.cpp on-prem, KV cache tuning
- anchor: "developers have already been using open-source models... like vLLM or Llama C++... the added benefit of data sovereignty—so, keeping everything on premise—and tweaking our model runtime for KV cache." (9:03–9:30)
- diluted: Open-source runtimes preserve API compatibility while enabling on-prem data sovereignty and KV-cache optimization.
- why_it_matters: Matters for regulated/operator OMNI deployments and cost control.
- omni_impact: change — on-prem/sovereign runtime option.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: AI#12, deployment/runtime, Federation
- flag: new
- confidence: med
- requires_reread: no

### v12 — Agentic loop maps to OMNI CNS (distillation)
- concept: Loop ≈ CNS/action loop
- anchor: "Agents perceive → consult memory → reason → act → observe results → repeat toward a goal. That maps cleanly to OMNI's CNS/action loop." (§2 distillation)
- diluted: The agentic loop is the AI-native expression of CNS orchestration.
- why_it_matters: Confirms CNS as the governing loop over agents.
- omni_impact: affirm — CNS owns the loop.
- landing_zone: thesis(P0) + contract(P1:CNS)
- affected_artifacts: AI#12, CNS, thesis §8
- flag: affirm
- confidence: high
- requires_reread: no

### v12 — Coding agents are a Build OS clue (distillation)
- concept: Orchestra model for build
- anchor: "the architect → implementer → reviewer loop is basically the AI-native version of a development team... humans conduct the orchestra." (§2 distillation)
- diluted: OMNI's future agent work model conducts specialized build agents instead of manual per-step work.
- why_it_matters: Shapes Build OS staged work and agent roles.
- omni_impact: change — Build OS agent orchestration.
- landing_zone: BuildOS(P6)
- affected_artifacts: AI#12, Build OS, Agent Work Protocol
- flag: new
- confidence: med
- requires_reread: no

### v12 — Ingestion quality before retrieval quality (distillation)
- concept: AI-ready D7
- anchor: "D7/document ingestion must be AI-ready, not just file-storage-ready." (§2 distillation)
- diluted: Retrieval quality is capped by ingestion quality, so OMNI's document layer must be prepared for AI consumption.
- why_it_matters: Prevents garbage-in retrieval failures in clinical/ops contexts.
- omni_impact: change — D7 contract obligation.
- landing_zone: contract(P1:D7 documents)
- affected_artifacts: AI#12, D7 documents
- flag: new
- confidence: high
- requires_reread: no

### v12 — Context-packet composer (distillation)
- concept: Named substrate component
- anchor: "This is very close to OMNI's future context-packet composer." (§2 distillation)
- diluted: A component that performs hybrid recall, rerank, merge, compress into a governed context packet.
- why_it_matters: Concrete substrate object for context assembly.
- omni_impact: change — introduces composer component.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, context-packet composer
- flag: new
- confidence: high
- requires_reread: no

### v12 — Curate/compress/prioritize/govern/trace mantra (distillation)
- concept: Agentic context phrase
- anchor: "Agentic OMNI cannot just retrieve data; it must curate, compress, prioritize, govern, and trace the context it gives to agents." (§2 distillation)
- diluted: One-line statement of OMNI's obligations on agent context.
- why_it_matters: Candidate canonical phrasing.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine
- flag: new
- confidence: high
- requires_reread: no

---

## v13 — 7 AI Terms (Agents, RAG, ASI & More)

### v13 — Agentic AI (term)
- concept: Autonomous reason-and-act loop
- anchor: "AI agents, they can reason and act autonomously to achieve goals... perceive... reasoning... act... observes the results... around and around we go." (0:43–1:23)
- diluted: Agents run autonomously through perceive/reason/act/observe, unlike one-shot chatbots; usable as travel agent, data analyst, DevOps engineer.
- why_it_matters: Canonical vocabulary entry reinforcing CNS-as-loop.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate) + thesis(P0)
- affected_artifacts: AI#12, CNS
- flag: affirm
- confidence: high
- requires_reread: no

### v13 — Large reasoning models
- concept: Reasoning-focused fine-tuned LLMs
- anchor: "specialized LLMs that have undergone reasoning-focused fine tuning... trained to work through problems step by step... internal chain of thought." (1:54–2:46)
- diluted: Reasoning models are RL-trained on verifiable answers to plan multi-step tasks, producing chain-of-thought before answering.
- why_it_matters: May power OMNI planning/candidate generation but not truth/commits.
- omni_impact: change — reasoning models for planning only.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, CNS planning
- flag: new
- confidence: high
- requires_reread: no

### v13 — Vector database (term)
- concept: Embedding-based semantic store
- anchor: "we actually use something called an embedding model... convert that data... into actually a vector... perform searches as mathematical operations." (3:07–3:49)
- diluted: Vector DBs store embeddings (semantic meaning) and enable similarity search across modalities.
- why_it_matters: Re-affirms the retrieval-index role for OMNI.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v13 — RAG (term)
- concept: Enrich prompts from vector DB
- anchor: "RAG makes use of these vector databases... to enrich prompts to an LLM... pull the relevant section from the employee handbook to include in the prompt." (4:34–5:35)
- diluted: RAG retrieves relevant sections and embeds them into the prompt (e.g., policy from a handbook).
- why_it_matters: Re-affirms source-grounded context assembly.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, policy/doc retrieval
- flag: affirm
- confidence: high
- requires_reread: no

### v13 — Model Context Protocol (MCP)
- concept: Standardized tool/data access
- anchor: "MCP standardizes how applications provide context to LLMs... instead of developers having to build one off connections for each new tool, MCP provides a standardized way for AI to access your systems." (5:51–6:44)
- diluted: MCP servers give LLMs a standard interface to external databases, repos, email, and systems.
- why_it_matters: Defines OMNI's governed capability/tool-resource-prompt layer.
- omni_impact: change — capability-server/MCP layer.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, capability servers, RBAC, Federation
- flag: new
- confidence: high
- requires_reread: no

### v13 — Mixture of Experts (MoE)
- concept: Route to specialized subnetworks
- anchor: "MoE divides a large language model into a series of experts... a routing mechanism to activate only the experts... it needs... only a fraction of those active parameters at inference time." (7:02–8:17)
- diluted: MoE routes each token to specialized expert subnetworks and merges outputs, scaling model size without proportional compute (e.g., Granite 4.0).
- why_it_matters: Conceptual analogy: OMNI routes work to the right capability/expert rather than activating everything.
- omni_impact: affirm — routing-to-expert analogy.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, capability routing
- flag: new
- confidence: med
- requires_reread: no

### v13 — ASI / AGI horizon
- concept: Theoretical superintelligence
- anchor: "ASI, artificial superintelligence... purely theoretical... potentially capable of recursive self-improvement." (8:21–9:13)
- diluted: AGI (human-expert-level on all cognitive tasks) and ASI (beyond human, recursive self-improvement) are theoretical but worth tracking.
- why_it_matters: OMNI architecture should remain adaptable to accelerating capability.
- omni_impact: affirm — adaptability posture.
- landing_zone: thesis(P0)
- affected_artifacts: AI#12, thesis
- flag: new
- confidence: low
- requires_reread: no

### v13 — AI substrate needs its own taxonomy (distillation)
- concept: Sharper architectural nouns
- anchor: "OMNI should not use 'AI' as one blurry word. We need sharper architectural nouns." (§2 distillation)
- diluted: Agents, reasoning models, retrieval, vector indexes, MCP/capabilities, expert routing, and capability escalation each need distinct homes.
- why_it_matters: Prevents conflation that erodes governance precision.
- omni_impact: change — substrate taxonomy requirement.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine, thesis §3.5
- flag: new
- confidence: high
- requires_reread: no

### v13 — Reasoning models don't own truth/commits (distillation)
- concept: Planning vs authority separation
- anchor: "these may power planning/candidate generation but still should not own truth or commits." (§2 distillation)
- diluted: Reasoning models propose; they do not commit to canonical truth.
- why_it_matters: Protects authority gates from model-driven commits.
- omni_impact: change — commit authority excluded from models.
- landing_zone: boot/governance
- affected_artifacts: AI#12, authority gates, CNS
- flag: new
- confidence: high
- requires_reread: no

### v13 — MoE as routing analogy (distillation)
- concept: Route to capability, not activate all
- anchor: "route work to the right expert/capability instead of activating everything." (§2 distillation)
- diluted: OMNI should activate only needed capabilities for a task, like MoE expert routing.
- why_it_matters: Efficiency + governance scoping principle.
- omni_impact: affirm — capability-scoping analogy.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, capability routing
- flag: new
- confidence: med
- requires_reread: no

---

## v14 — Multi AI Agent Systems (When One Brain Isn't Enough)

### v14 — Single-agent confidence problem
- concept: Confident but wrong
- anchor: "It sounded confident, articulate, maybe even eloquent. It also was completely wrong." (0:03–0:10)
- diluted: A single agent answers confidently every time, even when wrong — fine for low stakes, a liability for high stakes.
- why_it_matters: Core safety argument for verification in OMNI high-stakes flows.
- omni_impact: change — verification required for high-stakes AI.
- landing_zone: boot/governance + thesis(P0)
- affected_artifacts: AI#12, authority gates, CNS
- flag: new
- confidence: high
- requires_reread: no

### v14 — Hallucination is fundamental
- concept: Not a future patch
- anchor: "no, it's not getting fixed in the next software update. It's fundamental to how large language models work... trained to produce plausible sounding outputs, not to recognize the edges of their own knowledge." (1:22–1:38)
- diluted: Hallucination is intrinsic; models optimize plausibility, not awareness of their knowledge limits.
- why_it_matters: OMNI must architect around hallucination, not wait for it to be solved.
- omni_impact: affirm — design-around-hallucination posture.
- landing_zone: boot/governance
- affected_artifacts: AI#12, Guardrail Anti-pattern Digest (06)
- flag: new
- confidence: high
- requires_reread: no

### v14 — Hallucinated confidence (no uncertainty meter)
- concept: No internal hesitation
- anchor: "Single agents don't just hallucinate. They hallucinate confidence... no hesitation. No, let me double check that." (1:40–2:03)
- diluted: Agents lack an internal uncertainty signal, delivering wrong answers with the same conviction as right ones.
- why_it_matters: OMNI cannot rely on model self-reported confidence as a safety signal.
- omni_impact: change — external verification, not self-confidence.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, verification layer
- flag: new
- confidence: high
- requires_reread: no

### v14 — High-stakes vs low-stakes distinction
- concept: Stakes-based architecture
- anchor: "What happens when your AI is wrong? If the answer is mild inconvenience, single agent is fine. If the is lawsuit, patient harm, regulatory violation... you need verification built into the system." (8:40–9:05)
- diluted: Calibrate architecture to consequences: low stakes → single agent; high stakes → built-in verification.
- why_it_matters: Provides OMNI a concrete heuristic for when to require multi-agent verification.
- omni_impact: change — stakes-tiered verification policy.
- landing_zone: boot/governance
- affected_artifacts: AI#12, CNS, authority gates
- flag: new
- confidence: high
- requires_reread: no

### v14 — Second opinions / tumor board (medicine)
- concept: Human verification institution
- anchor: "In medicine. We invented second opinions... a tumor board, which is literally a room full of experts arguing about your scans until they reach consensus." (2:47–3:12)
- diluted: Medicine institutionalized verification via second opinions and consensus tumor boards.
- why_it_matters: Real-world analog for OMNI's machine-speed verification of clinical decisions.
- omni_impact: affirm — analogy (Lens B) for verification stations.
- landing_zone: thesis(P0)
- affected_artifacts: AI#12, thesis §3.5 comparator registry, CNS
- flag: new
- confidence: high
- requires_reread: no

### v14 — Four-eyes principle (finance)
- concept: Two-person sign-off
- anchor: "In finance, there's the four I principle. Two people sign off on significant transactions... single points of approval become single points a failure." (3:12–3:30)
- diluted: Finance requires dual approval so a single approver isn't a single point of failure.
- why_it_matters: Template for OMNI authority gates on significant actions (commerce, eligibility, commits).
- omni_impact: change — four-eyes gate pattern.
- landing_zone: boot/governance + contract(P1:commerce/authority)
- affected_artifacts: AI#12, authority gates, RBAC, commerce
- flag: new
- confidence: high
- requires_reread: no

### v14 — Co-pilots / checklists (aviation)
- concept: Designed-for-fallibility
- anchor: "In aviation, pilots have co-pilots. Checklists exist because even the best experts miss things under pressure." (3:30–3:45)
- diluted: Aviation assumes human fallibility and designs co-pilots and checklists around it.
- why_it_matters: Reinforces OMNI's airplane-as-object/checklist doctrine (Lens B).
- omni_impact: affirm — checklists/fail-safe doctrine.
- landing_zone: thesis(P0)
- affected_artifacts: AI#12, thesis §3.5, Build OS proof obligations
- flag: affirm
- confidence: high
- requires_reread: no

### v14 — NASA Mission Control as multi-agent system
- concept: Specialist stations, redundancy
- anchor: "NASA's Mission Control... dozens of specialists, each an expert in one specific system, all monitoring simultaneously... GUIDO... FIDO... EECOM... CAPCOM... flight director Gene Kranz orchestrating all of it." (4:07–5:02)
- diluted: Mission Control is a multi-agent system of independent specialists with an orchestrating flight director.
- why_it_matters: Canonical OMNI authority-gate / Houston analogy made concrete.
- omni_impact: affirm — authority-gates/Houston model.
- landing_zone: thesis(P0) + contract(P1:CNS)
- affected_artifacts: AI#12, CNS, authority gates, thesis §3.5
- flag: affirm
- confidence: high
- requires_reread: no

### v14 — Go/no-go protocol
- concept: One no-go pauses everything
- anchor: "Before any critical decision, Kranz would run what's called a go-no-go... One single no go from any station. The whole mission pauses until it's resolved." (5:04–5:29)
- diluted: Any single specialist's no-go halts the critical decision until resolved.
- why_it_matters: Direct model for OMNI clinical-risk interrupt and domain veto.
- omni_impact: change — any-station veto / interrupt gate.
- landing_zone: boot/governance + contract(P1:CNS)
- affected_artifacts: AI#12, CNS, clinical-risk interrupt, authority gates
- flag: new
- confidence: high
- requires_reread: no

### v14 — Apollo 11 1202 alarm / Jack Garman
- concept: Back-room verification under pressure
- anchor: "Jack Garman, a 24-year-old engineer recognized the alarm as a computer overload that could be ignored if it was intermittent. He told Bales... call go." (6:00–6:12)
- diluted: A specialist back room enabled a correct go-call on an unfamiliar alarm — verification, not lone judgment.
- why_it_matters: Illustrates escalation to specialist verification rather than a single brain under pressure.
- omni_impact: affirm — specialist escalation pattern.
- landing_zone: thesis(P0) + contract(P1:CNS)
- affected_artifacts: AI#12, CNS, escalation paths
- flag: new
- confidence: med
- requires_reread: no

### v14 — Generator / verifier / adversary pattern
- concept: Three roles for high-risk AI
- anchor: "One agent generates the answer... Another agent verifies... a third agent that plays adversary. Its job is to break things." (6:48–7:25)
- diluted: High-risk workflows split into generator (draft), verifier (fact/policy check), and adversary (red-team).
- why_it_matters: Concrete multi-agent pattern for OMNI high-stakes flows.
- omni_impact: change — generator/verifier/adversary stations.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, CNS, verification layer
- flag: new
- confidence: high
- requires_reread: no

### v14 — Red teaming (adversary agent)
- concept: Try to make the system fail
- anchor: "In security, we call this red teaming... it might be the most important agent you build because nobody else is trying to make your systems fail." (7:25–7:42)
- diluted: An adversary/red-team agent actively probes for flaws others miss.
- why_it_matters: OMNI needs deliberate failure-seeking in high-stakes verification.
- omni_impact: change — red-team agent role.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, verification layer, Guardrail Digest (06)
- flag: new
- confidence: high
- requires_reread: no

### v14 — Earned confidence / disagreement is signal
- concept: Agreement = trust, disagreement = escalate
- anchor: "When multiple agents with different perspectives agree, you can actually trust the output. When they disagree, that's a signal. Dig deeper, escalate to a human, don't just ship it." (7:47–8:00)
- diluted: Multi-agent agreement earns trust; disagreement triggers deeper retrieval or human escalation.
- why_it_matters: Defines how OMNI handles model disagreement safely.
- omni_impact: change — disagreement-handling policy.
- landing_zone: boot/governance + contract(P1:CNS)
- affected_artifacts: AI#12, CNS, escalation, human review
- flag: new
- confidence: high
- requires_reread: no

### v14 — Not every workflow needs multi-agent
- concept: Proportionate architecture
- anchor: "I'm not saying every chatbot needs a mission control room behind it... single agent. Keep it simple." (8:15–8:33)
- diluted: Low-stakes convenience features stay single-agent; reserve verification for consequential workflows.
- why_it_matters: Prevents over-engineering and cost bloat across OMNI.
- omni_impact: affirm — proportionality principle.
- landing_zone: boot/governance
- affected_artifacts: AI#12, CNS
- flag: new
- confidence: high
- requires_reread: no

### v14 — Roles need different models (independence)
- concept: Same model w/ 3 prompts ≠ verification (transcript comment)
- anchor: "If your generator, verifier, and adversary are all the same model with different prompts, you've got one brain wearing three hats... Recognition isn't verification... The weights have to actually differ." (comment, @SeriesFusion)
- diluted: True verification requires model independence (different training/failure modes), not one model role-played three ways.
- why_it_matters: Critical design constraint for OMNI's highest-risk verification.
- omni_impact: change — model-diversity requirement for verification.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, verification layer, model governance
- flag: new
- confidence: med
- requires_reread: yes

### v14 — Multi-agent = institutional safety (distillation)
- concept: Not "more AI"
- anchor: "Multi-agent is not about 'more AI.' It is about institutional safety." (§2 distillation)
- diluted: Mission Control mapping aligns to OMNI's clinical-risk interrupt, authority gates, and domain ownership.
- why_it_matters: Reframes multi-agent as governance, not productivity.
- omni_impact: affirm — governance framing.
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: AI#12, CNS, authority gates
- flag: affirm
- confidence: high
- requires_reread: no

### v14 — Reinforces CNS doctrine (distillation)
- concept: Structured verification stations under CNS
- anchor: "OMNI should not create uncontrolled agent chatter. It should create structured verification stations under CNS/governance: proposer, verifier, adversary, policy resolver, domain committer, human reviewer." (§2 distillation)
- diluted: Agents must be organized into governed stations, not free-form chatter.
- why_it_matters: Concrete CNS station roster for high-risk AI.
- omni_impact: change — CNS verification-station roster.
- landing_zone: contract(P1:CNS) + boot/governance
- affected_artifacts: AI#12, CNS, RBAC, authority gates
- flag: new
- confidence: high
- requires_reread: no

### v14 — Machine-speed second opinions mantra (distillation)
- concept: Verification phrase
- anchor: "multi-agent architecture is not a productivity trick. It is the machine-speed version of second opinions, four-eyes approval, tumor boards, checklists, and mission control." (§2 distillation)
- diluted: One-line statement positioning multi-agent as institutional verification at machine speed.
- why_it_matters: Candidate central phrase for AI substrate safety doctrine.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine, thesis §3.5
- flag: new
- confidence: high
- requires_reread: no

---

## v15 — The Four Types of Memory Every AI Agent Needs

### v15 — Human memory analogy
- concept: Four human memory types
- anchor: "short-term memory... factual knowledge... learned skills... personal experience." (0:27–1:20)
- diluted: Human memory spans short-term, factual, skills, and experience — mirrored by agent memory types.
- why_it_matters: Grounds the agent memory taxonomy OMNI will adopt.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v15 — CoALA framework
- concept: Cognitive Architectures for Language Agents
- anchor: "it's from a Princeton research team and they gave it the name of CoALA... maps out four distinct types of memory that agents need." (1:47–2:01)
- diluted: CoALA defines four agent memory types: working, semantic, procedural, episodic.
- why_it_matters: Named external framework OMNI can cite for memory architecture.
- omni_impact: change — adopt CoALA taxonomy.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, memory architecture
- flag: new
- confidence: high
- requires_reread: no

### v15 — Working memory
- concept: Context window / RAM
- anchor: "type one, that is working memory. This is the agent's context window... like RAM... fast and immediately accessible, but it's volatile... limited in size." (2:09–2:50)
- diluted: Working memory is the volatile, size-limited context window holding the current conversation, instructions, and loaded data; degrades if overstuffed.
- why_it_matters: Maps to OMNI's active context/case packet and current orchestration state.
- omni_impact: change — working memory = case packet.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, case packet, context engineering
- flag: new
- confidence: high
- requires_reread: no

### v15 — Semantic memory
- concept: Knowledge base (facts/rules/docs)
- anchor: "number two semantic memory and this is the agent's knowledge base... vector databases... knowledge graphs... in a lot of production agentic systems today, semantic memory is something much simpler... Markdown files... Claude.md." (3:25–4:31)
- diluted: Semantic memory holds general truth — facts, rules, conventions, docs — via vector DBs, knowledge graphs, or markdown (CLAUDE.md/AGENTS.md) loaded each session.
- why_it_matters: Maps to OMNI doctrine, domain truth, policies, clinical knowledge, operator config.
- omni_impact: change — semantic memory = doctrine/domain truth.
- landing_zone: contract(P1:AI substrate) + boot/governance
- affected_artifacts: AI#12, doctrine, domain contracts, AGENTS.md
- flag: new
- confidence: high
- requires_reread: no

### v15 — Procedural memory
- concept: Skills / skill.md / progressive disclosure
- anchor: "number three, that is procedural memory... how the agent knows how to do things... an open standard for this that's called agent skills... skill.md... progressive disclosure so the agent doesn't load all of its skills into the context window... a lightweight index." (4:51–6:27)
- diluted: Procedural memory is how-to knowledge as skills (skill.md), loaded on demand via a lightweight index (progressive disclosure) to protect context budget.
- why_it_matters: Maps to OMNI skills, Build OS workflows, clinical/ops playbooks, agent work packages.
- omni_impact: change — procedural memory = skills/Build OS workflows.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: AI#12, skills, Build OS, Agent Work Protocol
- flag: new
- confidence: high
- requires_reread: no

### v15 — Episodic memory
- concept: Distilled past experience
- anchor: "number four is episodic memory... record of what happened in past interactions... production systems... a bit more distillation... distilled or compressed experience... 'last time we debugged the auth module, the issue was in the middleware layer.'" (6:36–7:45)
- diluted: Episodic memory is compressed lessons from prior runs (not full transcripts), enabling learning over time; forgetting is an engineering problem.
- why_it_matters: Maps to OMNI traces, prior runs, lessons learned, patient/operator longitudinal experience.
- omni_impact: change — episodic memory = traces/longitudinal lessons.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, audit/traces, longitudinal memory, Clinical Memory
- flag: new
- confidence: high
- requires_reread: no

### v15 — Not every agent needs all four
- concept: Memory scoped to agent complexity
- anchor: "not every agent necessarily needs all four... a simple reflex agent... might only need access to working memory... a coding agent... probably needs access to all four." (8:22–9:49)
- diluted: Reflex agents need only working memory; narrow support agents add procedural; complex agents need all four.
- why_it_matters: Lets OMNI provision memory proportional to workflow complexity.
- omni_impact: affirm — proportional memory provisioning.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v15 — Memory separates chatbot from agent
- concept: Persistence = agency
- anchor: "memory is really what separates a chatbot from an agent because a chat bot gives a response, but an agent can give a response shaped by persistent knowledge. Accumulated experience." (9:49–10:13)
- diluted: Persistent, multi-type memory is what elevates a chatbot into an agent.
- why_it_matters: Justifies OMNI investing in governed memory layers, not just chat.
- omni_impact: affirm
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, CNS
- flag: affirm
- confidence: high
- requires_reread: no

### v15 — OMNI memory mapping (distillation)
- concept: Four memories mapped to OMNI
- anchor: "Working memory = active context packet... Semantic memory = doctrine, domain truth... Procedural memory = skills, Build OS workflows... Episodic memory = traces, prior runs, lessons learned." (§2 distillation)
- diluted: Each CoALA memory type maps to a distinct OMNI construct, each governed differently.
- why_it_matters: Concrete blueprint for OMNI's memory architecture layer.
- omni_impact: change — memory-layer mapping.
- landing_zone: contract(P1:AI substrate) + thesis(P0)
- affected_artifacts: AI#12, doctrine, Build OS, audit/traces
- flag: new
- confidence: high
- requires_reread: no

### v15 — Each memory governed differently mantra (distillation)
- concept: Memory governance phrase
- anchor: "A chatbot has working memory. An agent needs working, semantic, procedural, and episodic memory — each governed differently." (§2 distillation)
- diluted: One-line statement that memory types require distinct governance.
- why_it_matters: Candidate central AI substrate section phrasing.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine
- flag: new
- confidence: high
- requires_reread: no

### v15 — Practical memory routing rule (transcript comment)
- concept: now/before/true/how/where mapping
- anchor: "Now/context → working • What happened before → episodic • What is true → semantic • How to do it → procedural • Where to fetch it → external" (comment, @rajkatie)
- diluted: A crisp router mapping question-type to memory class, adding an explicit "external/where to fetch" class.
- why_it_matters: Adds an external-fetch class beyond CoALA's four — useful for OMNI retrieval routing.
- omni_impact: change — adds external memory/fetch class.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, retrieval router
- flag: new
- confidence: med
- requires_reread: yes

### v15 — Runtime controls around memory (transcript comment)
- concept: Memory governance is the real risk
- anchor: "the runtime controls around it: which sources are allowed into memory, how long each class is retained, and whether the agent can show exactly which memories influenced a tool call." (comment, @yankoaleksandrov9050)
- diluted: The risk is not the taxonomy but runtime controls: source allowlists, retention per class, and provenance of which memories drove a tool call.
- why_it_matters: Directly specifies OMNI memory governance obligations (allowlists, retention, provenance).
- omni_impact: change — memory governance controls requirement.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, RBAC, consent, audit, AI lineage
- flag: new
- confidence: high
- requires_reread: yes

---

## v16 — RAG's Evolution: From Simple Retrieval to Agentic AI

### v16 — Retrieval evolution arc
- concept: Keyword → semantic → hybrid → RAG → reranked RAG → agentic RAG
- anchor: "From simple keyword search to present-day agentic RAG, information retrieval has seen an evolution... they grew up one step at a time." (0:14–0:26)
- diluted: Retrieval matured stepwise from keyword matching to autonomous agentic RAG.
- why_it_matters: Gives OMNI a maturity ladder for its retrieval substrate.
- omni_impact: affirm — retrieval maturity model.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v16 — Keyword search (inverted indices, TF-IDF/BM25)
- concept: Where does the word appear
- anchor: "Documents were indexed using what's called inverted indices... ranked using TF-IDF or BM25 to measure how important or frequent different terms were." (0:33–1:06)
- diluted: Early search mapped keywords to documents and ranked by term frequency/importance.
- why_it_matters: Keyword precision remains essential for codes/IDs/med names in OMNI.
- omni_impact: affirm — keyword precision retained.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, hybrid retrieval
- flag: new
- confidence: high
- requires_reread: no

### v16 — Keyword limitation (no language understanding)
- concept: Symbols, not meaning
- anchor: "it doesn't understand language. It treats words as symbols, not meaning. Synonyms, ambiguity and any complex intents were essentially invisible." (1:16–1:24)
- diluted: Keyword search misses synonyms, ambiguity, and intent ("Python" code vs pet snake).
- why_it_matters: Justifies adding semantic recall to OMNI retrieval.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v16 — Semantic search (vectors/embeddings)
- concept: Meaning as a map
- anchor: "Semantic search turns your words into a kind of map... espresso and coffee are pointing to a very similar place... understand intent." (2:35–2:52)
- diluted: Embeddings learned from corpora place similar concepts close, enabling intent-based retrieval even with different words.
- why_it_matters: Core semantic recall layer for OMNI.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v16 — Hybrid systems
- concept: Keyword precision + semantic recall
- anchor: "Hybrid systems began to emerge, bridging the precision of keyword search with semantic recall." (3:04–3:17)
- diluted: Hybrid retrieval combines keyword precision and semantic recall.
- why_it_matters: Likely OMNI's default retrieval mode (not pure vector).
- omni_impact: change — hybrid as default.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, retrieval pipeline
- flag: new
- confidence: high
- requires_reread: no

### v16 — LLM knowledge locked to training cutoff
- concept: Predict tokens, not retrieve facts
- anchor: "LLMs don't retrieve facts... predict the most likely next token... any knowledge is locked to only the documents that that specific LLM was trained on before a certain point in time." (3:31–4:20)
- diluted: LLMs predict plausible next tokens from training data and don't know current or private documents.
- why_it_matters: Reconfirms why OMNI must supply external memory via retrieval.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: affirm
- confidence: high
- requires_reread: no

### v16 — RAG as external memory
- concept: Cite sources, adapt, no retraining
- anchor: "This gave LLMs a form of external memory. Now they could cite sources, adapt to new information and even operate in specialized domains without the costly retraining." (5:02–5:15)
- diluted: RAG gives LLMs external memory with source citation and domain adaptation, avoiding retraining.
- why_it_matters: OMNI gains citeable, adaptable grounding — key for clinical traceability.
- omni_impact: affirm — citeable grounding.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, audit, citations
- flag: new
- confidence: high
- requires_reread: no

### v16 — Linear RAG pipeline limits
- concept: Only as good as the search
- anchor: "traditional RAG is nowhere near perfect. It cannot adapt to new scenarios... The answer is only as good as the search itself." (5:41–5:55)
- diluted: A static one-shot RAG pipeline is bounded by its single retrieval quality and can't adapt.
- why_it_matters: Motivates OMNI moving beyond fixed pipelines for high-stakes work.
- omni_impact: change — beyond linear RAG.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v16 — RAG advancements (rerankers, query expansion)
- concept: Smarter but still static
- anchor: "pipelines added rerankers to reorder results... User queries were rewritten or expanded upon to improve recall... hybrid retrieval became the norm... but still fundamentally static." (6:04–6:34)
- diluted: Rerankers, query rewriting/expansion, and hybrid retrieval improved accuracy but remained predetermined pipelines.
- why_it_matters: Defines mid-tier retrieval techniques OMNI should include.
- omni_impact: change — rerank + query expansion in pipeline.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, retrieval pipeline
- flag: new
- confidence: high
- requires_reread: no

### v16 — Agents = LLMs + tools, autonomous
- concept: Tools: LLMs, memory, planning, critics, retrievers
- anchor: "Agents are systems that use LLMs and tools to perform tasks autonomously... Agents have a variety of tools such as LLMs, memory, planning, critics, retrievers and many more." (6:45–7:15)
- diluted: Agents combine LLMs with memory, planning, critics, and retrievers to act autonomously.
- why_it_matters: Confirms retrieval is one tool among many in OMNI's agent toolkit.
- omni_impact: affirm
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, CNS, capability servers
- flag: new
- confidence: high
- requires_reread: no

### v16 — Agentic RAG: agent decides retrieval
- concept: Whether/where/what/when to retrieve
- anchor: "an AI agent will decide whether retrieval is needed, where to search, what questions should be asked, when enough information is obtained, and then generate a final answer." (7:22–7:42)
- diluted: Agentic RAG makes retrieval a decision: whether to retrieve, where, what to ask, and when it has enough.
- why_it_matters: Basis for OMNI's Retrieval Decision Layer / Context Router.
- omni_impact: change — retrieval-decision component.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, Context Router
- flag: new
- confidence: high
- requires_reread: no

### v16 — Retrieval as a tool in reasoning
- concept: Compare, validate, iterate, multimodal
- anchor: "Agents can compare sources, validate claims, refine queries and iterate. It can invoke APIs, pull data from many knowledge bases and incorporate multimodal data. Retrieval is no longer fixed; it's a tool invoked as part of reasoning." (7:42–8:02)
- diluted: Agents treat retrieval as an iterative reasoning tool — comparing sources, validating claims, refining queries, calling APIs, using multimodal data.
- why_it_matters: OMNI retrieval becomes an active, governable reasoning step, not a fixed call.
- omni_impact: change — retrieval-as-tool model.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, capability servers, source-conflict handling
- flag: new
- confidence: high
- requires_reread: no

### v16 — Multi-step research / cross-doc synthesis
- concept: Adaptive behavior
- anchor: "agentic RAG systems are capable of multistep research, cross-document synthesis and general adaptive behavior. The system doesn't just answer questions; it reasons and figures out how to answer them." (8:05–8:20)
- diluted: Agentic RAG performs multi-step research and synthesizes across documents adaptively.
- why_it_matters: Capability target for OMNI complex clinical/ops research workflows.
- omni_impact: change — multi-step research capability.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, CNS
- flag: new
- confidence: med
- requires_reread: no

### v16 — Retrieval Decision Layer / Context Router (distillation)
- concept: Named substrate component
- anchor: "this supports a formal Retrieval Decision Layer or Context Router inside the AI substrate." (§2 distillation)
- diluted: A component that decides whether/where/how to retrieve, whether results suffice, and whether to act.
- why_it_matters: Concrete governed substrate object for retrieval decisions.
- omni_impact: change — introduces Context Router component.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, Context Router, Federation, RBAC
- flag: new
- confidence: high
- requires_reread: no

### v16 — Keyword search still useful in OMNI (distillation)
- concept: Codes/IDs/med names
- anchor: "Exact terms, codes, IDs, medication names, policy names, CPT/lab/test names, order IDs, appointment IDs." (§2 distillation)
- diluted: OMNI needs keyword precision for exact identifiers alongside semantic recall.
- why_it_matters: Prevents pure-vector retrieval from missing exact-match clinical/ops identifiers.
- omni_impact: change — keyword precision retained for identifiers.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12, hybrid retrieval, commerce/scheduling IDs
- flag: new
- confidence: high
- requires_reread: no

### v16 — Hybrid retrieval is the default (distillation)
- concept: Not purely vector
- anchor: "OMNI should not be purely vector search. It needs keyword precision + semantic recall." (§2 distillation)
- diluted: OMNI's default retrieval blends keyword and semantic methods.
- why_it_matters: Sets the substrate's baseline retrieval architecture.
- omni_impact: change — hybrid default mandate.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI#12
- flag: new
- confidence: high
- requires_reread: no

### v16 — Retrieval needs governance (distillation)
- concept: Where the agent may look
- anchor: "The agent should not freely search everything. Federation, RBAC, consent, operator boundary, role, time, and policy should shape where it can look." (§2 distillation)
- diluted: Retrieval scope must be gated by Federation/RBAC/consent/operator boundary/role/time/policy.
- why_it_matters: Ensures agentic retrieval respects ownership/visibility boundaries — core OMNI physics.
- omni_impact: change — governed retrieval scope.
- landing_zone: boot/governance + contract(P1:AI substrate)
- affected_artifacts: AI#12, Federation, RBAC, consent, authority gates
- flag: new
- confidence: high
- requires_reread: no

### v16 — "Deciding what to look at" mantra (distillation)
- concept: Hardest part is context selection
- anchor: "OMNI should reason about what context is needed, where it is allowed to come from, whether it is enough, and whether it is safe to act on." (§2 distillation; transcript: "the hardest part of AI isn't generation; it's deciding what to look at.")
- diluted: The decisive AI challenge is selecting/governing context, not generating text.
- why_it_matters: Candidate central thesis for the AI substrate map.
- omni_impact: change — proposed doctrinal phrasing.
- landing_zone: thesis(P0) + contract(P1:AI substrate)
- affected_artifacts: AI#12, doctrine, Context Router
- flag: new
- confidence: high
- requires_reread: no

---

## Per-Video Concept Count

| video | source | concepts |
|---|---|---|
| v09 | RAG vs Fine-Tuning vs Prompt Engineering | 13 |
| v10 | RAG vs CAG | 16 |
| v11 | What is a Vector Database | 14 |
| v12 | RAG vs Agentic AI | 18 |
| v13 | 7 AI Terms (Agents, RAG, ASI & More) | 10 |
| v14 | Multi AI Agent Systems | 19 |
| v15 | Four Types of Memory | 12 |
| v16 | RAG's Evolution (Agentic RAG) | 19 |
| **TOTAL** | **v09–v16** | **121** |

# EVRUN-2026-000006 · ai-corpus wave-5 — SOURCE ANCHOR LEDGER (receipts only)

**Receipts / coverage proof ONLY.** Per-source: which concepts were extracted + verbatim anchor handles (≤12 words + timestamp) back into §1 of the source packet. **This is NOT the concept workbench and is NEVER an authoring source** (`GRD-044`). Intelligence lives in the concept registry; meaning lives in the source packets' §3. Author from those, never from here.

Cumulative baseline: `EVRUN-2026-000001 §2A` + `EVRUN-2026-000002` + `EVRUN-2026-000003` + `EVRUN-2026-000005` registries.

---

## `EVSRC-2026-000268` — Ghodsi/Databricks enterprise-AI economics (full_semantic; 0 net-new + ~6 sharpenings) — COVERED
- context-bottleneck: "if you don't get all the context…lots of stupid mistakes" [5:30]; "that one person has all the context in their head" [6:13]
- redesign-before-automate: "we have to change the whole factory floor" [19:20]; "human refactoring problem and process change" [24:34]
- electrification analogy: "replace the steam engine with an electric engine…don't get any productivity" [19:08]
- moats: "seven powers…moes that are not just software" [10:59]; "data is a big moat" [11:49]
- model commoditization: "token factories…just like the cloud" [33:17]; "like an Amazon.com book selling business" [34:36]
- reject: "we already have AGI" [4:04]; "seen a million patients…trillions of dollars" [29:18]
- coverage: 8 clusters in §3 Review 003; keeper = context/process is the bottleneck, not the model.

## `EVSRC-2026-000269` — Michelle Lam Just-in-Time Objectives (full_semantic; ~0 net-new + 1 gap + 1 guardrail) — COVERED
- spork: "combining many functionalities…we get worse results" [0:58]; "homogeneous thinking across the population" [2:05]
- objective candidate: "automatically induced by observing their interactions" [7:15]; "name, a detailed description, and a weight" [10:08]
- candidate set: "not just one valid objective at any given point" [10:50]; "chosen in about 98% of cases" [11:08]
- objective-as-router: "steer the existing generators and evaluators" [12:24]
- generated surfaces: "generates code on the fly and renders it for me" [17:15]; "changed users' processes" [19:03]
- output≠outcome: "the actual outcome we care about is not that feed" [29:33]
- model_legibility_bias: "encode biases…towards tasks a language model can understand" [47:25]
- Loom: "score operator…independently mapping back to the documents" [23:46]
- coverage: 11 clusters in §3 Review 003; keeper = objective organizes the interaction but inferred objective ≠ authority.

## `EVSRC-2026-000270` — Nava Haghighi Ontological Multiplicity (★★ ULTRA; full_semantic; 0 net-new domain objects) — COVERED
- schema=enacted boundary: "how you describe a tree reveals…your fundamental assumptions" [0:57]; "a cut…inside and outside" [4:42]
- own machinery not reality: "You can own semantic machinery…cannot honestly own the world" [Knox]
- shared grammar plural vocabularies: "Federation requires translation, not homogenization" [Knox]; 6-layer model [Knox §3]
- purple zone / ambiguity: "purple zone…ontologically ambiguous state" [11:16]; "when reality doesn't fit the schema, the schema may be wrong" [Knox]
- outlier = ontology signal: "called it an anomaly that I should ignore" [11:36]
- relational subject: "are you an individual or…part of a network of relations?" [5:19]
- rootless-tree recursion: "a rootless tree making another rootless tree" [Knox]
- master guardrail: "plurality of description does not abolish the discipline of truth" [Knox]
- operator note (Review 002): "top 2-3…give it ultra treatment…come back many times"
- coverage: 12 clusters in §3 Review 003 (ultra); keeper = own the grammar of safe coordination, not everyone's reality.

## `EVSRC-2026-000271` — Rippling flat-agent / generated-SQL / EDD (full_semantic; 1 net-new eval cluster) — COVERED
- substrate coherence: "put employee data at the center…the employee graph" [2:46]
- entity resolution: "that name has to be resolved to an employee record…employee ID" [4:12]
- flat agent: "we eliminated the problem by keeping it flat" [5:30]; "domain context…through declarative skills and SOPs" [5:40]
- generic tools: "one get-data method…employee, device, or taxes becomes a parameter" [6:41]
- generated SQL: "the LLM comes up with SQL…we execute the SQL" [7:50]; "data itself is not part of the context window" [8:00]
- statistical evals: "Wilson's confidence interval…one out of one…as low as 20%" [12:07]; "cost, uncertainty, and lag…two out of three" [13:33]
- coverage: 8 clusters in §3 Review 003; keeper = agent gets simpler only when the substrate gets stronger; net-new = statistical eval-sufficiency.

## `EVSRC-2026-000272` — Codex/LangSmith session tracing (light-semantic; near-dup of 260; 0 net-new) — COVERED
- provider-neutral trace: "every Codex session becomes a real trace…turns, tools, tokens, and sub-agents" [4:05]; "same setup for…Claude Code and Cursor" [4:14]
- nested lineage: "show up as a nested child right under the parent turn" [3:18]
- cancelled-run evidence: "even if you cancel the run it should still get uploaded" [3:30]
- instrumentation health: "check that plugin_hooks equals true" [3:37]; "confirm that TRACE_TO_LANGSMITH equals true" [3:51]
- coverage: 4 clusters in §3 Review 003; value = 3-vendor convergence → provider-neutral observability build signal (operator-elevated).

## `EVSRC-2026-000273` — LangChain agent-vocabulary FAQ (semantic-light; vocabulary; 0 net-new) — COVERED
- agent def: "an agent is just an LLM running in a loop…call tools" [0:27]
- RAG: "retrieval augmented generation…open book test" [0:59]
- MCP: "MCP…kind of like a USB-C cable for agents" [1:27]
- compounding error: "one hallucinated fact in step two poisons step three, step four" [2:06]
- HITL: "the agent pauses and waits for a human to approve" [3:39]
- runtime-governance-is-the-product: "keeping it from going completely sideways in production is the hard part" [6:51]
- coverage: 3 clusters in §3 Review 003; value = public-vocabulary map + care-grade delta checksum (operator: too basic).

## `EVSRC-2026-000274` — Cole Medin / Archon harness generalization (full_semantic; ~0 net-new mechanism) — COVERED
- work factory: "a coding harness is not intrinsically about code" [Knox]; Ralph loop code→product-content queue
- claimable work item: "requests the next queue item…handles one product…stops" [Knox]; "if the queue returns no item, the loop terminates" [Knox]
- parallelize items not truth: "each catalog item is independent…run in parallel" [Knox]
- staged generation: "low-cost preview…model scoring…human approval…higher-cost final rendering" [Knox]
- demo-grade: "demonstration and is not production-ready" [Knox]; "local Markdown documents and scripts" [Knox]
- operator note (Review 002): "should OMNI plan for this concept…or sub Archon in"
- coverage: 6 clusters in §3 Review 003; keeper = governed work factory is the reusable asset (own the pattern; Archon replaceable) + staged generation.

## `EVSRC-2026-000275` — ISO 42001 AI Management System (★ governance spine, operator-flagged; full_semantic) — COVERED
- management system: "an AI management system to govern all of this" [0:16]; "not some checklist…a system for managing AI risk continuously" [1:05]; "It's governance. Not model architecture" [1:23]
- govern the use case: "who validated that model? Who monitored it…Who's responsible when it's wrong?" [0:07]
- risk-based controls: "not all risk is equal because not all systems are equal" [2:02]; "data risk…model risks…system level risks…usage risks" [2:17]
- named ownership: "assign AI accountability…If no one is, then it doesn't get done" [3:26]
- risk acceptance: "we don't eliminate all risks…decide to accept certain risks" [3:58]
- supplier oversight: "Supplier, AI, oversight…covered in this section" [4:40]
- NIST/ISO/EU layering: "NIST…voluntary…ISO 42001…certifiable…EU AI Act…this one is law" [6:01]; "complementary layers" [8:09]
- appeals (opening): "A bank denies a loan. No explanation, no appeal" [0:00]
- operator note (Review 002): "must be incorporated at numerous levels"
- coverage: 7 clusters in §3 Review 003; keeper = governance is a continuous operating system + must compile into runtime controls + proof; missing wrapper `AI_management_system`.

## `EVSRC-2026-000276` — IBM AI Code Generator (Bri Kopecki) (full_semantic; Build-OS; ~0 net-new) — COVERED
- translation not writing: "AI didn't learn to write code, it learned to translate it" [1:38]; "it doesn't know, it predicts" [3:53]
- translation≠understanding: "translation isn't the same as understanding" [6:54]; "the illusion of correctness" [8:15]
- illusion (passes tests): "it passes your tests…a vulnerability a junior…would have known to avoid" [7:55]; "55% of AI-generated code contains security vulnerabilities" [6:57]
- human review: "the translator's job isn't done…until a human has reviewed it" [8:54]
- provenance/licensing: "whether it's GPL tainted" [11:08]; "trace where a piece of generated code originated" [10:54]
- placement: "your code doesn't leave your infrastructure if you don't want it to" [10:17]
- coverage: 6 clusters in §3 Review 003; keeper = generated code = change candidate, not proof of understanding; illusion_of_correctness_guard.

## `EVSRC-2026-000277` — IBM 5 AI Myths (Martin Keen) (full_semantic; AI-substrate master law; ~0 net-new domain objects) — COVERED
- sycophancy: "the chatbot may read 'are you sure' as a signal of doubt…change its position" [0:29]
- CoT unfaithful: "does that trace reflect what the model is actually doing internally? It doesn't" [4:33]; "post hoc rationalization" [5:36]
- inference cost: "inference compute will be about two-thirds of all AI compute costs" [7:40]; "10 to 100 times more tokens per query" [8:03]
- context≠DB: "treat this context window a bit like a database" [9:01]; "drop 30 to 60 points between 200,000 and one million tokens" [10:19]
- compounding error: "20 steps is going to be something like 36% reliable" [12:33]; "work well autonomously in short bursts" [13:28]
- capability epoch: "either used to be true…or will be true in the future" [13:49]
- coverage: 7 clusters in §3 Review 003; master law = apparent intelligence ≠ system assurance.

## `EVSRC-2026-000278` — Anthropic platform (Katelyn Lesse + Angela Jiang) (★★ SPINE "DNA of OMNI"; full_semantic; ~0 net-new domain objects) — COVERED
- three-layer stack: "you have knowledge and you have execution, you have coordination" [0:03]; "almost like a meta harness" [0:10]
- tokens not fungible: "give them different jobs…this token is advising versus this token is executing" [0:18]
- roadmap ladder: "move more and more from the knowledge layer to the execution layer…to the coordination layer" [0:39]
- internal=external: "same primitives that are available to everyone" [4:25]; "give any builder the tools…to build whatever they want" [2:33]
- primitives+standards: "skills and MCP…give them out to the rest of the ecosystem" [3:28]; "last mile of custom software…very achievable" [3:11]
- form-factor churn: "really hard to figure out a longlasting form factor" [4:33]
- operator note (Review 002): "another 5/5…top 5 of all videos…DNA of OMNI"
- coverage: 6 clusters in §3 Review 003; keepers = knowledge→execution→coordination stack + internal=external same primitives; the token has a job, the domain has authority.

# EVRUN-2026-000006 · ai-corpus wave-5 — NUGGET-PRESERVATION RESTORE LEDGER

Document type: `evidence_or_ingestion` (analysis-run recovery artifact; part of the `EVRUN-2026-000006` reservoir-contract set alongside `_00_run` · `_concept_registry_and_routing_map` · `_source_anchor_ledger_receipts_only` · `_coverage_matrix`).
Authority: `omni_analysis_nonbinding` (`GRD-036`/`GRD-042`). PROPOSE-ONLY — nothing promoted; §C PAUSED.
Status: `active` (created 2026-07-15, Opus, operator-directed).

> **Why this exists.** A 2026-07-15 operator-directed **nugget-preservation audit** (11 parallel per-source readonly audits: transcript §1 + Knox §3 Review 001 + Opus §3 Review 003 vs the registry) found that Review 003 / the concept registry, while **anchor-clean (0 fabrications — the transcripts WERE genuinely read)**, systematically **dropped or flattened ~60 Knox nuggets** across the wave. The loss is non-random and biased in three directions: **(1) skeptical counterweights / "what-NOT-to-import" cautions**, **(2) concrete named candidate-primitives left un-dispositioned**, **(3) care/healthcare-specific execution governance swept under the "~0 net-new" verdict.** Two losses are worse than flattening: a **net-new guardrail was missed entirely** (274 synthetic-testimonial) and a **safety caution was inverted into an endorsement** (271). This ledger RESTORES every recovered nugget with verbatim-ish Knox phrasing, a disposition, and its home, so downstream authoring (v4 spine · C3.9 · Care wave · Build-OS · guardrail digest) reads a faithful record per `GRD-044`. **The dedup verdict itself ("~0 net-new DOMAIN objects") stands** — these are cautions/sharpenings/primitive-candidates/guardrails, not new domains.

> **Authoring rule reminder (`GRD-044`):** author from the concept registry + THIS ledger → reopen the source packet §3 → verify anchors → reconcile vs canon → write. This ledger is a recovery record, NOT a promotion. Disposition legend: **GUARDRAIL** (route to `06` guardrail digest) · **SHARPEN** (sharpens existing canon) · **REJECT-ADD** (belongs in the recorded REJECT set, `GRD-043`) · **PRIMITIVE-CANDIDATE** (thin named gap; dedup-then-propose) · **CORRECTION** (an existing Review 003 line is wrong/inverted and must be fixed) · **REREAD-FLAG**.

---

## §0 — Audit scorecard (per source)
| src | verdict | dropped/flattened | anchors | most-important restore |
|---|---|---|---|---|
| 268 Ghodsi/Databricks | MINOR-LOSS | 4 | 13/13 real (2 composite-timestamp welds) | anti-identity guardrail |
| 269 Lam / JIT-objectives | MINOR-LOSS | 5 | 5/5 real | personalization-not-universally-desirable (care) |
| 270 Haghighi / ontology ★ | MINOR (near-faithful) | 6 | real; 6/12 clusters Knox-only (by-design) | Reservoirs anti-premature-synthesis |
| 271 Rippling | MINOR-LOSS | 5 | 17 real | **inverted caution "whatever the user sees, the LLM sees"** |
| 272 Codex/LangSmith | MINOR-LOSS | 6 | 8/8 real | atomic-runs vs session-lineage (longitudinal coherence) |
| 273 LangChain FAQ | MINOR-LOSS | 5 | 8/8 real | agent-iteration ≠ enterprise operating model |
| 274 Cole Medin / Archon | **SIGNIFICANT** | 14 | Knox-tagged (transcript not independently mined) | **synthetic-UGC guardrail (net-new, MISSED)** |
| 275 ISO-42001 ★ | MINOR-LOSS | 5 | all real (1 slip) | governance-by-design |
| 276 IBM code-generator | MINOR-LOSS | 4 | all real | "AI lowers implementation cost, not cost of wrong architecture" |
| 277 IBM 5-myths | FAITHFUL-w/-MINOR | 5 | all real | over-refusal counterweight (care safety) |
| 278 Anthropic platform ★★ | **SIGNIFICANT** | ~17 | all real | §AH legacy-healthcare degraded-rails |

**Totals:** 2 SIGNIFICANT-FLATTENING (274, 278) · 8 MINOR-LOSS · 1 FAITHFUL-w/-MINOR · **0 anchor fabrications** · **1 inverted caution (271)** · **1 missed net-new guardrail (274)**.

---

## §1 — Recovered nuggets by source (verbatim-ish Knox phrasing · disposition · home)

### `EVSRC-2026-000268` — Ghodsi/Databricks
- "Don't let MCP, a vector database, an agent framework, or a current UI paradigm become the identity" (+ "don't wait for superintelligence"; "don't attempt the whole 10-yr product first"). → **GUARDRAIL / strategy** (thesis §2 moat + guardrail digest).
- `operator_process_capital` — "a refactored operating process is itself capital." → **PRIMITIVE-CANDIDATE** (BIZOPS / tenant local memory + policy overlays).
- `context_to_capability_compilation` — Knox listed it as a SEPARATE candidate from `organizational_context_externalization`; never dispositioned. → **PRIMITIVE-CANDIDATE** (dedup-or-mint; resolve the omission).
- "Context is not an undifferentiated blob — preserve fact / evidence / assertion / policy / memory / rationale / relationship / authority / prediction / committed-truth." → **REJECT-ADD / SHARPEN** (typed context; epistemic-typing caution).

### `EVSRC-2026-000269` — Michelle Lam / Just-in-Time Objectives
- "Personalization is not universally desirable — some contexts require consistency, standard-of-care presentation, equal treatment, stable legal disclosures, resistance to manipulation." → **GUARDRAIL (care)** — the direct counterweight to importing JIT specialization wholesale.
- "The LLM evaluator is still evidence — it can inherit the objective's error and share generator bias." → **SHARPEN** (eval-governance; pairs with 271).
- "Behavioral-outcome optimization without rights constraints → no manipulative ranking, opacity, compelled participation, or suppression of legitimate minority perspectives." → **GUARDRAIL**.
- "Long-term motivations inferred from passive observation can become paternalistic/manipulative; it does not authorize reordering the user's life or care." → **GUARDRAIL** (extends the ambient-observation/PHI reread flag).
- "Promptability is not governability — steerable systems expose the lever; correction routes update the correct owner, not merely the chat text." → **SHARPEN** (`steerable_default`).

### `EVSRC-2026-000270` — Nava Haghighi / ontological multiplicity ★
- Knowledge Reservoirs "should preserve plural interpretations and their sources rather than prematurely synthesizing them into one authoritative concept." → **SHARPEN (Knowledge Reservoirs doctrine)** — currently only a landing-zone label; lift into a cluster body. **[highest-value 270 restore]**
- "Refusing standards because they carry assumptions" — standards remain useful rails; make assumptions visible and mapped, don't discard. → **REJECT-ADD** (missing from the REJECT list).
- Mapping-relationship-type enum: equivalence / broader / narrower / partial-overlap / context-dependence / conflict / no-known-mapping / historical-supersession. → **SHARPEN** (`semantic_mapping_assertion`).
- "An interlingua with declared limits, not a language empire" / "a multilingual constitutional system, not a master dictionary." → **SHARPEN (framing)** (federation grammar).
- "Noise is not a property of data alone — it depends on the question and the relationship." → **SHARPEN** (missingness/anomaly typing).
- "'Care-native' can become a slogan that hides whose care model"; "don't mistake one medspa workflow for healthcare generally"; "ontology is operating architecture (affects revenue/eligibility/safety)." → **GUARDRAIL / REJECT-ADD** (self-critique edges softened away).

### `EVSRC-2026-000271` — Rippling / flat-agent
- **CORRECTION:** "Whatever the user sees, the LLM sees" was dropped as a *caution* and the raw Rippling claim repeated approvingly in Cluster 3 — **inverting Knox's safety point.** Restore the correction: **model-visible ≠ user-visible; OMNI still requires system instructions / policy / safety constraints / minimum-necessary filtering; context is traceable, not user-mirrored.** → **CORRECTION + GUARDRAIL** (fix Cluster 3).
- "Flat agent, selective context, scoped capability" — context routing, not context dumping. → **SHARPEN**.
- `eval_coverage_debt` → **PRIMITIVE-CANDIDATE** (eval-governance; pairs with `eval_confidence_contract`).
- "What synthetic data misses" + the 5-proof-environment taxonomy. → **SHARPEN** (Build-OS Runtime Proof).
- `skill_acceptance_suite` / `eval_repetition_budget` → **PRIMITIVE-CANDIDATE**.

### `EVSRC-2026-000272` — Codex/LangSmith tracing
- "Atomic runs explain local execution; session lineage explains longitudinal behavior." → **SHARPEN** — the line tying agent tracing to OMNI's **longitudinal coherence**. **[top 272 restore]**
- "Model observability explains generated behavior; workflow observability explains system behavior; trace lineage must cross model / orchestration / authorization / domain-commit seams." → **SHARPEN** (positive design obligation; currently only the negative "trace ≠ correctness" survives).
- "Hierarchy shows who called whom; it does not prove delegation was authorized." → **GUARDRAIL** (nesting ≠ delegation governance).
- Agent-surface breadth: internal-operations / tenant-managed / external-partner agents (not just Codex/Claude-Code/Cursor). → **SHARPEN** (federation breadth; C3.9-relevant).
- Trace 3-tier: operationally-captured / safely-persisted / viewer-specific projection. → **SHARPEN**.
- Partial-trace fields: `cleanup_status` / `finalization_reason` / `trace_completeness`. → **SHARPEN**.

### `EVSRC-2026-000273` — LangChain agent-vocabulary FAQ
- "Agent iteration is an execution technique, not the enterprise operating model" — the decide→act→observe loop does NOT replace OMNI's governed Sense→Resolution→Plan/Commit→Act/Fulfill→Prove loops. → **SHARPEN / GUARDRAIL** (guards the two-loop constitutional model). **[top 273 restore]**
- "Connectivity becoming universal makes authority more valuable, not less" (tool sprawl / hidden write paths / cross-tenant leakage → Connector Gateway / registry / capability envelopes / kill-switches). → **SHARPEN**.
- Three-actor split: AI proposes/drafts/flags · human authority commits irreversible · **deterministic systems validate invariants / transact / preserve lineage** (the deterministic third leg was lost). → **SHARPEN**.
- "RAG is one strategy among keyword / vector / graph / hybrid / reranked / long-context / cached; embeddings & indexes are access paths, not truth stores." → **SHARPEN**.
- "Evals ≠ verification" — the 11-kind assurance taxonomy (deterministic / invariants / policy-safety / retrieval-grounding / tool-call / trajectory / stochastic-repetition / human-expert / dual-control / production-monitoring / outcome-evidence). → **SHARPEN**.

### `EVSRC-2026-000274` — Cole Medin / Archon ★ SIGNIFICANT
- **"A synthetic spokesperson must never silently become a synthetic patient testimonial."** Knox tagged **promote-as-guardrail**; tied to healthcare / medspa / weight-loss / hormone marketing (OMNI's literal wedge). **Absent from Review 003 AND the wave-5 guardrail tally.** → **GUARDRAIL (net-new — ADD TO TALLY).** **[top 274 restore]**
- Skills ≠ capability (governed-declaration vs granted-authority). → **SHARPEN**.
- Operator-shell (the harness surface an operator drives) → **SHARPEN**.
- "Glass factory" (observable/inspectable work-factory) → **SHARPEN**.
- +10 flattened care-safety / authority-event items in the work-factory (queue/approval/budget/lineage governance detail). → **SHARPEN** (reopen §3 for the full list before spine/Care use).
- Note: this source's Review 003 was formalized off Knox **without independent transcript mining** (all `[Knox]`-tagged anchors). Transcript is full/rich — **flag for a transcript-native re-read** if 274 becomes load-bearing.

### `EVSRC-2026-000275` — ISO-42001 AI Management System ★
- "Late compliance review cannot repair a system whose identity, authority, evidence, appeal were omitted from architecture" (**governance-by-design**). → **GUARDRAIL / spine** — the load-bearing justification for Nick's "numerous levels" directive; zero landing currently. **[top 275 restore]**
- Governed-improvement pipeline (positive): runtime evidence → finding → analysis → proposed change → validation → authorized release → monitored deploy = candidate→commit. → **SHARPEN** (currently only survives as the REJECT "continual-improvement-as-autonomous-self-modification").
- "Certification may open the enterprise door; trustworthy execution must justify staying inside" (procurement / insurer / investor / regulatory readiness value). → **SHARPEN** (currently only the cert-as-theater reject survived).
- The requirement→OMNI-home crosswalk (12-row table: Scope→use-case registry; AI policy→policy registry/§C/Settings; Risk→governance profile/Polaris; Validation→Build-OS; Change→Build-OS+Release; Monitoring→Runtime+clinical; Supplier→Tool/Connector governance; Internal audit→assurance; Management review→governance body+decision ledger). → **SHARPEN (reusable routing artifact)**.
- Care-loop nuance: "governance surrounds clinical AI without replacing clinical authority." → **SHARPEN**.

### `EVSRC-2026-000276` — IBM AI Code Generator
- "AI lowers implementation cost. It does not lower the cost of choosing the wrong architecture" + "the first slice is explicitly not preauthorized; it requires an allowed / allowed-with-blockers gate and boundary evidence before expansion." → **GUARDRAIL (Build Entry Gate)** — directly relevant to the live first-steel-slice / C4 gate state. **[top 276 restore]**
- The 12 added trust-questions + "trust requires custody, authority, behavior, and reversibility — not only training-data answers." → **SHARPEN**.
- 2nd core takeaway: "the enterprise asset is not the code generator — it is the governed compilation chain from objective to verified release." → **SHARPEN**.
- First-steel-slice invariants: "messaging cannot mutate clinical truth; scheduling retains commit ownership; audit fields remain complete." → **SHARPEN**.

### `EVSRC-2026-000277` — IBM 5 AI Myths
- "An unnecessary refusal can delay care; refusal is not inherently safe" (**over-refusal counterweight**). → **GUARDRAIL (care safety)** — the refusal doctrine is currently one-sided. **[top 277 restore]**
- Failure modes: "harmful-but-factually-correct action" + "silent failure." → **SHARPEN** (trajectory-risk).
- "Repetition is not independence." → **SHARPEN** (`answer_stability_under_challenge_eval`).
- Route-specific care metrics: false-reassurance rate, missed-escalation rate (not generic "workflow-specific"). → **SHARPEN**.
- "Dual control for the highest-consequence transitions." → **SHARPEN**.

### `EVSRC-2026-000278` — Anthropic platform ★★ SIGNIFICANT ("DNA of OMNI")
- **§AH** "Computer use can bridge a missing API; it must not masquerade as a reliable transactional interface" — legacy-healthcare connectivity via typed **degraded rails** ([35:48]; the *only* explicitly-healthcare execution requirement the source volunteered). → **GUARDRAIL** (Federation / vendor_integration / degraded_mode). **[top 278 restore]**
- **§U** "Its identity, delegation, and output authority must not disappear behind the function signature" — `agent_as_capability_adapter` (agent-as-capability hides authority). → **SHARPEN** (§C / A2A / Federation-critical).
- **§AF** "Reflection may propose learning; the memory owner determines what survives" — gated memory-writing / contamination guardrail. → **GUARDRAIL**.
- **§AG** "Delete scaffolding that compensates for weak steering; preserve controls that encode authority and safety" — guardrail against "delete the harness as models improve." → **GUARDRAIL**.
- **§F** "Capability envelopes prevent privilege flattening" — same primitives ≠ same permissions / data / autonomy (missing from the operator-flagged DNA cluster). → **SHARPEN** (into Cluster 3).
- **§J** "An org-level harness feels simple only because identity/context/permissions/runtime beneath it are rigorous" + non-human-actor governance (visible identity, owning operator, revocation, **non-deceptive presentation**). → **SHARPEN**.
- **§L** "A cache hit is success only when cached context is still authorized, coherent, current" — `cache_scope_key` / `cache_invalidation_event` / `cache_provenance_record`. → **SHARPEN**.
- **§M** "Context management is preserving coherent work while externalizing durable state" — AFFIRM "conversation is execution context, not canonical memory." → **SHARPEN**.
- **§N** "Move computation to the data; move only the governed result + evidence into context." → **SHARPEN** (Knox called it "a quiet but important architectural gem").
- **§R** "Authority and proof tell it what success is allowed to mean" — governed work-order contract needs subject / authority / evidence / commit-owner (outcome + budget is insufficient). → **SHARPEN** (pairs with 274 `claimable_work_item`).
- **§T** "Care still requires non-fungible authority and meaning at every outlet" (the electricity-metaphor rebuttal). → **SHARPEN**.
- **§V** "Be vendor-portable at the control plane and model-specific at the execution plane" — `model_family_harness_profile`. → **SHARPEN**.
- **§W** "Model routing without harness routing is incomplete" — route evaluated `agent_bundle`s, not naked models. → **SHARPEN**.
- **§Z** "One substrate can support primitive, managed-runtime, and outcome buyers without three architectures" (abstraction-tier product model). → **SHARPEN** (BIZOPS / product).
- **§AC** "Govern AI spend by outcome, risk, and workload — not by one undifferentiated token ceiling." → **SHARPEN**.
- **§AD** "Route by complexity AND consequence — not complexity alone" (a simple task can be high-consequence: PHI / controlled-substance). → **SHARPEN**.
- **§E** Radius topology: Build → Operate → First-party → Federated → External (one primitive substrate, differentiated governance by radius). → **SHARPEN**.
- **§D** "Don't collapse coordination into CNS — Build-OS / security / BIZOPS / Accountability also consume the coordination layer." → **SHARPEN**.
- **§AB** "Outcome density must be OMNI's" — the best workflow may no-op / suppress a message (only the token-economics reject survived). → **SHARPEN**.

---

## §2 — Cross-source recovered guardrails (route to `06` guardrail digest — PROPOSE)
The audit recovers a **care-safety / anti-lock-in guardrail cluster** the registry under-counted (registry had only `model_legibility_bias` + `illusion_of_correctness_guard`):
1. **synthetic-testimonial guardrail** (274) — a synthetic spokesperson must never silently become a synthetic patient testimonial. *(net-new; was missed entirely)*
2. **over-refusal / refusal-is-not-safe** (277) — unnecessary refusal can delay care.
3. **personalization-is-not-universally-desirable** (269) — some care needs consistency / standard-of-care / manipulation-resistance.
4. **governance-by-design** (275) — late compliance cannot repair an architecture missing identity/authority/evidence/appeal.
5. **nesting ≠ delegation-governance** (272) — call-hierarchy does not prove authorization.
6. **gated memory-writing** (278 §AF) — reflection proposes; the memory owner decides what survives.
7. **preserve-authority-scaffolding** (278 §AG) — don't delete controls that encode authority/safety as models improve.
8. **degraded-rails honesty** (278 §AH) — computer-use bridging must not masquerade as a reliable transactional interface.
9. **anti-identity** (268) — don't let a tool/framework/UI paradigm become OMNI's identity.
10. **behavioral-optimization-needs-rights-constraints** (269).
11. **CORRECTION (271)** — restore "model-visible ≠ user-visible; minimum-necessary filtering" (an inverted caution, not a new guardrail).

## §3 — Impact on downstream consumers
- **v4 spine author:** the recovered cautions materially change three spine inputs — 275 governance-by-design (why-embed-now), 278 §F/§U/§AH (privilege-parity + agent-authority + healthcare-execution), 273 agent-loop ≠ operating-model. Reopen this ledger + the source §3s before authoring.
- **C3.9 plastics/medspa:** 274 synthetic-testimonial guardrail + 272 agent-surface breadth + 278 §E radius topology are direct inputs.
- **Care wave (live):** 269 personalization-not-universal, 277 over-refusal, 271 minimum-necessary filtering are care-safety brakes to carry.
- **Build-OS:** 276 first-slice restraint + 271 eval-coverage-debt + 278 §R work-order-contract-shape.
- **Guardrail digest:** §2 cluster above.

## §4 — Change log
- `2026-07-15` — created (Opus, operator-directed nugget-preservation audit; 11 parallel readonly per-source audits). Recovery record only; PROPOSE-ONLY (`GRD-036`); nothing promoted; §C PAUSED. Registry guardrail tally corrected + §7 pointer added in the same pass. Per-packet §3 write-back of these recovered nuggets is a separate step pending operator scope confirmation.

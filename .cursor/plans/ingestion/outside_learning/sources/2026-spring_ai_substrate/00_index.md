# AI-Substrate Trove (Spring 2026) — Ingestion Index

Document type: `evidence_or_ingestion` (manifest / access map for the IBM/Stanford AI video trove)
Authority: non-binding evidence index. Binds nothing until synthesized + routed per `07_evidence_ingestion_ledger.md`.
Status: `landed` (47 videos + 1 strategy thread filled + digested; evidence rows `D0AI-EVD-001`/`-002`; frame ratified `D0THES-DEC-034`; next = routing spine `REV-176`)
Domain(s): architecture_governance, evidence_processing, ai_substrate
Source-of-truth relationship: access map / table-of-contents for `videos/vNN.md`. Companion to the evidence ledger rows (`D0AI-EVD-NNN`) and the eventual synthesis map. Mirrors the Mindbody ingestion precedent (`.cursor/plans/ingestion/competitor_product_evidence/mindbody/`).
Created: 2026-06-03
Related: `HANDOFF_2026-06-03_surface_plane_and_pre_ai_immersion.md` (`REV-178`), `omni_thesis_v2_2026-05-26.md` (§8 / §9 / §9.1 / §12.8), `ai_substrate_ingestion_staging_78db612c.plan.md`

---

## What this is

The spring-2026 AI/agentic/MCP trove: ~47 IBM + Stanford YouTube videos on AI implementation + build concepts, plus strategic Nick ↔ ChatGPT (Knox) back-and-forth threads. Each video lands as **one file** with two sections — the **verbatim transcript** and **ChatGPT's distillation** of it. Strategy threads land in `knox_strategy/`. This is raw evidence: it is preserved verbatim and citable forever, but it **binds nothing** in the thesis until it is synthesized against the within/on/ongoing AI-substrate frame and explicitly routed.

## How to fill (Nick)

For each video: open `videos/vNN.md`, paste the transcript under section 1, paste ChatGPT's distillation under section 2, save. The metadata lines (title/source/url) are optional — leave `TK` and I'll backfill during the landing pass. Tell me when a batch is in (e.g. "v01–v10 done").

## How we access it later

- This index = the table of contents (read a video by its number).
- Each video gets a `D0AI-EVD-NNN` row in `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md` (citable provenance).
- The synthesis map will cite `vNN §1`/`§2` precisely.
- A navigation map (high-density line ranges) is added during landing if density warrants it (Mindbody precedent).

## Status legend
`raw_unprocessed` = file created, awaiting paste · `filled` = transcript + distillation pasted · `landed` = evidence row created · `synthesized` = carried into the synthesis map.

> **EVSRC mapping (2026-06-06):** this closed collection now lives under `sources/` and occupies `EVSRC-2026-000001 … 000047` in the lane registry `../../00_index.md` — `v01`=`000001`, `v02`=`000002`, … `v47`=`000047`. The `vNN` ids below remain the **citation keys** (used across `REV-176` / guardrails / `inventory/` / evidence ledger); EVSRC is the registry identity. New (post-spring) sources start at `000048`.

## Video manifest

| # | file | title | source_org | topic tags | status |
|---|---|---|---|---|---|
| 01 | `videos/v01.md` | Enhancing LLM Applications (Beyond LLM) | Stanford | agentic, MCP, RAG, evals, autonomy-levels, multi-agent | landed |
| 02 | `videos/v02.md` | Is RAG Still Needed? Choosing the Best Approach | IBM | RAG, long-context, context-router, silent-failure | landed |
| 03 | `videos/v03.md` | Is RAG Still Needed? (dup of v02) | IBM | RAG, long-context, context-router, signal-vs-noise | landed |
| 04 | `videos/v04.md` | How RAG, GraphRAG & Context Engineering Improve AI | IBM | context-engineering, GraphRAG, agentic-RAG, governance | landed |
| 05 | `videos/v05.md` | What AI Agent Skills Are and How They Work | IBM | agent-skills, procedural-memory, MCP, progressive-disclosure | landed |
| 06 | `videos/v06.md` | CLI vs MCP: How Agents Choose the Right Tool | IBM | CLI, MCP, tool-selection, context-cost | landed |
| 07 | `videos/v07.md` | A2A vs MCP: Agent Communication Explained | IBM | A2A, MCP, agent-cards, multi-agent, interop | landed |
| 08 | `videos/v08.md` | MCP vs API: Simplifying Agent Integration | IBM | MCP, REST-API, dynamic-discovery, capability-layer | landed |
| 09 | `videos/v09.md` | RAG vs Fine-Tuning vs Prompt Engineering | IBM | prompt-engineering, RAG, fine-tuning, optimization-router | landed |
| 10 | `videos/v10.md` | RAG vs CAG: Solving Knowledge Gaps | IBM | RAG, CAG, case-cache, hybrid-context, invalidation | landed |
| 11 | `videos/v11.md` | What is a Vector Database? | IBM | vector-db, embeddings, semantic-search, retrieval-index | landed |
| 12 | `videos/v12.md` | RAG vs Agentic AI: Connecting Data | IBM | agentic-AI, RAG, context-engineering, hybrid-retrieval | landed |
| 13 | `videos/v13.md` | 7 AI Terms You Need to Know | IBM | glossary, agents, RAG, MCP, vector-db, MoE | landed |
| 14 | `videos/v14.md` | Multi AI Agent Systems: When One Brain Isn't Enough | IBM | multi-agent, verification, disagreement-signal, safety | landed |
| 15 | `videos/v15.md` | The Four Types of Memory Every Agent Needs | IBM | agent-memory, working, semantic, procedural, episodic | landed |
| 16 | `videos/v16.md` | RAG's Evolution: From Retrieval to Agentic | IBM | RAG, agentic-RAG, context-router, reranking | landed |
| 17 | `videos/v17.md` | Why AI Agents Need an Operating System | IBM | agent-OS, orchestration, memory, tools, guardrails, observability | landed |
| 18 | `videos/v18.md` | CAG vs Long Context | IBM | CAG, long-context, KV-cache, context-economics | landed |
| 19 | `videos/v19.md` | Building a Team of AI Agents | IBM | multi-agent, role-contracts, supervisor, critic | landed |
| 20 | `videos/v20.md` | Why AI Agents Break Zero Trust at the Last Mile | IBM | zero-trust, agent-identity, delegation, ABAC, capability | landed |
| 21 | `videos/v21.md` | OWASP's Top 10 Ways to Attack LLMs | IBM | OWASP, LLM-security, prompt-injection, excessive-agency | landed |
| 22 | `videos/v22.md` | Agent Control Planes (Mixture of Experts) | IBM | control-plane, AgentOps, observability, policy, kill-switch | landed |
| 23 | `videos/v23.md` | First Findings from Project Glasswing | IBM | vuln-harness, agent-security, supply-chain | landed |
| 24 | `videos/v24.md` | AI Skills Security / MELLEA / Deployment | IBM | skills-compiler, registry, enterprise-deploy, zero-day | landed |
| 25 | `videos/v25.md` | Agentic Consent Explained (transcript-only) | IBM | agentic-consent, delegation, scope, revocation, JIT | landed |
| 26 | `videos/v26.md` | Your Certs Are Expiring: Cert Management | IBM | PKI, machine-identity, cert-lifecycle, automation | landed |
| 27 | `videos/v27.md` | How Agentic AI Transforms Maintenance/Asset Decisions | IBM | system-of-intelligent-action, closeout, copilot | landed |
| 28 | `videos/v28.md` | MCP vs ADK: How Agents Connect & Work Together | IBM | MCP, ADK, orchestration, tools, runner-pattern | landed |
| 29 | `videos/v29.md` | Agentic Consent Explained (full; dup of v25) | IBM | agentic-consent, delegated-authority, JIT, revocation | landed |
| 30 | `videos/v30.md` | Synthetic Monitoring Explained | IBM | synthetic-monitoring, golden-paths, CI/CD, reliability | landed |
| 31 | `videos/v31.md` | Q-Day Explained: Quantum Threat to Cryptography (transcript-only) | IBM | quantum, PQC, harvest-now-decrypt-later, long-lived-data | landed |
| 32 | `videos/v32.md` | Granite 4.1 / Composable Enterprise AI | IBM | composable-AI, specialist-models, orchestration, cost-governance | landed |
| 33 | `videos/v33.md` | Why AI Models Pause to Think: Test-Time Compute | IBM | test-time-compute, reasoning-budget, model-routing | landed |
| 34 | `videos/v34.md` | Post-Quantum Security: Lattice Cryptography (transcript-only) | IBM | PQC, lattice, CBOM, crypto-agility, inventory | landed |
| 35 | `videos/v35.md` | How to Pass Context in an Agentic AI Flow | IBM | context-engineering, MCP, delegation, context-envelopes | landed |
| 36 | `videos/v36.md` | AI Models as a Service (MaaS) | IBM | model-gateway, MaaS, governance, PHI-privacy, observability | landed |
| 37 | `videos/v37.md` | Top 10 Security Risks in AI Agents | IBM | OWASP, agent-security, goal-hijack, tool-misuse, memory-poisoning | landed |
| 38 | `videos/v38.md` | What is Agentic Security Runtime? | IBM | runtime-security, dynamic-credentials, OAuth2/CIBA, non-human-identity | landed |
| 39 | `videos/v39.md` | Personal VPNs: Encryption Myths (transcript-only) | IBM | trust-boundaries, encryption, metadata-leakage | landed |
| 40 | `videos/v40.md` | What is Human In The Loop with AI? | IBM | HITL, HOTL, HOOTL, RLHF, autonomy-graduation | landed |
| 41 | `videos/v41.md` | Agentic Runtime Security: Non-Human Identities (transcript-only) | IBM | agentic-security, non-human-identity, IAM, zero-trust, audit | landed |
| 42 | `videos/v42.md` | What Are Hierarchical AI Agents? | IBM | hierarchical-agents, context-packets, decomposition, tool-scope | landed |
| 43 | `videos/v43.md` | LLM as a Judge: Scaling AI Evaluation | IBM | LLM-as-judge, evals, rubrics, bias-checks, runtime-proof | landed |
| 44 | `videos/v44.md` | Why Agentic AI Fails: Loops, Planning Errors | IBM | failure-modes, infinite-loops, plan-validation, least-agency | landed |
| 45 | `videos/v45.md` | Build, Reuse, or Hybrid? Orchestration | IBM | orchestration, build-vs-reuse, governance-fabric, vendor-boundaries | landed |
| 46 | `videos/v46.md` | LLMjacking: Stolen AI API Keys | IBM | LLMjacking, api-key-security, cost-abuse, runtime-security | landed |
| 47 | `videos/v47.md` | Apple's New CEO & How AI Understands Intent (mixed) | IBM | model-routing, execution-economics, capability-envelopes | landed |

> More than 47 videos? Add `v48.md`+ and rows here.

## Knox strategy threads (Nick ↔ ChatGPT back-and-forth)

Important strategic back-and-forth (the "what OMNI needs" reasoning), kept SEPARATE from the per-video distillations. Home: `knox_strategy/`. One coherent thread per file; add `thread_02.md`+ as needed.

| # | file | title | topic | status |
|---|---|---|---|---|
| 01 | `knox_strategy/thread_01.md` | AI-substrate pivot strategic debrief | does the corpus change OMNI; how to incorporate; agentic scope justification | landed |

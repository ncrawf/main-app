# EVRUN-2026-000001 · ai-corpus — COVERAGE MATRIX

> Which of the 42 June sources (EVSRC-000048…000089) are represented in the concept registry (`…_concept_registry_and_routing_map.md`). The matrix — not an assumed count — determines the Phase-3 gap set. Status: `covered` (routed into registry clusters B1-B6) · `gap` (not yet concept-extracted) · `weak` (thin coverage, revisit).
> No re-check of `covered` sources (we trust the B1-B6 subagent extractions). Gap sources get the SAME deep read standard (full §1+§3, no light reads), registry-first.

## Summary
- **Covered: 31** (B1-B6 + G7 + G8 + G9 050/052/053/067) · **Gap: 11** · **Weak: 0** · **Total: 42**
- **G7 dev-substrate · G8 business-model · G9 customer/voice DONE** (registry-first). 050 voice = 21 clusters (spine); 052 Senra = operator-philosophy (watch/no-op). Remaining gap batches: G10 (049/051/066/074 embodied/compute) · G11 (068[OpenEvidence flag]/048/061 care-adjacent+keynotes) · G12 (075/076/078/082 IBM explainers).

## Covered (19) — already in the registry
| EVSRC | source | batch |
|---|---|---|
| 000059 | LangChain Chase — context engineering | B6 |
| 000060 | OpenAI Altman — core AI subscription | B5 |
| 000062 | LangChain Chase — ambient agents / inbox | B6 |
| 000064 | Google Jeff Dean — coming transformations | B5 |
| 000065 | OpenAI Dan Roberts — test-time compute | B5 |
| 000069 | Mistral Mensch — open-sourcing AI | B5 |
| 000070 | Anthropic Daniela Amodei — trust/safety | B5 |
| 000071 | Andrew Ng — agentic workflows | B6 |
| 000072 | Zapier Knoop — workflow automation | B6 |
| 000079 | IBM Crume — security & AI governance | B4 |
| 000080 | IBM Crume — AI attacks | B4 |
| 000081 | IBM Crume — zero-click attacks | B4 |
| 000083 | Promptlys — orchestration paradox | B6 |
| 000084 | Karpathy — code agents / autoresearch | B1 |
| 000085 | Karpathy — vibe→agentic engineering | B1 |
| 000086 | Brockman — human attention bottleneck | B1 |
| 000087 | Naveen Rao — brain vs GPU | B2 |
| 000088 | Demis Hassabis — three-quarters to AGI | B2 |
| 000089 | Boris Cherny — why coding is solved | B3 |

## Gap (23) — Phase-3 deep concept extraction needed, grouped by theme batch
| batch | EVSRC | source | provisional theme |
|---|---|---|---|
| **G7 dev-substrate / tooling** | 000054 | Cursor + Fireworks — Composer RL infra | agent harness / RL-infra / eval |
| | 000058 | Warp Lloyd — terminal as AI workbench | agent workbench / Build-OS |
| | 000077 | IBM Keen — LangChain vs LangGraph | orchestration-framework vocabulary |
| **G8 business-model / vertical-SaaS / enterprise** | 000055 | Profound Cadwallader — agent-led growth | GTM / agent-led growth |
| | 000056 | Serval Stauch — rebuilding IT in AI age | enterprise IT rebuild |
| | 000057 | Pace Cuffe — vertical SaaS + AGI | vertical-SaaS strategy |
| | 000063 | Sierra Bret Taylor — AI software business models | business-model / §2 foil |
| | 000073 | ServiceNow CJ Desai — enterprise AI integration | enterprise integration |
| **G9 customer-sensing / voice / interface** | 000050 | ElevenLabs Staniszewski — voice interface | voice surface / §7.7 |
| | 000052 | David Senra — mute the world | attention / focus (watch) |
| | 000053 | Listen Labs Wahlforss — customer AI | customer research / sensing |
| | 000067 | Listen Labs Juengermann — AI customer research | customer research / sensing |
| **G10 embodied / physical / compute / neuro (macro)** | 000049 | Waymo Dolgov — 20M rides autonomy | autonomy / §B macro |
| | 000051 | Neuralink DJ Seo — brains and AI | neuro / §B horizon |
| | 000066 | Crusoe Lochmiller — datacenter as compute unit | compute economics / §B |
| | 000074 | NVIDIA Jim Fan — robotics end game | robotics / §10 horizon |
| **G11 care-adjacent + keynotes** | 000068 | OpenEvidence Ziegler — doctors' collective wisdom AI | clinical-AI adjacency (CARE-RELEVANT — flag spine-check) |
| | 000048 | Sequoia AI Ascent 2026 keynote | multi-speaker keynote |
| | 000061 | Sequoia AI Ascent 2025 keynote (trillion-dollar) | multi-speaker keynote |
| **G12 foundational IBM explainers** | 000075 | IBM McHugh/Olende — what is an AI stack | AI-stack vocabulary |
| | 000076 | IBM Keen — LLM vs SLM vs FM | model-class vocabulary |
| | 000078 | IBM Keen — 10 use cases for AI agents | agent use-case vocabulary |
| | 000082 | IBM Keen — AI periodic table | AI taxonomy vocabulary |

## Phase-3 rule
Each gap source: dispatch a subagent that reads **§3 + §1 verbatim IN FULL** (no light reads, same standard as B1-B6); harvest concept-level OMNI gems → merge/add registry clusters with `§1A` anchors + downstream homes + stale-vs-v3 + promote/watch/reject. Receipts (if any) go to the anchor ledger; the **registry is the deliverable**. Escalate any source that proves spine-grade (esp. 000068 OpenEvidence — care-adjacent). Batch-and-commit per theme (resumable).

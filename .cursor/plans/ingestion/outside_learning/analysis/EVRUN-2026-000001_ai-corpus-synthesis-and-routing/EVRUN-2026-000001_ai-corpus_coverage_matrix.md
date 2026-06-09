# EVRUN-2026-000001 · ai-corpus — COVERAGE MATRIX

> Which of the 42 June sources (EVSRC-000048…000089) are represented in the concept registry (`…_concept_registry_and_routing_map.md`). The matrix — not an assumed count — determines the Phase-3 gap set. Status: `covered` (routed into registry clusters B1-B6) · `gap` (not yet concept-extracted) · `weak` (thin coverage, revisit).
> No re-check of `covered` sources (we trust the B1-B6 subagent extractions). Gap sources get the SAME deep read standard (full §1+§3, no light reads), registry-first.

## Summary
- **Covered: 42 / 42 — CORPUS COMPLETE** (B1-B6 + G7 + G8 + G9 + G10 + G11 + G12) · **Gap: 0** · **Weak: 0**
- **ALL 12 batches DONE** (registry-first, full §3+§1 reads per G4). Highlights: ★068 OpenEvidence = highest care-adjacent authority (clinical-evidence + clinician-wisdom reservoir spine; FWREG-006/007 anchor, reread MANDATORY at contract); 050 voice = 21-cluster spine surface; 049/074 = safety-case/sim/physical-API spine; 063/057/061 = outcomes/services-as-software + agent-economy; 053/067 = human-context sensing reservoir.
- **G12 (075/082/076/078 IBM explainers) = Lens-B teaching vocabulary, AFFIRM-only, 0 net-new spine/primitives** (OMNI delta: authority/commit family IBM taxonomies omit). 052 Senra + 051 Neuralink + 066 Crusoe correctly tiered watch/no-op.
- **NEXT: Phase 5 — declare thesis-ready; contract-input note (esp. FWREG-006/007 clinical-evidence reservoir); hand to v4 thesis plan.**
- **Preservation pass (2026-06-08) + framework correction (2026-06-09):** full per-source deep reads now live in **each Source Packet's §3 (`Review 003 — Opus deep-read extraction`)** — the framework-native home (template §3 review log), co-located with the Knox §3 Review 001. (The 2026-06-08 attempt used per-batch `extractions/` side-files; that was a bolt-on tier not in the `GRD-044` four-role contract — dissolved 2026-06-09, content folded into the source files, folder deleted.) Registry G12 row re-expanded from 1 collapsed row → 3 rows (§B-substrate vocab / model-tier routing / authority-commit-family delta). All 23 gap sources carry §3 Review 003; registry = cross-source synthesis; nothing lives only in transcripts.
- **Spine-source Review 003 backfill (2026-06-09):** the 15 high-yield spine B-sources (which previously had Knox §3 Review 001 + registry rows but NO Opus formal §3 Review 003) now carry Review 003 — **084/085** (Karpathy), **086** (Brockman), **088** (Hassabis), **059/062** (Chase), **070** (Anthropic), **071** (Ng), **079/080/081** (IBM security trio), **087** (Rao — CNS dynamic-neural origin), **064/065** (Dean/Roberts inference-budget), **089** (Cherny — loops spine + builder-optimism counter-doctrine). All §4 pointers filled (EVRUN + concept_registry + anchor_ledger). **38/42 sources now carry §3 Review 003** (23 gap + 15 spine B); remaining 4 covered-only without R003: 060/069/072/083 (lower-yield — registry rows suffice). Registry tier actions flagged in-file: elevate "CNS as live dynamic system" to ★spine w/ 087 primary; bind 088/049/074/054 learned_simulator family; pair-bind 070/079/080/081 security spine; 089 builder-optimism = counter-doctrine 070/079-081/085 must win in clinical/PHI/payment.

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

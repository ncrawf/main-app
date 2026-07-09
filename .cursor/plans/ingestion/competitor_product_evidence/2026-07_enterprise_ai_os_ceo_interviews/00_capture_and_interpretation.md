# Evidence Capture — Enterprise-AI-OS CEO Interviews (2026-07)

Document type: `evidence_capture` (Evidence Plane / `competitor_product_evidence` lane) · Authority: `analysis_nonbinding` / `evidence_or_ingestion` (`GRD-036` capture-broad-promote-gated). **Binds nothing. Not OMNI truth until promoted through a destination home's review gate.**
Lane rationale (`GRD-037` lane=provenance): provenance = **external CEO strategic interviews** (comparator/competitor companies). Filed by source family, not by topic; concepts are topic-tagged at the row level.
Trust posture (`GRD-039`): **interested sources — CEO positioning on live TV/stage. High-signal PRESSURE, hostile-by-default, NOT truth.** Learn freely; process-as-data; never execute/adopt without the destination gate.
Captured: 2026-07-03 (provided in-session by Nick during C3.8/G1b). Analyst: grounded agent (Opus), C3.8 manual G1b run.
> **★ CLEANUP MARKER (Nick + Knox, 2026-07-03) — LANE CORRECTED 2026-07-08.** CEO transcripts were provisionally filed here as competitor/market-strategy evidence. **★ OPERATOR CORRECTION 2026-07-08: these are CEO strategic INTERVIEWS — the SAME genre as the wave-3 `outside_learning` corpus (Satya `000201`, Ng `000232`, Levie `000225`, Kilpatrick `000241`, Patel `000244`), NOT competitor product evidence.** They have been **re-homed to `outside_learning` and materialized as EVSRC source packets `247–250`** (part of `EVRUN-2026-000003` wave-3). This file is now the **C3.8 interpretation-v1 + capture-index**; the immutable source packets live in `outside_learning/sources/2026-07_wave-3/`.

Status: `captured_temporary` → **materialized + PROCESSED as `outside_learning` EVSRC sources 2026-07-08** (`247–250`, Review 003 written) — consumed as **corroboration** by `v4_C3_8_G1b_source_concept_reality_map.md` §CORR. **Owed status:** (a) raw-transcript paste into §1 of each EVSRC = **still OWED** (transcripts were not preserved; re-fetch from the URLs below); (b) global `EVSRC` id assignment = **DONE (`247–250`, no collision)**; (c) catalog row + read-graph note at promotion = pending. This file = **capture-index + interpretation-v1** (prior analysis to *formalize* into each EVSRC's §3 Review 003 — NOT to author from).

> `GRD-040` note: ideally source(raw)/index/analysis are separate objects. This single file is a proportionate manual capture during a live gate; when the evidence lane formalizes video ingestion, split into: raw `EVSRC` source files + `00_index.md` registry rows + an `EVRUN` analysis run. Flagged, not faked.

---

## Source registry (materialized as `outside_learning` wave-3 EVSRC packets 2026-07-08)
| Ref | EVSRC (outside_learning wave-3) | Speaker / role | Venue | URL | Provenance/type |
|---|---|---|---|---|---|
| CEO-KARP | **`EVSRC-2026-000247`** | Alex Karp — Palantir co-founder/CEO | CNBC interview | https://www.youtube.com/watch?v=0A3sGymV6kY | frontier/enterprise CEO interview; live-TV positioning |
| CEO-DARIO | **`EVSRC-2026-000248`** | Dario Amodei — Anthropic CEO | "Inside Anthropic" interview | https://www.youtube.com/watch?v=x2VHFgyawPE | frontier-lab CEO; long-form interview |
| CEO-ALTMAN | **`EVSRC-2026-000249`** | Sam Altman — OpenAI CEO | Stanford CS class (guest) | https://www.youtube.com/watch?v=F_7M4Hc-usM | frontier-lab CEO; class Q&A |
| CEO-JENSEN | **`EVSRC-2026-000250`** | Jensen Huang — NVIDIA CEO | Stanford class (guest) | https://www.youtube.com/watch?v=tsQB0n0YV3k | compute-platform CEO; class Q&A |

*Each EVSRC §3 links back to the matching §CEO-* interpretation below. ✅ 2026-07-08: §1 raw transcripts pasted + §3 Review 003 written (this interpretation-v1 formalized against them; ~0 net-new — grounding).*

---

## Extracted concepts + interpretation (versioned; `GRD-042` reinterpretation-expected)
*(Interpretation v1, 2026-07-03, grounded agent. Confidence: high-signal but interested-source; corroborative, not authoritative.)*

### CEO-KARP (Palantir) — axis 2 (ownership) ★, axis 1, `GRD-028`, `GRD-033`
- Ownership questions front-and-center: "who controls the models / weights / value of your business?"; "own the means of production — compute, models, data stack, alpha."
- **Ontology = IP-boundary/safety layer**: "makes an LLM safe and useful… doesn't touch your underlying data… prevents caching/replicating your business… doesn't transfer your IP." *(Clinical context named explicitly.)*
- Value = **model + application(ontology) + compute** (model alone = commodity); model-**agnostic** switch product.
- OMNI map: sharpens §2 tenant-ownership doctrine + "semantic layer = IP-boundary" (§2.2/§2.6); validates `GRD-028` (moat=governed substrate) + `GRD-033` (model/rail-agnostic).

### CEO-DARIO (Anthropic) — axis 6 (security) ★, axis 2, §B human-commit, `GRD-028`
- **Offensive cyber is here**: Mythos autonomously runs the cyber kill chain, finds+exploits vulns (271 in Firefox); "super-weapon." → threat is model-driven; security ≠ one-time gate.
- **No-stickiness bet**: "switch from Claude to ChatGPT in an afternoon… never relied on stickiness… model quality is the most important thing." → **direct tension vs Palantir ontology lock-in** (G3 breaker).
- **Surviving moats**: relationships, domain knowledge, unique data (not code-writing). → `GRD-028`.
- **Human-makes-the-final-call** red line → validates candidate≠commit / AI-never-final-authors (§B/REV-184).
- Values-aligned enterprise business model; continuous pre-release testing/auditing; long-term-benefit-trust (governance).
- OMNI map: strengthens §6.6 candidate (continuous security/assurance); axis-2 lock-in tension; §B validation.

### CEO-ALTMAN (OpenAI) — axis 4 (agent runtime), utility framing, `GRD-028`
- **Intelligence as a utility** ("sell light at night, not electricity"; plug an OpenAI token subscription into everything). → how enterprises will *buy* AI (Enterprise Translation Map framing).
- Agents/Codex as killer enterprise app; "constant agent running for you"; compute shortage; concentration-vs-democratization fork.
- OMNI map: mostly validate-and-name (axis 4 deep in-estate); the utility framing feeds the Enterprise Translation Map + `GRD-028`.

### CEO-JENSEN (NVIDIA) — §BATCH3-X (continuous), axis 6 (open+defend), axis 4/5, axis 2 (compute)
- **Computers continuously running** (agentic) vs on-demand/prerecorded; "everything generated." → corroborates §BATCH3-X continuous-operating-capability.
- **Open-for-security**: "you can't defend against a black box… to be safe and secure it has to be open"; transparency = interrogability. → axis 6 + axis 2 (open models) + resonates with OMNI auditability/`trace_lineage`/open-governed-doctrine.
- **Defend-swarm**: "swarms of cheap AIs… systematically surround it… a giant dome" (Nemotron Nano, "trillions"). → strengthens §6.6 continuous-defend candidate.
- **Eval is serious, flops is contrived**: "come up with a real, serious eval… intelligence/tokens per watt… not all tokens born equal." → axis 5 eval-as-discipline.
- Domain foundation models fused with world-models + human priors (Alpamayo) → axis 1/4 + REV-184 world_model.
- OMNI map: corroborates §BATCH3-X + §6.6 candidate + axis-5 eval; compute-ownership adjacent to axis 2.

---

## Disposition (this capture)
- **Consumed as corroboration** in G1b §CORR (analysis_nonbinding). **Overturns nothing; sharpens axis 2 + strengthens the axis-6 candidate; surfaces one G3 tension (lock-in vs quality).**
- **Promotion gated** (`GRD-036`): nothing here changes doctrine/thesis/contracts until routed through G4 + the destination home's review gate.
- **Owed status (updated 2026-07-08):** ✅ **DONE** — EVSRC materialization + global-id assignment (`EVSRC-2026-000247…250`, `outside_learning` wave-3 / `EVRUN-2026-000003`) + **raw §1 transcripts pasted + §3 Review 003 written** (this interpretation-v1 formalized against the real transcripts; ~0 net-new each — pure grounding of the C3.8 deltas, cross-linked NOT double-counted). Lane-correction (competitor→outside_learning) resolved. **Remaining:** catalog/read-graph note at promotion (`GRD-036`) — not before v4 spine.

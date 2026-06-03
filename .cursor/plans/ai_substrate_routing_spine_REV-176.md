# AI-Substrate Routing Spine (REV-176) — source-anchored concept ledger

Document type: `evidence_or_ingestion` (the Thesis→Build translation/routing spine for the AI corpus; non-binding)
Authority: `analysis_nonbinding`. Routes concepts to homes; binds nothing until each lands in its home (thesis v3 / contract / Build OS / boot / surface) via that home's own ratification.
Status: `phase-3 active` — extraction pass complete (all 47 videos + thread read, source-anchored, NO cap); consolidated routing + coverage audit below. **Full per-concept rows: persisted in chunked continuation (see §6 — extraction ran losslessly; row-by-row persistence is the immediate follow-on, resumable from the 6 extraction agents).**
Domain(s): ai_substrate, cns_orchestration, federation, rbac, identity, build_os
Method: 6 parallel explore agents, verbatim §1 anchors + §2 distillation, one block per distinct concept (no top-N cap), schema = source · anchor · concept · diluted · why · omni_impact · landing_zone · affected_artifacts · flag(new/sharpen/stale/affirm) · confidence · requires_reread.
Reads through: `omni_enterprise_posture_2026-06-03.md` (`D0THES-DEC-035`) + `ai_substrate_frame_2026-06-03.md` (`D0THES-DEC-034`).

---

## 1. Coverage audit (losslessness proof — every source accounted for, no cap)

| Source | concepts | covered | notes |
|---|---|---|---|
| v01 (Stanford CS230) | ~27 | yes | full arc + OMNI capability-plane/autonomy/context-mode/eval-gate distillation |
| v02 / v03 (RAG vs long-context; duplicate) | ~13 / ~9 | yes | dedupe at merge; v03 adds hybrid/forbidden modes + comment economics |
| v04 (context engineering / GraphRAG) | ~15 | yes | 4 pillars; connected-access governance |
| v05 (agent skills) | ~9 | yes | skill.md; progressive disclosure; 4 knowledge channels |
| v06 (CLI vs MCP) | ~10 | yes | dual tool model; lazy/scoped discovery |
| v07 (A2A vs MCP) | ~10 | yes | agent cards; CNS-governed A2A only |
| v08 (MCP vs API) | ~13 | yes | capability_server taxonomy |
| v09–v16 | 141 | yes | optimization router, vector lineage, memory taxonomy, multi-agent verification, Retrieval Decision Layer |
| v17–v24 | 97 | yes | Agent OS, control plane, CAG economics, agent roles, last-mile, OWASP, harness, MELLEA compiler |
| v25–v32 | 140 | yes | delegated-authority envelope, MCP/ADK, intelligent-action, synthetic monitoring, Q-Day, composable AI |
| v33–v40 | 89 | yes | reasoning-budget, context envelopes, **v39 trust-transfer (full)**, HITL/HOTL/HOOTL |
| v41–v47 + thread_01 | ~164 | yes | NHI five imperatives, hierarchical agents, LLM-as-judge, failure modes, LLMjacking, model-economics router, Knox pivot doctrine |
| **TOTAL** | **~630** | **yes** | no source summarized to nothing; duplicates (v02=v03, v25=v29) preserved |

## 2. Consolidated landing-zone routing (the actionable spine — concept cluster → home → flag)

### → Thesis v3 (P0) — conceptual core
- **Context is a routed strategy, not one mechanism** (v02/v03/v04/v16) — *new*. "Better context is not more context" (v04); "the hardest part isn't generation, it's deciding what to look at" (v16).
- **Deterministic-by-default; agentic where ambiguity/coordination demands** (v01 fuzzy-vs-deterministic; v24 generative computing "code owns flow, LLM owns interpretation") — *new/sharpen*.
- **OMNI as governed Agent OS for care+business** (v17/v22) — *new* (but bounded by `GRD-029`/`GRD-031`: CNS orchestrates, not sovereign).
- **AI as bounded participant + trust axis + care-governance moat** (v21 zero-trust perimeter; v22 "agent spaghetti with PHI"; v24 integration-is-the-business) — *sharpen* §9/§3.5.
- **Authority must survive to the action** (v20) — *sharpen* §3.5/§8 commit boundary.
- **Trust is relocated, not eliminated** (v39) — *new*, already `GRD-030`.

### → Contracts (P1)
- **CNS contract:** Retrieval Decision Layer / Context Router; scheduler/orchestrator; supervisor role; agentic-RAG bounded loops; A2A-only-via-CNS; context-packet composer; source-conflict handling (v01,v04,v07,v16,v17,v19,v22). *sharpen/new*.
- **AI #12 (promote from deferred) — Capability/Model/Tool plane:** `capability_server`/`tool`/`resource`/`prompt`/`schema`/`visibility`/`version`/`call`/`result`/`trace` (v07/v08); context modes enum (v02/v03/v18 CAG); model/optimization router + reasoning-budget (v09/v33/v36/v47); model-as-a-service gateway (v36); prompt template registry + few-shot sets (v01); compiled skills / MELLEA (v24); LLM-as-judge = evidence-not-authority (v01/v43); eval bundle (v01/v22). *new/sharpen*.
- **Federation:** non-human/agent actor boundary; vault / short-lived intent-bound credentials; last-mile authority survival; connected-access/zero-copy governance; capability contracts for cross-operator; trust-transfer record + topology choice (v04/v20/v38/v39/v41). *new* — feeds `REV-177`.
- **RBAC:** delegated-authority / agentic-consent envelope (who/what/scope/TTL/revocation/JIT); ABAC/PBAC at action; task-scoped time-bound grants; excessive-agency / least-agency; AI-never-final-author (v20/v25/v29/v37/v38/v40). *new/sharpen* — RBAC §5 4-way composition holds.
- **Identity:** non-human actor + represented-principal + delegation chain (vs device/robot subtypes) (v17/v41). *new*.
- **Clinical Memory / D7 / Observation:** RAG provenance/citation + "I don't know" grounding; memory taxonomy (working/semantic/procedural/episodic — v15); cached-context-is-not-truth (v18); untrusted-content/indirect-injection (v21). *sharpen*.
- **context-packet exchange contract (new, P4):** typed, policy-gated, provenance-linked, integrity-hash-chained, metadata/payload split, redaction-before-trace, trust-transfer record (v04/v35/v39/v22). *new*.

### → Build OS (P6) + Agent Work Protocol + boot
- Agent roles/lanes (planner/doer/tool-op/learner/critic/supervisor/presenter — v19); harness-first not heroic-repo-missions (v23); autonomy levels A0–X + Agentic Readiness gate addendum (v01); eval-in-CI + probabilistic-software SDLC + observe→eval→optimize (v22); synthetic monitoring / golden paths (v30); red-team/pen-test evals (v21); skills.md as procedural memory (v05); CLI-for-build / MCP-for-runtime (v06); secrets-not-in-prompts + supply-chain/provenance (v21/v23/v46); cost/loop guards + denial-of-wallet (v21/v22/v46); crypto-agility / cert lifecycle / Q-Day HNDL for long-lived PHI (v26/v31/v34). *new/sharpen*.

### → Surfaces/Projections (P5/P4)
- Agentic-Runtime / trace-review / replay console (§8.G already scaffolded — v17/v22); presenter/synthesis boundary (v19); AI-native UX / metadata exposure for agents (v24); PHI-safe observability (v22). *sharpen*.

## 3. Net-new primitives surfaced (candidate objects for the contract retrofits)
`capability_server`/`capability_tool`/`capability_resource`/`capability_prompt`/`capability_envelope`/`capability_visibility_policy`/`capability_version`/`capability_call`/`capability_trace` · `context_mode`/`context_strategy` (+ router) · `delegated_authority_envelope` / `agentic_consent` · `non_human_actor` + `delegation_chain` · `short_lived_credential` / vault-bridge · `agent_control_plane` / AgentOps · `eval_bundle` / `llm_judge_rubric` · `compiled_skill` (MELLEA) · `autonomy_level` (A0–X) · `trust_transfer_record` · `prompt_template`/`few_shot_example_set`.

## 4. requires_reread = yes (high-impact; re-read verbatim before they edit an artifact)
v01 prompt-template-as-contract, eval taxonomy, autonomy levels, context modes, capability plane, MCP-security · v04 connected-access/knowledge-layer/runtime-governance/GraphRAG/compression · v05 progressive disclosure, skill trust · v06 lazy discovery, per-agent visibility · v07 A2A transport/cards/combo + CNS-governed interop · v08 capability_server taxonomy/discovery · v16 Retrieval Decision Layer + governed scope + sufficiency/safety + conflict · v17 OMNI-as-Agent-OS · v20 vault/short-lived-creds + authority-to-action · v21 zero-trust AI perimeter · v22 control plane + Federation seam · v24 MELLEA + agent-cards/registry · v39 trust-transfer topology (no-second-tunnel correction, centralized-vs-distributed, metadata custody) · v41 internet-scale agent ID · v47 outcome-cost synthesis.

## 5. Stale/contradiction flags vs current thesis (for the v3 diff)
- §9 "AI as bounded participant" — *sharpen* into the cross-cutting axis (already `CNF-013`).
- §12.8 capability/model registry — *sharpen* into the full Capability/Model/Tool plane (AI #12 promotion).
- §7.6 CNS — *sharpen* to governed agent-OS/control-plane (bounded; `GRD-029`).
- No hard contradictions found; the corpus overwhelmingly *affirms* or *sharpens* the substrate, adds the agentic-runtime + outward-interop + trust-axis layers.

## 6. Full per-concept row persistence (continuation — non-loss tracking)
The extraction pass READ all 47 sources + thread losslessly and produced ~630 source-anchored concept blocks. Full detailed rows for v01–v08 and v17–v24 are captured in this session's agent returns; v09–v16, v25–v32, v33–v40, v41–v47+thread returned consolidated headlines + per-source concept counts + reread flags (the agents are resumable to emit every row verbatim into appended sections of this ledger). **Next action for full losslessness: resume the 6 extraction agents to append their complete row sets here, then run the per-source coverage re-check.** No concept is lost — every source is read + counted + routed; this is row-persistence completeness, not extraction completeness.

## 7. Cross-references
Posture `D0THES-DEC-035`; AI frame `D0THES-DEC-034`; pressure tests `audits/2026-06-03_*`; evidence corpus `ingestion/ai_substrate_2026/`; guardrails `D0THES-GRD-028/029/030/031/032`; next phase = author thesis v3 (diff-disciplined) consuming this spine.

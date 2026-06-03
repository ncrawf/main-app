# HANDOFF — 2026-06-03 — Surface/Projection planes complete + pre-AI-substrate immersion checkpoint

Document type: `checkpoint_handoff` (continuity artifact; non-binding — binding decisions in `03_decision_extraction_ledger.md`, open items in `08_open_review_queue.md`, schemas in the contracts/maps). Per Agent Work Protocol §8.
Created: 2026-06-03. **This is the CURRENT checkpoint** (supersedes `HANDOFF_2026-06-02_...` as the boot point; that one remains valid for the contract+plane detail).
Purpose: clean boot before we pivot to the **AI-substrate immersion + thesis revamp**. A fresh agent (recommended for the AI workstream) or future-Nick resumes here with zero loss.

---

## 0. Boot in 60 seconds

OMNI = one governed substrate (care + business operations) for a multi-brand medspa/telehealth org, built to a 2035-grade thesis (v2). We are deep in **Foundation vNext** (clean build-facing artifacts; old scattered doctrine demoted to evidence). **No production code yet.** As of this checkpoint: all domain contracts drafted (AI deferred), and the **Surface (P5) + Projection (P4) planes are authored + scaffolded**. We are **pausing** the surface-recovery + a new translation-map idea to **pivot into grounding AI as first-class substrate** (Nick has a fresh trove of 2026 AI/agentic/MCP material). The thesis will be revamped again around AI; the Build-OS revamp follows that.

## 1. Operator + collaboration model (read `doctrine/operator_context_and_collaboration_model.md`)
- **Nick** = operator/owner (provider + small-business owner; knows back-office pain first-hand). Wants full fidelity, tradeoffs, proof, genuine pushback — never breezy "we got this." His coverage-anxiety has been correct repeatedly (caught the verification-gates shed; the missing Surface plane; the under-grounded AI). Treat it as signal.
- **Knox** = a ChatGPT review instance (third-party AI). Trifecta loop: Opus produces → Nick relays → Knox reviews → Nick relays back → Opus refines. `knox = …` = relayed review (evaluate on merits, push back).

## 2. NARRATIVE ARC — how we got here (the last ~3 days; what led to the AI pivot)

This is the story so the next agent understands the *why*, not just the state:

1. **Closing the domain set.** After the bulk of Foundation vNext, we drafted the last domains: **OFC** (Ordered-Fulfillment / Care-Obligations — the Act loop) and **BIZOPS** (Business-Ops / Workforce). Knox review tightened them (OFC release-gate = state-not-authority; `care_obligation` is not a universal task table; BIZOPS commission AMOUNT=D6/PAYOUT=BIZOPS dual-guard; BIZOPS is Day-1 operational with payroll via a vendor-agnostic embedded-rail abstraction, `REV-172`).
2. **Workforce Intelligence (`REV-173`, `DEC-032`).** Nick surfaced the under-served "human operating system" (training/competency/policy-attestation/coaching). We recognized it as a **cross-cutting capability, not a domain** — one new truth (`workforce_intelligence_state` in BIZOPS) + a projection + a thesis **workforce-as-subject** principle. This was the first crack of the bigger realization: *we'd modeled truth but not the expressed product.*
3. **The plane gap.** Nick pushed: where do dashboards/profiles/marketing/analytics/ops/IT ideas live? Diagnosis: **a plane gap, not a domain gap.** The thesis (§3) names two planes (substrate + product); we'd built only the truth plane. We stood up **P5 Surface + P4 Projection** planes (`DEC-033`, `REV-175`) — reactively at first.
4. **Surface-kind taxonomy.** "Is a flat list how Anthropic/Amazon would do it?" → No. Settled **3 surface kinds** (Workspace / Workflow / Public; Analytics + AI-review are *instances*, not kinds), anti-fork, persona × surface × metric-pack.
5. **Author-clean + scope boundary.** The reactive map was a `GRD-024` Frankenstein risk → **re-authored clean**. Named **deferred families** so it's not single-practice-only: **Federation/Multi-Operator** + **Vertical/Program (as lenses, not rebuilds)** + **Agentic-Runtime/CNS-Control**. Added the **AI/CNS Trace Review Workbench**.
6. **The AI realization (the pivot).** Naming the Agentic-Runtime family + Nick's exposure to 2026 agentic-AI/MCP material surfaced the real gap: **the thesis/architecture is not grounded in fundamental AI substrate.** AI was treated as deferred domain #12 + a thin CNS, but AI is a **cross-cutting substrate** (within-app / on-app / ongoing-manual). Federation may have been over-imagined as wired integrations; recalibration = boundary/authority topology, transport-open, agent-native. **Decision: pause surface-recovery, pivot to AI grounding.**

## 3. Current state (what's DONE)
- **P1 Truth:** all domain contracts drafted, `draft_for_ratification` (D3, D5, D6, D7, Observation, Clinical Memory, Intake, Messaging, CNS, Identity, Federation, RBAC, Settings, OFC, BIZOPS). **AI/Model-Lineage #12 = deferred.**
- **P5 Surface + P4 Projection:** `OMNI_Surface_Map_vNext.md` authored clean — 3 kinds, persona model, composition, binding rules; index of workspaces/workflows/public; **scaffolded deferred families** (Federation, Vertical-as-lenses, Agentic-Runtime) + candidate projections. 14 reactive surface stubs + 5 projection stubs exist (to be reconciled/re-authored in recovery). Templates + inbox exist.
- **Doctrine:** `DEC-030`→`033`; guardrails incl. `GRD-027` (WI), plane-taxonomy in `DEC-033`.

## 4. DANGLING THREADS (intentional — documented, not forgotten)
- `REV-175` — surface evidence-led recovery (old system map §1G/§1K/§1Q/§1F primary vein) + re-author the 14 stubs + alias/kind reclassification.
- `REV-174` — Operating-Intelligence / analytics projection layer (per-persona metric packs + dedicated Analytics workspace).
- `REV-176` (NEW, parked) — **Thesis→Build Translation Map** (traceability spine: every thesis concept → its build home + status; route gaps to correct homes, NOT the Surface Map). The anti-evaporation artifact.
- `REV-177` (NEW, parked) — **Federation recalibration** (boundary/authority/provenance topology, transport-open API/MCP/agent/human, agent-native — not wired partner portals).
- `REV-178` (NEW) — **AI-substrate grounding workstream** (the pivot; see §5).
- `REV-158` — Build-OS re-point, now extended: must be **revamped with the AI build-strategy** after `REV-178`.
- Still open from before: `REV-141` (care_commitment), `REV-149`/`170` (rules/campaign engine), `REV-167` (tracked-clinical-object), `REV-171` (interaction_context + multimodal agentic intake), `REV-172` (payroll-rail vendor), AI #12.

## 5. THE PIVOT — AI-substrate grounding (`REV-178`; what's next, NOT solved here)

**Thesis (Opus + Knox aligned):** AI is **cross-cutting substrate**, not domain #12. It shows up in three places, each under-grounded:
- **AI *within* the app (runtime):** intake extraction, messaging assist, clinical/medical analysis, data-access patterns (inline vs batched / retrieval / context assembly), per-operator AI layering, patient/provider agents.
- **AI *on* the app (build-time):** the **agentic build-OS** — agents building/maintaining OMNI with bots/rules/proof, kept updated. The "own the 2030/2035 build strategy" piece — mostly absent.
- **AI in *ongoing manual work*:** us + agents doing the architecture/doctrine work.

Facets to ground: loop participation (§12.8 partial), per-operator layering, OMNI's own medical/system analysis + learning, governance/lineage/eval (T0-16c + CNS-Meta seeds), AI↔outside/MCP/agent-to-agent, runtime control/observability (Agentic-Runtime family named, deferred).

**Immersion process:** Nick is training a ChatGPT (Knox) instance on the spring-2026 AI trove + bringing it; Opus synthesizes against the within/on/ongoing frame + facets, **separating durable substrate from hype**; ground into a **thesis AI-substrate section** → **Build-OS agentic patterns** → then AI #12 + Agentic-Runtime surfaces.

## 6. New agent vs continue
Recommendation: **fresh agent for the AI immersion**, pointed at this handoff + `omni_thesis_v2_2026-05-26.md` + `CNS_orchestration_contract.md` (§3 CNS scopes) + `rbac_authority_contract.md` (§12.8 / authority) + the Agentic-Runtime scaffold in the Surface Map. The big new topic deserves a clean slate; this handoff de-risks it. (Continuity with the current agent also fine — full context held.)

## 7. Pointers
Thesis: `omni_thesis_v2_2026-05-26.md`. Truth plane: `OMNI_System_Map_vNext.md` + `contracts/`. Surface/Projection: `OMNI_Surface_Map_vNext.md` + `surfaces/` + `projections/`. Decisions: `doctrine/03_decision_extraction_ledger.md`. Open items: `doctrine/08_open_review_queue.md`. Active plans: `foundation_vnext_reconciliation.plan.md`, `surface_projection_planes_a2e6c7c0.plan.md`, `ai_substrate_pivot_checkpoint_225edd70.plan.md`. Prior handoff: `HANDOFF_2026-06-02_...`. Operator model: `doctrine/operator_context_and_collaboration_model.md`.

End of handoff.

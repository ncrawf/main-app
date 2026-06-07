# OMNI AI-Substrate Frame (ratified 2026-06-03)

Document type: `doctrine` (decision-record style; boot-visible frame)
Authority: `governance_binding` framing decision for the AI-substrate workstream (`REV-178`). Binds the *posture and routing* of all downstream AI work; does NOT itself author domain schemas, contracts, or thesis prose (those land in their homes per the routing spine).
Status: `ratified` 2026-06-03 (Nick + Knox via trifecta relay; Opus authored). Decision of record: `D0THES-DEC-034`.
Domain(s): architecture_governance, ai_substrate, cns_orchestration, build_os
Lifecycle role: the lens every downstream AI edit reads through (thesis v3, contracts, Build OS, boot/governance, surfaces/projections). Prevents the frame from being buried inside the routing spine or any single artifact.
Source-of-truth relationship: framing authority only. Thesis remains P0 doctrine; domain contracts remain P1 truth; Build OS remains P6; surfaces/projections remain P5/P4. This file says HOW AI relates to all of them, not WHAT each commits.
Supersedes: the implicit prior posture that AI = deferred domain #12 + a thin §9 "bounded participant" (see `05_supersession_conflict_ledger.md` `D0THES-CNF-013`).
Superseded by: none.
Manifest action: add_tier0 (boot-visible frame; Tier 0 Universal Path).
Review gate: user_knox_required — SATISFIED 2026-06-03.

agent_read_rule: tier0_mandatory

---

## Read this first

This frame settles a fork that surfaced after ingesting the spring-2026 IBM/Stanford AI corpus (47 videos + a Nick↔ChatGPT strategy thread; evidence at `.cursor/plans/ingestion/outside_learning/sources/2026-spring_ai_substrate/`). The corpus exposed that OMNI's AI/agentic-runtime layer was materially under-modeled (~20-30%) relative to its domain architecture (~60%). The question was: **patch the thesis, invert to an AI-first target, or something else?** Ratified answer below.

## The ratified frame (preserve verbatim)

> **AI is a cross-cutting substrate AXIS** across OMNI's product runtime, build runtime, security / runtime-proof, context, tools, memory, and model execution — **but OMNI's target remains the governed contextual care + business longitudinal substrate.** AI-native runtime is the missing *execution + build fabric*; it is not the center of the company.

> **CNS is OMNI's governed agentic orchestration / control plane** for candidates, context, tools, traces, and escalation — **owning domains still commit truth, Federation/RBAC still gate authority, surfaces/projections own no truth.** CNS is NOT a sovereign super-agent and NOT a replacement for domain truth.

## What this is NOT (the two rejected forks)

- **NOT a bolt-on.** The material is too substantive and structurally cross-cutting to append as thesis sections without distorting the thesis (the `D0THES-GRD-024` Frankenstein risk).
- **NOT an AI-first inversion.** The corpus is mostly horizontal AI infrastructure (agent OS, MCP/A2A, context engineering, model routing, vector/RAG) — table stakes for any 2035 company, not OMNI's moat. Letting it become the target makes OMNI "just another agent platform" and violates §2/§3 substrate-vs-product discipline. The moat stays the governed care + business substrate; horizontal AI infra is commodity behind a governed boundary (cf. corpus v45 build/reuse/hybrid, v36 model-gateway, v47 router-not-custom-chips).

## What this PRESERVES from Thesis v2 (durable core — not stale)

§1 what OMNI is · §3 substrate-vs-product planes · §3.5 comparator lenses · §3.7/3.8 vertical care OS + four operator abilities · §8 two interlocking governed loops + authority gates · the care/commerce/identity/consent core · the 1:1 care relationship as the daily unit of care · product surfaces specialize / substrate functions unify.

## What this REFRAMES

AI moves from **"deferred domain #12 + a thin §9 bounded participant"** to a **cross-cutting axis** grounded across multiple planes. §9 / §12.8 / §9.1 keep their durable primitives (capability_envelope, ai_model_registry, model_version_of_record, candidate→commit boundary, substrate-vs-care boundary) but are re-seated as the spine of an AI axis, not one surgical addition. CNS (§7.6) is promoted to the governed orchestration/control plane per the qualifier above.

## The five landing zones (where AI material routes — NOT all into the thesis)

| Material class | Lands in | Plane |
|---|---|---|
| WITHIN-build conceptual core (AI-as-axis; CNS-as-control-plane; deterministic-gate-vs-agentic doctrine; moat framing) | **Thesis** (new AI-substrate section + re-grounding → v3) | P0 |
| WITHIN-build mechanics (CNS-as-control-plane contract; AI #12 promoted from deferred; RBAC delegated-authority / agentic-consent / non-human-identity; context-packet doctrine) | **Truth-plane contracts** | P1 |
| ON-build (CLI-vs-MCP for build; agent role lanes planner/implementer/reviewer/proof; skills compiler; evals + synthetic monitoring as runtime proof; LLM-as-judge = evidence not authority) | **Build OS** (09/10/11) + **Agent Work Protocol** (`REV-158`) | P6 |
| ONGOING-manual (how we + agents do architecture/doctrine work: hierarchical roles, context packets as work payloads, decomposition traces, proof obligations) | **Boot / AGENTS + Agent Work Protocol + Control Plane** | governance |
| Observability / control surfaces (which agent/path fired, capability invoked, replay) | **Surface/Projection** — Agentic-Runtime family already scaffolded `OMNI_Surface_Map_vNext.md` §8.G | P5/P4 |

## The two boot-visible guardrails this frame installs

- `D0THES-GRD-028` — **AI-axis-not-target.** Do not let AI infrastructure become the thesis target; the moat is the governed care + business substrate. Horizontal AI infra is commodity behind a governed boundary.
- `D0THES-GRD-029` — **CNS is orchestration/control plane, not sovereign brain.** CNS coordinates candidates→resolver→owning-domain commits; it must not own domain truth or become a mega-agent. (Reinforces T0-01/T0-02/T0-04 + the CNS ADR + `D0THES-GRD-002` plane discipline.)

## Sequence (ratified A/A — this frame is step 1)

1. **Ratify frame doc** (this artifact). DONE.
2. **Routing spine** — merge with `REV-176` (Thesis→Build Translation Map): every AI concept cluster from the corpus routed to one of the five homes with stale/sharpen/new flags + status.
3. **Sequenced edits** — Thesis v3 first; then CNS / AI #12 / RBAC / Federation / context-packet contracts; then Build OS + Agent Work Protocol; then surface/projection observability surfaces.
4. **Resume** deferred Federation / RBAC / Settings / AI-native drafts ONLY after the AI substrate frame is explicit in their homes.

## Cross-references

- Decision of record: `03_decision_extraction_ledger.md` `D0THES-DEC-034`.
- Supersession: `05_supersession_conflict_ledger.md` `D0THES-CNF-013`.
- Guardrails: `06_guardrail_antipattern_digest.md` `D0THES-GRD-028`, `D0THES-GRD-029`.
- Evidence corpus: `.cursor/plans/ingestion/outside_learning/sources/2026-spring_ai_substrate/00_index.md` (47 videos + `knox_strategy/`); evidence rows `D0AI-EVD-001`/`-002`.
- Open workstreams: `REV-178` (AI-substrate grounding), `REV-176` (routing spine / translation map), `REV-158` (Build OS revamp), `REV-177` (Federation recalibration — fed by corpus agent-security / delegation / A2A material).
- Thesis touchpoints to re-ground: `omni_thesis_v2_2026-05-26.md` §8 / §9 / §9.1 / §12.8 / §7.6.
- Narrative: `docs/architecture/evolution_narrative_volume_5_2026-06-03.md` (AI-substrate pivot arc).

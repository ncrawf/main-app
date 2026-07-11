<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## What OMNI is (read this first)

OMNI is a **governed contextual care + business operating substrate** that preserves **longitudinal coherence** — across patients, providers, operators, surfaces, evidence, authority, commerce, communication, fulfillment, and care **over time**. Its center of gravity is **not** a single app, EMR, scheduler, CRM, telehealth platform, or marketplace — those are product surfaces or slices. OMNI's job is the **substrate physics underneath**: identity, consent, authority, clinical memory, observation, documents, scheduling, service occurrence, commerce, messaging, fulfillment, federation, RBAC, AI lineage, CNS orchestration, audit. It is built so **care remembers the patient**, coordinates across operators, preserves ownership/visibility boundaries, and lets future product surfaces specialize without re-implementing substrate truth. Operating model = **two interlocking governed loops (Sense + Act) + authority gates** (thesis §8). Mantra: *Right context. Right actor. Right patient. Right moment. Right authority.* Canonical: **thesis §1**.

## Strategic orientation — two comparison lenses (top-5 boot context; NOT the definition above)

The canonical tables (with "what we take / where it lands") + the full ~75-item index live in **thesis §3.5** and `.cursor/plans/doctrine/comparator_analogy_registry.md`. These are the boot-visible spine; **cite §3.5, append new comparators to the registry — never re-derive or re-scatter.** **A ≠ B — do not conflate:**
- **Lens A = the product stack OMNI replaces / matches / beats** (examples; full table §3.5): Hims/Ro · Hims-Labs/Quest · Epic/Cerner · Shopify · WordPress · Mindbody/Boulevard · RingCentral/Twilio · ActiveCampaign/Klaviyo · Oracle/Workday/QuickBooks · Stripe/payments · + the ChatGPT-screenshot-then-confirm workaround it displaces.
- **Lens B = the substrate/build concepts OMNI borrows** (examples; full table §3.5): Amazon (Act loop) · Tesla (Sense loop) · NASA/Houston (authority gates) · Airport/ATC (planning) · Airplane-as-object (fail-safe/checklists/black-box) · Stripe (idempotency/immutable-audit) · FHIR/HL7 (structured ingestion) · **Anthropic** (build-OS engineering discipline) · + Apple HealthKit / Salesforce-Zendesk / Mirth-Rhapsody (§3.5).
- **Payload-noun ≠ domain** (`D0THES-GRD-026`): labs/Rx/commerce/etc. are use-cases threading the model, not domains — decompose before naming.

## Non-Negotiables

- **Operator Profile is binding.** Nick is the operator / project owner (address as Nick, Nico, or user — interchangeable). Knox is a ChatGPT review instance (third-party AI, not a human teammate). Default working mode is the trifecta (Opus produces → Nick relays → Knox reviews → Nick relays back → Opus refines). Discourse markers: `knox = ...`, `at knox`, `Knox said...` indicate relayed third-party review — evaluate on merits and push back if wrong. `me = ...` or unmarked first-person is Nick speaking directly. **Preserve full technical fidelity — do not dumb down, omit, or simplify away detail. Structure output for trifecta review (decision framing, tradeoffs, file/path references, proof, risks, implementation consequences).** Full operator context: `.cursor/plans/doctrine/operator_context_and_collaboration_model.md`.
- **System Map (Foundation vNext):** `OMNI_System_Map_vNext.md` + the current domain **contracts** are the canonical architectural source of truth for migrated domains. The legacy `system_map_three_layers_60706286.plan.md` is **transitional evidence** — authoritative ONLY for not-yet-migrated modules + implementation appendices (per the read-graph transitional note); never canonical for a domain that has a vNext contract.
- **Coordination Charter** coordinates the layers; does not own schemas.
- **Architecture Memory Control Plane** is the authority/schema spine.
- **OMNI Build OS** governs staged work, rollout sequence, proof obligations, lifecycle closure, and de-scaffolding.
- **Agent Work Protocol** is the mandatory agent runtime loop. **Checkpoint Preservation Rule (Protocol §8)** applies at every stop above Tier 1; preservation is default, not exception.
- **Manifest Read Graph** controls domain/workstream context loading. **Tier 0.5 Boot-Visible Surface** (Guardrail Anti-pattern Digest at `06_guardrail_antipattern_digest.md`) is always loaded at boot — timeless lessons live there.
- **Build Entry Gate** controls implementation lane admission inside the Build OS.
- **AGENTS** is the boot pointer/enforcement surface — never a schema host.
- Source material, evidence, narrative, and handoff artifacts are non-binding unless explicitly routed or promoted.

## Agent Boot

Loop, every architecture / doctrine / build / work-package:

`identify work package/gate → classify work → load authority → obey gate → execute within scope → prove stop`

**Boot Freshness Check (do FIRST).** The Current Checkpoint Handoff named below in `## OMNI Operating References` MUST equal the one in `04_manifest_read_graph.md` Tier-0 #15 and agree with the named controlling plan's current-state banner (checkpoint · active plan · gate/state · next allowed action). **If they disagree, STOP and report before substantive work.** Closeout side: Agent Work Protocol §8 **Checkpoint Closeout Rule** (no Tier-2+ work is "closed" until the handoff + AGENTS + read-graph + controlling-plan banner are repointed in the same **closeout** commit — the one claiming the gate/phase/arc done, not every intermediate commit). Timeless guardrail: `06` `D0CKPT-GRD-001`. **Work is not complete until the next agent boots to the right state.**

| work class | load (authority) | gate / proof |
|---|---|---|
| architecture / doctrine / governance | Coordination Charter + Agent Work Protocol + Control Plane | Protocol §9 stop report |
| implementation lane | Build OS layer model + rollout sequence + Build Entry Gate v0 + Agent Work Protocol §6 | gate admission + Protocol §9 |
| runtime / code-only (mechanical; no domain/architecture behavior change) | Implementation Rules (below) + Agent Work Protocol §7 | stay in scope; Protocol §9 if work-package scope |
| new architecture / process markdown | Agent Work Protocol §5 (New Artifact Completion Rule) + Control Plane intake | passport + catalog row + read-graph evaluation in same pass |
| evidence / handoff / narrative / future-work | Agent Work Protocol §5 routing + ledgers (`03`/`05`/`06`/`07`/`08`) + Future Work Registry | canonical schemas; Protocol §9 |

If code changes domain behavior, data contracts, workflows, permissions, scheduling, CNS, commerce, documentation, messaging, or patient/provider surfaces, treat it as implementation lane work — not runtime/code-only.

When uncertain, run the full Agent Work Protocol loop end-to-end.

## Stop Proof

No architecture / doctrine / build / work-package stops without a Protocol §9 stop report. New artifacts require §5 completion proof (passport + catalog row + read-graph evaluation) in the same pass. Failure to produce the stop report is non-compliant.

## Implementation Rules

- **System map (transitional authority):** canonical = `.cursor/plans/OMNI_System_Map_vNext.md` + the current domain contracts (for migrated domains). The legacy `.cursor/plans/system_map_three_layers_60706286.plan.md` is **evidence**, still authoritative ONLY for not-yet-migrated modules + implementation appendices not yet carried into a contract (e.g. disputes, HSA/FSA, FHIR export, care tasks, D19–D24) — including the **deferred lab implementation spec** (*Lab workflow* appendix §11–17 in the legacy file) until those land in vNext contracts. When both speak to the same domain, the vNext contract wins.
- **Mutations from staff/cron:** Prefer `requireCapability` from `lib/auth/capabilities.ts` (audited). Keep RLS as coarse `is_staff_user` / `is_staff_admin` unless a migration explicitly adds capability-aware RLS.
- **Scripts:** `npm run typecheck` runs `tsc --noEmit` alongside `npm run lint` before merge when touching TS.

## OMNI Operating References

- **Operator Profile + Collaboration Model — `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` (read FIRST)**
- System Map (P1 Truth plane) — `.cursor/plans/OMNI_System_Map_vNext.md` (canonical, emerging) + domain contracts in `.cursor/plans/contracts/`; legacy `.cursor/plans/system_map_three_layers_60706286.plan.md` (transitional evidence + un-migrated appendices)
- **Surface + Projection Map (P5 Surface + P4 Projection planes)** — `.cursor/plans/OMNI_Surface_Map_vNext.md` (how humans see/operate truth + how truth is composed for viewing) + `.cursor/plans/surfaces/` (surface contracts) + `.cursor/plans/projections/` (read-model contracts). Surfaces/projections own NO canonical truth (`D0THES-DEC-033`). The 7-plane taxonomy (P0-P6 + evidence) lives in the Surface Map header.
- Coordination Charter — `.cursor/plans/doctrine/00_omni_coordination_charter.md`
- Architecture Memory Control Plane — `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
- Agent Work Protocol — `.cursor/plans/doctrine/agent_work_protocol.md`
- Manifest Read Graph — `.cursor/plans/doctrine/04_manifest_read_graph.md`
- Guardrail Anti-pattern Digest (Tier 0.5 boot-visible) — `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`
- OMNI Build OS — `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` (layer model) + `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` (rollout sequence)
- Build Entry Gate v0 — `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
- Future Work Registry — `.cursor/plans/doctrine/future_work_registry.md`
- Current Checkpoint Handoff — `.cursor/plans/HANDOFF_2026-07-11_evrun4_closed_pre_spine_physics_of_care.md` (2026-07-11; **`EVRUN-2026-000004` async-care substrate crystallization CLOSED + committed [`49f3363`]; gate-state unchanged [C3.8 COMPLETE · C4 runway accepted]. ★ NEXT ≠ v4 SPINE DRAFT 0 yet — operator [2026-07-11] inserted a pre-spine physics-of-care continuation (propose-only): (A) capture+decompose another real care-physics specimen `EVSRC-2026-000252`; (B) describe the in-line clinician↔patient↔OMNI/AI conversation mechanic [listened-to/ignored/mis-used states; candidate "M7", dedup vs M2+§B+candidate≠commit]; (C) ingest 3 videos `EVSRC-2026-000253+`. §0.5 of EVRUN-000004 = the settled naming/ontology baseline; HARD STOPS: no spine/thesis/C5, dedup-before-minting. Supersedes the 07-08 wave-3 + 07-04 handoffs as the boot pointer; the 07-04 C3.8 detail below stays valid as HISTORICAL detail.** Historical 07-04 record follows: **C3.8 Enterprise-AI-OS Convergence Pass COMPLETE [Nick + Knox]** — the bounded, gated pre-spine pressure/convergence pass ran G1a→G1b→G2→G3→G4, all gate-approved; gates **C2 CLOSED · C3 PASSED · C3.1 PASSED · C4.0 ACCEPTED · C3.5/C3.6/C3.7 COMPLETE · REV-184 CLOSED · C4 runway ACCEPTED · Readiness Note PASSED · C3.8 COMPLETE**; **verdict: enterprise-AI-OS pressure did NOT break OMNI's core physics** [48 breakers: 15 held/20 bent/5 broke/8 open]; findings = naming/legibility layer + 2 substantive deltas [tenant-ownership doctrine · supply-chain proof-fabric] + meta-delta [governed data-value economy] + a few decisions, all routed in the G4 disposition ledger; **NEXT = fold C3.8/G4 into C4 → a FRESH-context spine author resumes v4 SPINE DRAFT 0** per `v4_C4_spine_authoring_plan.md`; **HARD STOPS: no C5 contract/schema edits, no thesis synthesis before spine acceptance, no more enterprise/scenario batches, no authoring from memory**. **★ The controlling plan lives in the HOME dir `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` — not the workspace tree.** Tier-3 narrative: `docs/architecture/evolution_narrative_volume_6_2026-06-14.md`. Supersedes the 2026-07-02 C3.8-charter-accepted handoff [historical; charter-acceptance + G1a-approval detail stays valid], and 06-15/06-14/06-13/06-10/06-06 [historical]) + see Read Graph Tier 0 Universal Path #15
- Evidence Plane — Router + Lane Registry — `.cursor/plans/ingestion/00_evidence_router.md`. **Trigger (consult, not a boot load):** if the work involves capturing / ingesting / processing / scoring / routing / promoting outside evidence of ANY kind (teaching, competitor products, vendor/integration docs, regulations, security advisories, user/operator research, external build technique, market/strategy), load this FIRST — it dispatches to the right lane. `ingestion/` = OMNI's **Evidence Plane** (intake/staging tier of the existing evidence plane; NOT a domain, NOT source-truth, NOT app intake). Keystone `D0THES-GRD-036`: **capture broad, promotion gated** — nothing becomes truth until promoted through its home's review gate. Lanes: `outside_learning/` (teaching; lane doctrine `outside_learning/00_pipeline_doctrine.md`), `competitor_product_evidence/`, `vendor_integration_evidence/`, `regulatory_compliance_evidence/`, `security_advisory_evidence/`, `user_operator_research/`, `build_evidence/`, `market_strategy_evidence/`, `_staging/`. Catalog row + evidence rows `D0OL-EVD-NNN` + Read Graph route #6.

Schemas remain canonical in the files above; AGENTS does not duplicate them.

## Document Rules

- Document identity is a first-class architecture concern.
- No new architecture/process markdown without passport + catalog row + read-graph evaluation in the same pass (Agent Work Protocol §5 New Artifact Completion Rule).
- `canon_digest` files are derived compression of accepted doctrine/ADR/closure artifacts; they cannot originate new binding doctrine.
- If classification is uncertain, label `needs_classification` and resolve before treating as authority.

For categories, passport fields, and detailed governance rules see `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`.

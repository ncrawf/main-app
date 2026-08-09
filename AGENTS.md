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

- **Operator Profile is binding.** Nick is the operator / project owner (address as Nick, Nico, or user — interchangeable). Knox is a ChatGPT review instance (third-party AI, not a human teammate; may or may not have repo access depending on environment). Default working mode is the trifecta (Opus produces → Nick relays → Knox reviews → Nick relays back → Opus refines). An **optional additional collaborator — currently Gemini** (independent, repository-grounded, read-only by default, Antigravity) — may be added to a task *by exception*; the trifecta stays the default and Gemini is not a mandatory participant. ("Additional collaborator," not "fourth leg" — the roster is a registry that can grow, not a fixed N=4.) **Roles are model-agnostic** (a different model in a slot inherits the role — not every ChatGPT is Knox, not every Anthropic model is Opus). Discourse markers: `knox = ...` / `at knox` / `Knox said...` (relayed Knox), `gemini = ...` / `Gemini said...` (relayed Gemini) — evaluate on merits, push back if wrong, never defer just because an agent said it; agreement among agents is not corroboration. `me = ...` or unmarked first-person is Nick speaking directly. **Preserve full technical fidelity — do not dumb down, omit, or simplify away detail. Structure output for trifecta review (decision framing, tradeoffs, file/path references, proof, risks, implementation consequences).** Full operator context: `.cursor/plans/doctrine/operator_context_and_collaboration_model.md`. Environment boot **profiles** layer on this shared boot (deep collaborator constitutions): Opus = `.cursor/rules/00_omni_opus_boot.mdc` (Cursor) · Gemini = `GEMINI.md` (Antigravity). Thin loader **hooks** only: `CLAUDE.md` (pointer, no duplicate import) + `.agents/rules/00_omni_gemini_boot.md` (Antigravity Always-On).
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

**Boot Freshness Check (do FIRST).** The current checkpoint named in this file's **checkpoint-pointer block** MUST equal the one in `04_manifest_read_graph.md` Tier-0 #15 and agree with the named controlling plan's current-state banner (checkpoint · active plan · gate/state · next allowed action). **If they disagree, STOP and report before substantive work.** The controlling plan may live **off-repo** (`~/.cursor/plans/`) and be inaccessible to some agents/environments (e.g. Antigravity Strict Mode, GitHub-only reviewers): inspect it where accessible; where it is unavailable or stale, **report that limitation and rely on the in-repo AGENTS + read-graph #15 pointers** rather than treating the off-repo plan as verified coequal authority. Closeout side: Agent Work Protocol §8 **Checkpoint Closeout Rule** (no Tier-2+ work is "closed" until the handoff + AGENTS + read-graph + controlling-plan banner are repointed in the same **closeout** commit — the one claiming the gate/phase/arc done, not every intermediate commit). Timeless guardrail: `06` `D0CKPT-GRD-001`. **Work is not complete until the next agent boots to the right state.**

| work class | load (authority) | gate / proof |
|---|---|---|
| architecture / doctrine / governance | Coordination Charter + Agent Work Protocol + Control Plane | Protocol §9 stop report |
| implementation lane | Build OS layer model + rollout sequence + Build Entry Gate v0 + Agent Work Protocol §6 | gate admission + Protocol §9 |
| runtime / code-only (mechanical; no domain/architecture behavior change) | Implementation Rules (below) + Agent Work Protocol §7 | stay in scope; Protocol §9 if work-package scope |
| new architecture / process markdown | Agent Work Protocol §5 (New Artifact Completion Rule) + Control Plane intake | passport + catalog row + read-graph evaluation in same pass |
| evidence / handoff / narrative / future-work | Agent Work Protocol §5 routing + ledgers (`03`/`05`/`06`/`07`/`08`) + Future Work Registry | canonical schemas; Protocol §9 |
| **durable-lane work** (must survive replacement / pause / transfer / delayed re-entry) | Agent Work Protocol **§2.1** lane continuity contract + Build OS `09` Layer 2 | eight durable facts recorded in an existing carrier · one writer per branch · no stale-branch resumption in place · Protocol §9 stop report |
| **coordinated multi-lane / shared-surface work** | Agent Work Protocol **§2.1** coordination overlay + current checkpoint/handoff or accepted parent work-package envelope + Build OS `09`/`10` | membership + dependency/activation order · collision + protected-surface map · single authorized shared-surface writer (integrator role where one exists) · parent close criteria · Protocol §9 stop report |
| **major-arc intake / stale-arc re-entry / cross-domain pressure pass** | current checkpoint + Control Plane/catalog/read-graph/supersession/open-review/FWREG + the accepted parent carriers **and their controlling termini**; New-Pillar Checklist when substrate/pillar work | bounded **estate-reconnaissance / Gate-0 packet accepted** before substantive formulation, pressure-lane launch, or parallelization; Protocol §9 |

**Trigger on material need, not on artifacts.** A branch, worktree, output file or named executor is *evidence* a durable lane may exist — **none of them creates one**, and ordinary bounded work stays ordinary even when it uses a branch. **Durability is earned by a real continuity need; coordination is earned by a real collision, dependency or reconciliation requirement.** Two or more concurrent agents/lanes is one coordination trigger, not the only one — and **concurrency alone never makes separate efforts one package**. Obligations are proportional: a standalone lane requires **no** launch envelope, integrator, or parent integration transaction. Where an accepted parent envelope does govern a launch, no agent or branch launch occurs until it is accepted.

**A major arc or stale-arc re-entry begins with exhaustive accounting and selective depth.** Identify the controlling estate, authority, supersession, maturity, unresolved questions and proposed test method **before** opening substantive pressure lanes. **The exact gate sequence remains arc-specific** — depth is proportional (default up if uncertain), and no prior arc's pattern is automatically owed. Trigger on objective markers, not on the word "major": you cannot name the controlling carrier + terminus · the architectural home is uncertain or contested · existing carriers/branches may be stale or diverged · the work would touch two or more domains' accepted contracts or propose new architecture · you are re-entering work whose current state you did not produce.

If code changes domain behavior, data contracts, workflows, permissions, scheduling, CNS, commerce, documentation, messaging, or patient/provider surfaces, treat it as implementation lane work — not runtime/code-only.

When uncertain, run the full Agent Work Protocol loop end-to-end.

## Stop Proof

No architecture / doctrine / build / work-package stops without a Protocol §9 stop report. New artifacts require §5 completion proof (passport + catalog row + read-graph evaluation) in the same pass. Failure to produce the stop report is non-compliant.

## Implementation Rules

- **System map (transitional authority):** canonical = `.cursor/plans/OMNI_System_Map_vNext.md` + the current domain contracts (for migrated domains). The legacy `.cursor/plans/system_map_three_layers_60706286.plan.md` is **evidence**, still authoritative ONLY for not-yet-migrated modules + implementation appendices not yet carried into a contract (e.g. disputes, HSA/FSA, FHIR export, care tasks, D19–D24) — including the **deferred lab implementation spec** (*Lab workflow* appendix §11–17 in the legacy file) until those land in vNext contracts. When both speak to the same domain, the vNext contract wins.
- **Mutations from staff/cron:** Prefer `requireCapability` from `lib/auth/capabilities.ts` (audited). Keep RLS as coarse `is_staff_user` / `is_staff_admin` unless a migration explicitly adds capability-aware RLS.
- **Scripts:** `npm run typecheck` runs `tsc --noEmit` alongside `npm run lint` before merge when touching TS.
- **Boot surfaces route; mutable current state belongs to its owning checkpoint or gate carrier.** The checkpoint-pointer blocks in this file and read-graph Tier-0 #15 carry **one pointer line each and nothing else** — no focus, next action, gate/lane/integrator state, dependency conditions, commit identifiers, or "do not do X" directives. Structurally checked by `node scripts/check-checkpoint-pointer.mjs` (CI workflow `checkpoint-pointer`; **merge-blocking only once marked a required status check in branch protection**). Guardrail `D0CKPT-GRD-004`.

## OMNI Operating References

- **Operator Profile + Collaboration Model — `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` (read FIRST)** — canonical "who is who" (Nick / Opus / Knox / optional Gemini). Environment boot profiles layer on this shared boot (they host role/environment posture only — never schema or current-state): **deep collaborator constitutions** = `.cursor/rules/00_omni_opus_boot.mdc` (Cursor/Opus) · `GEMINI.md` (Antigravity/Gemini); **thin loader hooks** = `CLAUDE.md` (Cursor compatibility pointer) · `.agents/rules/00_omni_gemini_boot.md` (Antigravity Always-On).
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
<!-- CHECKPOINT-POINTER:START -->
- Current checkpoint: `.cursor/plans/HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md`
<!-- CHECKPOINT-POINTER:END -->
- **Active nonbinding forensic workstream:** current Care-forensic state is resolved through **`04_manifest_read_graph.md` #15 and its named handoff** (`HANDOFF_2026-07-13_care_forensic_inheritance_audit.md`) — **do not infer forensic lane state from this static AGENTS description.** The audit is nested + propose-only (`GRD-036`), Care capture frozen; it **does not supersede the current gate checkpoint** (the checkpoint named in this file's checkpoint-pointer block, mirrored at read-graph Tier-0 #15, is the sole current Tier-0 gate-setting checkpoint; the 07-19 / 07-12 handoffs are historical detail).
- **Agent-boot activation (2026-07-18, subordinate — does NOT change the gate):** collaboration/boot profiles ACTIVE per `D0OPER-DEC-004`; continuity in `.cursor/plans/HANDOFF_2026-07-18_agent_boot_profiles_activated.md`. Default Nick↔Opus↔Knox trifecta preserved; Gemini = optional additional collaborator. Deep profiles: `.cursor/rules/00_omni_opus_boot.mdc` (Opus/Cursor) · `GEMINI.md` (Gemini/Antigravity); thin hooks `CLAUDE.md` + `.agents/rules/00_omni_gemini_boot.md`. This is a parallel collaboration-governance workstream; it changes no gate state — resolve the current gate checkpoint from the checkpoint-pointer block (read-graph Tier-0 #15).
- Evidence Plane — Router + Lane Registry — `.cursor/plans/ingestion/00_evidence_router.md`. **Trigger (consult, not a boot load):** if the work involves capturing / ingesting / processing / scoring / routing / promoting outside evidence of ANY kind (teaching, competitor products, vendor/integration docs, regulations, security advisories, user/operator research, external build technique, market/strategy), load this FIRST — it dispatches to the right lane. `ingestion/` = OMNI's **Evidence Plane** (intake/staging tier of the existing evidence plane; NOT a domain, NOT source-truth, NOT app intake). Keystone `D0THES-GRD-036`: **capture broad, promotion gated** — nothing becomes truth until promoted through its home's review gate. Lanes: `outside_learning/` (teaching; lane doctrine `outside_learning/00_pipeline_doctrine.md`), `competitor_product_evidence/`, `vendor_integration_evidence/`, `regulatory_compliance_evidence/`, `security_advisory_evidence/`, `user_operator_research/`, `build_evidence/`, `market_strategy_evidence/`, `_staging/`. Catalog row + evidence rows `D0OL-EVD-NNN` + Read Graph route #6.

Schemas remain canonical in the files above; AGENTS does not duplicate them.

## Document Rules

- Document identity is a first-class architecture concern.
- No new architecture/process markdown without passport + catalog row + read-graph evaluation in the same pass (Agent Work Protocol §5 New Artifact Completion Rule).
- `canon_digest` files are derived compression of accepted doctrine/ADR/closure artifacts; they cannot originate new binding doctrine.
- If classification is uncertain, label `needs_classification` and resolve before treating as authority.

For categories, passport fields, and detailed governance rules see `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`.

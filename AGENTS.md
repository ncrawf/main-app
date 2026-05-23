<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Non-Negotiables

- **Operator Profile is binding.** Nick is the operator (non-coder; address directly as "you"). Knox is a ChatGPT review instance (third-party AI, not a human teammate). Default working mode is the trifecta (Opus produces → Nick interprets/relays → Knox reviews → Nick filters back → Opus refines). Discourse markers: `knox = ...`, `at knox`, `Knox said...` indicate relayed third-party review; evaluate on merits and push back if wrong. `me = ...` or unmarked first-person is Nick speaking directly. Calibrate explanation to non-coder level by default; code detail on-demand. Full operator context: `.cursor/plans/doctrine/operator_context_and_collaboration_model.md`.
- **System Map** is the platform source of truth for foundation vs deferred modules.
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

- **System map** (three layers, modules 1A–1N, locked decisions, appendices): `.cursor/plans/system_map_three_layers_60706286.plan.md` — source of truth for foundation vs deferred modules (e.g. disputes, HSA/FSA, FHIR export, care tasks, D19–D24). **Deferred lab implementation spec:** *Lab workflow* appendix §11–17 in that file.
- **Mutations from staff/cron:** Prefer `requireCapability` from `lib/auth/capabilities.ts` (audited). Keep RLS as coarse `is_staff_user` / `is_staff_admin` unless a migration explicitly adds capability-aware RLS.
- **Scripts:** `npm run typecheck` runs `tsc --noEmit` alongside `npm run lint` before merge when touching TS.

## OMNI Operating References

- **Operator Profile + Collaboration Model — `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` (read FIRST)**
- System Map — `.cursor/plans/system_map_three_layers_60706286.plan.md`
- Coordination Charter — `.cursor/plans/doctrine/00_omni_coordination_charter.md`
- Architecture Memory Control Plane — `.cursor/plans/doctrine/00_architecture_memory_control_plane.md`
- Agent Work Protocol — `.cursor/plans/doctrine/agent_work_protocol.md`
- Manifest Read Graph — `.cursor/plans/doctrine/04_manifest_read_graph.md`
- Guardrail Anti-pattern Digest (Tier 0.5 boot-visible) — `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`
- OMNI Build OS — `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` (layer model) + `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` (rollout sequence)
- Build Entry Gate v0 — `.cursor/plans/doctrine/11_build_entry_gate_v0.md`
- Future Work Registry — `.cursor/plans/doctrine/future_work_registry.md`
- Current Checkpoint Handoff — see Read Graph Tier 0 Universal Path #15

Schemas remain canonical in the files above; AGENTS does not duplicate them.

## Document Rules

- Document identity is a first-class architecture concern.
- No new architecture/process markdown without passport + catalog row + read-graph evaluation in the same pass (Agent Work Protocol §5 New Artifact Completion Rule).
- `canon_digest` files are derived compression of accepted doctrine/ADR/closure artifacts; they cannot originate new binding doctrine.
- If classification is uncertain, label `needs_classification` and resolve before treating as authority.

For categories, passport fields, and detailed governance rules see `.cursor/plans/doctrine/00_document_governance_and_taxonomy_2026-05-19.md`.

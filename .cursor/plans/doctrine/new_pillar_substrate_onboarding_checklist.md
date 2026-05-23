# New-Pillar / Substrate Onboarding Checklist

Document type: `handoff_or_readiness_gate`
Authority: derived_nonbinding (checklist artifact; canonical doctrine lives elsewhere)
Status: active
Domain(s): architecture_governance, d3_scheduling, d5_actualized_work, d6_commerce, d7_documentation_evidence, federation_topology, agent_execution
Lifecycle role: workbench_scaffold (checklist for starting new substrate-pillar workstreams)
Source-of-truth relationship: extracted from former §3 of `user_knox_preferences_locked_2026-05-17.md` (since renamed to `scheduling_foundation_preference_record_2026-05-17.md`) per `D0OPER-DEC-002`; consolidates the substrate-build discipline learned during the 2026-05-16/17 scheduling foundation arc
Supersedes: former §3 of `user_knox_preferences_locked_2026-05-17.md`
Superseded by: none
Manifest action: add_tier2
Review gate: architecture_steward_required

agent_read_rule: consult_if_routed

---

## When to use this checklist

Read this checklist when starting a **new pillar / substrate workstream**. Examples:

- Beginning D6 commerce substrate build (commerce DRAFT → live).
- Beginning future pillar (D8 / D9 / etc.).
- Starting a major DL DRAFT → ratified-substrate promotion.
- Starting an OMNI core-thesis refinement (e.g., 2026-05-23 atomicity/intake/scheduling/CNS arc).

Do NOT read this for:
- Every boot. It is pillar-specific, not universal.
- Routine code-only work (use Agent Work Protocol §7 directly).
- Doctrine-only work that does not touch substrate (use Agent Work Protocol §3-§5).

---

## Reads required before starting new-pillar work

1. **Operator context**: `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` (Tier 0; already loaded at boot but verify presence in context).
2. **Coherent OMNI architecture pattern**: `.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md` — the 3-layer substrate pattern is the default shape for any new pillar.
3. **Scheduling foundation post-mortem**: `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` — read the patterns that nearly broke the scheduling arc; do not repeat them.
4. **Scheduling foundation preference record**: `.cursor/plans/doctrine/scheduling_foundation_preference_record_2026-05-17.md` — historical primary source of the scheduling-arc preferences; binding form lives at the canonical destinations listed in that file's §1/§2 tables.

---

## Pre-build checklist

When a new pillar/substrate workstream opens:

- [ ] **Read this checklist** + the four "Reads required" docs above.
- [ ] **Cross-link the four reads** from any new DL DRAFT preamble for the pillar.
- [ ] **Honor every preference from the scheduling foundation record** without re-litigation; binding form lives at canonical destinations.
- [ ] **Use the 3-layer pattern** as default substrate shape (per `coherent_omni_architecture_pattern_2026-05-17.md`).
- [ ] **No vendor names in substrate enums** (per guardrail `D0-GRD-010`).
- [ ] **No specialty names in substrate enums** (per DL-21 federation pattern; specialty NAMES are tenant catalog seed timing, NOT substrate enum values).
- [ ] **No Mindbody UI labels in substrate vocabulary** (per guardrail family `D0W4*-GRD-*` Mindbody-specific anti-import patterns; Mindbody is evidence of tenant needs, not substrate template).
- [ ] **Check existing OMNI substrate before proposing new** — extend, don't replace. `lib/auth/capabilities.ts` is the canonical existing RBAC layer; `audit_events` is the canonical existing audit substrate; etc. Same discipline applies to every future pillar.
- [ ] **Decompose compound enums into separate fields**. Every enum that mixes concepts gets decomposed (e.g., booking_channel + attribution_source + trigger_source instead of `new_client_organic_online`).
- [ ] **Patient-level wallets for cross-visit concerns** (4-layer model: definition → wallet → reservation → application; applies to promos, packages, memberships, future Rx, etc.).
- [ ] **CNS round-trip for outbound + inbound flows** (per CNS ADR; state machine + cns_decision + deterministic rules + AI as classifier).
- [ ] **State machines for things with lifecycles** (anything that can be added / removed / expired / overridden / denied gets a row + state machine, not an array on a parent).
- [ ] **FK references between substrates, no content duplication** (e.g., `confirmation_event` references rail substrate via FK; does not duplicate message content).
- [ ] **Tenant catalog flexibility** — substrate provides primitives, tenant chooses modeling depth per service kind. Never make one-service-per-operational-kind dogmatic if operational differences are real.
- [ ] **Run ≥5 real-world scenarios** with Nick (the operator) before treating a DL DRAFT as substrate-ready. This is the Bloom-is-real check.
- [ ] **Switch artifact class when Nick says "build"** — stop refining doctrine drafts; move to DDL / RPC / migration / substrate slice.

---

## Companion artifacts

- Operator context: `operator_context_and_collaboration_model.md` (Tier 0)
- Architecture pattern: `coherent_omni_architecture_pattern_2026-05-17.md` (Tier 0 Universal Path #14)
- Post-mortem: `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` (Tier 2 consult)
- Scheduling foundation preference record: `scheduling_foundation_preference_record_2026-05-17.md` (historical primary source)
- Charter Build OS Layer 2 reference: `.cursor/plans/doctrine/00_omni_coordination_charter.md` §2 (canonical homes for Build OS)
- Agent Work Protocol §6 Build-Entry Checks: `.cursor/plans/doctrine/agent_work_protocol.md` §6

---

## What this checklist is NOT

- It is NOT binding doctrine. It is a process checklist for pillar/substrate onboarding.
- It is NOT a substitute for canonical doctrine. Each checklist bullet routes to a canonical home (DL / guardrail / ADR / pattern doc / preference record).
- It is NOT universal boot context. It is consult-routed for pillar/substrate-start work.

# Manifest Coverage Audit (Bi-Directional)

**Date:** 2026-05-19  
**Purpose:** Verify manifest routing is backed by corpus-aware coverage (not chat memory).  
**Scope:** D6-opening safety readiness; no D6 authoring.

**Current status:** `v0.1` — sufficient for D6 opening-scope safety checks, **not** full-corpus semantic mastery.

---

## Audit Rules Applied

- No binding lesson extracted from `filename_only`.
- `low` confidence lessons routed to human review (not Tier 0/1/2 promotion).
- Tier 0 remains compact and constitutional.
- Tier 3 includes rationale/evidence sources to prevent memory drift.

---

## A) Source -> Lesson -> Routing -> Gate

| Source | Inspection depth | Distilled binding lesson | Current routing | Enforcement gate(s) | Coverage verdict |
|---|---|---|---|---|---|
| `system_map_three_layers_60706286.plan.md` | read_relevant_sections | CNS center of gravity and carry-forward architecture | Tier 0 read target | opening/template/closure/final | covered |
| `docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | read_relevant_sections | candidate != commit; resolver/authority boundary | Tier 0 read target | opening/template/closure/final | covered |
| `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` | read_relevant_sections | D5/D6/D7 separation; permission/identity; anti-cadence; traceability | Tier 0 + Tier 1/2 boundary emphasis | opening/template/closure/final | covered |
| `longitudinal_intelligence_pressure_test_result_2026-05-19.md` | full_read | known conditional pressure zones; no regression | Tier 0 read target | opening/validation | covered |
| `00_index.md` (`§2.9–§2.13`, `§2.22`) | read_relevant_sections | D6 pre-brief obligations, Shopify ingest requirement, stacking/conflict rules, K(C) implications | Tier 1 D6 + Tier 2 triggers | opening/domain gate/final validation | covered |
| `DL-17_commerce_DRAFT_2026-05-17.md` | read_relevant_sections | D6 truth ownership; refund/redeem/tender/entitlement discipline | Tier 1 D6 | domain template/closure/final | covered |
| `DL-20_care_coordination_DRAFT_2026-05-17.md` | read_relevant_sections | D5 actualized-work truth boundary | Tier 1 D5 + Tier 2 service/work_item trigger | trigger gate/final validation | covered |
| `05_3_round5_closure_verdict.md` | full_read | D5 closure carry-forward to D6/D7 | Tier 2 service/work_item trigger | opening trigger declaration/closure | covered |
| `05_2_kc_minimal_implementation_lock.md` | skimmed | K(C) implications for D6 entitlement semantics | Tier 2 group/seat trigger | opening trigger declaration | covered (medium) |
| `docs/architecture/communications_topology.md` | skimmed | messaging/outbound constraints if D6 touches continuation messaging | Tier 2 messaging trigger | trigger gate | conditionally covered |
| `DL-18_rbac_DRAFT_2026-05-17.md` | skimmed | role/capability/attestation boundaries for D6-facing identity/access changes | Tier 1 RBAC + Tier 2 identity trigger | trigger gate | conditionally covered |
| `docs/architecture/evolution_narrative_volume_2_2026-05-17.md` | read_relevant_sections | chronology of binding transitions (D6 pre-brief became binding in index) | Tier 3 rationale | review cadence, conflict resolution | covered |
| `docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` | read_relevant_sections | anti-rediscovery drift and narrow-framing prevention | Tier 3 rationale | kickoff discipline | covered |
| `coherent_omni_architecture_pattern_2026-05-17.md` | read_relevant_sections | 3-layer discipline and separation model | Tier 3 rationale | authoring posture | covered |
| `v1_pressure_test_radar.md` | read_relevant_sections | risk watch, not direct command authority | Tier 3 rationale/watch | risk triage | covered |
| `user_knox_preferences_locked_2026-05-17.md` | read_relevant_sections | no re-litigation constraints and layered account/intent/commerce boundaries | **Not explicit in manifest tiers (pre-patch)** | n/a | **gap** |

---

## B) Guardrail -> Source -> Gate -> Domains

| Guardrail | Primary source(s) | Gate(s) | Affected domains | Coverage |
|---|---|---|---|---|
| T0-01 CNS center | system map + CNS ADR | opening/template/closure/final | all | covered |
| T0-02 Candidate != commit | CNS ADR + LI doctrine | opening/template/closure/final | all, esp D6 | covered |
| T0-03 D5/D6/D7 separation | LI doctrine + index + D5 closure | template/closure/final + domain gate | D5/D6/D7 | covered |
| T0-04 AI boundary | LI doctrine + system map AI constraints | opening/template/closure/final | AI-touched | covered |
| T0-05 Permission/identity/visibility | LI doctrine + RBAC trigger docs | opening/template/closure/final | identity/messaging | covered |
| T0-06 Action usefulness/contact discipline | LI doctrine + comms topology trigger | opening/template/closure/final | messaging/lifecycle | covered |
| T0-07 Traceability minimum | LI doctrine + pressure-test result | template/closure/final | all | covered |

---

## C) D6-Specific Coverage Checks

### Required seam checks
- D5 work truth not rewritten by D6: covered (`DL-20`, `05_3`, LI doctrine, `00_index`).
- Same service regardless of entitlement/payment route: covered (`00_index §2.4 + §2.9–2.13`, `DL-17`).
- Commerce signal cannot masquerade as care necessity: covered (LI doctrine + trigger mapping).
- Refunds/returns do not mutate D5 truth: covered (`DL-17` + D5 seam docs).
- K(C) per-seat implications: covered (`00_index §2.22`, `05_2`, `05_3`).
- Messaging discipline for benefits/continuation: conditionally covered via Tier 2 messaging trigger.

### Coverage gaps found
1. `user_knox_preferences_locked_2026-05-17.md` not explicitly represented in manifest tier routing.
2. Evidence-heavy ingest sources are represented as context archives but not codified as optional trigger evidence set for D6 pre-authoring validation.

---

## D) Required Minimal Patch Set

1. Add explicit manifest representation for `user_knox_preferences_locked_2026-05-17.md` (Tier 3 rationale/constraint lock).
2. Add D6 opening note that vendor ingestion summaries are optional supporting evidence when resolving unresolved D6 ambiguity (not Tier 0/1 inflation).

---

## E) Audit Verdict

**Status:** `v0.1` D6-sufficient routing pass.
**Reason:** D6 seam-critical sources are covered at high confidence, but broad corpus semantic extraction is incomplete.

---

## F) Memory Confidence

- **High confidence**
  - D6 core seam docs (`00_index §2.9–§2.13, §2.22`, `DL-17`, `DL-20`, `05_3`).
  - Longitudinal/CNS guardrail set (LI doctrine + pressure-test result + CNS ADR + system map targets).
- **Medium confidence**
  - Supporting doctrine and some trigger docs reviewed by section (`DL-18`, communications topology, selected closure-prep docs).
- **Low confidence**
  - Ingestion evidence archives (Mindbody screenshots, Hims raw ingest).
  - Transcript corpus and many historical handoff/preflight/audit files not yet semantically synthesized.

---

## G) Known Memory Debt (Open)

- Transcript corpus remains archive-level (mostly filename/inventory only).
- Mindbody screenshot corpus is mostly not semantically extracted.
- Hims ingest set is mostly skimmed and not promoted.
- Many handoffs/preflights/audits are inventoried but not deeply digested.
- Older April clinical/intake audits are listed but not yet extracted into guardrail candidates.

---

## H) Forward Rule

If future domain work touches any low-confidence area, a **targeted synthesis pass is required before authoring**.  
This prevents low-confidence artifacts from silently becoming governance assumptions.

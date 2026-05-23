# OMNI Doctrine Reading Manifest

**Date:** 2026-05-19  
**Status:** Active governance manifest  
**Purpose:** Prevent fake-compliance mandatory-reading sprawl by defining exactly what must be read, remembered, and enforced for each design task.

---

## Usage Rule (Binding)

- Not all doctrine is mandatory for every design.
- Every design round must:
  1. read **Tier 0** constitutional guardrails,
  2. identify applicable **Tier 1** domain set,
  3. identify triggered **Tier 2** sets,
  4. cite selected scope in round opening declaration.
- If required Tier 0/1/2 reading scope is skipped or misdeclared, treat as `MANIFEST_SCOPE_VIOLATION`.
- Use `LI-CNS_VIOLATION` only when the design itself violates longitudinal doctrine constraints.
- New architecture/process markdown files must carry a document passport header (type/authority/status/lifecycle/supersession/manifest-action/review-gate) per `00_document_governance_and_taxonomy_2026-05-19.md`.
- `canon_digest` artifacts are derived compression only: they must cite accepted doctrine/ADR/closure sources and cannot create new binding doctrine by themselves.

---

## Constitutional Guardrail Digest (Tier 0)

Tier 0 is guardrail-first, not file-first.

### Digest entry schema (binding)

Each Tier 0 entry must include:
- **ID**
- **Guardrail**
- **Source docs** (section-specific pointers)
- **Status** (`locked` / `draft` / `parked` / `deprecated`)
- **Applies to**
- **Violation class**
- **Enforced at**
- **Owner**
- **Last validated**
- **Supersedes/conflicts**

### Tier 0 guardrails

#### T0-01 — CNS center of gravity
- **Guardrail:** CNS orchestrates; rails/surfaces are outputs.
- **Source docs:** `system_map_three_layers_60706286.plan.md` (`## OMNI CNS...`); `cns_action_orchestration_adr_2026-05-17.md` (`## §2 Decision`)
- **Status:** locked
- **Applies to:** all domains
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** opening, domain template, closure, final validation
- **Owner:** architecture steward
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** supersedes rail-side orchestration assumptions

#### T0-02 — Candidate is not commit
- **Guardrail:** source-event -> candidate -> resolver -> envelope; candidate/draft != committed truth.
- **Source docs:** `cns_action_orchestration_adr_2026-05-17.md` (`§2`, `§5`); `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§6`, `§10`)
- **Status:** locked
- **Applies to:** all domains, especially AI/messaging
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** opening, domain template, closure, final validation
- **Owner:** architecture steward
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** conflicts with direct rail-side state mutation

#### T0-03 — D5/D6/D7 ownership separation
- **Guardrail:** D5 actualized work, D6 commerce truth, D7 documentation truth do not collapse.
- **Source docs:** `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§4`, `§10`); `00_index.md` (`§2.25`, D5 closure references)
- **Status:** locked
- **Applies to:** all cross-domain designs; mandatory for D5/D6/D7
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** opening, domain template, closure, final validation, domain gates
- **Owner:** domain stewards
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** supersedes one-object flattening

#### T0-04 — AI authority boundary
- **Guardrail:** AI proposes/classifies/drafts; deterministic policy + owning domain + authorized actor commits.
- **Source docs:** `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§6`, `§9`, `§10`); `system_map_three_layers_60706286.plan.md` (AI authority constraints)
- **Status:** locked
- **Applies to:** AI-touched designs
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** opening, domain template, closure, final validation
- **Owner:** architecture steward
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** conflicts with autonomous AI commit assumptions

#### T0-05 — Permission/identity/visibility before influence
- **Guardrail:** consent/revocation + identity confidence + recipient authority + purpose-limited visibility gate influence.
- **Source docs:** `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§5`)
- **Status:** locked
- **Applies to:** identity, access, telemetry, messaging, AI
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** opening, domain template, closure, final validation
- **Owner:** architecture steward
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** supersedes broad-role trust assumptions

#### T0-06 — Action usefulness and contact discipline
- **Guardrail:** no cadence-first spam; action must plausibly change timing/routing/prioritization/guidance/review/documentation/suppression.
- **Source docs:** `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§7`, `§8`, `§10`)
- **Status:** locked
- **Applies to:** messaging, lifecycle automation, AI assist
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** opening, domain template, closure, final validation
- **Owner:** architecture steward
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** supersedes cadence-maximization KPI logic

#### T0-07 — Traceability minimum
- **Guardrail:** candidate/action/no_op/suppression require rationale trace (source, policy/model/schema version, actor path, outcome).
- **Source docs:** `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (`§9`, `§10`, `§12`); `longitudinal_intelligence_pressure_test_result_2026-05-19.md` (rubric/result)
- **Status:** locked
- **Applies to:** all domains
- **Violation class:** `LI-CNS_VIOLATION`
- **Enforced at:** domain template, closure, final validation
- **Owner:** architecture steward
- **Last validated:** 2026-05-19
- **Supersedes/conflicts:** conflicts with opaque automation

### Tier 0 read targets (section-specific, binding)

- `system_map_three_layers_60706286.plan.md` -> `## Pointer Anchor — Longitudinal Intelligence Doctrine` + immediate carry-forward bullets + CNS parent anchor section.
- `cns_action_orchestration_adr_2026-05-17.md` -> `## §2 Decision`, `## §5 Consequences`.
- `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` -> `§4, §5, §6, §7, §8, §9, §10, §12`.
- `longitudinal_intelligence_pressure_test_result_2026-05-19.md` -> `## Rubric Score`, `## Conditional/Fail Pressure Cases Only`, `## Final Verdict`.

### Tier 0 Change Control (Binding)

- Tier 0 additions/removals require explicit user/Knox approval.
- Tier 0 must remain constitutional and short.
- Domain/trigger-specific additions belong in Tier 1/2.
- If Tier 0 grows too large, demote lower-value entries to Tier 2/3.

---

## Guardrail -> Gate Enforcement Map (Binding)

| Guardrail ID | Opening | Domain template | Closure | Final validation | Domain-specific gate |
|---|---|---|---|---|---|
| T0-01 | required | required | required | required | yes (cross-domain) |
| T0-02 | required | required | required | required | yes (AI/messaging) |
| T0-03 | required | required | required | required | yes (D5/D6/D7) |
| T0-04 | required if AI trigger | required if AI trigger | required if AI trigger | required | yes |
| T0-05 | required if identity/visibility trigger | required if trigger | required if trigger | required | yes |
| T0-06 | required if messaging/lifecycle trigger | required if trigger | required if trigger | required | yes |
| T0-07 | required | required | required | required | yes |

---

## Tier 1 — Required by Domain

### D5 (service occurrence / actualized work)
- `/.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md`
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/05_domain_service_occurrence.md`
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/05_3_round5_closure_verdict.md`

### D6 (checkout / commerce / entitlement)
- `/.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md`
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` (`§2.9–§2.13`, `§2.22`)
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` (boundary emphasis)

### D7 (documentation / evidence / materialization)
- `/.cursor/plans/doctrine/DL-22_clinical_media_DRAFT_2026-05-17.md`
- `/.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md`
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` (D7 entries in `§6` + `§2.22`)

### RBAC / authority model changes
- `/.cursor/plans/doctrine/DL-18_rbac_DRAFT_2026-05-17.md`

### Settings/infrastructure governance changes
- `/.cursor/plans/doctrine/DL-19_settings_infrastructure_DRAFT_2026-05-17.md`

### Federation/topology changes
- `/.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md`

---

## Tier 2 — Required by Trigger

### Trigger: patient/provider messaging or outbound policy
- `/docs/architecture/communications_topology.md`
- `/docs/architecture/cns_action_orchestration_adr_2026-05-17.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`

### Trigger: AI behavior or AI-assisted decisions/content
- `/.cursor/plans/system_map_three_layers_60706286.plan.md` (AI authority constraints)
- `/docs/architecture/cns_action_orchestration_adr_2026-05-17.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`

### Trigger: telemetry / longitudinal signal ingestion
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_pressure_test_bank_2026-05-19.md`

### Trigger: labs/diagnostics context or gating
- `/.cursor/plans/system_map_three_layers_60706286.plan.md` (Section 1L precedence)
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`

### Trigger: commerce signal may affect care context
- `/.cursor/plans/doctrine/DL-17_commerce_DRAFT_2026-05-17.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`

### Trigger: service_occurrence/work_item/encounter_view semantics
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/05_3_round5_closure_verdict.md`
- `/.cursor/plans/doctrine/DL-20_care_coordination_DRAFT_2026-05-17.md`
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` (`§2.22` + `§2.25`)

### Trigger: group/seat/participant/roster/guest semantics
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/00_index.md` (`§2.22` Amendment K)
- `/.cursor/plans/designs/day_0_scheduling_rule_matrix/05_3_round5_closure_verdict.md`

### Trigger: identity/permission/visibility boundary changes
- `/.cursor/plans/system_map_three_layers_60706286.plan.md`
- `/.cursor/plans/doctrine/longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md`
- `/.cursor/plans/doctrine/DL-18_rbac_DRAFT_2026-05-17.md`

---

## Bi-directional Coverage Audit

### A) Source -> represented lesson coverage

| Source doc | Current tier | Binding lesson(s) represented? | Action |
|---|---|---|---|
| `/docs/architecture/cns_action_orchestration_adr_2026-05-17.md` | Tier 0 | yes (T0-01, T0-02) | keep |
| `/docs/architecture/evolution_narrative_volume_2_2026-05-17.md` | Tier 3 | partially (historical context only) | keep source Tier 3; promote hard lessons only when converted to digest guardrails |
| `/docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md` | Tier 3 | partially (process drift lessons in kickoff anti-patterns) | keep |
| `/.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md` | Tier 3 | partially (domain doctrine mapping) | keep; promote only if constitutional |
| `/docs/architecture/v1_pressure_test_radar.md` | Tier 3 | no direct Tier 0 representation required | keep Tier 3 watch artifact |
| parked/future docs | Tier 4 | not binding unless promoted | keep parked |

### B) Guardrail -> source -> enforcement -> active domains

| Guardrail ID | Primary source(s) | Enforcement gate(s) | Active domains affected |
|---|---|---|---|
| T0-01 | system map + CNS ADR | opening/template/closure/final | all |
| T0-02 | CNS ADR + LI doctrine | opening/template/closure/final | all, especially D6/D7 |
| T0-03 | LI doctrine + D5 closure refs | template/closure/final + domain gates | D5/D6/D7 |
| T0-04 | LI doctrine + system map AI constraints | opening/template/closure/final | all AI-touched |
| T0-05 | LI doctrine §5 | opening/template/closure/final | identity/messaging/telemetry |
| T0-06 | LI doctrine §7/§8/§10 | opening/template/closure/final | messaging/lifecycle |
| T0-07 | LI doctrine + LI pressure-test result | template/closure/final | all |

---

## Contradiction and Staleness Rule (Binding)

- If older narrative/post-mortem language conflicts with newer locked doctrine/closure artifacts, newer locked doctrine/closure wins.
- The conflict must be logged in the bi-directional coverage audit with cleanup action.
- Manifest review cadence:
  - every round close: scope + violation taxonomy sanity check,
  - every 2 rounds: digest + coverage audit refresh,
  - stale entries require owner + due date.

---

## Tier 3 — Historical / Rationale (Not universally required)

Read when diagnosing drift, rationale conflicts, or doctrine provenance:

- `/docs/architecture/evolution_narrative.md`
- `/docs/architecture/evolution_narrative_volume_2_2026-05-17.md`
- `/docs/architecture/scheduling_foundation_post_mortem_2026-05-17.md`
- `/docs/architecture/v1_pressure_test_radar.md`
- `/.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md`
- `/.cursor/plans/doctrine/user_knox_preferences_locked_2026-05-17.md` (constraint lock; do-not-relitigate memory source)

---

## Tier 4 — Parked / Future Notes (Not binding unless promoted)

- `/.cursor/plans/doctrine/future_care_obligations_design_2026-05-17.md`
- Any doctrine draft marked parked/reserved/non-blocking.

---

## Round Opening Requirement

Every new round opening must include:
- Tier 0 read confirmation,
- selected Tier 1 domain set,
- selected Tier 2 trigger set,
- rationale for each "not applicable" trigger,
- known doctrine risks for this round.

Use this compact declaration template:

```markdown
Doctrine manifest declaration
- Tier 0 read:
- Tier 1 selected:
- Tier 2 triggered:
- Not-applicable rationale:
- Known doctrine risks:
- Violation check:
  - MANIFEST_SCOPE_VIOLATION: none | present (details)
  - LI-CNS_VIOLATION: none | present (details)
```

## Round Closing Requirement

Every round closing must include:
- new lesson extracted (if any),
- digest/coverage audit change made (or explicit no-change rationale),
- stale/conflict items identified,
- unresolved violation status for both violation classes.
- file classification ledger for docs created/changed in the round:
  - document type
  - authority
  - status
  - supersession note
  - manifest impact (`none` allowed)

---

## D6 Dry-Run Requirement (Before Round 6 Authoring)

Before D6 starts, run a manifest dry-run proving selected scope covers at minimum:
- D5 work item as actualized work (not commerce rewrite),
- same service regardless of entitlement/payment route,
- commerce may inform context but cannot masquerade as care necessity,
- refunds/returns do not rewrite D5 truth,
- K(C) per-seat entitlement implications where applicable,
- D6 ownership of sale/refund/redeem/tender/entitlement truth,
- LI-CNS guard against salesy nudges posing as care.

If unresolved ambiguity remains after Tier 0/1/2 selection, optional supporting evidence may be consulted from ingestion summaries (Mindbody/Hims) as Tier 3 evidence context. Raw evidence does not become direct Tier 0/1 authority without explicit promotion.

Dry-run output is required in round opening package; absent output is `MANIFEST_SCOPE_VIOLATION`.

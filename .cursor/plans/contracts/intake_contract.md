# Intake / Patient-Source — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the intake construction + emission/routing + session + patient-source-capture substrate
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #6b; Nick + Knox review gate)
Domain(s): `intake`, `patient_source`
Lifecycle role: the INPUT PLANT — turns a patient's structured/unstructured answers into versioned, atomized, audited emissions routed to their canonical homes. It **constructs + captures + routes**; it does NOT own clinical memory (Clinical Memory/Assertion), identity (Identity), scheduling, or commerce truth — it emits into them.
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5. **Controlling spine: `intake_construction_design` (2026-04-27, audited → 5 patches applied + sign-off) + system map `1K.*`** (`1K.0` resolver, `1K.0.5` atomization boundary, `1K.2`/`1K.3`/`1K.4` pathway/module/question, `1K.6` progressive intake, `1K.13` staging, `1K.14` schema; LOCKED) + **shipped build** (`lib/intake/*`: types/targets/branching/session-state, question-bank, modules, pathways, views; `record_intake_emissions_batch` Phase 4A orchestrator). **Thesis lens: §7.5.3 patient-source substrate concept.** Method per `00_architecture_artifact_index.md`.
Supersedes: none (clean distillation; `1K.*` LOCKED spine + designs/audits = evidence)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

## §1.5 Freshest-Authority Check (embedded)

| Layer | Source | Disposition |
|---|---|---|
| **Spine (design, audited+signed)** | `intake_construction_design` (question-bank/module/pathway code-as-config + resolver + write-API dispatcher + version-pin/reconstructability + Mode E/F/J) | clean-into-contract |
| **Spine (LOCKED map)** | `1K.0`/`1K.0.5`/`1K.2`/`1K.3`/`1K.4`/`1K.6`/`1K.13`/`1K.14` | clean-into-contract |
| **Shipped build** | `lib/intake/*` (21 emission targets, branching predicates, session-state, views) + `record_intake_emissions_batch` orchestrator (claim-first; same-tx audit; `source_assertion_id` propagation) | preserve (freshest build-state) |
| **Thesis v2 (lens)** | §7.5.3 patient-source (`source_authority = patient`, `clinical_adoption_state = not_adopted` at emit) | governs the emit posture; no conflict |

**Reconciliation:** §7.5.3 confirms intake's role precisely — intake captures **patient-source** material that is **pre-accountable** until clinically adopted (in Clinical Memory). No conflict; the contract bakes the emit posture into §7.

## §1 Purpose

Intake owns the **construction, capture, and routing** of patient-source input: the code-as-config question/module/pathway system, the pure-function resolver, the write-API dispatcher, version-pinning + deterministic reconstructability, the session lifecycle and entry-moments (Mode E/F/J), the atomization boundary, and the emission orchestration that routes atomized facts to their canonical homes — emitting clinical claims as **patient-source** (provisional) per §7.5.3.

## §2 Governing thesis concepts

§7.5.3: intake-emitted clinical claims enter substrate as **patient-source** (`source_authority = patient`, `patient_initiated = true`, `clinical_adoption_state = not_adopted`) — never auto-clinical-truth. Adoption is a downstream clinical-operator act (Clinical Memory + §7.5).

## §3 Ownership boundary

**Owns:** question-bank / modules / pathways (code-as-config, git-versioned, PR+CODEOWNERS); the **resolver** (pure fn over `SessionContext`); **branching predicates** (named, composable, testable); the **write-API dispatcher** + emission orchestration (`record_intake_emissions_batch`); the **atomization boundary** (`1K.0.5`); **version-pinning + reconstructability** (`branch_path_token`, pinned question/module/pathway/engine versions, `rendered_template_snapshot`); **session lifecycle** + entry-moments (onboarding/follow_up/check_in/provider_request/patient_self_correction = Mode E/F/J); **patient-source capture** posture (§7.5.3).
**Does NOT own:** the **clinical-memory substrate** (concept registry, `patient_clinical_assertions`, authority precedence, adoption, reconciliation, current view, `patients.*` projection) → **Clinical Memory** via `SC-INTK-CM-001`; **identity** (patients/contacts resolution) → Identity; **scheduling**, **commerce/entitlement**, **document/consent storage** → owning domains (intake emits into them).

## §4 Construction layer (code-as-config + resolver)

`Question` (discriminated union over `answer_type`; routing `destination`; `reuse_policy`; `freshness_profile`; `is_trackable`+`field_name`; stage scoping + `pre_account_safe`; `render_hint`; `question_variant_id`; optional `concept_mapping` → Clinical Memory) · `IntakeModule` (ordered steps; composes submodules; `render_when`/`required` predicates) · `Pathway` (pins `(module_id, module_version)`; `l_gate`; `payment_model`; `intent_codes`). Resolver = pure fn: `(SessionContext + pathway pin) → {next | done | blocked}` + render-ready prompt + `branch_path_token`. **CI test harness** per `1K.0`.

## §5 Emission / routing + atomization boundary (`1K.0.5`)

**Not everything is an atom** — identity/contact/commerce/observation/decision/telemetry have their own canonical homes. **21 emission targets**, each 1:1 with a typed write handler; **claim-first ordering** (`clinical_assertion` before dependent entity emissions; `source_assertion_id` propagated per two-stage flow); **same-transaction audit** (every state-mutating write pairs an `audit_events` row, `1Q.7`). Single entry point: `writeEmissions` → `record_intake_emissions_batch` (SECURITY DEFINER, atomic).

## §6 Session lifecycle + Mode E/F/J

`intake_sessions` (status enum + metadata; `pathway_codes[]` + `pathway_version_pins`). Entry-moments: `onboarding | follow_up | check_in | provider_request | patient_self_correction`. **Mode E** (provider follow-up picker — `pickable_in_provider_followup` questions; answer is still patient_reported), **Mode F** (cron/system check-ins per pathway), **Mode J** (patient self-correction; supersedes prior patient-authored claim, does NOT auto-confirm). All three reuse the same resolver + question-bank + write API.

## §7 Patient-source capture invariant (§7.5.3)

Intake-emitted clinical claims are written as **patient-source**: `source_authority = patient`, `patient_initiated = true`, `clinical_adoption_state = not_adopted`, `status = unconfirmed`. **Intake NEVER auto-promotes to clinical truth** and NEVER writes `provider_*`/adopted status — adoption is a Clinical Memory + provider act. Provenance is set at emit and preserved downstream.

## §8 Invariants / rejection rules

1. **Atomization boundary** (`1K.0.5`): route each datum to its canonical home; no mega-blob; not everything is an assertion.
2. **No direct `patients.*` write** (`1J.10` REVOKE): chart columns are downstream projections, never written by intake.
3. **Append-only + supersession**: responses/observations immutable; corrections write new rows with `supersedes_*`.
4. **Version-pin reconstructability** (`1K.4`): a single `intake_response` row + git-pinned versions + `branch_path_token` reproduces the exact prompt + branch, no live-config join.
5. **Same-transaction audit** (`1Q.7`): every mutating emission pairs an `audit_events` row atomically.
6. **Pre-account PHI boundary** (`1K.13`): `pre_account_safe: true` → destination ∈ {session_state_mutation, audit_events_only}; never a PHI-bearing destination.
7. **Patient-source posture** (§7; §7.5.3): intake emits patient-source/provisional only.
8. **Display-only ≠ answer** (`1K.4` line 3012): narrative steps emit `audit_events` (`intake.display_step_rendered`), never an `intake_response` row.

## §9 Canonical objects

`Question`/`IntakeModule`/`Pathway` (code-as-config) · `intake_sessions` (+ `pathway_version_pins`) · `intake_response` (authoritative patient literal answer; version-pinned) · `Emission` (21 targets) · branching `Predicate` library · resolver + `branch_path_token` · `writeEmissions`/`record_intake_emissions_batch` · views (problem-list/allergy-list/med-list/facesheet/care-plan/reconciliation-queue — read projections).

## §10 Disposition table

| Prior decision / primitive | Disposition | Note |
|---|---|---|
| `intake_construction_design` + audit (5 patches) | **preserve (spine)** | §4–§6 |
| `1K.0`/`1K.0.5`/`1K.2`/`1K.3`/`1K.4`/`1K.6`/`1K.13`/`1K.14` | **preserve (LOCKED → clean-in)** | §4–§8 |
| shipped `lib/intake/*` + orchestrator | **preserve (build-state)** | §5/§9 |
| concept registry + `patient_clinical_assertions` + authority/adoption/reconciliation/current-view + `patients.*` trigger | **move → Clinical Memory** (`SC-INTK-CM-001`) | §3; the big scope call (Option A) |
| identity/contact resolution targets | **emit → Identity** | patient/address/contact write targets route to Identity-owned homes |
| commerce/subscription/treatment_order/eligibility targets | **emit → Commerce/owning domains** | intake routes, doesn't own |
| `displayOnly` destination | **reject (→ audit_events_only)** | audit A1 |
| invented APIs (`recordIntakePathwaySelection`/`recordIdentityVerificationStep`) | **reject** | audit A2 (session mutation + 1J/1O paths) |

## §11 Seams

- **`SC-INTK-CM-001`** Intake → Clinical Memory (atomized patient-source claim emit; claim-first; provisional/`not_adopted`).
- Intake → CNS (intake_submitted / check-in events → candidate/orchestration; `repo/rules/account_lifecycle/intake_submitted_v1`).
- Intake → Identity (patient/contact/address emission targets resolve to Identity homes).
- Intake → Commerce/eligibility (subscription/treatment_order/commerce_order/eligibility_decision targets).
- Intake → Documents (`routePatientDocument` for uploads).

## §12 Open items (→ `08`)

- **Build-state truth** (`REV-152`): confirm shipped-vs-designed across Phase 3 foundation / Phase 4A orchestrator / Phase 4 resolver-runtime / frontend renderer / Stripe / rule engine (design §I build order); README says Phase 3 stubs, orchestrator is Phase 4A — reconcile before build.
- Clinical-Memory vocab unification (`REV-151`, owned by Clinical Memory contract) affects `concept_mapping` emit shape.
- §B trace-lineage threading (`source_event_id → candidate_id → resolver_id → commit_id`) recovery (`REV-148`) touches intake runtime.

## §13 Evidence sources

`intake_construction_design` (2026-04-27) + its audit · `clinical_assertion_layer_design` (→ Clinical Memory) · system map `1K.*` · shipped `lib/intake/*` + `lib/intake/README.md` + `record_intake_emissions_batch` migration · intake coherence / free-text / atomization / retrievability pressure tests (2026-04-27/30) · thesis v2 §7.5.3.

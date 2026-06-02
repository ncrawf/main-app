# Intake / Patient-Source — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the intake construction + emission/routing + session + patient-source-capture substrate
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #6b; Nick + Knox review gate) · **corpus gem-pull (intake cluster) done 2026-06-01** (intake_coherence + free_text_intake + mode_j_spot incorporated → §4 freshness-profiles/req-ack/narrative-flags · §5.1 narrative bridge · §6 progressive-session + Mode-J-Stage-3+ + multi-pathway · §7.1 pregnancy-safety/jurisdiction/inconsistency · §8.13-15 · §11 seams; cross-domain seams to D5/CNS/Observation noted; map-change = none)
Domain(s): `intake`, `patient_source`
Lifecycle role: the INPUT PLANT — turns a patient's structured/unstructured answers into versioned, atomized, audited emissions routed to their canonical homes. It **constructs + captures + routes**; it does NOT own clinical memory (Clinical Memory/Assertion), identity (Identity), scheduling, or commerce truth — it emits into them.
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5. **Controlling spine: `intake_construction_design` (2026-04-27, audited → 5 patches applied + sign-off) + system map `1K.*`** (`1K.0` resolver, `1K.0.5` atomization boundary, `1K.2`/`1K.3`/`1K.4` pathway/module/question, `1K.6` progressive intake, `1K.13` staging, `1K.14` schema; LOCKED) + **shipped build** (`lib/intake/*`: types/targets/branching/session-state, question-bank, modules, pathways, views; `record_intake_emissions_batch` Phase 4A orchestrator). **Thesis lens: §7.5.3 patient-source substrate concept.** Method per `00_architecture_artifact_index.md`.
Supersedes: none (clean distillation; `1K.*` LOCKED spine + designs/audits = evidence)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** this contract is the single build-facing home for intake. `intake_construction_design` + the **full** legacy `1K.*` family (1K.0–1K.19) + shipped `lib/intake/*` are **evidence/provenance, not required runtime reading.** Build from THIS contract. (Legacy-scatter backfill 2026-05-31 absorbed the §1K subsections the first draft missed: 1K.5 freshness, 1K.7 safety pre-screen, 1K.8 labs routing, 1K.9 scoring/derived-values, 1K.10 treatment_plan_candidate, 1K.12 provider packet, 1K.18 out-of-scope.)

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

**Build depth bar (Lens A/B; registry + thesis §3.5):** the *actual build* must match **Hims-class intake on Day 0** and then go **beyond** it via the **conversational AI-mediated intake/triage wedge** (`conversation_session → observation → extracted_assertion → clinician confirmation → selective materialization`) — versioned, reconstructable, atomized. This is the build-facing comparator for Intake.

## §3 Ownership boundary

**Owns:** question-bank / modules / pathways (code-as-config, git-versioned, PR+CODEOWNERS); the **resolver** (pure fn over `SessionContext`); **branching predicates** (named, composable, testable); the **write-API dispatcher** + emission orchestration (`record_intake_emissions_batch`); the **atomization boundary** (`1K.0.5`); **version-pinning + reconstructability** (`branch_path_token`, pinned question/module/pathway/engine versions, `rendered_template_snapshot`); **answer reuse/freshness/re-prompting** (1K.5); **session lifecycle** + entry-moments (Mode E/F/J); the **intake-time deterministic clinical-safety pre-screen** (1K.7 — §7.1); the **deterministic scoring + derived-values layer** (1K.9 — §7.2); the **`treatment_plan_candidate`** provisional recommendation (1K.10 — §7.2); the **provider-review submission-packet assembly** (1K.12 — §7.2); **patient-source capture** posture (§7.5.3).
**Does NOT own:** the **clinical-memory substrate** (concept registry, `patient_clinical_assertions`, authority precedence, adoption, reconciliation, current view, `patients.*` projection) → **Clinical Memory** via `SC-INTK-CM-001`; **decision-time safety enforcement** (§1G.2) + **provider decisioning** on the packet → CNS / Clinical-Memory / clinical (intake pre-screens + assembles, never decides); **trackable derived values** (BMI/vitals) storage → **Observation** (`patient_state_observations`); **lab result interpretation** → labs/Observation (intake routes + records that labs were ordered, 1K.8); **identity** (resolution) → Identity; **scheduling**, **commerce/entitlement** (treatment_plan_candidate → order only on approval), **document/consent storage** (consent artifact → D7) → owning domains (intake emits into them).

## §4 Construction layer (code-as-config + resolver)

`Question` (discriminated union over `answer_type`; routing `destination`; `reuse_policy`; `freshness_profile`; `is_trackable`+`field_name`; stage scoping + `pre_account_safe`; `render_hint`; `question_variant_id`; optional `concept_mapping` → Clinical Memory) · `IntakeModule` (ordered steps; composes submodules; `render_when`/`required` predicates) · `Pathway` (pins `(module_id, module_version)`; `l_gate`; `payment_model`; `intent_codes`). Resolver = pure fn: `(SessionContext + pathway pin) → {next | done | blocked}` + render-ready prompt + `branch_path_token`. **CI test harness** per `1K.0`.

**Named freshness profiles (binding; safety) + per-question governance flags** (intake-coherence / mode-j / free-text audits): `freshness_profile ∈ {time_sensitive_30d (pregnancy_status · lactation_status · recent_pregnancy_attempt · nicotine_use_active · home_bp_recent) · quarterly_180d (allergy/condition refresh) · annual_365d (surgical history) · static_no_refresh (legal name + DOB once L3-locked)}`. `requires_provider_acknowledgment: boolean` (defaults **true** for any `time_sensitive_30d` field, any contraindication-input, and any chart-memory-boundary fact — allergies/medications/conditions/surgical/family history; **false** for trackable measurements where check-in cadence is the surface) → Mode J consults it per correction. On `answer_type = free-text-bounded`: `narrative_intent` (5-value, REQUIRED — disambiguates concern vs question vs claim, §5.1) + `safety_scan: boolean` (default true; opt-out CI-allowlisted to `demographic_descriptor` only, clinical-CODEOWNER-gated).

## §5 Emission / routing + atomization boundary (`1K.0.5`)

**Not everything is an atom** — identity/contact/commerce/observation/decision/telemetry have their own canonical homes. **21 emission targets**, each 1:1 with a typed write handler; **claim-first ordering** (`clinical_assertion` before dependent entity emissions; `source_assertion_id` propagated per two-stage flow); **same-transaction audit** (every state-mutating write pairs an `audit_events` row, `1Q.7`). Single entry point: `writeEmissions` → `record_intake_emissions_batch` (SECURITY DEFINER, atomic).

### §5.1 Narrative free-text evidence bridge (free-text-intake audit — binding)

Raw narrative answers are **immutable source evidence** (`intake_response`, `answer_type = free-text-bounded`; same version-pin/supersession discipline; Stage-1 emitter is a deliberate **no-op** — narrative mints no auto-assertion, no `patients.*` projection). The "bridge" fans the raw text out to existing homes via **three deterministic mechanisms** (no parallel narrative subsystem, no narrative→`messages` projection):
1. **Write-time safety scan** — deterministic keyword/regex (code-as-config, `rule_version`-pinned), opens a `clinical_required` turn + `priority_hint=urgent_clinical` in the **same transaction**; **AI never does safety routing**.
2. **AI extraction emitter** — produces candidates `authored_by=ai_suggested`, `confidence ≤ moderate`, `status=unconfirmed`, `evidence_refs=[intake_response]` → Clinical Memory; never auto-confirms, never satisfies a floor.
3. **Discrepancy detection** — narrative-vs-structured flagged (`metadata.discrepancy_with_structured`); lower-authority candidate cannot supersede higher.

`narrative_intent` disambiguates structurally: **claim** → assertion candidate · **concern** ("worried about pancreatitis") → `patient_concern_topic`, NOT a condition assertion · **question** → `patient_action_item` (`provider_question_pending`). **Mixed paragraph → per-segment** candidates in one transaction (clinical → assertions; billing/shipping/account → `ops_triage_request`). Repeated narrative is longitudinally detectable **only via the assertion rollup** (no parallel narrative-frequency engine).

## §6 Session lifecycle + Mode E/F/J

`intake_sessions` (status enum + metadata; `pathway_codes[]` + `pathway_version_pins`). Entry-moments: `onboarding | follow_up | check_in | provider_request | patient_self_correction`. **Mode E** (provider follow-up picker — `pickable_in_provider_followup` questions; answer is still patient_reported), **Mode F** (cron/system check-ins per pathway), **Mode J** (patient self-correction; supersedes prior patient-authored claim, does NOT auto-confirm). All three reuse the same resolver + question-bank + write API.

**`progressive_intake_long_running` session (the home for stage-agnostic Mode E/F/J writes; intake-coherence + mode-j audits):** Mode E/F/J writes attach to a persistent session, NOT a new `intake_sessions` per write (satisfies the `1K.4` `intake_session_id` requirement without distorting funnel metrics — funnel queries filter `status != progressive_intake_long_running`). **Two scopes:** a **global** per-patient session (`care_program_id=NULL, pathway_code=NULL`) for **cross-program facts** (allergies/medications/conditions/surgical/family history) + a **per-care_program** session for pathway-specific facts (GLP-1 dose tolerance, HRT symptom score); both opened at the patient's **first Stage-3 transition** on any pathway. **Mode J is restricted to Stage 3+** (longitudinal care begins at Stage 3); pre-Stage-3 patients use the active intake flow (Mode B) or the message thread — this resolves the Stage-2 forward-only-commit contradiction (forward-only rejects patient self-correction of a Stage-1 answer ON THE SAME session; Mode J writes a SEPARATE progressive session, legitimately). **Multi-pathway session:** the session's stage = the **max** stage of any pathway in `pathway_codes[]`; per-pathway ineligibility sets `closed_eligibility_pathway_codes[]` (subset) and the session continues if any pathway remains eligible.

## §7 Patient-source capture invariant (§7.5.3)

Intake-emitted clinical claims are written as **patient-source**: `source_authority = patient`, `patient_initiated = true`, `clinical_adoption_state = not_adopted`, `status = unconfirmed`. **Intake NEVER auto-promotes to clinical truth** and NEVER writes `provider_*`/adopted status — adoption is a Clinical Memory + provider act. Provenance is set at emit and preserved downstream.

## §7.1 Intake-time clinical-safety pre-screen (1K.7 — absorbed)

Deterministic safety gates fire at intake-time so obviously-ineligible requests are blocked before provider review (preserves provider time) — a **pre-screen, NOT** a replacement for decision-time `§1G.2` enforcement (that's CNS/Clinical-Memory at the therapy-change mutation).
- **Hard gates** (block intake/payment-for-Rx): jurisdiction/licensure, age/DOB, sex-assigned-at-birth (pathway-required), pathway-specific **absolute contraindications** (nitrates+ED, MEN-2+GLP-1, etc.). Write `intake_eligibility_blocker` + stable reason codes.
- **Soft flags** (don't block; surface to provider packet): out-of-band BMI, mild contraindications, clarification items → `intake_safety_flag`.
- **Gate-staging (binding, per 1K.13):** jurisdiction/age fire **Stage 0.5 (no `patients` row, no PHI)**; sex/absolute-contraindication/lab-prereq fire **Stage 1 (account required)**; a pathway may NOT relocate a gate for conversion, NOR ask a Stage-1 clinical gate pre-account.
- **Re-entry re-check (every new pathway/resume crossing a day boundary):** jurisdiction · age · consent-freshness · identity-L-level — none silently skipped; failure opens an action item (not a dead-end).
- **Engine-version-pin re-eval:** hard gates always re-evaluate under latest ruleset (safety wins, pinning never overrides a new hard block); soft flags/scores pinned per session, re-evaluated at next entry/provider-review; already-submitted cases never silently re-decided.
- **Time-sensitive-fact safety (binding; intake-coherence E.4):** for clinically-decisive mutable facts (`pregnancy_status`/`lactation_status`, `time_sensitive_30d`), the downstream **safety preflight MUST read a fresh assertion** — a GLP-1/TRT/HRT/off-label refill `actionContext` reads `pregnancy_status` regardless of sex-at-birth; missing-or-stale → `paused_needs_pregnancy_status_refresh`, opening a Mode J / Mode F refresh. (The enforcement READ is the safety preflight's, CNS/Clinical-Memory §10.1 — intake declares the freshness profile + supplies the capture surface.)
- **Per-mutation jurisdiction re-check (seam, not intake-owned; E.8):** a patient who moves states between refills does NOT re-enter intake — so jurisdiction must be re-checked **at the mutation's safety preflight** (`patients.state_of_residence` vs allowed-states; mismatch → `paused_needs_jurisdiction_review`), not only at intake re-entry. Routed to the safety-preflight/CNS read set (§11).
- **`intake_inconsistency_flag` (repeat-attempt answer-flips; E.6):** when a post-denial retry flips a prior answer, a typed `patient_timeline_events` payload records prior-vs-current; the provider packet renders the side-by-side. Not a new table.

## §7.2 Scoring, derived values, treatment_plan_candidate, provider packet (1K.9/1K.10/1K.12 — absorbed)

- **Deterministic scoring layer (1K.9):** versioned **declarative** scoring (IIEF-5/ADAM-AMS/readiness composites) computed server-side (**not** an LLM). Outputs are **derived artifacts, not diagnoses**; **scores CANNOT clear `§1G` permits, satisfy contraindications, or set `reviewed_at`** — they inform, provider acts.
- **Patient-facing derived-value contract:** every shown derived value declares `sync` (in-resolver) or `async` (named job), and is **persisted-before-shown** with full version-pin (`computation_formula_version` + `engine_version` + `score_inputs_snapshot_id` + `computed_at`); ephemeral UI-only derived values are **forbidden** (defeats replay). **Storage routing:** trackable derived values (BMI, symptom-severity signal) → **Observation `patient_state_observations`** (`source=system`, `source_id=intake_session_id`); scoring/recommendation artifacts → `intake_derived_score`; treatment plans → `treatment_plan_candidate`.
- **`treatment_plan_candidate` (1K.10):** provisional "you may be a fit" recommendation, references catalog `treatment_items`, **candidate ≠ order** (always `pending_provider_review`; order created only on provider approval → D6); carries score linkage (why suggested, no AI black box); versioned claims.
- **Provider-review submission packet (1K.12):** intake **assembles** a deterministic reconstructable packet (intake summary + risk/contraindication flags + meds/allergies/history + scores + candidate + lab status + verbatim narrative + per-segment AI candidates + identity confidence + payment-auth status), rendered **from stored rows** (no silent recompute). **Intake assembles; the provider DECISIONS through `§1G` permits + `clinical_visits` (CNS/clinical), NOT the intake engine.** Every terminal decision carries a stable `decision_outcome_reason` code (owned at the decision record, CNS/clinical) — intake supplies the packet it's decided against.

## §8 Invariants / rejection rules

1. **Atomization boundary** (`1K.0.5`): route each datum to its canonical home; no mega-blob; not everything is an assertion.
2. **No direct `patients.*` write** (`1J.10` REVOKE): chart columns are downstream projections, never written by intake.
3. **Append-only + supersession**: responses/observations immutable; corrections write new rows with `supersedes_*`.
4. **Version-pin reconstructability** (`1K.4`): a single `intake_response` row + git-pinned versions + `branch_path_token` reproduces the exact prompt + branch, no live-config join.
5. **Same-transaction audit** (`1Q.7`): every mutating emission pairs an `audit_events` row atomically.
6. **Pre-account PHI boundary** (`1K.13`): `pre_account_safe: true` → destination ∈ {session_state_mutation, audit_events_only}; never a PHI-bearing destination.
7. **Patient-source posture** (§7; §7.5.3): intake emits patient-source/provisional only.
8. **Display-only ≠ answer** (`1K.4` line 3012): narrative steps emit `audit_events` (`intake.display_step_rendered`), never an `intake_response` row.
9. **Scores/derived values inform, never decide** (1K.9): cannot clear `§1G` permits, satisfy contraindications, or set `reviewed_at`; no derived value shown unless persisted-first with full version-pin.
10. **Pre-screen ≠ enforcement** (1K.7): intake-time safety gates are a deterministic pre-screen; decision-time `§1G.2` enforcement (CNS/clinical) is separate and authoritative; hard gates re-evaluate under latest ruleset (safety wins over pinning).
11. **`treatment_plan_candidate` ≠ order** (1K.10): provisional only; order on provider approval (→ D6).
12. **Out-of-scope guardrails** (1K.18): intake is NOT a form-builder, NOT a clinical decision-maker, NOT a second AI engine, NOT the clinical-memory store — it constructs/captures/routes/pre-screens/assembles only.
13. **No patient update rewrites prior-decision evidence** (intake-coherence; the single most important client-update invariant): every prior signed decision stays reconstructable from rows-as-of-decision-time — append-only + supersession + `1K.12` packet-snapshot pinning + `1K.9` derived-value version-pin. A correction APPENDS; it never UPDATEs and never mutates the evidence a prior `clinical_visits` decision was made against.
14. **Narrative discipline** (§5.1): raw free-text is immutable evidence; the **deterministic** safety scan (not AI) gates `clinical_required`; AI extraction is `ai_suggested`/never-authoritative; no narrative→`messages` projection; no parallel narrative-pattern engine (rollup only).
15. **Mode J write-contract** (mode-j audit): writes funnel through `recordIntakeResponse` with `authored_by=patient` + `correction_reason=patient_self_correction` (**REQUIRED when `supersedes_response_id` is set**); `authored_by ∈ {patient,provider,system,ops}`; authorized by **patient-session RLS** (no staff capability, no service-role bypass route); **Stage 3+**, writing to the `progressive_intake_long_running` session (§6).

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
| **1K.5** answer reuse/freshness/re-prompting + no-silencing | **preserve (intake)** | §3 + §4 (reuse_policy/freshness_profile) |
| **1K.7** clinical-safety pre-screen + gate-staging + re-entry-recheck + engine-version-pin | **place → §7.1 (intake)**; decision-time enforcement → CNS/Clinical-Memory (§1G.2) | intake pre-screens, never enforces the final decision |
| **1K.8** labs/at-home-kit routing | **seam → Observation/labs + D6 (kit fee)** (§11) | intake routes + records ordered; not result interpretation |
| **1K.9** scoring/derived-values + patient-facing derived-value contract | **place → §7.2 (intake)**; trackable derived values → Observation `patient_state_observations` | deterministic, version-pinned; scores never decide |
| **1K.10** `treatment_plan_candidate` | **place → §7.2 (intake)**; order on approval → D6 | candidate ≠ order |
| **1K.11** checkout authorization + `patient_consents` capture | **→ D6 (checkout) + D7 (consent artifact)**; intake captures, those own | already in D6 §7 |
| **1K.12** provider-review submission packet assembly | **place → §7.2 (intake assembles)**; decisioning → CNS/clinical | intake assembles; provider decides via §1G |
| **1K.18** out-of-scope guardrails | **place → §8.12 (intake rejection rules)** | what intake will not become |
| **1K.19** Intake Repository and Control Model | **queue** (`REV-162`) | governance/repository model — verify home (intake governance vs Build OS) |
| intake audit cluster (2026-04-27/30: intake_coherence + free_text_intake + mode_j_spot; +construction_audit = spine's own audit, already reflected) | **incorporated (sharpens)** | §4 (freshness profiles + req_provider_ack + narrative_intent/safety_scan), §5.1 (narrative bridge), §6 (progressive session + Mode J Stage-3+ + multi-pathway), §7.1 (time-sensitive safety + jurisdiction + inconsistency_flag), §8.13-15, §11 seams |
| care_program/care_episode stage anchor (E.3) · per-mutation jurisdiction (E.8) · report_concern→Observation (E.10) | **cross-domain seams → D5 / safety-preflight(CNS) / Observation** (§11) | intake declares + captures; the other side owns minting/enforcement/storage (D5 & CNS & Observation are drafted) |
| narrative AI-extraction emitter + Mode-J CI guardrail/RLS + care_program-observation backfill | **build-state** | engineering mechanics; binding rules placed (§5.1/§8.14-15), runtime lands at build |

## §11 Seams

- **`SC-INTK-CM-001`** Intake → Clinical Memory (atomized patient-source claim emit; claim-first; provisional/`not_adopted`).
- Intake → CNS (intake_submitted / check-in events → candidate/orchestration; `repo/rules/account_lifecycle/intake_submitted_v1`).
- Intake → Identity (patient/contact/address emission targets resolve to Identity homes).
- Intake → Commerce/eligibility (subscription/treatment_order/commerce_order/eligibility_decision targets; `treatment_plan_candidate` → order **only on provider approval**, 1K.10/1K.11).
- Intake → Documents (`routePatientDocument` for uploads; **consent capture → D7 `consent_artifact`**, 1K.11 — intake captures acceptance, D7 owns the artifact).
- **Intake → Observation** (1K.8 labs routing: intake routes to lab module + records labs ordered (`intake_session_id` on the order), result interpretation NOT intake; **trackable derived values** (BMI/symptom-severity) → `patient_state_observations`, 1K.9).
- **Intake → CNS / provider-review** (1K.12 submission packet → provider decisioning via `§1G` permits + `clinical_visits`; `decision_outcome_reason` recorded at the decision, not intake).
- **Intake → Observation (patient-initiated side-effect; E.10):** a `report_concern` action item walks the patient through a structured-input module (same question bank) → `patient_state_observations` (`source=patient_initiated_report`), so volunteered side-effects feed trend/continuation logic — NOT only the message thread. CNS notifies provider if severity/trend crosses threshold.
- **Intake ↔ D5 care_episode stage anchor (E.3):** the `care_program`/`care_episode` is minted at the **Stage 2→3 provider approval** (D5/clinical owns minting); intake carries an `intake_sessions.care_program_id` back-pointer (populated in the same transaction) and any Stage-1 `patient_state_observations` with `care_program_id IS NULL` are repointed on minting. Intake does NOT create care_episodes.
- **Intake → safety preflight (CNS/Clinical-Memory): per-mutation jurisdiction + time-sensitive-fact reads** (E.4/E.8) — intake declares the freshness profiles + supplies capture; the per-mutation enforcement read is the preflight's (§7.1).

## §12 Open items (→ `08`)

- **Build-state truth** (`REV-152`): confirm shipped-vs-designed across Phase 3 foundation / Phase 4A orchestrator / Phase 4 resolver-runtime / frontend renderer / Stripe / rule engine (design §I build order); README says Phase 3 stubs, orchestrator is Phase 4A — reconcile before build.
- Clinical-Memory vocab unification (`REV-151`, owned by Clinical Memory contract) affects `concept_mapping` emit shape.
- §B trace-lineage threading (`source_event_id → candidate_id → resolver_id → commit_id`) recovery (`REV-148`) touches intake runtime.
- **1K.19 Intake Repository and Control Model** home (`REV-162`): verify whether the repository/control-model governance lives in this contract (intake governance) or the Build OS; not yet placed.
- Legacy-scatter backfill (2026-05-31) absorbed 1K.5/1K.7/1K.8/1K.9/1K.10/1K.12/1K.18 into §3/§7.1/§7.2/§8/§11; ratification confirms placements.
- **Cross-domain placements to confirm at the other side's ratification** (corpus-pull 2026-06-01): care_episode Stage-2→3 minting + Stage-1 observation backfill (**D5**); per-mutation jurisdiction + time-sensitive-fact (pregnancy) safety reads (**CNS/Clinical-Memory safety preflight**); `report_concern` → structured `patient_state_observations` (**Observation**). Intake declares/captures; verify the owning side lands enforcement/minting/storage.

## §13 Evidence sources

`intake_construction_design` (2026-04-27) + its audit · `clinical_assertion_layer_design` (→ Clinical Memory) · system map **full `1K.0`–`1K.19`** (incl. 1K.5 freshness / 1K.7 safety pre-screen / 1K.8 labs / 1K.9 scoring-derived-values / 1K.10 treatment_plan_candidate / 1K.12 provider packet / 1K.18 out-of-scope / 1K.19 repository-control) · shipped `lib/intake/*` + `lib/intake/README.md` + `record_intake_emissions_batch` migration · **intake audit cluster (2026-04-27/30): `intake_coherence_pressure_test` · `free_text_intake_pressure_test` · `mode_j_spot_audit` · `intake_construction_audit`** + atomization / retrievability pressure tests · thesis v2 §7.5.3.

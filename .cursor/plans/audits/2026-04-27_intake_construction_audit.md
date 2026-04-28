# Intake Construction Design Audit (2026-04-27 design vs current system map)

**Date:** 2026-04-27
**Audited:** `.cursor/plans/designs/2026-04-27_intake_construction_design.md`
**Against:** `.cursor/plans/system_map_three_layers_60706286.plan.md`
**Scope:** consistency with existing intake flow, database routing, source-of-truth rules, Mode J / provider follow-ups / system check-ins, buildability for engineers

---

## A. Blocking mismatches (must be resolved before patching)

### A1. `displayOnly` destination conflicts with `1K.4` line 3012 audit/response separation

Line 3012 locks the rule: *"what was shown"* → `audit_events`; *"what the patient answered"* → `intake_response`. The design's `displayOnly` clause says it "writes nothing to a domain table but DOES write an `intake_response` row" — that conflates shown-without-answer with answered. A narrative/education step has no patient answer; writing an `intake_response` row for it pollutes the canonical assertion log and breaks the `patient_clinical_assertion_current` view's "field has been asserted" semantics.

**Required fix:** drop `displayOnly` from the destination union. Display-only steps emit a typed `audit_events` row (`event_type = intake.display_step_rendered`) carrying `module_id`, `module_version`, `question_id`, `question_version`, `branch_path_token`, `rendered_template_snapshot` — no `intake_response` row. The resolver still pins the version, but the audit log is the destination.

### A2. Invented write API names (`recordIntakePathwaySelection`, `recordIdentityVerificationStep`)

`1K.0` line 2881 names the canonical write APIs: `recordPatientStateObservation`, `routePatientDocument`, "the chart-update path with `1J.10` safety preflight", `recordIntakeResponse`, "lab order creation per `Section 1L` Scenario A path". The design's two additional names are not in the map.

**Required fix in the patch:** drop the invented names. Pathway selection writes a mutation on `intake_sessions.pathway_codes[]` per `1K.2` line 2958 (no separate write API needed; it's a session-state mutation, not a domain write). Identity verification steps route through the `Section 1J` / `Section 1O` paths already named — `routePatientDocument` for ID/selfie photo upload, plus the `patient_identity_verifications` write owned by `Section 1J` (the chart-update-with-preflight path). No new API surface introduced by the design.

### A3. Mandatory-version-capture vocabulary mismatch with `1K.0` line 2890

Line 2890 already names the required reproducibility inputs as `(question_bank_version, branching_rule_version, mapping_version, jurisdiction, identity_state, payment_state, prior_responses)`. Patch 4 introduces `predicate_ruleset_version` (synonym for `branching_rule_version`) and omits `mapping_version` entirely.

**Required fix in the patch:** rename `predicate_ruleset_version` → `branching_rule_version`; add `mapping_version` (semver of the question-destination mapping registry — bumped when any question's `destination` field changes domain API or `field_name`). Aligns Patch 4 with line 2890.

### A4. `entry_moment` enum missing a value for Mode J

Line 3016 declares the enum: `onboarding | follow_up | check_in | provider_request`. The design refers to Mode J writes as `entry_moment = patient_self_correction`. That value is not in the enum.

**Required fix in the patch:** extend the enum at line 3016 to add `patient_self_correction` for Mode J writes. Without it, Mode J writes cannot satisfy the mandatory version capture rule (the resolver fails closed per line 3017).

---

## B. Non-blocking improvements (tighten before patching where cheap)

### B1. `pathway_version` is a new concept; not yet on the `intake_sessions` schema row

`1K.14` line 3438 declares `intake_sessions` with `pathway_codes[]` but no `pathway_version` field. Patch 3 introduces `pathway_version` and Patch 4 references "pinned pathway file version", but the `intake_sessions` schema doesn't carry the pin. Add `pathway_version_pins jsonb` (or `pathway_versions[]` parallel to `pathway_codes[]`) to the `intake_sessions` schema row at line 3438 in the same patch round so the pin actually has a home in the table.

### B2. `SessionContext` shape not named in 1K.0 prose

Line 2880 describes session state as "prior answers + pathway + jurisdiction + identity status + payment status + care-program context" but doesn't name the structured shape. Patch 2 references `SessionContext`; the prose at line 2880 should adopt the term so all three patches reference the same vocabulary.

### B3. Resolver hydration of `SessionContext` is unspecified

Where does the `responses` map come from on each resolver call? Per-call query of `intake_response`? Cached on the session row? Recomputed on resume? Line 2927 mentions a session `state_hash` for corruption detection but doesn't name the hydration model. Recommendation: state it once — "SessionContext is hydrated from `intake_response` filtered by `intake_session_id` plus the global `patient_clinical_assertion_current` view for cross-session globals; cached in-process per request; never persisted as a parallel mutable copy."

### B4. Error semantics for missing predicates / retired questions / pathway-not-found

Resolver should fail closed; behavior not stated in either the design or the map. Worth a sentence: "Resolver returns `{blocked, reason_code: engine_config_drift}` and emits a `1G.5` `system_bug_or_defect` exception when (a) a pathway file references a retired `question_id`, (b) a predicate referenced by a module step is not in the predicate library at the pinned `branching_rule_version`, or (c) a pathway version cannot be resolved from git."

### B5. Render hint (radio/dropdown/slider) on the question bank entry

Already flagged in the design's "Broad Problems #1". Since Patch 1 is opening the question bank entry shape, fold `render_hint?: 'radio' | 'dropdown' | 'slider' | 'segmented' | 'numeric_input' | 'date_picker'` in now to avoid a follow-up patch that touches the same paragraph.

### B6. `question_variant_id` for A/B testing

Same logic as B5 — fold in now or accept that a future A/B test ships without an audit slot for the variant. Even if not used in v1, the slot is cheap.

### B7. Pre-account-safe enforcement

Patch 1 introduces `pre_account_safe: boolean`, but the CI rule that enforces it ("any question with `pre_account_safe: true` writes to a non-PHI destination") is in the design but not in the patch text. Add one sentence to Patch 1's CI invariants: "any question with `pre_account_safe: true` MUST declare `destination.api ∈ {recordIntakePathwaySelection (cookie-scoped), displayOnly}` — never `recordIntakeResponse` or any PHI-bearing destination per `1K.13` Stage 0/0.5 PHI boundary."

### B8. Decision tables for `jurisdiction × pathway × medication-class × dose`

Mentioned at line 2906 but file format and CI loader undefined. Not a blocker for the question/module schema, but the path forward is worth naming so a future engineer doesn't reinvent it.

### B9. Snapshot deduplication for `rendered_template_snapshot`

For high-volume trackable check-ins, the same template renders thousands of times. Recommendation: same pattern as `legal_text_snapshot_id` in `1K.11` — a snapshot table with a `template_snapshot_id` reference. Not a blocker; deferrable.

### B10. `IdentityStepKind`, `ConsentType`, `DocumentKind` referenced but not defined

The design's `AnswerDestination` discriminated union references `DocumentKind`, `IdentityStepKind`, `ConsentType` enums. `DocumentKind` is implicit in `Section 1O`; `ConsentType` is enumerated at `1K.11` line 3232. `IdentityStepKind` is not enumerated anywhere — needs a definition (`'address_legal_name' | 'ssn_last_4' | 'id_document_photo' | 'selfie_biometric'` would mirror the Stage 2 sequence at line 2755). Once A2 is fixed (no invented `recordIdentityVerificationStep`), `IdentityStepKind` becomes moot.

---

## C. Safety verdict

**NOT YET SAFE to patch as written.**

Four blocking mismatches (A1 `displayOnly` contradicts 3012; A2 invented API names; A3 version vocabulary diverges from 2890; A4 `entry_moment` missing Mode J value) materially conflict with locked map text. Patching as-is would create new contradictions inside the section the patches claim to extend.

**Path to safe:** apply the four corrections in C and the cheap items from B (B1, B2, B7) inside the same patch round. The remaining B items (B3, B4, B5, B6, B8, B9) are deferrable to a follow-up audit.

After corrections: patches become safe.

---

## D. Corrected wording patches (apply only after sign-off)

### Patch 1 (corrected) — extend the question_bank entry shape declaration at line 3000 (1K.4)

Append after the existing line-3000 bullet:

> The question bank entry's full required shape (TypeScript discriminated union over `answer_type`, lives in `repo/intake/question-bank/` per `1K.0` code-as-config) declares: `question_id`, `question_version`, `internal_label`, `patient_label` (with optional `{{template_ref}}` placeholders resolved by the resolver from `SessionContext` per `1K.0`), `patient_label_template_refs` (typed list of `patient_field | prior_answer | derived_value` refs — `derived_value` refs require a persisted `1K.9` row, never ephemeral UI computation), `answer_type` + per-type fields (choices for select; min/max/precision for numeric; scale labels for `severity_ordinal`), **`destination`** (one of `recordIntakeResponse | recordPatientStateObservation | routePatientDocument | recordPatientConsent | session_state_mutation` — for pathway selection writes to `intake_sessions.pathway_codes[]` per `1K.2`, identity-verification steps route through the `Section 1J / 1O` paths via `routePatientDocument` plus the chart-update path with `1J.10` preflight per `1K.0` line 2881; the resolver's write-API dispatcher reads this field per `1K.0(c)`), `render_hint?` (`radio | dropdown | slider | segmented | numeric_input | date_picker`; UI may override for accessibility but the hint is captured for reconstruction), `question_variant_id?` (set when an A/B copy variant ships on the same `question_id`; captured on every response for exact reconstruction), `reuse_policy`, `freshness_profile`, `is_trackable`, `field_name` (required when `reuse_policy = global` OR `is_trackable = true`), `requires_provider_acknowledgment`, `pickable_in_provider_followup` (controls visibility in the `1K.6` provider picker), `allowed_stages[]` and `pre_account_safe` (per `1K.13` staging — pre-account questions never capture PHI), `jurisdiction_scope[]?`, `pathway_scope[]?`, and `retired { retired_at, replaced_by? }?`. **Display-only narrative steps** (education, expectation-setting copy) carry no `destination` write — they emit a typed `audit_events` row `event_type = intake.display_step_rendered` with `(module_id, module_version, question_id, question_version, branch_path_token, rendered_template_snapshot)` so the version pin and reconstruction guarantee per `1K.4` are preserved without polluting `intake_response` per the line-3012 shown-vs-answered separation. CI-enforced invariants per `1K.0` resolver test harness: a `field_name` may not carry conflicting `reuse_policy` across declarations; `is_trackable: true` requires a `field_name` that exists in the `Section 1M` field_name registry; explicit override of the `requires_provider_acknowledgment` derivation requires a justification comment; `pre_account_safe: true` requires `destination.api ∈ {session_state_mutation, audit_events_only}` — never `recordIntakeResponse` or any PHI-bearing destination per `1K.13` Stage 0 / 0.5 PHI boundary.

### Patch 2 (corrected) — extend the module declaration at line 2984 (1K.3)

Append after the existing line-2984 sentence:

> Module steps are typed as `{kind: 'question', question_id, required: boolean | Predicate, render_when?: Predicate}` or `{kind: 'submodule', module_id, render_when?: Predicate}` or `{kind: 'derived_display', derived_value_id, computation: 'sync' | 'async', render_when?: Predicate}` per the `1K.0` resolver schema. Predicates are pure functions over `SessionContext` (the named structured shape covering prior answers + identity + jurisdiction + payment + care-program context + stage + derived values, hydrated from `intake_response` filtered by `intake_session_id` plus the global `patient_clinical_assertion_current` view per `1K.5` for cross-session globals; never persisted as a parallel mutable copy) drawn from the named predicate library in `repo/intake/predicates/`; copy-paste of branching across modules is rejected in code review per `1K.0` predicate-extraction rule. Modules compose other modules to keep topology shallow (e.g., `mod.contraindication.glp1` includes `mod.contraindication.medullary_thyroid`).

### Patch 3 (corrected) — extend the pathway record description at line 2958 (1K.2)

Append after the existing line-2958 bullet:

> Each pathway is a declarative file (`repo/intake/pathways/<pathway>.ts`) that pins, per `pathway_version`, the exact `(module_id, module_version)` pairs it includes, the `layer_position` overrides per module, the `l_gate` per `1J.4`, the `jurisdiction_eligibility` policy per `1G.4.1`, the `payment_model` per `1K.11`, and the `intent_codes[]` that map to it. **Bumping any module_version pinned by a pathway bumps the pathway_version**; the pin is recorded on `intake_sessions.pathway_version_pins` (jsonb map of `{pathway_code: pathway_version}`, parallel to `pathway_codes[]` per `1K.14` schema row) at session creation per `1K.4` mandatory version capture so reconstruction is deterministic.

### Patch 4 (corrected) — extend mandatory version capture + entry_moment enum at line 3016 (1K.4)

Replace the existing `entry_moment` enum text and append additional version-capture text within the same line-3016 bullet.

> Additionally: `branching_rule_version` (semver of the branching predicate library; aligns with `1K.0` line 2890 replayability vocabulary), `question_bank_version` (semver of the bank build, bumped on any retire/add), `mapping_version` (semver of the question-destination mapping registry, bumped when any question's `destination` field changes domain API or `field_name`), and `rendered_template_snapshot` (the exact patient-facing string after `patient_label_template_refs` resolution per `1K.4` question-bank entry shape) are stored on `intake_response.metadata`. **Extend `entry_moment` enum to:** `onboarding | follow_up | check_in | provider_request | patient_self_correction` (Mode J writes per `1K.13` carry the new value). Replayer tool: given a single `intake_response` row, the historic question bank + pathway file at the pinned versions can be fetched from git and the predicates re-evaluated to reproduce the exact prompt the patient saw — without joining live config.

### Patch 5 (NEW; required to make B1 land) — extend the `intake_sessions` schema row at line 3438 (1K.14)

Inside the existing parenthesized field list, add `pathway_version_pins jsonb` after `pathway_codes[]`. Add a one-line addendum to the column's prose:

> **`pathway_version_pins`** is a `{pathway_code: pathway_version}` jsonb map captured at session creation; required for `1K.4` mandatory version capture so `intake_response.metadata` can record `pathway_version` per row without re-resolving live config.

---

## Disposition

User approved on 2026-04-27. All five corrected patches applied to lines 2958, 2984, 3000, 3016, 3438 in the same checkpoint as this audit file. Original design preserved at `.cursor/plans/designs/2026-04-27_intake_construction_design.md`.

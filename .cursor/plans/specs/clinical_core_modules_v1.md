# Clinical core modules — Layer B spec v1

**Date:** 2026-05-02
**Stage:** 2 Phase 1 — Layer B authoring (3 modules; 8 questions)
**Clinical CODEOWNER:** founder (board-certified MD)
**Architecture pin:** `Section 1K.3` (atomization + 4-layer module taxonomy + answer mechanics) + `Section 1K.4` (question bank + versioning) + `Section 1K.5.A` (clinical assertion layer; multi-instance entity modeling) + `Section 1K.19` (intake repository + control model)
**Reference funnel:** [.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md](.cursor/plans/ingestion/hims/hims_weight_loss_new_patient.md)

## Scope

Layer B clinical_core modules — pan-domain clinical baselines that apply regardless of medical specialty. Reusable across every clinical pathway where clinically appropriate.

**3 modules in this file:**
1. `mod.clinical_core.medication_history_v1` — 3 questions (multi-instance entity)
2. `mod.clinical_core.allergy_history_v1` — 3 questions (multi-instance entity)
3. `mod.clinical_core.surgery_history_v1` — 2 questions (free-text + multi-instance optional)

**Total: 8 questions; produces multi-instance atom collections for medications + allergies + surgeries.**

## Multi-instance modeling note

Per `Section 1K.5.A` `context_key` discipline + `Section 1K.3` Stage 1 multi-instance rule: medications, allergies, and surgeries are MULTI-INSTANCE ENTITIES. Each instance is uniquely identified by `(concept_id, context_key)` tuple; instance attributes attach via `metadata`. Follow-up questions are scoped per-instance.

---

## Module 5 — `mod.clinical_core.medication_history_v1`

**`module_id`:** `mod.clinical_core.medication_history_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all (pan-domain)
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`

### Q5.1 — Currently take any medications or supplements?

**Hims source:** Step 57 "Do you currently take any medications or supplements? No / Yes"
**MAIN voice:**
- prompt: "Do you currently take any medications or supplements?"
- helper: "Include prescriptions, over-the-counter, vitamins, and herbal supplements. We need this for safety screening."

**Schema:**
- `question_id`: `qb.clinical_core.medication_history.current_use_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Positive (Yes): `medication.has_current_use = true`
- Denied (No): `medication.has_current_use = false` (denied atom; provider sees "patient explicitly denied current medications" in workspace)

**Issues found:** Hims's wording is fine; MAIN voice slightly warmer + helper clarifies scope (Rx + OTC + vitamins + herbals).
**Recommended rewrite:** Keep with helper expansion.
**Branching adjustments:** `yes` → render Q5.2 (multi-instance trigger); `no` → skip Q5.2 + Q5.3.
**Downstream effect:** `provider_review` (active medications affect drug interactions across all pathways).
**Final decision:** **Modify** (helper expansion).

### Q5.2 — List medications and supplements (multi-instance trigger)

**Hims source:** Hims captures via free-text or typeahead in subsequent step (not explicitly mapped in our ingest)
**MAIN voice:**
- prompt: "What are you taking?"
- helper: "Type to search. Add each one separately. Include doses if you remember them."

**Schema:**
- `question_id`: `qb.clinical_core.medication_history.list_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `multi_instance` | `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.clinical_core.medication_history.current_use_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)
- `assertion_group_id`: `medication_history_per_instance`

**Choices:** Typeahead controlled vocab (RxNorm-mapped medication + supplement registry); "Other (free-text)" fallback for items not in registry

**Atoms emitted (multi-instance per item):**
- Positive: `medication.<rxnorm_or_name>_instance` (concept_id; one assertion per medication; metadata: `{rxnorm_id?, name, dose?, free_text_fallback?}`)
- Denied: n/a (Q5.1 = `no` already denies the whole module)

**Issues found:** None.
**Recommended rewrite:** Keep.
**Branching adjustments:** Each selected medication opens per-instance Q5.3 (reason for taking).
**Downstream effect:** `provider_review` (provider sees full medication list in `decision_support_payload`).
**Final decision:** **Modify** (new question; multi-instance entity).

### Q5.3 — Reason for each medication (per-instance)

**Hims source:** Hims doesn't explicitly ask reason; we add for richer provider context.
**MAIN voice:**
- prompt: "What are you taking [medication name] for?"
- helper: "Optional. Helps your provider understand the bigger picture."

**Schema:**
- `question_id`: `qb.clinical_core.medication_history.reason_per_instance_v1` | `tier`: 2
- `answer_type`: `free_text_bounded` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `optional`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `provider_context`
- `entity_kind`: `multi_instance` | `instance_scope`: `per_instance` | `atom_kind`: `clinical_history` | `downstream_effect`: `context_only`
- `render_when`: `{atom: 'medication.<instance_id>_instance', exists: true}` (renders per medication selected in Q5.2)

**`free_text_rules`:** `{allow_blank: true, explicit_no_value: 'unsure', safety_scan: true, do_not_force_fake_content: true}`

**Atoms emitted (per-instance):**
- Positive: `medication.<instance_id>_instance.metadata.purpose` (annotation on the existing instance assertion; not a separate atom)
- Denied: blank submission acceptable

**Issues found:** This is Tier 2 (SHOULD ask; not blocking) — patient may not remember the reason for every supplement. `do_not_force_fake_content` allows blank.
**Recommended rewrite:** Keep optional + warm.
**Branching adjustments:** None.
**Downstream effect:** `context_only` (provider sees in decision_support_payload metadata; not a hard signal).
**Final decision:** **Modify** (new optional context question).

---

## Module 6 — `mod.clinical_core.allergy_history_v1`

**`module_id`:** `mod.clinical_core.allergy_history_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all (pan-domain)
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`

### Q6.1 — Any allergies?

**Hims source:** Step 58-59 "Do you have any allergies? Include any allergies to food, dyes, prescriptions or over the counter medicines (e.g. antibiotics, allergy medications), herbs, vitamins, supplements or anything else. No / Yes"
**MAIN voice:**
- prompt: "Do you have any allergies?"
- helper: "Include drugs, food, dyes, supplements, environmental, or anything else. We need this for safety."

**Schema:**
- `question_id`: `qb.clinical_core.allergy_history.has_any_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Positive (Yes): `allergy.has_any = true`
- Denied (No): `allergy.has_any = false` (denied atom; provider sees explicit denial in workspace)

**Issues found:** Hims helper is verbose; MAIN tightens to "drugs, food, dyes, supplements, environmental, or anything else."
**Recommended rewrite:** Adopt MAIN voice.
**Branching adjustments:** `yes` → Q6.2 (multi-instance trigger); `no` → skip rest of module.
**Downstream effect:** `provider_review` (allergies affect Rx selection across all pathways).
**Final decision:** **Modify** (tighter helper).

### Q6.2 — List allergies (multi-instance trigger)

**Hims source:** Step 60-61 "Please list what you are allergic to and the reaction that each allergy causes. Search allergies"
**MAIN voice:**
- prompt: "What are you allergic to?"
- helper: "Type to search. Add each allergy separately."

**Schema:**
- `question_id`: `qb.clinical_core.allergy_history.list_v1` | `tier`: 1
- `answer_type`: `multi_select` | `selection_cardinality`: `one_or_more` | `requiredness`: `conditionally_required`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `multi_instance` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.clinical_core.allergy_history.has_any_v1', equals: 'yes'}`
- `required` (resolver): `<Predicate>` (required when render_when fires)
- `assertion_group_id`: `allergy_history_per_instance`

**Choices:** Typeahead controlled vocab (allergies registry: drugs / foods / environmental / dyes / latex / etc.); "Other (free-text)" fallback

**Atoms emitted (multi-instance per item):**
- Positive: `allergy.<substance>_instance` (concept_id; one per allergy; metadata: `{substance_name, kind: 'drug' | 'food' | 'environmental' | 'other', free_text_fallback?}`)
- Denied: n/a (Q6.1 = `no` denies the whole module)

**Issues found:** None.
**Recommended rewrite:** Keep.
**Branching adjustments:** Each selected allergy opens per-instance Q6.3 (reaction severity).
**Downstream effect:** `provider_review` (allergies surface in safety preflight per `Section 1J.10`).
**Final decision:** **Modify** (new structured question; multi-instance entity).

### Q6.3 — Reaction severity per allergy (per-instance)

**Hims source:** Step 60 "the reaction that each allergy causes" — Hims captures as free-text per allergy
**MAIN voice:**
- prompt: "What happens when you're exposed to [allergen]?"
- helper: "Pick the closest match."

**Schema:**
- `question_id`: `qb.clinical_core.allergy_history.reaction_per_instance_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `multi_instance` | `instance_scope`: `per_instance` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: `{atom: 'allergy.<instance_id>_instance', exists: true}`

**Choices:** Mild rash or itching | Hives or swelling | Stomach upset | Trouble breathing | Anaphylaxis (severe; ER required) | Other (free-text follow-up) | Don't know
**`choice_values`:** `mild_rash | hives_swelling | gi_upset | breathing_difficulty | anaphylaxis | other | unsure`

**Atoms emitted (per-instance metadata):**
- Positive: `allergy.<instance_id>_instance.metadata.reaction_severity` (annotation on existing instance assertion)
- Denied: n/a

**Issues found:** Hims uses free-text; MAIN structures to controlled vocab (allows automated severity extraction + cleaner safety preflight). `anaphylaxis` selection elevates the parent allergy to high-severity which feeds safety preflight differently than mild rash.
**Recommended rewrite:** Adopt structured controlled vocab.
**Branching adjustments:** `anaphylaxis` selection → audit_events row `intake.severe_allergy_disclosed`; provider workspace surfaces with elevated priority.
**Downstream effect:** `provider_review` (severe allergies = elevated priority in batch review).
**Final decision:** **Modify** (Hims free-text → structured; cleaner clinical signal).

---

## Module 7 — `mod.clinical_core.surgery_history_v1`

**`module_id`:** `mod.clinical_core.surgery_history_v1`
**`module_version`:** `1.0.0`
**`kind`:** clinical
**`pathways`:** all (pan-domain; pathway-specific extensions add bariatric / orthopedic / gyn detail per `Section 1K.3` contextual extension principle)
**`required_for`:** safety
**`assertion_group_emit_trigger`:** `module_complete`

### Q7.1 — Have you ever had surgery?

**Hims source:** Step 52 "Have you had any surgeries or medical procedures? This helps your provider get a complete understanding of your medical history so they can recommend the best treatment for you. No / Yes"
**MAIN voice:**
- prompt: "Have you ever had any surgeries or medical procedures?"
- helper: "Including outpatient procedures, scopes, biopsies — anything where a provider operated on you."

**Schema:**
- `question_id`: `qb.clinical_core.surgery_history.has_any_v1` | `tier`: 1
- `answer_type`: `single_select` | `selection_cardinality`: `exactly_one` | `requiredness`: `required_to_continue`
- `answer_role`: `clinical_safety` | `intent_of_answer_set`: `safety_screening`
- `entity_kind`: `single_value` | `atom_kind`: `safety` | `downstream_effect`: `provider_review`
- `render_when`: null (baseline)

**Choices:** Yes | No
**`choice_values`:** `yes | no`

**Atoms emitted:**
- Positive (Yes): `procedure.has_any_surgery_history = true`
- Denied (No): `procedure.has_any_surgery_history = false`

**Issues found:** Hims helper is generic. MAIN clarifies scope (outpatient + scopes + biopsies count, not just major operations).
**Recommended rewrite:** Adopt MAIN voice.
**Branching adjustments:** `yes` → Q7.2 (free-text dates/reasons); + per pathway: pathway-specific extensions render (e.g., GLP-1 pathway adds `mod.pathway.glp1.bariatric_surgery_extended_v1`); `no` → skip rest.
**Downstream effect:** `provider_review` (surgery history surfaces in chart drawer; downstream pathway extensions add specifics).
**Final decision:** **Modify** (helper clarification).

### Q7.2 — List surgeries with dates and reasons (multi-instance optional / free-text)

**Hims source:** Step 54-55 "Please tell us the dates and reasons for any surgeries or medical procedures. [text area; 0 / 255]"
**MAIN voice:**
- prompt: "Tell us about your surgeries."
- helper: "Approximate dates and reasons are fine. You don't need to remember everything perfectly."

**Schema:**
- `question_id`: `qb.clinical_core.surgery_history.list_freetext_v1` | `tier`: 1
- `answer_type`: `free_text_long` | `selection_cardinality`: `optional_blank_allowed` | `requiredness`: `skippable_with_explicit_none`
- `answer_role`: `clinical_context` | `intent_of_answer_set`: `clinical_history`
- `entity_kind`: `single_value` (multi-instance atomization happens via `Section 1P` narrative extraction post-submit; questions stays single free-text input)
- `atom_kind`: `clinical_history` | `downstream_effect`: `provider_review`
- `render_when`: `{question_id: 'qb.clinical_core.surgery_history.has_any_v1', equals: 'yes'}`

**`free_text_rules`:** `{allow_blank: false, explicit_no_value: "I don't remember details", safety_scan: true, do_not_force_fake_content: true}`
**`narrative_intent`:** `patient_concern` (per `Section 1K.5.A` narrative-evidence fan-out — enables assertion-candidate extraction via `Section 1P`)

**Atoms emitted:**
- At intake: `narrative.surgery_history_freetext` (free-text raw stored in `intake_response`)
- Post-submit (via `Section 1P` AI atomization): `procedure.<descriptor>_instance` per detected surgery (multi-instance; atoms emitted asynchronously after AI atomization runs; provider workspace shows pending vs confirmed atoms)

**Issues found:** Hims uses free-text 255-char. MAIN expands to `free_text_long` (~20KB) because surgery histories vary widely; some patients have multiple complex histories. AI atomization via `Section 1P` extracts structured atoms post-submit.
**Recommended rewrite:** Adopt `free_text_long` + AI atomization downstream.
**Branching adjustments:** Per pathway: `mod.pathway.glp1.bariatric_surgery_extended_v1` (Phase 2) renders structured multi-select for bariatric specifically as a Layer D extension to this clinical_core baseline.
**Downstream effect:** `provider_review` (provider sees both raw narrative + AI-extracted instance atoms in chart drawer; provider can confirm/reject per `Section 1K.5.A` authority taxonomy).
**Final decision:** **Modify** (expand to free_text_long; add AI atomization).

---

## Layer B audit summary

| Question | Tier | answer_role | atom_kind | downstream_effect | Multi-instance? | Decision |
|---|---|---|---|---|---|---|
| Q5.1 Current meds Y/N | 1 | clinical_safety | safety | provider_review | No (gate) | Modify |
| Q5.2 Med list | 1 | clinical_safety | clinical_history | provider_review | Yes | Modify |
| Q5.3 Reason per med | 2 | clinical_context | clinical_history | context_only | Yes (per-instance) | Modify |
| Q6.1 Allergies Y/N | 1 | clinical_safety | safety | provider_review | No (gate) | Modify |
| Q6.2 Allergy list | 1 | clinical_safety | safety | provider_review | Yes | Modify |
| Q6.3 Reaction per allergy | 1 | clinical_safety | safety | provider_review | Yes (per-instance) | Modify |
| Q7.1 Surgery Y/N | 1 | clinical_safety | safety | provider_review | No (gate) | Modify |
| Q7.2 Surgery list | 1 | clinical_context | clinical_history | provider_review | Yes (via 1P atomization) | Modify |

**Verdict:** 0 Keep + 8 Modify. No Remove. Net: spec adopts Hims's question structure but adds multi-instance discipline + per-instance follow-ups + AI atomization for free-text. Cleaner clinical signal; richer provider context; same patient experience as Hims.

## Atomization boundary (per system map Section 1K.0.5)

This spec's emissions follow the canonical-homes routing discipline established in `Section 1K.0.5`. Layer B modules (medications, allergies, surgery history) capture **claim-shaped** clinical data with multi-claimant reconciliation semantics. Medications and allergies follow the **two-stage claim → reconciliation → entity flow** per `Section 1K.0.5.4` — every emission is a multi-target write (claim ledger + reconciled entity in one DB transaction).

| Module / question | Emission targets | Canonical homes |
|---|---|---|
| Module 5 medication_history (each med item) | `clinical_assertion` + `medication` | `patient_clinical_assertions` (concept_type='medication', authored_by='patient_reported', status='unconfirmed') + `patient_medications` (reconciliation_status='unreconciled', source_assertion_id back-pointer; rich fields populated by reconciliation workflow downstream) |
| Module 6 allergy_history (each allergy item) | `clinical_assertion` + `allergy` | `patient_clinical_assertions` (concept_type='allergy', authored_by='patient_reported') + `patient_allergies` (reconciliation_status='unreconciled', source_assertion_id back-pointer) |
| Module 7 surgery_history (each surgery item) | `clinical_assertion` only | `patient_clinical_assertions` (concept_type='procedure', assertion_type='history_of'). No dedicated `patient_surgical_history` entity in Phase 3 — surgery hx stays in claim ledger. Future promotion candidate per Section 1K.14 if surgical workflows require structured rich fields (specific surgeon, complications, etc.). |

**Multi-target emission pattern (binding):** Module 5 + 6 questions emit BOTH a claim ledger row AND a reconciled entity row in one DB transaction per `Section 1K.0.5.4`. Failure of either rolls back both. Entity row's `source_assertion_id` is populated from claim row's id post-insert. The patient's original imprecise statement is preserved in the claim ledger forever; the reconciled entity reflects the staff/provider-verified current truth.

## Cross-pathway reuse projection

All 3 clinical_core modules are CANDIDATES for reuse across every future MAIN clinical pathway where clinically appropriate. Pathway-specific extensions (bariatric / orthopedic / gyn surgery; psychotropic medication detail; specific allergy follow-ups) live in `mod.pathway.<pathway>.*` and EXTEND these baselines rather than cloning them.

## Next deliverable

`.cursor/plans/specs/domain_modules_v1.md` — Layer C (5 modules; cardiometabolic / gastrointestinal / reproductive / mental_health / lifestyle; ~17 questions).

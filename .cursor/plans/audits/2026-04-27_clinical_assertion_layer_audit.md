# Clinical Assertion Layer Design Audit (2026-04-27 design vs current system map)

**Date:** 2026-04-27
**Audited:** `.cursor/plans/designs/2026-04-27_clinical_assertion_layer_design.md`
**Against:** `.cursor/plans/system_map_three_layers_60706286.plan.md`
**Scope:** consistency with existing intake flow, source-of-truth rules (just hardened in 1K.5), Mode J / provider follow-ups / system check-ins, lab + document + AI integration, buildability for engineers

---

## A. Blocking mismatches (must be resolved before patching)

### A1. `field_name` vs `concept_id` semantic clash with locked 1K.5 vocabulary

The map at line 3049 locks: *"the same `field_name` MUST be used across all pathways that ask the same underlying clinical question. Question-bank governance per `1K.0` (PR + CODEOWNERS) rejects pathway-scoped re-definitions of global `field_name`s."*

Line 3046 locks the canonical read view's dimension as `(patient_id, field_name)`. Line 1688 already shows `field_name` using a dotted naming scheme that looks identical to the design's `concept_id` (`vital.bp.systolic`, `vital.bp.diastolic`).

**The map's `field_name` is already doing the cross-pathway normalization role the design assigns to `concept_id`.** The design adds `concept_id` as a parallel registry without addressing what `field_name` becomes. Two normalization vocabularies for the same job is exactly the kind of duplicate source of truth the rest of the architecture rejects.

**Required fix in the patch:** declare an explicit relationship. Recommendation:
- `concept_id` is the new primary normalization for **clinical concepts** (conditions, allergies, medications, symptoms — things that have presence/absence/history semantics).
- `field_name` remains the primary identifier for **trackable measurements** in `patient_state_observations` per 1M (weight, BP, scores — things that have continuous numeric/ordinal values over time).
- The two vocabularies are **complementary, not redundant**. A symptom assertion (`concept_id = symptom.nausea`) MAY reference a trackable measurement row (`field_name = glp1_nausea_severity`) via `evidence_refs`. The concept is the meaning; the field_name is the measurement series.
- The view dimension extends from `(patient_id, field_name)` → `(patient_id, concept_id, context_key)` for clinical-concept reads. `field_name` remains exposed as a column on the view for backward-compat, NULL when the assertion is purely concept-based.
- 1K.5 line 3049's "field_name vocabulary discipline" rule extends to `concept_id` with parallel CI enforcement.

Without this resolution the design creates the exact dual-source-of-truth problem the 1K.5 hardening was designed to prevent.

### A2. Trigger pipeline rewire contradicts the just-landed 1K.5 Fix A

Line 3048 (just landed last commit) declares: *"refreshed by a Postgres `AFTER INSERT` trigger on the `intake_response` table (DB-level, fires regardless of caller — application code, migrations, backfills, direct SQL via `service_role`) that recomputes the latest non-superseded row per `(patient_id, field_name)` and writes the value into the corresponding `patients.*` column in the same transaction as the source INSERT."*

Design's Section C6 says: *"After this layer: `intake_response INSERT → assertion-emitter → patient_clinical_assertions INSERT → trigger → patients.*`."*

These contradict. The locked text says the trigger is on `intake_response` and writes directly to `patients.*`. The design says the trigger is on `patient_clinical_assertions` and writes to `patients.*` from there. Patching the design as written **silently invalidates Fix A from the 2026-04-27 static-clinical-facts patch round**.

**Required fix in the patch:** explicit two-stage pipeline declared as a revision to the 1K.5 line 3048 text. Recommendation:
- **Stage 1 trigger:** `AFTER INSERT on intake_response` → calls assertion emitter (server-side function) that builds a `patient_clinical_assertions` row when the source question has a `concept_mapping`. Same SECURITY DEFINER, same bypass-resistance properties as the original 1K.5 Fix A.
- **Stage 2 trigger:** `AFTER INSERT on patient_clinical_assertions` → recomputes the latest non-superseded row per `(patient_id, concept_id, context_key)` and writes the projection to `patients.*` columns. Same SECURITY DEFINER properties.
- For questions WITHOUT a `concept_mapping` (score inputs, narrative, demographic), no Stage 1 emit; legacy direct-projection path stays for any field_name that has not yet migrated to a concept_id.
- Both triggers fire in the same DB transaction as the source INSERT — atomicity preserved end-to-end.

This preserves the 1K.5 hardening (the trigger discipline is intact) while extending it through the assertion layer.

### A3. Invented write API name `recordClinicalAssertion`

Same problem as the prior intake-construction audit. The 1K.0 line 2881 named API list is: `recordPatientStateObservation`, `routePatientDocument`, "the chart-update path with `1J.10` safety preflight", `recordIntakeResponse`, "lab order creation per `Section 1L` Scenario A path". `recordClinicalAssertion` is not in that list.

**Required fix in the patch:** name `recordClinicalAssertion` as a NEW addition to the 1K.0(c) write API list, with the same audit + capability discipline as `recordIntakeResponse`. Capability `can_record_clinical_assertion` must be added to `1D.1` capability list. The 1J.10 line 2741 high-risk mutations list adds `clinical_assertion_write` as a new `actionContext` for provider-authored assertions.

### A4. `ai_review_outputs` evidence kind doesn't match existing `patient_chart_ai_reviews`

Layer 2 line 15 names the existing AI suggestion store: *"`patient_chart_ai_reviews`"*. Line 372 reinforces: *"Suggestions live in `patient_chart_ai_reviews` or observation `metadata`. A provider (or `requireCapability` staff) accepts, rejects, or edits."*

Design's `EvidenceRef` union uses `kind: 'ai_review_output'`. Wrong table name.

**Required fix in the patch:** rename `ai_review_output` → `patient_chart_ai_review` in the EvidenceRef union. Aligns with the existing AI-suggestion store and the existing provider-acceptance pattern at line 372.

### A5. Missing `patient_diagnostic_reports` evidence kind

Section 1L treats `patient_diagnostic_reports` and `patient_lab_observations` as distinct (Layer 1 line 12 lists them separately; Lab Appendix §11 governs the report). Lab-derived assertions can reference EITHER the report or the individual observation depending on the interpretation rule.

Design's EvidenceRef only includes `patient_lab_observation`. Missing the report evidence kind.

**Required fix in the patch:** add `{ kind: 'patient_diagnostic_report'; id: string; report_kind?: string }` to the EvidenceRef union. Lab interpretation per 1L.20 may emit assertions referencing the report (when the interpretation is gestalt across multiple observations) or individual observations (when one analyte drives the assertion).

### A6. Self-bugs in C2 SQL (`canonical_serialize`, `authority_rank`)

The C2 schema declares:
```sql
context_key text NOT NULL GENERATED ALWAYS AS (md5(canonical_serialize(context))) STORED
```
`canonical_serialize` is not a Postgres built-in. The C5 view declares:
```sql
ORDER BY patient_id, concept_id, context_key, authority_rank DESC, asserted_at DESC
```
`authority_rank` is referenced but not defined as a column or expression.

**Required fix in the patch:** clean up the SQL. Recommendations:
- `context_key`: compute in the application layer at write time (deterministic JSON canonical form via a shared library function `canonicalContextKey(context)` returning a hex-encoded SHA-256). Store as a plain `text NOT NULL` column. Index on it. CI test enforces same input → same output across language clients.
- `authority_rank`: implement as a SQL `CASE` expression in the view OR as a generated column on the table:
  ```sql
  authority_rank int GENERATED ALWAYS AS (
    CASE authored_by
      WHEN 'provider_confirmed'      THEN 100
      WHEN 'provider_assessed'       THEN 90
      WHEN 'lab_derived'             THEN 70
      WHEN 'document_extracted'      THEN 60
      WHEN 'patient_self_correction' THEN 50
      WHEN 'patient_reported'        THEN 40
      WHEN 'ai_suggested'            THEN 20
      WHEN 'system_derived'          THEN 10
    END
  ) STORED
  ```
- Both fixes belong in the C2 schema text in the patched section.

---

## B. Non-blocking improvements (tighten before patching where cheap)

### B1. `concept_type = 'score'` missing from C1 `ConceptId` union

The design later mentions `score.iief5` (Section M) but the `ConceptId` union doesn't include `score.${string}`. Add it. Also add `concept_type` as a generated column on the assertion table (extracted from concept_id prefix) so filter views ("active problem list = concept_type = 'condition'...") are fast.

### B2. `reconciliation_policy` enum semantics

`auto_dedupe`, `context_distinct`, `requires_provider_review_on_conflict` aren't fully specified. What does `auto_dedupe` actually do when sources differ in confidence or value? Recommendation: define each:
- `auto_dedupe`: same concept + same context_key + same value → idempotent no-op on second write regardless of source. Conflicts (different value) follow `context_distinct` rules.
- `context_distinct`: same concept + DIFFERENT context_key → coexist, no conflict (the nausea case).
- `requires_provider_review_on_conflict`: same concept + same context_key + different value across sources → both rows live, view returns `unresolved_conflict` envelope, high-risk gates fail closed until a provider-authored assertion supersedes.

### B3. `context.encounter_id` declared as future-friendly but no current `encounter` concept

The map has `clinical_visits` per Section 1G, not "encounters". Recommendation: rename `encounter_id` → `clinical_visit_id` in the context shape; align with existing terminology. `encounter_id` was Epic-borrowed; map uses visits.

### B4. `default_authority_floor` references undefined `AuthorityLevel` type

C1 declares `default_authority_floor?: AuthorityLevel` but doesn't define `AuthorityLevel`. It's the same as the assertion table's `authored_by` enum. Recommendation: define once as a TypeScript type alias.

### B5. RLS policy for `patient_clinical_assertions` undefined

Design mentions RLS but doesn't specify. Recommendation: same RLS as `patients` per 1J.10 — patient sees own; staff sees per care assignment per `1G.7`; service_role write only via `recordClinicalAssertion` SECURITY DEFINER function. Patch text should declare this explicitly.

### B6. `branch_path_token` nullable when not intake-sourced

Field is included on the assertion table to enable replay for intake-sourced assertions. For provider/lab/document/AI sources it's NULL. Worth explicit nullable annotation in the schema text.

### B7. View source_actor enum reconciliation with the new `authored_by` enum

The 1K.5 hardening just landed `source_actor ∈ {patient, patient_self_correction, provider_clarification, system_import}` on the view (line 3046). The new assertion model uses `authored_by ∈ {patient_reported, patient_self_correction, provider_assessed, provider_confirmed, document_extracted, lab_derived, ai_suggested, system_derived}`. Mapping:

| Old `source_actor` | New `authored_by` |
|---|---|
| `patient` | `patient_reported` |
| `patient_self_correction` | `patient_self_correction` (unchanged) |
| `provider_clarification` | `provider_assessed` (most cases) or `provider_confirmed` (when explicit confirm action) |
| `system_import` | `document_extracted` (when from a document) or `system_derived` (when computed) |

Recommendation: the view exposes BOTH the new `authored_by` (richer) AND a derived `source_actor` (backward-compat for any reader pinned to the old vocabulary). Deprecation calendar: 90 days after migration, drop `source_actor` from the view.

### B8. Mode J double-supersession

Design says assertion `supersedes_assertion_id` MUST be populated for Mode J updates on the same `(concept_id, context_key)`. But Mode J also writes `intake_response.supersedes_response_id` per 1K.5. Worth explicit: Mode J writes TWO supersession chains in the same transaction (one on intake_response, one on assertion); they reference each other via `evidence_refs` so the lineage is reconstructable from either side.

### B9. `severity` enum missing `none`

1K.4 line 3002 has the canonical severity scale `{0: none, 1: mild, 2: moderate, 3: severe, 4: very_severe}`. Design's severity enum is `mild | moderate | severe | very_severe | NULL`. Should include `none` to align (and make the meaning of NULL explicitly "not applicable" vs `none` which is "asked and answered as none").

### B10. `refines_to_concept_id` implies concept hierarchy

Section M's `ConceptMapping.assertion_template[].refines_to_concept_id` implies parent-child concepts (e.g., `condition.heart_failure` → `condition.heart_failure_systolic`). The design doesn't declare hierarchy semantics. Recommendation for v1: flat with optional `parent_concept_id` field on the concept registry entry; explicit tree/graph operations deferred. Provider refinement writes a new assertion with the more-specific concept_id and `supersedes_assertion_id` to the parent assertion.

### B11. `patient_diagnoses` semantics vs `provider_confirmed` condition assertions

Design says they're the same thing. Worth making explicit that a "diagnosis" in the medical-legal sense is the **provider's narrative recording in `clinical_visits.assessment`** — the structured assertion is the queryable representation. Both exist; the assertion is derived from + references the visit. This avoids any future confusion when a regulator asks "where do you store diagnoses?" — answer: structured in `patient_clinical_assertions`, narrative in `clinical_visits`, joined by `notes_clinical_id` on the assertion.

### B12. Concept hierarchy + retired-concept failure mode

What happens when an assertion exists with `concept_id = X` and concept X is later retired with `replaced_by: Y`? Recommendation: a one-time migration emits supersession assertions (`supersedes_assertion_id` pointing at the X assertion, new assertion has `concept_id = Y, authored_by = system_derived, status = retracted_for_concept_retirement`). Read view returns the Y assertion. The X assertion remains queryable for audit. Worth a sentence in the patch text.

### B13. Authority floor enforcement at the safety preflight

Concepts can declare `default_authority_floor`. The 1J.10 preflight needs to know which concepts have a floor and reject any current-view-returned assertion below the floor for high-risk mutations. Worth wiring this through explicitly in the 1J.10 patch addition (alongside the existing time-sensitive freshness reads at line 2735).

### B14. Provider workspace integration

Section O step 7 mentions "Provider workspace assertion-list panel" but the 1G provider workspace section already has detailed structure (1G.6, 1G.8). Recommendation: minimal patch to 1G.8.5 (Patient context drawer) or 1G.10.1 (Provider lab review surface) declaring the assertion panel as a new drawer surface. Don't introduce 1G.X new subsections; extend existing surfaces.

### B15. Lab-derived assertion config-as-code

Section G says "lab-derived assertion emitter ... fires when a new lab observation lands and the lab interpretation rules per 1L.20 mark it abnormal". The actual interpretation-rule → concept mapping needs to live somewhere as code-as-config (e.g., `repo/clinical-concepts/lab-derived-assertions/`). Worth naming the location in the patch so engineers know where to add new rules without inventing a parallel store.

---

## C. Safety verdict

**NOT YET SAFE to patch as written.**

Six blocking mismatches (A1 field_name/concept_id clash; A2 trigger contradiction with the just-landed Fix A; A3 invented API name; A4 wrong AI table name; A5 missing diagnostic-report evidence kind; A6 SQL self-bugs) materially conflict with locked map text or contain self-inconsistencies that would not survive engineering review.

A1 and A2 are the largest. A1 forces a decision about whether `concept_id` and `field_name` coexist or one replaces the other — and the answer affects every existing reader of the line-3046 view. A2 forces an explicit revision to the 1K.5 Fix A trigger declaration we landed two commits ago — without that revision, the patches contradict each other.

**Path to safe:**
1. Reconcile field_name + concept_id (A1) with the explicit complementary-vocabulary declaration above.
2. Declare the two-stage trigger pipeline (A2) as a revision to 1K.5 line 3048 inside the patch round.
3. Drop or rename the invented API (A3).
4. Rename the AI evidence kind (A4).
5. Add the diagnostic-report evidence kind (A5).
6. Clean the SQL (A6).
7. Fold in the cheap items from B (B1, B2, B3, B7, B9, B12, B13, B14) inside the same patch round.

Remaining B items (B4, B5, B6, B8, B10, B11, B15) are deferrable to a follow-up audit but are recommended for completeness.

---

## D. Patch shape preview (apply only after sign-off; corrections folded in)

This audit is large enough that the patch shape itself needs your approval before draft-patch text. High-level proposal:

**One new subsection** (~140 lines including the SQL block, enum definitions, mappings, hierarchy rules, deprecation calendar):

`### 1K.5.A Clinical concept + assertion layer (foundational; required before first Rx pathway ships)`

Scope: concept registry (code-as-config), `patient_clinical_assertions` schema, view dimensions extended `(patient_id, concept_id, context_key)` with `field_name` exposed for backward-compat, two-stage trigger pipeline (intake_response → emitter → assertions → patients.*), authority precedence with proper CASE expression, reconciliation rules with three policy enums fully defined, evidence_refs union (intake_response, patient_state_observation, patient_lab_observation, patient_diagnostic_report, patient_document_routing, clinical_visit, patient_chart_ai_review), authored_by enum mapping from the just-landed source_actor view enum, RLS policy, retirement migration, Mode J double-supersession, diagnosis vs assertion clarification.

**Five surgical in-place edits** to existing sections:

1. **1K.5 line 3046 view definition** — append: view dimension extends to `(patient_id, concept_id, context_key)` per `1K.5.A`; `field_name` preserved as a column for backward-compat with deprecation calendar; `source_actor` derived from new `authored_by` enum per the mapping table in `1K.5.A`.

2. **1K.5 line 3048 trigger pipeline** — replace the single-trigger declaration with the two-stage pipeline (intake_response → emitter → assertions → patients.*) preserving SECURITY DEFINER + bypass-resistance from Fix A.

3. **1J.10 line ~2735 safety preflight** — add: reads `patient_clinical_assertion_current` v2 with authority precedence per `1K.5.A`; lab-derived / document-extracted / ai-suggested / patient-reported assertions never satisfy gates with a `provider_confirmed` floor per concept's `default_authority_floor`; reject with `paused_needs_provider_confirmation_<concept_id>` reason code.

4. **1K.4 line 3000 question-bank entry shape** — add `concept_mapping?` field per Section M (extends the prior round's Patch 1).

5. **1K.14 line 3438 area** — add `patient_clinical_assertions` row to the dedicated-tables table.

**Three cross-link extensions** in existing sections:

6. **1K.0(c) write API list line 2881** — add `recordClinicalAssertion` per `1K.5.A` to the named domain APIs.
7. **Section 1L line ~3855 (1L.13 data flow) or 1L.20** — note the lab-derived assertion emitter fires on interpretation per `1K.5.A` Section G mechanics.
8. **Section 1O document extraction job** — note the document-extracted assertion emitter fires on AI extraction completion per `1K.5.A` Section H mechanics.
9. **Section 1N AI** — note AI assertion path uses `patient_chart_ai_reviews` as evidence per `1K.5.A` Section I.
10. **Section 1G provider workspace surface** (extension to 1G.8.5 patient context drawer) — declare the assertion-list panel.

Total patch surface: 1 new subsection + 5 in-place edits + 5 cross-link extensions. Estimated +220 lines net.

---

## Disposition

Audit complete. Design is **NOT YET SAFE** to patch as written; six blocking mismatches and ~15 non-blocking improvements identified.

Proposed sequence (your call):
- **(A) Refine the design** in this audit's direction (folding in A1–A6 corrections + recommended B items), produce the corrected patch text, then patch in one checkpoint.
- **(B) Discuss the largest two findings** (A1 field_name/concept_id, A2 trigger pipeline) before committing to a patch shape — these have downstream architectural implications worth reviewing aloud.
- **(C) Patch as proposed in Section D directly** — riskier; some implicit decisions get made by the patch author rather than reviewed.

Recommendation: (A) with explicit highlight on A1's field_name/concept_id reconciliation since it touches every existing reader of the canonical view.

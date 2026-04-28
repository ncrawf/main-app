# Static Clinical Fact Source-of-Truth Audit (1K.5 projection rule vs `patients.*` chart fields)

**Date:** 2026-04-27
**Scope:** ONLY the static clinical fact source-of-truth model
**Subject:** `1K.5` projection rule, `intake_response` authority, `patient_clinical_assertion_current` view, `patients.*` chart-field denormalizations, `loadPatientCaseSafetySnapshot` read path
**File audited:** `.cursor/plans/system_map_three_layers_60706286.plan.md`

---

## Verdict: PARTIAL

The architecture is **mostly coherent in prose** — `intake_response` is named authoritative, `patient_clinical_assertion_current` is named canonical read, `patients.*` chart fields are named denormalizations, the `recordIntakeResponse` → trigger → view+column path is named, and `loadPatientCaseSafetySnapshot` is named to read the view.

However, six structural gaps allow divergence at the edges and leave the prohibition unenforced at the boundary. The single relevant paragraph is at line 3048 (1K.5 Layer 1 architecture rule), supported by 1K.5 canonical-read-path at line 3046 and 1J.10 minimum guardrails at line 2834.

---

## Enforcement checklist (verification)

| # | Requirement | Status | Evidence |
|---|---|---|---|
| 1 | `intake_response` as authoritative source of truth | PASS | Line 3048: "the **authoritative storage** for assertion content is `intake_response`"; line 3045 names static clinical facts captured via `intake_response` as queryable foundation |
| 2 | `patient_clinical_assertion_current` as canonical read layer | PASS | Line 3046 names it the "Canonical read path"; line 2735 + 3038 confirm safety preflight reads it |
| 3 | `patients.*` chart fields strictly derived/denormalized | PASS | Line 3048: "TRIGGER-maintained denormalizations of the latest non-superseded `intake_response` row per `(patient_id, field_name)` within freshness" |
| 4 | Explicit prohibition of direct writes to `patients.*` clinical fields | PARTIAL | Prose ban at line 3048 ("No application code may UPDATE `patients.allergies` or equivalent chart fields directly"); no structural enforcement (no ESLint rule, no Postgres `REVOKE UPDATE` GRANT, no migration test) |
| 5 | Trigger / equivalent mechanism keeps `patients.*` and `intake_response` in sync | PARTIAL | Line 3048 says "TRIGGER-maintained… refreshed atomically on every `recordIntakeResponse` commit"; ambiguous whether DB-level trigger (fires on any INSERT) or application-level (only when function runs) |
| 6 | `loadPatientCaseSafetySnapshot` reads canonical source (not stale projection) | PASS | Line 3046: "This view is what `loadPatientCaseSafetySnapshot` per `1J.10` reads"; line 3048: "`loadPatientCaseSafetySnapshot` reads the view (canonical)" |
| 7 | No possible divergence between provider UI and safety preflight reads | FAIL | Line 3048 explicitly allows "the provider workspace may read either the view OR the denormalized column (equivalent by trigger discipline)" — but the column carries no `freshness_state` companion, so for any field with `freshness_profile != static_no_refresh` the two reads are **not equivalent** at the freshness boundary |

---

## Ambiguities and risks (six findings)

### Finding 1 — Trigger location is ambiguous (DB-level vs application-level)

Line 3048 says "TRIGGER-maintained denormalizations… refreshed atomically on every `recordIntakeResponse` commit." This phrasing reads as application-level (the function does the refresh), not DB-level (a Postgres trigger on the table fires regardless of caller). If application-level, a migration / backfill / one-off SQL via `service_role` that INSERTs into `intake_response` directly skips the projection refresh and leaves `patients.*` stale. The map does not commit to one or the other.

**Risk:** Direct INSERTs into `intake_response` (migration, backfill, ops correction script) bypass the projection refresh; `patients.*` columns drift from the view silently until the next reconciliation run.

### Finding 2 — No structural prohibition on direct writes to `patients.*` chart fields

Line 3048 states "**No application code may UPDATE `patients.allergies` or equivalent chart fields directly**" as prose. There is no equivalent of the line-2834 `no-restricted-imports` rule for chart-field columns, no Postgres `REVOKE UPDATE` GRANT, no migration test, no CODEOWNERS hook. An engineer writing a new server action `UPDATE patients SET allergies = $1 WHERE id = $2` violates the rule but no automated check catches it. The `no-restricted-imports` rule at line 2834 only protects writes through `recordIntakeResponse` — it does not protect the destination columns.

**Risk:** A future server action, a manual SQL fix, or an engineer unaware of the projection rule writes directly to `patients.allergies` and creates a second source of truth that survives until reconciliation surfaces the divergence.

### Finding 3 — Freshness drift between view and denormalized column (silent)

The view returns `freshness_state ∈ {fresh, stale}` per line 3046. The denormalized column on `patients.*` carries **only the value**, refreshed only on writes — never on time-elapse. A `time_sensitive_30d` `pregnancy_status` row written 31 days ago is `freshness_state = stale` in the view but reads as a plain value with no stale signal from the column.

Line 3048's allowance "the provider workspace may read either the view OR the denormalized column (equivalent by trigger discipline)" is **not equivalent** for any field with `freshness_profile != static_no_refresh`. A provider reading the column sees "no allergies" or "not pregnant" without the stale indicator the safety preflight uses to fail closed.

**Risk:** Provider UI displays a stale value as if fresh; safety preflight (reading the view) correctly blocks the mutation; provider perceives a UI/backend inconsistency or — worse — relies on the column for clinical decision-making outside the gated mutation path.

### Finding 4 — Enum vocabulary mismatch between view and source table

Line 3046 declares the view's `source_actor` enum as `patient | provider_clarification | system_import`. Line 3441 declares `intake_response.authored_by ENUM[patient, provider, system, ops]`. The mapping rule (`provider_clarification` requires `authored_by = provider AND correction_reason = provider_clarification`; `patient_self_correction` from Mode J has no view-side enum value at all; `ops` is undefined in the view's enum) is not stated.

**Risk:** A view-definition author and a workspace-query author can disagree on derivation, producing different projections; Mode J `patient_self_correction` rows have no clean enum representation in the view.

### Finding 5 — Section 1O document-derived facts not addressed

When `Section 1O` document routing writes a structured clinical fact (DOB confirmed from ID document, allergy info from a transferred record, BP from an at-home device upload), the map at 1K.5 does not state whether `1O` writes go through `recordIntakeResponse` or write directly to a chart table. If `1O` writes to `patients.*` directly, that is a second authoritative path; if it writes to a separate domain table, the assertion view does not see it.

**Risk:** A real second source of truth could exist for any field that has both an intake-question path and a document-derived path (DOB from intake answer vs DOB from ID document; allergies from intake module vs allergies from a transferred chart upload).

### Finding 6 — Reconciliation is observability, not enforcement

Line 3048 says "Divergence between the two is a defect surfaced by `1H.3` reconciliation queries — never the steady state." `1H.3` reconciliation runs after the fact and surfaces a defect; it does not **prevent** divergence. If the trigger drops in a migration, a backfill bypasses the function path, or a new direct-write code path slips through review, the divergence is real until the next reconciliation run. There is no gating mechanism (e.g., block Stage 2→3 promotion if reconciliation is failing, fail CI if a new direct-write path is introduced).

**Risk:** A trigger regression or a new bypass path produces silent clinical-fact divergence between the view and the column, with detection lag bounded only by reconciliation cadence.

---

## Foundational fixes (in-place edits to existing paragraphs only)

All six fixes edit existing sentences in the 1K.5 projection-rule paragraph at line 3048, the 1K.5 canonical-read-path paragraph at line 3046, or the 1J.10 ESLint guardrail paragraph at line 2834. No new subsections, no addendums.

### Fix A — Pin the trigger to DB-level (in-place edit at line 3048)

Replace "TRIGGER-maintained denormalizations of the latest non-superseded `intake_response` row per `(patient_id, field_name)` within freshness, refreshed atomically on every `recordIntakeResponse` commit" with:

> **Postgres `AFTER INSERT` trigger on the `intake_response` table** (DB-level, fires regardless of caller — application code, migrations, backfills, direct SQL via `service_role`) recomputes the latest non-superseded row per `(patient_id, field_name)` and writes the value into the corresponding `patients.*` column in the same transaction as the source INSERT. The trigger function runs with `SECURITY DEFINER` privilege so it can write to columns the caller is not authorized to write directly. Application code paths funnel through `recordIntakeResponse` per `1K.4` for version-pin / supersession / audit reasons; the DB-level trigger guarantees the projection refresh **even when the application path is bypassed**.

### Fix B — Add structural prohibition on `patients.*` direct writes (extend the Mode J ESLint paragraph at line 2834)

Append to the bullet:

> **Chart-field column write prohibition (binding):** Postgres `REVOKE UPDATE (allergies, conditions, medications, surgical_history, family_history, pregnancy_status, lactation_status, … and any future column declared as a `1K.5` TRIGGER-maintained denormalization) ON patients FROM service_role, authenticated`. The only writer to these columns is the `1K.5` trigger function. ESLint `no-restricted-syntax` additionally forbids any TypeScript code that constructs an `UPDATE patients SET <listed_column>` SQL string. Application code that needs to update a chart-field value writes a new `intake_response` row through `recordIntakeResponse`; the trigger handles the column refresh in the same transaction.

### Fix C — Resolve freshness drift (in-place edit at line 3048)

Replace "the provider workspace may read either the view OR the denormalized column (equivalent by trigger discipline). Divergence between the two is a defect surfaced by `1H.3` reconciliation queries — never the steady state" with:

> **The provider workspace MUST read `patient_clinical_assertion_current` (not the denormalized column) for any field declared with `freshness_profile != static_no_refresh` per `1K.5`** — so the workspace surfaces the same `freshness_state` the safety preflight reads. Static-only fields (legal name + DOB once L3-locked per `1J.3`) MAY be read from the denormalized column for performance. Reading the column for a time-sensitive field is a defect surfaced by `1H.3` reconciliation queries; ESLint `no-restricted-syntax` forbids select-list references to time-sensitive `patients.*` columns outside the trigger function and the `1H.3` reconciliation query.

### Fix D — Declare the view's `source_actor` derivation (in-place append at line 3046)

Append to the canonical-read-path paragraph:

> The view's `source_actor` enum is derived deterministically from `(intake_response.authored_by, intake_response.correction_reason)` inside the view definition: `provider_clarification` when `authored_by = provider AND correction_reason = provider_clarification`; `patient_self_correction` when `authored_by = patient AND correction_reason = patient_self_correction`; `patient` when `authored_by = patient AND correction_reason IS NULL`; `system_import` when `authored_by IN (system, ops)`. The derivation lives in the view DDL, not in application code; any change to the `authored_by` or `correction_reason` vocabulary requires a coordinated view-definition migration.

### Fix E — Cover Section 1O document-derived facts (in-place extension at line 3048)

After "**No application code may UPDATE `patients.allergies` or equivalent chart fields directly**", insert:

> **— this rule binds all writers, not only the intake engine.** `Section 1O` document-derived clinical facts (e.g., DOB confirmed from ID, allergy info from a transferred chart, blood pressure from an at-home device upload) write through the same `recordIntakeResponse` API with `authored_by = system` and `source_id = patient_document_routing.id` per `1O`. The `1O` routing layer never writes to `patients.*` chart-field columns directly and never bypasses the trigger by writing to a parallel chart table.

### Fix F — Promote reconciliation from detection to enforcement (in-place replacement at line 3048)

Replace "Divergence between the two is a defect surfaced by `1H.3` reconciliation queries — never the steady state" with:

> Divergence between the view and the denormalized column MUST be impossible by trigger discipline (Fix A) plus column-write prohibition (Fix B). `1H.3` reconciliation queries run on cron **and on every Stage 2→3 promotion per `1K.13`**; a non-empty divergence result blocks the promotion, opens a `pending_patient_input_task` per `1G.11.3` of type `paused_clinical_pending_ops`, and emits a `system_bug_or_defect` exception per `1G.5` / `1H.6.1E` until the trigger function and the column state are reconciled. Reconciliation is **detection of trigger failure**, not the primary enforcement mechanism.

---

## What the fixes leave intact

- `intake_response` remains authoritative.
- `patient_clinical_assertion_current` remains the canonical read.
- `patients.*` chart fields remain physically present (where they exist) for the provider workspace's static-fields fast path.
- `loadPatientCaseSafetySnapshot` continues to read the view.
- Existing supersession / append-only / Mode J / provider-clarification disciplines are untouched.

The fixes harden the boundary in three places (DB trigger declaration, column-write GRANT + ESLint, view derivation rule) and one workspace read rule (time-sensitive fields must read the view), and they upgrade reconciliation from observability to a gating mechanism. Nothing new is added at the section level.

---

## Disposition

User reviewed and approved on 2026-04-27. All six fixes applied as in-place edits to lines 2834, 3046, and 3048 in the same checkpoint as this audit file.

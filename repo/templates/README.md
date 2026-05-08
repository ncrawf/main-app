# Templates registry

> Source of truth for all governed Template definitions per system map [Section 1Q](../../.cursor/plans/system_map_three_layers_60706286.plan.md).
>
> **Status**: scaffold only (Phase 4H-pre commit 3). The directory ships empty in this commit. The first Template (`tmpl.billing.payment_received_v1`) lands in Phase 4H-pre commit 5 as the parity proof for the v0 → 1Q cutover.

## Why this directory exists

This is the home for typed Template definitions per Section 1Q.5. Templates govern the *form* of every patient-facing, provider-facing, staff-internal, and vendor-facing communication the platform produces. Every automated send fires through an approved Template.

A Template is **not** a string of marketing copy. It is the binding contract that says: *given this audience, on this channel, at this privacy tier, with this intent, with these typed required variables, with these prohibited claims, with this tone constraint floor — the system MAY render this content.*

For the architectural reasoning behind why this directory is target-first (not migrated from the legacy `lib/notifications/patientMessages.ts` prose), see [`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md), particularly Section 7.5 (cutover discipline) which establishes that **parity = behavioral equivalence at the dispatch boundary, NOT byte-for-byte template wording match**.

## Discipline (binding)

Per system map Section 1Q.5 + Section 1Q.17 + Section 1Q.21:

- **Required-fields invariant** — every Template MUST declare ALL of: `template_key`, `template_version`, `domain`, `allowed_use`, `channels`, `required_variables`, `prohibited_claims`, `tone_constraints`, `clinical_review_required`, `ai_refinement_allowed`, `evidence_required`, `status`, `effective_at`, `test_renders`, `rationale_note`, `privacy_exposure_level`, `message_intent`, `outside_secure_render_strategy`, `secure_view_render_strategy`, `safety_critical_override_allowed`, `action_context_required`, `personalization_level`, `pathway_sensitivity_compatibility`, `interaction_context_compatibility`. **There is no grandfathering of legacy v0 templates into this shape.** Any Template missing required fields fails CI lint.

- **Privacy tier taxonomy (Section 1Q.17)** — `privacy_exposure_level: 0 | 1 | 2 | 3 | 4 | 5`:
  - `0 = no_phi` — generic; no patient identifier of any kind.
  - `1 = existence_only` — confirms a transaction or interaction exists; no clinical context.
  - `2 = low_context_phi` — minimal clinical context (e.g., "your visit is moving forward").
  - `3 = pathway_named_phi` — names the pathway (e.g., "your TRT visit"). REQUIRES `pathway_named_outside_secure_comm` consent for outside-secure channels.
  - `4 = clinical_detail_phi` — discusses clinical detail (lab values, dose changes). Inside-secure ONLY by default.
  - `5 = sensitive_clinical_phi` — sensitive content (mental health, sexual health, substance use). Inside-secure ONLY; secure_view + provider phone only.

- **Action-template alignment (Section 1Q.4)** — when a Template is referenced by a Rule action of kind `notify` / `escalate` / `clarify`, the Template's `privacy_exposure_level` MUST NOT exceed the Rule action's `intended_privacy_exposure_level`, AND the Template's `message_intent` MUST equal the Rule action's `message_intent`. CI lint enforces at PR time. Runtime mismatch (failsafe) emits `notification.action_template_intent_mismatch` audit + rejects the dispatch.

- **No prohibited claims (Section 1Q.5)** — every Template declares a structured `prohibited_claims[]` floor. Examples: `must_not_promise_outcome`, `must_not_diagnose`, `must_not_quote_lab_value_without_provider_review`, `must_not_imply_FDA_approval_unless_FDA_approved`. CI lint validates the floor matches the Template's `domain` + `pathway_sensitivity_compatibility`.

- **Required variables typed (Section 1Q.5)** — every interpolation slot is a typed `TemplateVariable`. Free-form interpolation strings (the v0 `paymentSummary?: string | null` pattern) are forbidden. The migrated `payment_received` Template will replace the v0 free-form `paymentSummary` with typed `{ payment_amount: number; payment_currency: ISO4217 }` slots.

- **Multi-tenant brand sourcing (ADR Section 7.5)** — brand labels in Templates MUST source from typed multi-tenant primitives (`brands.label_short` / `brands.label_full` / `current_org_id()` context per Phase 4C-pre). **No hardcoded brand strings.** The legacy `MAIN:` SMS prefix in `lib/notifications/patientMessages.ts` is the canonical example of what must NOT be carried forward.

- **CODEOWNER governance** — every change to this directory requires the approver registered in [`.github/CODEOWNERS`](../../.github/CODEOWNERS). Marketing-lifecycle templates with `privacy_exposure_level: 3` + `pathway_sensitivity_compatibility` including `'high'` (Female HRT and equivalent) require **dual** clinical CODEOWNER + compliance CODEOWNER co-sign per Section 1Q.5 binding rule.

## Privacy + governance flow at runtime

When the runtime ships in 4H-rules-runtime + 4H-send-policy:

1. A Rule fires; its action references this Template via `template_key`.
2. The Section 1G.3 5-step privacy gate runs:
   - **Step 1:** verify `template.privacy_exposure_level <= action.intended_privacy_exposure_level` AND `template.message_intent === action.message_intent`. Mismatch = reject with audit.
   - **Step 2:** compute per-channel max-allowed-exposure from channel ceiling + `pathway_sensitivity` + intent + patient consents + patient channel preferences.
   - **Step 3:** decide pass / fallback_vague_safety / consent_uplift_required / block.
   - **Step 4:** safety intent triggers 6-step emergency orchestration (SMS-vague-first + push-header + provider-phone-SLA + email-on-bounce).
   - **Step 5:** every dispatch decision emits `notification.privacy_exposure_check` audit row with full lineage.
3. The Template renders with `required_variables` bound from typed inputs. Missing variable = render error (not silent fallback).
4. AI refinement (if `ai_refinement_allowed`) MAY adjust phrasing/sentence_order within `ai_refinement_constraints.may_change` only. Cannot change `prohibited_claims` / `required_variables` / `tone_class`.
5. The rendered message reaches `outbound_jobs` with full Template lineage (`template_key`, `template_version`, `intended_privacy_exposure_level`, `message_intent`, `decision_outcome_reason`) per Phase 4H-pre commit 1 schema.

## How to add a Template (when the runtime ships in 4H-rules-runtime)

1. Pick a `template_key` per the namespace convention: `tmpl.<intent>.<concept>_v<N>` — e.g., `tmpl.billing.payment_received_v1`.
2. Author the Template object literal in a file at `repo/templates/<intent>/<template_key>.ts`. The object MUST satisfy the `Template` interface at [`types.ts`](./types.ts).
3. Register in [`index.ts`](./index.ts) (when the registry shape lands in 4H-rules-runtime).
4. Add `test_renders` at `repo/templates/<intent>/__tests__/<template_key>.test.ts` — sample renders that pass the prohibited_claims + tone_constraints + required_variables checks.
5. If the Template is referenced by a Rule, ensure the action-template alignment is correct (CI lint enforces).
6. Open a PR. CODEOWNERS will require the listed approver. Marketing-lifecycle high-sensitivity templates trigger dual CODEOWNER co-sign per Section 1Q.5.

## Forbidden during the v0 → 1Q cutover (binding)

Per system map Section 1Q.12 + ADR Section 7.5:

- Adding new prose templates to [`lib/notifications/patientMessages.ts`](../../lib/notifications/patientMessages.ts) is forbidden. The set is frozen at the 11 baseline cases. Each case migrates per-PR to a typed Template here, and the legacy case deletes in the same PR.
- Carrying forward the hardcoded `MAIN:` SMS prefix from v0 is forbidden. Every new Template sources brand labels from typed multi-tenant primitives.
- Carrying forward free-form interpolation strings (the v0 `paymentSummary?: string | null` pattern) is forbidden. Every interpolation slot is a typed `TemplateVariable`.
- Carrying forward legacy wording without verifying it satisfies the migrated Rule's `intended_privacy_exposure_level` is forbidden. **Governed behavior wins over byte-for-byte parity** per ADR Section 7.5.

CI lint at [`scripts/lint-rules-templates-scaffold.ts`](../../scripts/lint-rules-templates-scaffold.ts) catches these violations at PR time.

## Anchor: payment_received parity (Phase 4H-pre commit 5)

The first Template that ships here will be `tmpl.billing.payment_received_v1`:

- `domain: 'billing_subscription'`
- `allowed_use: 'patient_facing'`
- `channels: ['email', 'sms']`
- `privacy_exposure_level: 1` (existence_only)
- `message_intent: 'billing'`
- `transactional_critical: true` (so 1Q.21 cadence rules don't suppress billing)
- `outside_secure_render_strategy: 'mention_brand_only'`
- `pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme']` (billing applies to all sensitivity tiers)
- `interaction_context_compatibility: ['both']` (in-person + remote)

The corresponding Rule will be `rule.billing.payment_received_v1` per [`../rules/README.md`](../rules/README.md). The legacy `payment_received` case in `lib/workflows/notificationRules.ts` + `lib/notifications/patientMessages.ts` deletes in the same PR. The PR description will include the wording diff log per ADR Section 7.5 cutover discipline.

## Open implementation choices intentionally deferred

Per the ADR, several Template-runtime details are NOT specified by the scaffold and will be discovered when the first Template ships:

- The Template rendering DSL (Handlebars vs typed slots vs JSX-style vs pure string concatenation with typed parameters).
- The exact mechanism for `required_variables` typed slot binding to runtime data.
- The `ai_refinement_constraints` runtime evaluator (which adjustments to phrasing pass; which fail).
- The renderer's `jurisdiction_variants` selector logic (currently TBD between flat lookup and merge-by-key).

These will be resolved during 4H-rules-runtime by the engineer wiring the engine, not pre-committed in scaffolding.

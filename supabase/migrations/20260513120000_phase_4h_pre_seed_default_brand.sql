-- =====================================================================
-- Phase 4H-pre commit 5 — seed the v1 default brand row.
--
-- Per Phase 4C-pre comment ("v1 has none") the brands table was created
-- but not populated. Phase 4H-pre commit 5 wires the rules engine
-- dispatcher to resolve `brand_short_label` from `brands.slug.toUpperCase()`
-- per ADR Section 7.5 multi-tenant cutover discipline (no hardcoded
-- "MAIN:" prefix). Without a brand row, the dispatcher fails closed
-- (rather than falling back to an env-default brand string, which would
-- re-introduce the legacy pattern the cutover deletes).
--
-- This migration seeds the canonical 'main' brand row for the existing
-- main org. Future orgs / brands ship their own rows. Idempotent: if
-- the row already exists, the INSERT is a no-op via ON CONFLICT.
--
-- For the binding architectural reasoning see:
--   - .cursor/plans/system_map_three_layers_60706286.plan.md Section 1U
--     (multi-tenant + data_environment primitives addendum)
--   - docs/architecture/phase_4h_target_first_decision_record.md §7.5
-- =====================================================================

insert into public.brands (org_id, slug, display_name, status, metadata)
values (
  '00000000-0000-0000-0000-000000000001'::uuid,
  'main',
  'MAIN',
  'active',
  jsonb_build_object(
    'seeded_by', 'phase_4h_pre_commit_5',
    'rationale', 'v1 default brand for the main org; required by lib/rules/runtime/dispatcher.ts to resolve brand_short_label per ADR Section 7.5 multi-tenant rule.'
  )
)
on conflict (org_id, slug) do nothing;

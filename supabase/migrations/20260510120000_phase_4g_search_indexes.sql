-- =====================================================================
-- Phase 4G — Section 1R search adapter foundations.
--
-- Per system map Section 1R.5 (pg_trgm + GIN now, adapter pattern for
-- Elastic later), this migration:
--
--   1. Enables the pg_trgm extension (idempotent; Supabase pre-installs it
--      on most projects but the explicit CREATE EXTENSION IF NOT EXISTS
--      makes the dependency self-documenting).
--   2. Adds GIN trigram indexes for fuzzy patient lookup on the four
--      highest-traffic columns: first_name, last_name, email, phone.
--      These are the v1 indexed entities from Section 1R.3.
--   3. Adds a B-tree index on dob for exact-date lookups (date is naturally
--      ordered; trigram doesn't help, B-tree gives O(log n)).
--
-- Per Section 1R.5: indexes are added per-entity on first search-surface
-- need; not pre-built across the universe. v1 = patients only. Other
-- scopes (orders, messages, documents, lab_orders, subscriptions,
-- action_items) get indexed when their first search surface ships.
--
-- Per primitives addendum #4 + Section 1U: searchEntities() will filter
-- by org_id + data_environment at query time. The orchestrator-set
-- session-context vars from Phase 4C-pre still apply; no extra column
-- changes needed here.
-- =====================================================================

create extension if not exists pg_trgm with schema public;

-- ---------------------------------------------------------------------
-- patients trigram + B-tree indexes
-- ---------------------------------------------------------------------
-- Trigram operator class: gin_trgm_ops enables ILIKE / similarity()
-- pattern matching to use the index. Each index is named with the
-- table prefix + column suffix for grep-ability.

create index if not exists patients_first_name_trgm_idx
  on public.patients using gin (first_name gin_trgm_ops);

create index if not exists patients_last_name_trgm_idx
  on public.patients using gin (last_name gin_trgm_ops);

create index if not exists patients_email_trgm_idx
  on public.patients using gin (email gin_trgm_ops);

create index if not exists patients_phone_trgm_idx
  on public.patients using gin (phone gin_trgm_ops);

-- DOB doesn't benefit from trigram. B-tree gives ordered range scans for
-- exact-date or "all DOBs in 1985" lookups.
create index if not exists patients_dob_idx on public.patients (dob);

-- ---------------------------------------------------------------------
-- Org + data_environment filter index (composite — Section 1U + #4)
-- ---------------------------------------------------------------------
-- searchEntities() always filters on org_id + data_environment. A
-- composite partial index on production rows in the main org keeps the
-- common path narrow without bloating the indexes for non-prod data.

create index if not exists patients_org_env_search_idx
  on public.patients (org_id, data_environment, last_name, first_name)
  where data_environment = 'production';

-- ---------------------------------------------------------------------
-- Permission: ensure pg_trgm operators are usable from app roles.
-- Supabase grants are usually fine, but be explicit for safety.
-- ---------------------------------------------------------------------
grant usage on schema public to anon, authenticated, service_role;

comment on extension pg_trgm is
  'Phase 4G search adapter (Section 1R): trigram fuzzy match on patient names / email / phone.';

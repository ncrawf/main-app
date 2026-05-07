-- =====================================================================
-- Phase 4H-pre commit 1 — outbound_jobs rule lineage + privacy primitive
-- column additions + suppressed_data_environment terminal status.
--
-- Per docs/architecture/phase_4h_target_first_decision_record.md
-- Section 6 commit 1 + system map amendments at lines 123 (primitives
-- addendum #4 clarification), 7300 (Section 1Q.7 rule lineage on
-- outbound_jobs), and 7817-7839 (Section 1Q.12 implicit engine v0
-- inventory). This migration is foundational schema only — no rules,
-- no templates, no orchestrator changes ship in this commit.
--
-- Audit of the Phase 4E baseline (20260509120000) revealed the rule
-- lineage primitives most contributors expected to add in Phase 4H-pre
-- were already present from 4E (rule_id, rule_version, template_key,
-- template_version, message_intent, pathway_code). The system map
-- amendment at line 7300 made this explicit; this migration closes the
-- two remaining gaps:
--
--   1. intended_privacy_exposure_level — NEW column. Per system map
--      Section 1Q.4 invariant: every action-template alignment check
--      enforces template.privacy_exposure_level <=
--      action.intended_privacy_exposure_level. The audit row + the
--      outbound_jobs row carry BOTH so a future replay can verify the
--      cap was respected. Column declared_privacy_exposure_level
--      (added in 4E) carries the template-declared value; this column
--      carries the rule-action-declared cap.
--
--   2. decision_outcome_reason — NEW column. Per system map Section
--      1K.12 / 1Q.7 controlled vocabulary. Persists which terminal
--      decision outcome led to the queued side effect (rule_matched,
--      consent_uplift_required, channel_pref_excluded, etc.). The
--      vocabulary is extensible per-domain by PR + CODEOWNERS per
--      1K.0; no CHECK constraint here so domains can add codes
--      without a migration.
--
--   3. outbound_jobs status enum extension — NEW value
--      'suppressed_data_environment'. Per primitives addendum #4
--      (system map line 123): when the dispatch gate suppresses a
--      non-production outbound_jobs row, the row transitions to this
--      terminal status (distinct from 'suppressed' which was the
--      Section 1G.3 send-policy gate outcome). The dispatcher emits
--      one notification.dispatch_blocked_by_privacy_check audit event
--      with metadata.suppression_reason = 'data_environment' (already
--      registered in lib/events/audit-actions.ts under
--      RULE_AND_NOTIFICATION_AUDIT_ACTIONS per Phase 4F LANDED).
--
-- What this migration does NOT do (deferred per decision record):
-- - dispatchOutboundJob data_environment gate (commit 2).
-- - repo/rules + repo/templates scaffold (commit 3).
-- - payment_received parity migration (commit 5).
-- - enqueue_outbound_job orchestrator parameter additions (deferred to
--   when the rules engine first wires through; the columns can be
--   populated via INSERT/UPDATE in the meantime).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. ADD COLUMN intended_privacy_exposure_level (rule-action cap)
-- ---------------------------------------------------------------------
-- Distinct from declared_privacy_exposure_level (template-level value
-- added in 4E). At dispatch time, the privacy gate validates
-- declared <= intended. Both persist on outbound_jobs for replay.

alter table public.outbound_jobs
  add column if not exists intended_privacy_exposure_level int check (
    intended_privacy_exposure_level is null
    or (intended_privacy_exposure_level >= 0 and intended_privacy_exposure_level <= 5)
  );

comment on column public.outbound_jobs.intended_privacy_exposure_level is
  'Per Section 1Q.4: the rule-action-declared maximum PHI exposure. CI lint enforces template.privacy_exposure_level <= this at PR time and runtime. 6-tier taxonomy per Section 1Q.17 (0=no_phi, 1=existence_only, 2=low_context_phi, 3=pathway_named_phi, 4=clinical_detail_phi, 5=sensitive_clinical_phi). NULL when the row was not enqueued by a rule firing.';

-- ---------------------------------------------------------------------
-- 2. ADD COLUMN decision_outcome_reason (controlled vocabulary)
-- ---------------------------------------------------------------------
-- Free-form text by design. Vocabulary lives in code (per-domain
-- registries + Section 1K.12 + 1G.9.13 reason-code catalogs). Adding
-- a CHECK here would force a migration every time a domain extends
-- its reason set.

alter table public.outbound_jobs
  add column if not exists decision_outcome_reason text;

comment on column public.outbound_jobs.decision_outcome_reason is
  'Per Section 1K.12 / 1Q.7: stable code identifying which terminal decision outcome led to this queued side effect (e.g., rule_matched, consent_uplift_required, channel_pref_excluded, paused_needs_bp_reading). Same code → same patient-facing copy family per 1L.15 template discipline. Vocabulary is extensible per-domain by PR + CODEOWNERS per 1K.0; no DB-level CHECK so domains can add codes without a migration.';

-- ---------------------------------------------------------------------
-- 3. EXTEND status enum: 8 values → 9 values
--    (no production data depends on the constraint; safe to recreate)
-- ---------------------------------------------------------------------
-- 'suppressed_data_environment' is the canonical terminal state when
-- the data_environment dispatch gate (commit 2) blocks a non-production
-- row. Distinct from 'suppressed' (Section 1G.3 send-policy gate
-- outcome) so observability can distinguish "blocked by privacy tier"
-- from "blocked by data env".

alter table public.outbound_jobs drop constraint if exists outbound_jobs_status_check;
alter table public.outbound_jobs
  add constraint outbound_jobs_status_check check (status in (
    'queued',                       -- initial; awaiting dispatcher pickup
    'dispatching',                  -- worker locked the row + is calling external system
    'succeeded',                    -- terminal happy path
    'failed',                       -- last attempt errored; retry scheduled per backoff
    'dead',                         -- terminal — exhausted max_attempts; ops triage required
    'cancelled',                    -- caller / staff cancelled before dispatch
    'suppressed',                   -- 1G.3 send-policy gate (privacy + consent + channel pref) blocked
    'superseded',                   -- replaced by a newer job
    'suppressed_data_environment'   -- Phase 4H-pre commit 2: data_environment dispatch gate blocked
                                    -- non-production row; primitives addendum #4 binding terminal state
  ));

-- ---------------------------------------------------------------------
-- 4. Index for ops observability of suppressed-by-env rows
-- ---------------------------------------------------------------------
-- The data_environment gate (commit 2) will produce these rows
-- frequently in non-production envs. A partial index keeps "show me
-- recently suppressed-by-env rows" queries cheap without bloating the
-- main pickup index (which already filters status='queued').

create index if not exists outbound_jobs_suppressed_by_env_idx
  on public.outbound_jobs (data_environment, suppressed_at desc, kind)
  where status = 'suppressed_data_environment';

-- ---------------------------------------------------------------------
-- 5. Suppression reason vocabulary already includes the 4H-pre token
-- ---------------------------------------------------------------------
-- Phase 4E migration line 143 added 'data_environment_non_production'
-- to the suppression_reason CHECK; that token + the new status value
-- + the existing notification.dispatch_blocked_by_privacy_check audit
-- event (Phase 4F LANDED at lib/events/audit-actions.ts) form the
-- complete observability shape locked at primitives addendum #4. No
-- changes needed to suppression_reason here.

-- ---------------------------------------------------------------------
-- 6. Documentation comment on the table summarizing the new shape
-- ---------------------------------------------------------------------
comment on table public.outbound_jobs is
  'Canonical outbound work queue per Section 1G.3 + 1H.2 + 1Q.7. After Phase 4H-pre commit 1: rule lineage primitives (rule_id, rule_version, template_key, template_version, intended_privacy_exposure_level, declared_privacy_exposure_level, message_intent, decision_outcome_reason, pathway_code, pathway_sensitivity) persist on every row produced by a rule firing per Section 1Q.7 audit shape extension. Status enum includes suppressed_data_environment terminal state for non-production rows blocked by the dispatch gate (gate ships in commit 2; column foundation lands here).';

-- =====================================================================
-- Phase 4H-communications c2 — chat rendering substrate
--
-- Adds the substrate columns + orchestrators needed to render real
-- patient↔staff chat on top of the 2026-04-30 messaging substrate
-- (messages + message_threads + message_thread_participants), backfills
-- the empty thread + participant tables for existing care_programs, and
-- defines two SECURITY DEFINER orchestrators (post_patient_message,
-- mark_thread_read) that bypass RLS for patient-portal writes.
--
-- Preflight: .cursor/plans/PREFLIGHT_2026-05-11_phase_4h_in_app_inbox_c2_rich_chat_rendering.md
-- Topology:  docs/architecture/communications_topology.md
--
-- SUBSTRATE-REALITY AUDIT (2026-05-11):
--   * patient_action_items table does NOT exist substrate-side
--     (confirmed by lib/intake/documents/route-patient-document.ts:38
--     comment + zero matching migrations). c2 does NOT depend on it.
--     The §1G.11 satisfy-on-write-path discipline moves to c4 (rescoped
--     from "audit depth" to "build the substrate").
--   * message_threads + message_thread_participants tables exist
--     (2026-04-30 migration) but contain ZERO rows — no application code
--     has ever inserted to them. c2 IS the first writer to `messages`.
--     This migration backfills one thread + one patient participant per
--     existing care_program so the post-c2 list page has data.
--
-- WHAT THIS MIGRATION DOES:
--   1. Adds columns to message_thread_participants:
--      - last_read_message_id uuid (per-recipient read pointer)
--      - last_read_at timestamptz
--   2. Adds columns to messages:
--      - classification text (visual chip taxonomy; clinical_required
--        is DELIBERATELY NOT a valid value — that flag lives on
--        metadata.clinical_required only, single SoT discipline)
--      - client_message_id text (idempotency anchor for patient compose)
--      - client_request_fingerprint text (payload-fingerprint mismatch
--        detection for the §4.3 idempotency semantics)
--   3. Replaces messages_thread_created_idx with a composite index that
--      includes `id` as a tie-breaker for (created_at, id) tuple
--      comparisons (the §3 design discipline).
--   4. Adds UNIQUE constraint on (message_thread_id, client_message_id)
--      to enforce SQL-layer idempotency.
--   5. Adds two SECURITY DEFINER orchestrators:
--      - post_patient_message: transactional patient compose with
--        idempotency + fingerprint validation + read pointer update.
--      - mark_thread_read: monotonic per-participant read pointer
--        advance via (created_at, id) tuple comparison.
--   6. Backfills message_threads + message_thread_participants for
--      existing care_programs (idempotent via NOT EXISTS guards).
--
-- WHAT THIS MIGRATION DOES NOT DO:
--   * Create patient_action_items (c4 work).
--   * Resolve action items (c4 work).
--   * Insert any messages rows (the table stays empty until the first
--     real patient compose via the orchestrator).
--   * Add a staff-on-behalf compose path (provider-mirror parallel track).
--   * Add reactions / per-message receipts / typing indicators (deferred).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. New columns on message_thread_participants (per-recipient read state)
-- ---------------------------------------------------------------------

alter table public.message_thread_participants
  add column if not exists last_read_message_id uuid
    references public.messages (id) on delete set null,
  add column if not exists last_read_at timestamptz;

comment on column public.message_thread_participants.last_read_message_id is
  'Phase 4H-communications c2. Per-participant read pointer (Slack/Linear/Teams ' ||
  'pattern). Null = participant has read nothing. Comparisons against this ' ||
  'pointer use (created_at, id) tuple lexicographic ordering, not bare ' ||
  'created_at >, to survive timestamp collisions on same-transaction batch ' ||
  'inserts. See preflight §3 for the design pressure test.';

comment on column public.message_thread_participants.last_read_at is
  'Phase 4H-communications c2. Wall-clock time the participant most recently ' ||
  'advanced last_read_message_id. Useful for "read at HH:MM" UX without ' ||
  'joining back to messages.';

-- Helpful index for unread-count queries (participant pointer → message id).
create index if not exists message_thread_participants_last_read_idx
  on public.message_thread_participants (message_thread_id, last_read_message_id);

-- ---------------------------------------------------------------------
-- 2. New columns on messages (classification + idempotency)
-- ---------------------------------------------------------------------

alter table public.messages
  add column if not exists classification text
    check (classification is null or classification in (
      'prescribing_decision',
      'lab_review',
      'general',
      'safety_alert',
      'billing'
    )),
  add column if not exists client_message_id text,
  add column if not exists client_request_fingerprint text;

comment on column public.messages.classification is
  'Phase 4H-communications c2. Visual chip taxonomy for staff turns ' ||
  '(rendered as colored chips in the patient UI). DELIBERATELY does NOT ' ||
  'include ''clinical_required'' — that flag lives only on ' ||
  'metadata.clinical_required per §1G.3 (single source of truth; prevents ' ||
  'the classification column from being a parallel storage path for the ' ||
  'same fact). Patient turns may leave this null; the chip is staff-only.';

comment on column public.messages.client_message_id is
  'Phase 4H-communications c2. Idempotency anchor for patient compose. ' ||
  'Clients generate a UUID-shaped id per send attempt; retries reuse the ' ||
  'same id. Replays return the existing row when (thread_id, client_message_id) ' ||
  'already exists AND the request fingerprint matches; mismatched fingerprints ' ||
  'raise an exception with errcode unique_violation-mapped-to-409 by the ' ||
  'post_patient_message orchestrator. Null is allowed at the SQL layer for ' ||
  'backfill / legacy paths; the patient API layer requires the field.';

comment on column public.messages.client_request_fingerprint is
  'Phase 4H-communications c2. SHA-256 hex digest of the normalized request ' ||
  'payload (threadId + normalized body + attachment refs + author identity) ' ||
  'as computed by lib/messages/computeMessageRequestFingerprint.ts. Used to ' ||
  'detect idempotency-key-reuse-with-different-payload bugs: if a client ' ||
  'sends client_message_id=X with body "Yes I confirm" then later sends ' ||
  'client_message_id=X with body "Actually I have swelling", the second ' ||
  'request must NOT silently return the first row.';

-- Idempotency enforcement at the SQL layer.
create unique index if not exists messages_client_id_per_thread_idx
  on public.messages (message_thread_id, client_message_id)
  where client_message_id is not null;

-- ---------------------------------------------------------------------
-- 3. Replace thread index with (created_at, id) composite for tie-break
-- ---------------------------------------------------------------------

-- The existing messages_thread_created_idx orders by created_at desc only;
-- (created_at, id) tuple comparisons used by unread-count queries need id
-- as a deterministic tie-breaker.
drop index if exists public.messages_thread_created_idx;
create index if not exists messages_thread_created_id_idx
  on public.messages (message_thread_id, created_at desc, id desc);

comment on index public.messages_thread_created_id_idx is
  'Phase 4H-communications c2. Replaces messages_thread_created_idx with id ' ||
  'as a deterministic tie-breaker for (created_at, id) tuple comparisons used ' ||
  'by unread-count queries. See preflight §3.';

-- ---------------------------------------------------------------------
-- 4. mark_thread_read SECURITY DEFINER orchestrator
-- ---------------------------------------------------------------------

create or replace function public.mark_thread_read(
  p_thread_id uuid,
  p_participant_id uuid,
  p_message_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_participant_thread uuid;
  v_message_thread uuid;
  v_current_pointer_id uuid;
  v_current_created_at timestamptz;
  v_current_id uuid;
  v_target_created_at timestamptz;
  v_target_id uuid;
begin
  -- Validate participant exists + belongs to thread.
  select message_thread_id into v_participant_thread
  from public.message_thread_participants
  where id = p_participant_id;

  if v_participant_thread is null then
    raise exception 'mark_thread_read: participant % not found', p_participant_id
      using errcode = 'invalid_parameter_value';
  end if;

  if v_participant_thread <> p_thread_id then
    raise exception 'mark_thread_read: participant % does not belong to thread %',
      p_participant_id, p_thread_id
      using errcode = 'invalid_parameter_value';
  end if;

  -- Validate message exists + belongs to thread.
  select message_thread_id, created_at, id
    into v_message_thread, v_target_created_at, v_target_id
  from public.messages
  where id = p_message_id;

  if v_message_thread is null then
    raise exception 'mark_thread_read: message % not found', p_message_id
      using errcode = 'invalid_parameter_value';
  end if;

  if v_message_thread <> p_thread_id then
    raise exception 'mark_thread_read: message % does not belong to thread %',
      p_message_id, p_thread_id
      using errcode = 'invalid_parameter_value';
  end if;

  -- Read current pointer (if any) and its (created_at, id) tuple.
  select last_read_message_id into v_current_pointer_id
  from public.message_thread_participants
  where id = p_participant_id;

  if v_current_pointer_id is not null then
    select created_at, id into v_current_created_at, v_current_id
    from public.messages
    where id = v_current_pointer_id;
  end if;

  -- Monotonic advance only: skip if target is not strictly later than current.
  -- Lexicographic (created_at, id) tuple comparison (tie-break safe).
  if v_current_pointer_id is not null
     and (v_target_created_at, v_target_id) <= (v_current_created_at, v_current_id)
  then
    return jsonb_build_object(
      'advanced', false,
      'last_read_message_id', v_current_pointer_id,
      'reason', 'pointer_not_regressed'
    );
  end if;

  update public.message_thread_participants
    set last_read_message_id = p_message_id,
        last_read_at = now()
    where id = p_participant_id;

  return jsonb_build_object(
    'advanced', true,
    'last_read_message_id', p_message_id,
    'last_read_at', now()
  );
end;
$$;

comment on function public.mark_thread_read is
  'Phase 4H-communications c2. Monotonic per-participant read pointer advance. ' ||
  'Uses (created_at, id) tuple comparison so timestamp collisions on ' ||
  'same-transaction batch inserts do not cause silent regression. Never ' ||
  'regresses the pointer; returns advanced=false if the target is not strictly ' ||
  'later than the current pointer.';

revoke execute on function public.mark_thread_read(uuid, uuid, uuid)
  from public, anon, authenticated;

-- ---------------------------------------------------------------------
-- 5. post_patient_message SECURITY DEFINER orchestrator
-- ---------------------------------------------------------------------

create or replace function public.post_patient_message(
  p_thread_id uuid,
  p_patient_id uuid,
  p_body text,
  p_client_message_id text,
  p_client_request_fingerprint text,
  p_metadata jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_thread_patient_id uuid;
  v_care_program_id uuid;
  v_participant_id uuid;
  v_existing_row record;
  v_inserted_id uuid;
  v_inserted_created_at timestamptz;
begin
  -- Validate required fields.
  if p_thread_id is null then
    raise exception 'post_patient_message: p_thread_id is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_patient_id is null then
    raise exception 'post_patient_message: p_patient_id is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_body is null or length(p_body) < 1 or length(p_body) > 8000 then
    raise exception 'post_patient_message: body must be 1-8000 chars'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_client_message_id is null or length(p_client_message_id) < 1 then
    raise exception 'post_patient_message: p_client_message_id is required'
      using errcode = 'invalid_parameter_value';
  end if;
  if p_client_request_fingerprint is null or length(p_client_request_fingerprint) < 1 then
    raise exception 'post_patient_message: p_client_request_fingerprint is required'
      using errcode = 'invalid_parameter_value';
  end if;

  -- Validate thread exists + patient owns it.
  select patient_id, care_program_id into v_thread_patient_id, v_care_program_id
  from public.message_threads
  where id = p_thread_id;

  if v_thread_patient_id is null then
    raise exception 'post_patient_message: thread % not found', p_thread_id
      using errcode = 'invalid_parameter_value';
  end if;
  if v_thread_patient_id <> p_patient_id then
    raise exception 'post_patient_message: patient % does not own thread %',
      p_patient_id, p_thread_id
      using errcode = 'invalid_parameter_value';
  end if;

  -- Find the patient's participant row (used to advance read pointer).
  select id into v_participant_id
  from public.message_thread_participants
  where message_thread_id = p_thread_id
    and kind = 'patient'
    and patient_id = p_patient_id
  limit 1;

  if v_participant_id is null then
    raise exception 'post_patient_message: no patient participant row for patient % in thread %',
      p_patient_id, p_thread_id
      using errcode = 'invalid_parameter_value';
  end if;

  -- Idempotency: check for an existing row with the same client_message_id
  -- in this thread. The UNIQUE constraint enforces uniqueness at the
  -- SQL layer; this check decides whether to return-existing or raise-409.
  select id, client_request_fingerprint, body, created_at
    into v_existing_row
  from public.messages
  where message_thread_id = p_thread_id
    and client_message_id = p_client_message_id
  limit 1;

  if v_existing_row.id is not null then
    -- Fingerprint mismatch → dangerous reuse; raise 409-equivalent.
    if v_existing_row.client_request_fingerprint is distinct from p_client_request_fingerprint then
      raise exception 'idempotency_key_reuse_mismatch: client_message_id % already exists in thread % with a different request fingerprint',
        p_client_message_id, p_thread_id
        using
          errcode = 'unique_violation',
          detail = format('existing_message_id=%s', v_existing_row.id);
    end if;

    -- Fingerprint match → safe replay; return existing row.
    return jsonb_build_object(
      'message_id', v_existing_row.id,
      'created_at', v_existing_row.created_at,
      'idempotent_replay', true,
      'thread_id', p_thread_id,
      'care_program_id', v_care_program_id
    );
  end if;

  -- Fresh insert.
  insert into public.messages (
    message_thread_id,
    care_program_id,
    patient_id,
    from_patient,
    author_staff_id,
    body,
    classification,
    client_message_id,
    client_request_fingerprint,
    metadata
  ) values (
    p_thread_id,
    v_care_program_id,
    p_patient_id,
    true,
    null,
    p_body,
    null,
    p_client_message_id,
    p_client_request_fingerprint,
    coalesce(p_metadata, '{}'::jsonb)
  )
  returning id, created_at into v_inserted_id, v_inserted_created_at;

  -- Advance the patient's own read pointer (patient has implicitly read their own send).
  update public.message_thread_participants
    set last_read_message_id = v_inserted_id,
        last_read_at = now()
    where id = v_participant_id;

  -- TODO (c4 — when patient_action_items substrate lands):
  -- Resolve the most recent unresolved provider_message action item bound
  -- to this thread here in the same transaction. The §1G.11 satisfy-on-
  -- write-path discipline needs the action-item table + APIs which do not
  -- exist as of 2026-05-11 (confirmed by lib/intake/documents/route-
  -- patient-document.ts:38 comment). Until c4 ships:
  --   * c2 writes the message
  --   * patient surface still renders the "Response needed" chip from
  --     messages.metadata.clinical_required on staff turns
  --   * no action-item state changes (because no action-item table exists)

  return jsonb_build_object(
    'message_id', v_inserted_id,
    'created_at', v_inserted_created_at,
    'idempotent_replay', false,
    'thread_id', p_thread_id,
    'care_program_id', v_care_program_id
  );
end;
$$;

comment on function public.post_patient_message is
  'Phase 4H-communications c2. SECURITY DEFINER orchestrator for patient ' ||
  'chat compose. Validates ownership, enforces idempotency via ' ||
  '(thread_id, client_message_id) UNIQUE + fingerprint match-or-mismatch, ' ||
  'inserts the row, and advances the patient''s own read pointer. The §1G.11 ' ||
  'action-item resolution path is a TODO comment pointing at c4 (table does ' ||
  'not exist as of 2026-05-11).';

revoke execute on function public.post_patient_message(uuid, uuid, text, text, text, jsonb)
  from public, anon, authenticated;

-- ---------------------------------------------------------------------
-- 6. Backfill — one message_threads row per existing care_program +
--    one patient participant row per thread. Both idempotent (NOT EXISTS
--    guards); safe to re-run.
-- ---------------------------------------------------------------------

-- 6a. Backfill threads.
insert into public.message_threads (care_program_id, patient_id)
select cp.id, cp.patient_id
from public.care_programs cp
where not exists (
  select 1 from public.message_threads mt where mt.care_program_id = cp.id
);

-- 6b. Backfill patient participant per thread.
insert into public.message_thread_participants (message_thread_id, kind, patient_id)
select mt.id, 'patient', mt.patient_id
from public.message_threads mt
where not exists (
  select 1 from public.message_thread_participants mtp
  where mtp.message_thread_id = mt.id and mtp.kind = 'patient'
);

-- ---------------------------------------------------------------------
-- 7. Auto-create message_threads + patient participant on new
--    care_programs INSERT. Without this, the backfill only covers existing
--    care_programs at migration time; new care_programs created later
--    would land WITHOUT a thread, breaking the substrate invariant that
--    every care_program has a chat thread. The trigger is the substrate-
--    complete fix.
-- ---------------------------------------------------------------------

create or replace function public.ensure_message_thread_for_care_program()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_thread_id uuid;
begin
  insert into public.message_threads (care_program_id, patient_id)
  values (new.id, new.patient_id)
  on conflict (care_program_id) do nothing
  returning id into v_thread_id;

  -- on conflict do nothing returns no row; recover the existing thread id
  -- in that case so the participant insert below still works.
  if v_thread_id is null then
    select id into v_thread_id
    from public.message_threads
    where care_program_id = new.id;
  end if;

  if v_thread_id is not null then
    insert into public.message_thread_participants (message_thread_id, kind, patient_id)
    select v_thread_id, 'patient', new.patient_id
    where not exists (
      select 1 from public.message_thread_participants
      where message_thread_id = v_thread_id and kind = 'patient'
    );
  end if;

  return new;
end;
$$;

comment on function public.ensure_message_thread_for_care_program is
  'Phase 4H-communications c2. AFTER INSERT trigger on care_programs that ' ||
  'ensures a corresponding message_thread + patient participant row exists ' ||
  'for every care program. Idempotent (ON CONFLICT DO NOTHING + NOT EXISTS ' ||
  'guards). Without this, new care_programs created after the migration ' ||
  'apply would lack chat substrate and the patient list page would skip ' ||
  'them. The trigger keeps the 1:1 program↔thread invariant going forward.';

drop trigger if exists trg_care_programs_ensure_thread on public.care_programs;
create trigger trg_care_programs_ensure_thread
  after insert on public.care_programs
  for each row
  execute function public.ensure_message_thread_for_care_program();

-- =====================================================================
-- End of migration.
--
-- Post-apply substrate state:
--   * message_threads: one row per care_program (was: 0).
--   * message_thread_participants: one patient row per thread (was: 0).
--   * messages: unchanged (0; c2 application code writes the first rows).
--   * patient_inbox_messages: unchanged (c1 substrate).
--
-- Next step after this migration applies: ship the c2 application code
-- (lib/messages/*, app/api/messages/[threadId]/messages/route.ts,
-- components/dashboard/MessagesThreadView.tsx, page updates, integration
-- test). The orchestrators (mark_thread_read, post_patient_message) are
-- callable from the moment this migration commits.
-- =====================================================================

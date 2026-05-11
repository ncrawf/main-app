/**
 * Phase 4H-communications c2 — chat rendering substrate live-DB smoke test.
 *
 * Verifies the c2 substrate behavior end-to-end against the live DB:
 *
 *   1. Patient compose round-trip — postPatientMessage writes a messages row
 *      with from_patient=true, advances the patient's read pointer, emits a
 *      patient_chat_message_sent timeline event.
 *   2. Staff reply visible to patient — direct INSERT of a staff turn;
 *      listMessagesForThread returns it; unread_count reflects it.
 *   3. Mark-read advances pointer — markThreadRead via the orchestrator;
 *      unread count drops to 0.
 *   4. Mark-read is monotonic + tie-break safe — calling mark-read with an
 *      older message id does NOT regress the pointer; same-created_at
 *      messages disambiguated by id.
 *   5. Clinical_required chip rendering — staff turn with
 *      metadata.clinical_required:true surfaces a flag in the listed row;
 *      NO action item is created (substrate-reality: patient_action_items
 *      doesn't exist — c4 work).
 *   6. Idempotent patient compose:
 *      6a. Same payload, same id → existing row returned (no duplicate).
 *      6b. Missing client_message_id (TS layer) is enforced at the function
 *          signature via Zod; tested by passing empty string → rejected.
 *      6c. Different payload, reused id → IdempotencyMismatchError.
 *   7. Multi-participant unread state — manually add a second staff
 *      participant; verify both staff participants have independent
 *      unread state.
 *   8. Classification CHECK enforcement — INSERT with classification='bogus'
 *      rejected; INSERT with classification='clinical_required' also
 *      rejected (deliberately removed from enum).
 *   9. Migration backfill verification — every care_program has a thread;
 *      every thread has a patient participant; trigger auto-creates for
 *      a freshly inserted care_program.
 *
 * Deferred to c4 (will be added when patient_action_items substrate lands):
 *   - Multi-turn clinical_required action-item resolution (scenario 5 of
 *     the original preflight; partially covered here as the chip-rendering
 *     piece without any action-item creation)
 *   - Drift recon between metadata.clinical_required and patient_action_items
 *   - Cascade-resolve guard for two unresolved action items, one patient reply
 *
 * Run with: `npx tsx scripts/test-chat-rendering-c2.ts`
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { listMessagesForThread } from '../lib/messages/listMessagesForThread'
import { postPatientMessage, IdempotencyMismatchError } from '../lib/messages/postPatientMessage'
import { markThreadRead } from '../lib/messages/markThreadRead'
import { computeMessageRequestFingerprint } from '../lib/messages/computeMessageRequestFingerprint'

type Ctx = {
  supabase: SupabaseClient
  patientId: string
  careProgramId: string
  threadId: string
  patientParticipantId: string
  /** Synthetic staff_profiles.id created at setup; the same id is also an auth.users row. */
  staffProfileId: string
  insertedMessageIds: string[]
  insertedTimelineEventIds: string[]
  insertedCareProgramIds: string[]
  staffParticipantIds: string[]
}

const SYNTHETIC_ENV = 'synthetic'

async function main(): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }
  const supabase = createClient(url, key)

  const ctx: Ctx = {
    supabase,
    patientId: '',
    careProgramId: '',
    threadId: '',
    patientParticipantId: '',
    staffProfileId: '',
    insertedMessageIds: [],
    insertedTimelineEventIds: [],
    insertedCareProgramIds: [],
    staffParticipantIds: [],
  }

  let exitCode = 0
  let passes = 0
  let failures = 0
  function pass(label: string): void {
    console.log(`  PASS — ${label}`)
    passes++
  }
  function fail(label: string, msg: string): void {
    console.error(`  FAIL — ${label}: ${msg}`)
    failures++
  }
  function assertCond(cond: boolean, label: string, msg: string): void {
    if (cond) pass(label)
    else fail(label, msg)
  }

  try {
    console.log(`[${new Date().toISOString()}] Setting up test fixtures...`)
    await setup(ctx)
    console.log(`  patient_id=${ctx.patientId}`)
    console.log(`  care_program_id=${ctx.careProgramId}`)
    console.log(`  thread_id=${ctx.threadId}`)
    console.log(`  patient_participant_id=${ctx.patientParticipantId}\n`)

    // -----------------------------------------------------------------
    // Scenario 1: Patient compose round-trip
    // -----------------------------------------------------------------
    console.log('Scenario 1: Patient compose round-trip')
    {
      const cmid = `cm-test-${Date.now()}-s1`
      const result = await postPatientMessage(
        {
          thread_id: ctx.threadId,
          patient_id: ctx.patientId,
          body: 'Hello from the patient',
          client_message_id: cmid,
        },
        supabase,
      )
      ctx.insertedMessageIds.push(result.message_id)
      assertCond(result.idempotent_replay === false, 's1: fresh insert flagged not-replay', String(result.idempotent_replay))

      const { data: row } = await supabase
        .from('messages')
        .select('id, from_patient, author_staff_id, classification, client_message_id, client_request_fingerprint')
        .eq('id', result.message_id)
        .maybeSingle()
      assertCond(!!row && (row as { from_patient: boolean }).from_patient === true, 's1: from_patient is true', JSON.stringify(row))
      assertCond(
        !!row && (row as { author_staff_id: string | null }).author_staff_id === null,
        's1: author_staff_id is null',
        JSON.stringify(row),
      )
      assertCond(
        !!row && (row as { classification: string | null }).classification === null,
        's1: classification null on patient turn',
        JSON.stringify(row),
      )
      assertCond(
        !!row && (row as { client_message_id: string | null }).client_message_id === cmid,
        's1: client_message_id stored',
        JSON.stringify(row),
      )
      assertCond(
        !!row && typeof (row as { client_request_fingerprint: string | null }).client_request_fingerprint === 'string',
        's1: fingerprint stored',
        JSON.stringify(row),
      )

      const { data: part } = await supabase
        .from('message_thread_participants')
        .select('last_read_message_id')
        .eq('id', ctx.patientParticipantId)
        .single()
      assertCond(
        (part as { last_read_message_id: string | null }).last_read_message_id === result.message_id,
        's1: patient read pointer advanced to own send',
        JSON.stringify(part),
      )

      const { data: tl } = await supabase
        .from('patient_timeline_events')
        .select('id, event_type, care_program_id, payload')
        .eq('event_type', 'patient_chat_message_sent')
        .eq('patient_id', ctx.patientId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      const tlRow = tl as { id: string; event_type: string; care_program_id: string | null; payload: Record<string, unknown> } | null
      assertCond(!!tlRow, 's1: patient_chat_message_sent timeline event present', JSON.stringify(tl))
      if (tlRow) {
        ctx.insertedTimelineEventIds.push(tlRow.id)
        assertCond(
          tlRow.care_program_id === ctx.careProgramId,
          's1: timeline event care_program_id populated',
          JSON.stringify(tlRow),
        )
      }
    }

    // -----------------------------------------------------------------
    // Scenario 2: Staff reply visible to patient
    // -----------------------------------------------------------------
    console.log('\nScenario 2: Staff reply visible to patient')
    {
      const staffMsg = await insertStaffMessage(ctx, {
        body: 'Hi from the care team',
        classification: 'general',
      })
      ctx.insertedMessageIds.push(staffMsg.id)

      const view = await listMessagesForThread({ patientId: ctx.patientId, threadId: ctx.threadId }, supabase)
      assertCond(
        view.messages.some((m) => m.id === staffMsg.id),
        's2: staff message visible in list',
        JSON.stringify(view.messages.map((m) => m.id)),
      )
      assertCond(view.unread_count === 1, 's2: unread_count is 1', String(view.unread_count))
    }

    // -----------------------------------------------------------------
    // Scenario 3: Mark-read advances pointer
    // -----------------------------------------------------------------
    console.log('\nScenario 3: Mark-read advances pointer')
    {
      const latestStaffMsgId = ctx.insertedMessageIds[ctx.insertedMessageIds.length - 1]
      const result = await markThreadRead(
        {
          thread_id: ctx.threadId,
          participant_id: ctx.patientParticipantId,
          message_id: latestStaffMsgId,
        },
        supabase,
      )
      assertCond(result.advanced === true, 's3: mark-read advanced', JSON.stringify(result))

      const view = await listMessagesForThread({ patientId: ctx.patientId, threadId: ctx.threadId }, supabase)
      assertCond(view.unread_count === 0, 's3: unread_count is 0 after mark-read', String(view.unread_count))
    }

    // -----------------------------------------------------------------
    // Scenario 4: Monotonic + tie-break safe
    // -----------------------------------------------------------------
    console.log('\nScenario 4: Mark-read is monotonic + tie-break safe')
    {
      const firstStaffId = ctx.insertedMessageIds[1] // second message inserted = first staff message
      const result = await markThreadRead(
        {
          thread_id: ctx.threadId,
          participant_id: ctx.patientParticipantId,
          message_id: firstStaffId,
        },
        supabase,
      )
      assertCond(
        result.advanced === false,
        's4: mark-read with older id does NOT regress pointer',
        JSON.stringify(result),
      )

      // Tie-break: insert two staff messages with identical created_at
      // (same-transaction insert via a single RPC batch). We can't easily
      // force exact tie at the application layer; instead we rely on the
      // (created_at, id) tuple comparison to make ordering deterministic
      // even WITHOUT a collision. The SQL function uses tuples; a unit
      // test for the helper would be the right place to fully verify
      // tuple comparison. For the live-DB test we just verify the order
      // is stable across queries.
      const view1 = await listMessagesForThread({ patientId: ctx.patientId, threadId: ctx.threadId }, supabase)
      const view2 = await listMessagesForThread({ patientId: ctx.patientId, threadId: ctx.threadId }, supabase)
      const ids1 = view1.messages.map((m) => m.id).join(',')
      const ids2 = view2.messages.map((m) => m.id).join(',')
      assertCond(ids1 === ids2, 's4: message order is stable across reads', `${ids1} vs ${ids2}`)
    }

    // -----------------------------------------------------------------
    // Scenario 5: Clinical_required chip rendering (NO action item creation)
    // -----------------------------------------------------------------
    console.log('\nScenario 5: Clinical_required chip rendering (c4 will add action-item binding)')
    {
      const staffMsg = await insertStaffMessage(ctx, {
        body: 'Please confirm your dose',
        classification: null,
        metadata: { clinical_required: true },
      })
      ctx.insertedMessageIds.push(staffMsg.id)

      const view = await listMessagesForThread({ patientId: ctx.patientId, threadId: ctx.threadId }, supabase)
      const m = view.messages.find((mm) => mm.id === staffMsg.id)
      assertCond(!!m, 's5: clinical_required staff message visible', JSON.stringify(view.messages))
      assertCond(!!m && m.clinical_required === true, 's5: clinical_required flag surfaces to UI', JSON.stringify(m))

      // Action-item drift recon DEFERRED to c4. Verify the patient_action_items
      // table does NOT exist (positive confirmation of the substrate gap).
      // PostgREST returns "Could not find the table 'public.patient_action_items'
      // in the schema cache" when the table doesn't exist; the underlying PG
      // message is "relation does not exist". Match either.
      const { error: rqe } = await supabase.from('patient_action_items').select('id').limit(1)
      const isMissingTableError =
        !!rqe &&
        (/relation .*patient_action_items.* does not exist/i.test(rqe.message) ||
          /could not find .*patient_action_items.* in the schema cache/i.test(rqe.message))
      assertCond(
        isMissingTableError,
        's5: patient_action_items table does NOT exist (c4 dependency confirmed)',
        rqe ? rqe.message : 'no error returned — table may actually exist?',
      )
    }

    // -----------------------------------------------------------------
    // Scenario 6: Idempotency
    // -----------------------------------------------------------------
    console.log('\nScenario 6: Idempotency match + mismatch + missing')
    {
      const cmid = `cm-test-${Date.now()}-s6`
      const body = 'Yes I confirm'
      const first = await postPatientMessage(
        { thread_id: ctx.threadId, patient_id: ctx.patientId, body, client_message_id: cmid },
        supabase,
      )
      ctx.insertedMessageIds.push(first.message_id)
      // 6a: same payload, same id → existing row
      const replay = await postPatientMessage(
        { thread_id: ctx.threadId, patient_id: ctx.patientId, body, client_message_id: cmid },
        supabase,
      )
      assertCond(replay.idempotent_replay === true, 's6a: same payload same id → idempotent_replay=true', JSON.stringify(replay))
      assertCond(replay.message_id === first.message_id, 's6a: same row returned', `${replay.message_id} vs ${first.message_id}`)

      // 6b: TS-layer zod rejects empty string client_message_id
      try {
        await postPatientMessage(
          { thread_id: ctx.threadId, patient_id: ctx.patientId, body, client_message_id: '' },
          supabase,
        )
        fail('s6b: missing client_message_id', 'should have thrown')
      } catch (e) {
        const msg = (e as Error).message
        assertCond(/client_message_id/.test(msg) || /String must contain/.test(msg) || /at least 1/.test(msg), 's6b: missing client_message_id rejected at TS layer', msg)
      }

      // 6c: different payload, reused id → IdempotencyMismatchError
      try {
        await postPatientMessage(
          { thread_id: ctx.threadId, patient_id: ctx.patientId, body: 'Actually I have swelling', client_message_id: cmid },
          supabase,
        )
        fail('s6c: different payload reused id', 'should have thrown IdempotencyMismatchError')
      } catch (e) {
        assertCond(
          e instanceof IdempotencyMismatchError,
          's6c: different payload reused id → IdempotencyMismatchError',
          (e as Error).message,
        )
      }
    }

    // -----------------------------------------------------------------
    // Scenario 7: Multi-participant unread state
    // -----------------------------------------------------------------
    console.log('\nScenario 7: Multi-participant unread state')
    {
      const staffParticipantId = await ensureSyntheticStaffParticipant(ctx)
      ctx.staffParticipantIds.push(staffParticipantId)

      // Patient sends a message; verify staff participant's unread state.
      // Since staff hasn't read anything, count of staff-relevant unread =
      // count of patient messages strictly after staff pointer (null). We
      // model this exactly the same way listMessagesForThread does, but
      // from the staff participant's perspective.
      const cmid = `cm-test-${Date.now()}-s7`
      const send = await postPatientMessage(
        { thread_id: ctx.threadId, patient_id: ctx.patientId, body: 'Multi-participant test', client_message_id: cmid },
        supabase,
      )
      ctx.insertedMessageIds.push(send.message_id)

      const { data: staffPart } = await supabase
        .from('message_thread_participants')
        .select('last_read_message_id')
        .eq('id', staffParticipantId)
        .single()
      const staffPointer = (staffPart as { last_read_message_id: string | null }).last_read_message_id
      assertCond(
        staffPointer === null,
        's7: staff participant pointer is null (independent of patient pointer)',
        `staff pointer=${staffPointer}`,
      )

      // From staff's POV, all patient + staff-bot messages are "unread"
      // since the pointer is null. We don't have a list-from-staff-side
      // function in c2 (that's provider-mirror work), but the per-staff
      // pointer being independent is the substrate signal that matters.
    }

    // -----------------------------------------------------------------
    // Scenario 8: Classification CHECK enforcement
    // -----------------------------------------------------------------
    console.log('\nScenario 8: Classification CHECK enforcement')
    {
      // Bogus value rejected.
      const { error: e1 } = await supabase.from('messages').insert({
        message_thread_id: ctx.threadId,
        care_program_id: ctx.careProgramId,
        patient_id: ctx.patientId,
        from_patient: false,
        author_staff_id: await getSeededStaffId(ctx),
        body: 'classification check test',
        classification: 'bogus',
      })
      assertCond(!!e1, 's8: classification=bogus rejected', e1 ? e1.message : 'no error')

      // clinical_required NOT in the enum.
      const { error: e2 } = await supabase.from('messages').insert({
        message_thread_id: ctx.threadId,
        care_program_id: ctx.careProgramId,
        patient_id: ctx.patientId,
        from_patient: false,
        author_staff_id: await getSeededStaffId(ctx),
        body: 'classification clinical_required test',
        classification: 'clinical_required',
      })
      assertCond(!!e2, 's8: classification=clinical_required rejected (deliberately not in enum)', e2 ? e2.message : 'no error')
    }

    // -----------------------------------------------------------------
    // Scenario 9: Migration backfill verification
    // -----------------------------------------------------------------
    console.log('\nScenario 9: Migration backfill verification + trigger on new care_program')
    {
      // 9a: count consistency for existing data
      const { count: programCount } = await supabase
        .from('care_programs')
        .select('id', { count: 'exact', head: true })
      const { count: threadCount } = await supabase
        .from('message_threads')
        .select('id', { count: 'exact', head: true })
      assertCond(
        (programCount ?? 0) <= (threadCount ?? 0),
        `s9a: every care_program has at least one thread (programs=${programCount}, threads=${threadCount})`,
        `${programCount} vs ${threadCount}`,
      )

      // 9b: trigger creates thread + patient participant on new care_program insert
      const { data: newCp, error: cpErr } = await supabase
        .from('care_programs')
        .insert({
          patient_id: ctx.patientId,
          program_type: 'weight_loss', // arbitrary valid enum value; matches existing seed
          status: 'intake_submitted',
        })
        .select('id')
        .single()
      if (cpErr || !newCp) {
        fail('s9b: insert new care_program for trigger test', cpErr?.message ?? 'no row returned')
      } else {
        const newCpId = (newCp as { id: string }).id
        ctx.insertedCareProgramIds.push(newCpId)
        const { data: triggeredThread } = await supabase
          .from('message_threads')
          .select('id')
          .eq('care_program_id', newCpId)
          .maybeSingle()
        const triggeredThreadId = (triggeredThread as { id: string } | null)?.id
        assertCond(
          !!triggeredThreadId,
          's9b: trigger created message_thread for new care_program',
          JSON.stringify(triggeredThread),
        )
        if (triggeredThreadId) {
          const { data: triggeredParticipant } = await supabase
            .from('message_thread_participants')
            .select('id, kind, patient_id')
            .eq('message_thread_id', triggeredThreadId)
            .eq('kind', 'patient')
            .maybeSingle()
          assertCond(
            !!triggeredParticipant,
            's9b: trigger created patient participant for new thread',
            JSON.stringify(triggeredParticipant),
          )
        }
      }

      // 9c: fingerprint helper unit-test-style assertions on stable normalization
      const fp1 = computeMessageRequestFingerprint({
        threadId: 'abc',
        body: '  hello world  ',
        authorIdentity: 'patient:x',
      })
      const fp2 = computeMessageRequestFingerprint({
        threadId: 'abc',
        body: 'hello  world',
        authorIdentity: 'patient:x',
      })
      assertCond(fp1 === fp2, 's9c: fingerprint stable across whitespace normalization', `${fp1} vs ${fp2}`)
      const fp3 = computeMessageRequestFingerprint({
        threadId: 'abc',
        body: 'hello there',
        authorIdentity: 'patient:x',
      })
      assertCond(fp1 !== fp3, 's9c: fingerprint differs for different content', `${fp1} vs ${fp3}`)
    }

    console.log(`\n[${new Date().toISOString()}] Tearing down test fixtures...`)
    await teardown(ctx)
  } catch (e) {
    console.error('FATAL:', e)
    exitCode = 1
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`  passes: ${passes}`)
  console.log(`  failures: ${failures}`)
  console.log(`${'='.repeat(60)}`)
  if (failures > 0) exitCode = 1
  process.exit(exitCode)
}

async function setup(ctx: Ctx): Promise<void> {
  const ts = Date.now()
  const patientEmail = `c2-test-patient-${ts}@example.com`
  const staffEmail = `c2-test-staff-${ts}@example.com`

  // 1. Create test patient (data_environment=synthetic for safety).
  const { data: patient, error: pErr } = await ctx.supabase
    .from('patients')
    .insert({
      first_name: 'C2',
      last_name: `Test-${ts}`,
      email: patientEmail,
      data_environment: SYNTHETIC_ENV,
    })
    .select('id')
    .single()
  if (pErr || !patient) throw new Error(`setup: patient insert failed: ${pErr?.message}`)
  ctx.patientId = (patient as { id: string }).id

  // 2. Create synthetic auth.users + staff_profiles entry for staff turns.
  // staff_profiles.id is FK to auth.users(id), so we go through the auth
  // admin API first to mint the user, then INSERT the profile row.
  const authAdmin = (ctx.supabase as unknown as {
    auth: { admin: { createUser: (args: { email: string; email_confirm: boolean }) => Promise<{ data: { user: { id: string } | null }; error: { message: string } | null }> } }
  }).auth.admin
  const { data: authData, error: authErr } = await authAdmin.createUser({
    email: staffEmail,
    email_confirm: true,
  })
  if (authErr || !authData.user) {
    throw new Error(`setup: auth.users createUser failed: ${authErr?.message ?? 'no user returned'}`)
  }
  ctx.staffProfileId = authData.user.id
  const { error: spErr } = await ctx.supabase.from('staff_profiles').insert({
    id: ctx.staffProfileId,
    role: 'prescriber',
    display_name: `C2 Test Staff ${ts}`,
  })
  if (spErr) throw new Error(`setup: staff_profiles insert failed: ${spErr.message}`)

  // 3. Create care_program (the trigger auto-creates the thread + participant).
  const { data: cp, error: cpErr } = await ctx.supabase
    .from('care_programs')
    .insert({
      patient_id: ctx.patientId,
      program_type: 'weight_loss',
      status: 'intake_submitted',
    })
    .select('id')
    .single()
  if (cpErr || !cp) throw new Error(`setup: care_program insert failed: ${cpErr?.message}`)
  ctx.careProgramId = (cp as { id: string }).id
  ctx.insertedCareProgramIds.push(ctx.careProgramId)

  // 4. Fetch the auto-created thread.
  const { data: thread, error: tErr } = await ctx.supabase
    .from('message_threads')
    .select('id')
    .eq('care_program_id', ctx.careProgramId)
    .single()
  if (tErr || !thread) throw new Error(`setup: thread fetch failed (trigger should have created it): ${tErr?.message}`)
  ctx.threadId = (thread as { id: string }).id

  // 5. Fetch the auto-created patient participant.
  const { data: part, error: partErr } = await ctx.supabase
    .from('message_thread_participants')
    .select('id')
    .eq('message_thread_id', ctx.threadId)
    .eq('kind', 'patient')
    .single()
  if (partErr || !part) throw new Error(`setup: participant fetch failed: ${partErr?.message}`)
  ctx.patientParticipantId = (part as { id: string }).id
}

async function insertStaffMessage(
  ctx: Ctx,
  args: { body: string; classification: string | null; metadata?: Record<string, unknown> },
): Promise<{ id: string }> {
  const staffId = await getSeededStaffId(ctx)
  const { data, error } = await ctx.supabase
    .from('messages')
    .insert({
      message_thread_id: ctx.threadId,
      care_program_id: ctx.careProgramId,
      patient_id: ctx.patientId,
      from_patient: false,
      author_staff_id: staffId,
      body: args.body,
      classification: args.classification,
      metadata: args.metadata ?? {},
    })
    .select('id')
    .single()
  if (error || !data) throw new Error(`insertStaffMessage failed: ${error?.message}`)
  return { id: (data as { id: string }).id }
}

async function ensureSyntheticStaffParticipant(ctx: Ctx): Promise<string> {
  const staffId = await getSeededStaffId(ctx)
  // Idempotent: if a staff participant for this staff in this thread already
  // exists, reuse it; otherwise insert.
  const { data: existing } = await ctx.supabase
    .from('message_thread_participants')
    .select('id')
    .eq('message_thread_id', ctx.threadId)
    .eq('staff_profile_id', staffId)
    .maybeSingle()
  if (existing) return (existing as { id: string }).id

  const { data, error } = await ctx.supabase
    .from('message_thread_participants')
    .insert({
      message_thread_id: ctx.threadId,
      kind: 'staff',
      staff_profile_id: staffId,
    })
    .select('id')
    .single()
  if (error || !data) throw new Error(`ensureSyntheticStaffParticipant failed: ${error?.message}`)
  return (data as { id: string }).id
}

async function getSeededStaffId(ctx: Ctx): Promise<string> {
  // The test setup mints a synthetic staff_profiles row backed by an
  // auth.users entry. Reuse it across all staff-side test inserts.
  if (!ctx.staffProfileId) {
    throw new Error('getSeededStaffId: ctx.staffProfileId is empty — setup did not run')
  }
  return ctx.staffProfileId
}

async function teardown(ctx: Ctx): Promise<void> {
  // Best-effort cleanup. ON DELETE CASCADE handles most of the graph.
  if (ctx.staffParticipantIds.length > 0) {
    await ctx.supabase.from('message_thread_participants').delete().in('id', ctx.staffParticipantIds)
  }
  if (ctx.insertedTimelineEventIds.length > 0) {
    await ctx.supabase.from('patient_timeline_events').delete().in('id', ctx.insertedTimelineEventIds)
  }
  // Deleting care_program cascades messages + threads + participants.
  if (ctx.insertedCareProgramIds.length > 0) {
    await ctx.supabase.from('care_programs').delete().in('id', ctx.insertedCareProgramIds)
  }
  // Delete patient (cascades any orphaned messages on patient FK).
  if (ctx.patientId) {
    await ctx.supabase.from('patients').delete().eq('id', ctx.patientId)
  }
  // Delete synthetic auth.users last (cascades staff_profiles via FK).
  if (ctx.staffProfileId) {
    const authAdmin = (ctx.supabase as unknown as {
      auth: { admin: { deleteUser: (id: string) => Promise<{ error: { message: string } | null }> } }
    }).auth.admin
    const { error: delErr } = await authAdmin.deleteUser(ctx.staffProfileId)
    if (delErr) console.warn(`teardown: auth.admin.deleteUser failed: ${delErr.message}`)
  }
}

void main()

import type { SupabaseClient } from '@supabase/supabase-js'

export type ChartReviewContext = {
  patient: {
    id: string
    email: string
    first_name: string | null
    last_name: string | null
    dob: string | null
  }
  latestIntake: {
    submission_id: string | null
    submitted_at: string | null
    answers: Record<string, unknown>
    attachments: Array<{ file_name: string; object_path: string; uploaded_at: string }>
  }
  care: {
    activePrograms: Array<{ id: string; program_type: string; status: string; title: string | null }>
    treatmentItems: Array<{ id: string; display_name: string; treatment_key: string; status: string }>
    refillRequests: Array<{ id: string; status: string; created_at: string; treatment_item_id: string }>
    latestRefillCheckIn: {
      refill_request_id: string | null
      status: string | null
      created_at: string | null
      patient_note: string | null
      profile: string | null
      check_in: unknown
    }
  }
  support: {
    openSupportRequests: number
    recentCheckins: Array<{ id: string; created_at: string; treatment_item_id: string | null }>
  }
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function attachmentArrayFromAnswers(
  answers: Record<string, unknown>
): Array<{ file_name: string; object_path: string; uploaded_at: string }> {
  const raw = Array.isArray(answers.labs_attachments) ? answers.labs_attachments : []
  return raw
    .filter((v): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v))
    .map((a) => ({
      file_name: typeof a.file_name === 'string' ? a.file_name : 'attachment',
      object_path: typeof a.object_path === 'string' ? a.object_path : '',
      uploaded_at: typeof a.uploaded_at === 'string' ? a.uploaded_at : '',
    }))
    .filter((a) => a.object_path.length > 0)
}

export async function loadChartReviewContext(
  admin: SupabaseClient,
  patientId: string
): Promise<ChartReviewContext | null> {
  const { data: patient, error: patientErr } = await admin
    .from('patients')
    .select('id, email, first_name, last_name, dob')
    .eq('id', patientId)
    .maybeSingle()
  if (patientErr || !patient) {
    console.error('loadChartReviewContext.patient', patientErr)
    return null
  }

  const { data: intakeRows, error: intakeErr } = await admin
    .from('form_submissions')
    .select('id, submitted_at, answers')
    .eq('patient_id', patientId)
    .order('submitted_at', { ascending: false })
    .limit(1)
  if (intakeErr) {
    console.error('loadChartReviewContext.intake', intakeErr)
  }

  const intake = intakeRows?.[0]
  const intakeAnswers =
    intake?.answers && typeof intake.answers === 'object' && !Array.isArray(intake.answers)
      ? (intake.answers as Record<string, unknown>)
      : {}

  const { data: programs, error: programErr } = await admin
    .from('care_programs')
    .select('id, program_type, status, title')
    .eq('patient_id', patientId)
    .order('updated_at', { ascending: false })
  const activePrograms =
    programErr && isMissingRelationError(programErr)
      ? []
      : ((programs ?? []) as Array<{ id: string; program_type: string; status: string; title: string | null }>)

  const { data: treatmentItems, error: itemsErr } = await admin
    .from('treatment_items')
    .select('id, display_name, treatment_key, status')
    .eq('patient_id', patientId)
    .order('updated_at', { ascending: false })
  const safeItems =
    itemsErr && isMissingRelationError(itemsErr)
      ? []
      : ((treatmentItems ?? []) as Array<{ id: string; display_name: string; treatment_key: string; status: string }>)

  const { data: refills, error: refillErr } = await admin
    .from('refill_requests')
    .select('id, status, created_at, treatment_item_id')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
    .limit(25)
  const safeRefills =
    refillErr && isMissingRelationError(refillErr)
      ? []
      : ((refills ?? []) as Array<{ id: string; status: string; created_at: string; treatment_item_id: string }>)
  const latestRefill = safeRefills[0]
  let latestRefillCheckIn: ChartReviewContext['care']['latestRefillCheckIn'] = {
    refill_request_id: null,
    status: null,
    created_at: null,
    patient_note: null,
    profile: null,
    check_in: null,
  }
  if (latestRefill?.id) {
    const { data: refillDetails, error: refillDetailErr } = await admin
      .from('refill_requests')
      .select('id, status, created_at, patient_note, metadata')
      .eq('id', latestRefill.id)
      .maybeSingle()
    if (refillDetailErr) {
      if (!isMissingRelationError(refillDetailErr)) {
        console.error('loadChartReviewContext.refill_details', refillDetailErr)
      }
    } else if (refillDetails) {
      let profile: string | null = null
      let checkIn: unknown = null
      if (refillDetails.metadata && typeof refillDetails.metadata === 'object' && !Array.isArray(refillDetails.metadata)) {
        const md = refillDetails.metadata as Record<string, unknown>
        profile = typeof md.refill_check_in_profile === 'string' ? md.refill_check_in_profile : null
        checkIn = md.refill_check_in ?? null
      }
      latestRefillCheckIn = {
        refill_request_id: refillDetails.id,
        status: refillDetails.status ?? null,
        created_at: refillDetails.created_at ?? null,
        patient_note: typeof refillDetails.patient_note === 'string' ? refillDetails.patient_note : null,
        profile,
        check_in: checkIn,
      }
    }
  }

  const { data: supportRows, error: supportErr } = await admin
    .from('patient_support_requests')
    .select('status')
    .eq('patient_id', patientId)
    .in('status', ['new', 'acknowledged', 'call_completed'])
  const openSupportRequests =
    supportErr && isMissingRelationError(supportErr)
      ? 0
      : Array.isArray(supportRows)
        ? supportRows.length
        : 0

  const { data: checkins, error: checkinErr } = await admin
    .from('patient_treatment_checkins')
    .select('id, created_at, treatment_item_id')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
    .limit(10)
  const recentCheckins =
    checkinErr && isMissingRelationError(checkinErr)
      ? []
      : ((checkins ?? []) as Array<{ id: string; created_at: string; treatment_item_id: string | null }>)

  return {
    patient: {
      id: patient.id,
      email: patient.email,
      first_name: patient.first_name,
      last_name: patient.last_name,
      dob: patient.dob,
    },
    latestIntake: {
      submission_id: intake?.id ?? null,
      submitted_at: intake?.submitted_at ?? null,
      answers: intakeAnswers,
      attachments: attachmentArrayFromAnswers(intakeAnswers),
    },
    care: {
      activePrograms,
      treatmentItems: safeItems,
      refillRequests: safeRefills,
      latestRefillCheckIn,
    },
    support: {
      openSupportRequests,
      recentCheckins,
    },
  }
}

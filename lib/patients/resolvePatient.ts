import type { SupabaseClient } from '@supabase/supabase-js'
import {
  formatUsState,
  normalizeEmail,
  normalizePostalCode,
  normalizeUsPhoneToE164,
  parseUsDobToPostgresDate,
  trimString,
} from '@/lib/patients/normalize'

/**
 * Canonical patient row from intake-style answers (server only).
 * Dedupes on normalized email.
 */
export async function resolvePatientFromAnswers(
  supabase: SupabaseClient,
  answers: Record<string, unknown>
): Promise<{ patientId: string }> {
  const email = normalizeEmail(answers.email)
  if (!email) {
    throw new Error('Email is required for patient resolution')
  }

  const first_name = trimString(answers.first_name) || null
  const last_name = trimString(answers.last_name) || null

  const phone = normalizeUsPhoneToE164(answers.phone)
  if (!phone) {
    throw new Error('Invalid phone number')
  }

  const dob = parseUsDobToPostgresDate(answers.dob)
  if (!dob) {
    throw new Error('Invalid date of birth')
  }

  const address_line1 = trimString(answers.address_line1) || null
  const address_line2 = trimString(answers.address_line2) || null
  const city = trimString(answers.city) || null
  const state = formatUsState(answers.state)
  const postal_code = normalizePostalCode(answers.postal_code)

  const { data: existing, error: findErr } = await supabase
    .from('patients')
    .select('id')
    .eq('email', email)
    .maybeSingle()

  if (findErr) throw new Error(findErr.message)

  const now = new Date().toISOString()

  const row = {
    first_name,
    last_name,
    phone,
    dob,
    address_line1,
    address_line2,
    city,
    state,
    postal_code,
    updated_at: now,
  }

  if (existing?.id) {
    const { error: upErr } = await supabase.from('patients').update(row).eq('id', existing.id)

    if (upErr) throw new Error(upErr.message)
    return { patientId: existing.id }
  }

  const { data: created, error: insErr } = await supabase
    .from('patients')
    .insert({
      email,
      ...row,
    })
    .select('id')
    .single()

  if (insErr || !created) {
    throw new Error(insErr?.message ?? 'Failed to create patient')
  }

  return { patientId: created.id }
}

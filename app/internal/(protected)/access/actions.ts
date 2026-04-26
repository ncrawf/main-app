'use server'

import { revalidatePath } from 'next/cache'
import { requireCapability } from '@/lib/auth/capabilities'
import { createAdminClient } from '@/lib/supabase/admin'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { STAFF_ROLES, type StaffRole } from '@/lib/staff/roles'

export type CreateStaffAccountResult = { ok: true; userId: string } | { ok: false; error: string }

function isStaffRole(role: string): role is StaffRole {
  return (STAFF_ROLES as readonly string[]).includes(role)
}

function parseTextList(raw: string): string[] {
  return [...new Set(raw.split(',').map((part) => part.trim()).filter(Boolean))]
}

function parseStateCodes(raw: string): string[] {
  return [...new Set(raw.split(',').map((part) => part.trim().toUpperCase()).filter(Boolean))].slice(0, 30)
}

function parseLicenses(raw: string): Array<{ state: string; license_number: string; expires_on: string | null }> {
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [stateRaw, numberRaw, expiresRaw] = line.split(',').map((part) => part?.trim() ?? '')
      return {
        state: stateRaw.toUpperCase(),
        license_number: numberRaw,
        expires_on: expiresRaw || null,
      }
    })
    .filter((row) => row.state.length > 0 && row.license_number.length > 0)
}

export async function createStaffOrProviderAccount(formData: FormData): Promise<CreateStaffAccountResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const actor = await getStaffProfile(supabase, user.id)
  const cap = await requireCapability(user, actor, 'can_manage_staff', {
    objectType: 'staff_account',
    workspace: 'admin',
    extraMetadata: { action: 'createStaffOrProviderAccount' },
  })
  if (!cap.ok) {
    return { ok: false, error: cap.error }
  }

  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const password = String(formData.get('password') ?? '').trim()
  const roleRaw = String(formData.get('role') ?? '').trim()
  const displayName = String(formData.get('displayName') ?? '').trim()
  const workEmailRaw = String(formData.get('workEmail') ?? '').trim().toLowerCase()
  const workEmail = workEmailRaw || email
  const phoneNumber = String(formData.get('phoneNumber') ?? '').trim() || null
  const firstName = String(formData.get('firstName') ?? '').trim() || null
  const lastName = String(formData.get('lastName') ?? '').trim() || null
  const credentials = String(formData.get('credentials') ?? '').trim() || null
  const specialty = String(formData.get('specialty') ?? '').trim() || null
  const boardCertifications = parseTextList(String(formData.get('boardCertifications') ?? ''))
  const yearsInPracticeRaw = String(formData.get('yearsInPractice') ?? '').trim()
  const yearsInPractice = yearsInPracticeRaw ? Number(yearsInPracticeRaw) : null
  const npiRaw = String(formData.get('npi') ?? '').trim()
  const npi = npiRaw ? npiRaw.replace(/\D/g, '').slice(0, 10) : null
  const deaNumber = String(formData.get('deaNumber') ?? '').trim() || null
  const stateLicenses = parseLicenses(String(formData.get('stateLicenses') ?? ''))
  const prescriptionLicenses = parseLicenses(String(formData.get('prescriptionLicenses') ?? ''))
  const serviceStateCodes = parseStateCodes(String(formData.get('serviceStateCodes') ?? ''))
  const timezone = String(formData.get('timezone') ?? 'America/New_York').trim() || 'America/New_York'

  if (!email || !password) return { ok: false, error: 'Email and password are required.' }
  if (!isStaffRole(roleRaw)) return { ok: false, error: 'Invalid role.' }
  if (!displayName) return { ok: false, error: 'Display name is required.' }
  if (password.length < 8) return { ok: false, error: 'Password must be at least 8 characters.' }
  if (yearsInPractice !== null && (!Number.isFinite(yearsInPractice) || yearsInPractice < 0 || yearsInPractice > 80)) {
    return { ok: false, error: 'Years in practice must be between 0 and 80.' }
  }
  if (roleRaw === 'prescriber' && (!npi || npi.length !== 10)) {
    return { ok: false, error: 'Prescriber accounts require a valid 10-digit NPI.' }
  }

  const admin = createAdminClient()
  const created = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })
  if (created.error || !created.data.user) {
    console.error('createStaffOrProviderAccount.auth', created.error)
    return { ok: false, error: created.error?.message ?? 'Could not create auth user.' }
  }

  const userId = created.data.user.id
  const insert = await admin.from('staff_profiles').insert({
    id: userId,
    role: roleRaw,
    display_name: displayName,
    work_email: workEmail,
    phone_number: phoneNumber,
    first_name: firstName,
    last_name: lastName,
    credentials,
    specialty,
    board_certifications: boardCertifications,
    years_in_practice: yearsInPractice,
    npi,
    dea_number: deaNumber,
    state_licenses: stateLicenses,
    prescription_licenses: prescriptionLicenses,
    timezone,
    service_state_codes: serviceStateCodes,
    availability: {},
  })
  if (insert.error) {
    console.error('createStaffOrProviderAccount.staff_profile', insert.error)
    await admin.auth.admin.deleteUser(userId)
    return { ok: false, error: insert.error.message }
  }

  revalidatePath('/internal/access')
  revalidatePath('/internal')
  revalidatePath('/internal/patients')
  return { ok: true, userId }
}

import { createAdminClient } from '@/lib/supabase/admin'

export type PatientPlanMembership = {
  status: 'active' | 'inactive' | 'grace' | 'payment_issue'
  included_categories: string[]
  payment_method_on_file: boolean | null
  next_billing_at: string | null
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function normalizeStatus(value: string | null): PatientPlanMembership['status'] {
  if (!value) return 'inactive'
  if (value === 'active') return 'active'
  if (value === 'grace') return 'grace'
  if (value === 'past_due' || value === 'payment_failed' || value === 'payment_issue') return 'payment_issue'
  return 'inactive'
}

export async function getPatientPlanMembership(
  patientId: string,
  fallbackIncludedCategories: string[]
): Promise<PatientPlanMembership> {
  const admin = createAdminClient()

  const { data, error } = await admin
    .from('patient_memberships')
    .select('status, included_categories, payment_method_on_file, next_billing_at, updated_at')
    .eq('patient_id', patientId)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    if (!isMissingRelationError(error)) {
      console.error('getPatientPlanMembership', error)
    }
    return {
      status: fallbackIncludedCategories.length > 0 ? 'active' : 'inactive',
      included_categories: fallbackIncludedCategories,
      payment_method_on_file: null,
      next_billing_at: null,
    }
  }

  const included =
    Array.isArray(data?.included_categories) && data?.included_categories
      ? data.included_categories.filter((item): item is string => typeof item === 'string')
      : fallbackIncludedCategories

  return {
    status: normalizeStatus(typeof data?.status === 'string' ? data.status : null),
    included_categories: included,
    payment_method_on_file: typeof data?.payment_method_on_file === 'boolean' ? data.payment_method_on_file : null,
    next_billing_at: typeof data?.next_billing_at === 'string' ? data.next_billing_at : null,
  }
}

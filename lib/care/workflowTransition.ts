import type { SupabaseClient } from '@supabase/supabase-js'

export function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

export async function isWorkflowTransitionAllowed(
  supabase: SupabaseClient,
  entityType: 'care_program' | 'treatment_item',
  fromStatus: string | null,
  toStatus: string
): Promise<boolean> {
  const { data, error } = await supabase
    .from('workflow_status_transitions')
    .select('id')
    .eq('entity_type', entityType)
    .eq('to_status', toStatus)
    .eq('from_status', fromStatus)
    .limit(1)
    .maybeSingle()

  if (error) {
    if (isMissingRelationError(error)) {
      console.warn('workflow_status_transitions table missing; transition guard skipped')
      return true
    }
    console.error('isWorkflowTransitionAllowed.exact', error)
  }
  if (data) return true

  const { data: wildcard, error: wildcardErr } = await supabase
    .from('workflow_status_transitions')
    .select('id')
    .eq('entity_type', entityType)
    .eq('to_status', toStatus)
    .is('from_status', null)
    .limit(1)
    .maybeSingle()

  if (wildcardErr) {
    if (isMissingRelationError(wildcardErr)) return true
    console.error('isWorkflowTransitionAllowed.wildcard', wildcardErr)
    return false
  }
  return !!wildcard
}

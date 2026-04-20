import type { SupabaseClient } from '@supabase/supabase-js'
import { syncLegacyGlp1ToCareModel } from '@/lib/care/syncLegacyGlp1ToCareModel'
import { onPatientWorkflowEvent } from '@/lib/workflows/onPatientWorkflowEvent'

export type DeriveContext = {
  supabase: SupabaseClient
  formKey: string
  patientId: string
  answers: Record<string, unknown>
}

/**
 * After a submission is stored, compute canonical workflow updates.
 * Keep protocol branching on the server — not in the client.
 */
export async function deriveCanonicalState(ctx: DeriveContext): Promise<void> {
  if (ctx.formKey === 'glp1-intake') {
    await syncLegacyGlp1ToCareModel(ctx.supabase, {
      patientId: ctx.patientId,
      legacyStatus: 'intake_submitted',
      source: 'system',
    })

    try {
      await onPatientWorkflowEvent({
        patientId: ctx.patientId,
        fromWorkflowStatus: null,
        toWorkflowStatus: 'intake_submitted',
        source: 'system',
      })
    } catch (err) {
      console.error('deriveCanonicalState: onPatientWorkflowEvent', err)
    }
    return
  }

  // Unknown form keys: submission is still stored; no default state transition.
}

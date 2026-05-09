import type { SupabaseClient } from '@supabase/supabase-js'
import { syncLegacyGlp1ToCareModel } from '@/lib/care/syncLegacyGlp1ToCareModel'
import { onPatientWorkflowEvent } from '@/lib/workflows/onPatientWorkflowEvent'
import { dispatchRuleTriggerEvent } from '@/lib/rules/runtime/dispatcher'

export type DeriveContext = {
  supabase: SupabaseClient
  formKey: string
  patientId: string
  answers: Record<string, unknown>
  /**
   * UUID of the form_submissions row inserted upstream. Required for
   * Phase 4H-templates-discipline commit 1: serves as the per-submission
   * idempotency anchor for the typed intake_submitted Rule firing.
   */
  formSubmissionId: string
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

    // Phase 4H-templates-discipline commit 1 — fire the typed Rule for
    // intake_submitted. Per ADR Section 7.6: rule execution is side-effect
    // bounded; the dispatcher only enqueues outbound_jobs + emits audit
    // events. The legacy onPatientWorkflowEvent call below STAYS because
    // it still enqueues chart.ai_review (a non-notification side effect).
    // The legacy `intake_submitted` notification case has been removed
    // from notificationRules.ts in this same commit; resolvePatientNotifications
    // returns [] for that workflow status, so onPatientWorkflowEvent
    // produces no email/SMS for intake_submitted anymore.
    try {
      await dispatchRuleTriggerEvent(
        {
          event_type: 'patient.intake_submitted',
          payload: {
            patient_id: ctx.patientId,
            form_submission_id: ctx.formSubmissionId,
            form_key: ctx.formKey,
          },
        },
        ctx.supabase,
      )
    } catch (err) {
      console.error('deriveCanonicalState: dispatchRuleTriggerEvent', err)
    }

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

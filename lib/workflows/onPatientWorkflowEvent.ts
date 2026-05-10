import { createAdminClient } from '@/lib/supabase/admin'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'
import type { PatientWorkflowEvent } from '@/lib/workflows/types'

/**
 * Workflow-event hook. Originally fanned out to (a) chart.ai_review
 * enqueue + (b) legacy notification rules + email/SMS payload
 * building. With Phase 4H-templates-discipline c9 (the FINAL legacy
 * notification migration), branch (b) is gone — every patient-
 * facing notification now flows through typed Rules at
 * `repo/rules/<sibling-domain>/` via the dispatcher at
 * `lib/rules/runtime/dispatcher.ts`.
 *
 * What remains: enqueueing `chart.ai_review` on workflow status
 * transitions. That's a non-notification side effect; the typed
 * rules engine doesn't own it. Until chart.ai_review itself is
 * modeled as a typed action (separate phase), this hook keeps
 * firing the enqueue.
 *
 * Function signature is unchanged so the four callers
 * ([`lib/protocol/derive.ts`](../protocol/derive.ts),
 * [`lib/payments/handleStripeCheckoutCompleted.ts`](../payments/handleStripeCheckoutCompleted.ts),
 * [`lib/refill/submitPatientRefillRequest.ts`](../refill/submitPatientRefillRequest.ts),
 * [`lib/internal/patient-case/impl.ts`](../internal/patient-case/impl.ts))
 * keep their call sites intact.
 *
 * Rename + further refactor (e.g., rename to
 * `enqueueChartReviewOnWorkflowEvent`, drop the now-unused
 * `paymentSummary` / `trackingNumber` / `trackingUrl` /
 * `stripeCheckoutSessionId` fields on `PatientWorkflowEvent`) is
 * cosmetic cleanup deferred to a follow-up PR.
 */
export async function onPatientWorkflowEvent(ev: PatientWorkflowEvent): Promise<void> {
  if (ev.fromWorkflowStatus === ev.toWorkflowStatus) return

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('onPatientWorkflowEvent: admin client', e)
    return
  }

  await enqueueChartAiReview(admin, {
    patientId: ev.patientId,
    triggerEventType: 'workflow_status_changed',
    triggerRef: `${ev.fromWorkflowStatus}->${ev.toWorkflowStatus}:${ev.source}`,
  })
}

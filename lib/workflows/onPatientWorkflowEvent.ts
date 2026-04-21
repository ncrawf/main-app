import { enqueueOutboundJob } from '@/lib/jobs/enqueueOutboundJob'
import { OUTBOUND_JOB_TYPES } from '@/lib/jobs/outboundJobTypes'
import { buildPatientPortalExchangeUrl } from '@/lib/patient-portal/exchangeUrl'
import { createAdminClient } from '@/lib/supabase/admin'
import { buildPatientEmail, buildPatientSmsPreview, type PatientMessageContext } from '@/lib/notifications/patientMessages'
import { resolvePatientNotifications } from '@/lib/workflows/notificationRules'
import type { PatientWorkflowEvent } from '@/lib/workflows/types'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'

/**
 * Central hook: after canonical workflow status is committed, enqueue outbound
 * notifications (Resend email, Twilio SMS when configured) with idempotent dedupe keys.
 * Actual sends run from `/api/cron/outbound-jobs` (durable retries).
 *
 * Call from: Stripe webhook handler, staff `applyCaseUpdates`, future cron/refill jobs.
 * Enqueue failures are logged; they do not roll back state (already persisted).
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

  const actions = resolvePatientNotifications(ev)
  if (actions.length === 0) return

  const { data: patient, error: pErr } = await admin
    .from('patients')
    .select('id, email, first_name, phone')
    .eq('id', ev.patientId)
    .maybeSingle()

  if (pErr || !patient?.email) {
    console.warn('onPatientWorkflowEvent: patient or email missing', ev.patientId, pErr)
    return
  }

  let patientPortalUrl: string | null = null
  try {
    patientPortalUrl = await buildPatientPortalExchangeUrl(ev.patientId, `/dashboard/${ev.patientId}`)
  } catch (e) {
    console.warn('onPatientWorkflowEvent: patient portal link omitted', e)
  }

  const ctx: PatientMessageContext = {
    patientId: ev.patientId,
    email: patient.email,
    firstName: patient.first_name,
    patientPortalUrl,
    paymentSummary: ev.paymentSummary ?? null,
    trackingNumber: ev.trackingNumber ?? null,
    trackingUrl: ev.trackingUrl ?? null,
  }

  for (const action of actions) {
    const { data: existing } = await admin
      .from('patient_notification_deliveries')
      .select('id')
      .eq('dedupe_key', action.dedupeKey)
      .eq('channel', action.channel)
      .maybeSingle()

    if (existing) continue

    try {
      if (action.channel === 'email') {
        const { subject, html, text } = buildPatientEmail(action.templateKey, ctx)
        await enqueueOutboundJob(admin, OUTBOUND_JOB_TYPES.emailTransactional, {
          patient_id: ev.patientId,
          dedupe_key: action.dedupeKey,
          template_key: action.templateKey,
          to: ctx.email,
          subject,
          html,
          text,
          insert_timeline_email_sent: true,
          workflow_source: ev.source,
        })
      }

      if (action.channel === 'sms') {
        const phone = patient.phone?.trim()
        if (!phone) {
          console.info('onPatientWorkflowEvent: sms skipped (no phone)', ev.patientId)
          continue
        }
        const body = buildPatientSmsPreview(action.templateKey, ctx)
        await enqueueOutboundJob(admin, OUTBOUND_JOB_TYPES.smsTransactional, {
          patient_id: ev.patientId,
          dedupe_key: action.dedupeKey,
          template_key: action.templateKey,
          to_e164: phone,
          body,
          workflow_source: ev.source,
        })
      }
    } catch (err) {
      console.error('onPatientWorkflowEvent: action', action, err)
    }
  }
}

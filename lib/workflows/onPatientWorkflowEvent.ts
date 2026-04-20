import { buildPatientPortalExchangeUrl } from '@/lib/patient-portal/exchangeUrl'
import { createAdminClient } from '@/lib/supabase/admin'
import { sendTransactionalEmail } from '@/lib/notifications/emailResend'
import { buildPatientEmail, buildPatientSmsPreview, type PatientMessageContext } from '@/lib/notifications/patientMessages'
import { sendPatientSms } from '@/lib/notifications/smsTwilio'
import { resolvePatientNotifications } from '@/lib/workflows/notificationRules'
import type { PatientWorkflowEvent } from '@/lib/workflows/types'

/**
 * Central hook: after canonical workflow status is committed, run outbound
 * notifications (Resend email, Twilio SMS when configured) with idempotent dedupe keys.
 *
 * Call from: Stripe webhook handler, staff `applyCaseUpdates`, future cron/refill jobs.
 * Failures are logged; they do not roll back state (already persisted).
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
        const sent = await sendTransactionalEmail({ to: ctx.email, subject, html, text })
        if (!sent.ok) {
          if ('skipped' in sent && sent.skipped) {
            console.info('onPatientWorkflowEvent: email skipped', action.templateKey, sent.error)
          } else {
            console.error('onPatientWorkflowEvent: email failed', action.templateKey, sent.error)
          }
          continue
        }

        const { error: insErr } = await admin.from('patient_notification_deliveries').insert({
          patient_id: ev.patientId,
          channel: 'email',
          dedupe_key: action.dedupeKey,
          template_key: action.templateKey,
          provider_message_id: sent.id,
        })
        if (insErr) {
          console.error('onPatientWorkflowEvent: delivery insert', insErr)
          continue
        }

        const { error: tErr } = await admin.from('patient_timeline_events').insert({
          patient_id: ev.patientId,
          event_type: 'email_sent',
          body: `${action.templateKey} → ${ctx.email}`,
          actor_user_id: null,
          payload: {
            template_key: action.templateKey,
            dedupe_key: action.dedupeKey,
            provider_message_id: sent.id,
            workflow_source: ev.source,
          },
        })
        if (tErr) console.error('onPatientWorkflowEvent: timeline email_sent', tErr)
      }

      if (action.channel === 'sms') {
        const phone = patient.phone?.trim()
        if (!phone) {
          console.info('onPatientWorkflowEvent: sms skipped (no phone)', ev.patientId)
          continue
        }
        const body = buildPatientSmsPreview(action.templateKey, ctx)
        const sms = await sendPatientSms({ toE164: phone, body })
        if (!sms.ok) {
          if ('skipped' in sms && sms.skipped) {
            console.info('onPatientWorkflowEvent: sms skipped', action.templateKey, sms.error)
          } else {
            console.error('onPatientWorkflowEvent: sms failed', action.templateKey, sms.error)
          }
          continue
        }

        const { error: insErr } = await admin.from('patient_notification_deliveries').insert({
          patient_id: ev.patientId,
          channel: 'sms',
          dedupe_key: action.dedupeKey,
          template_key: action.templateKey,
          provider_message_id: sms.messageSid,
        })
        if (insErr) {
          console.error('onPatientWorkflowEvent: sms delivery insert', insErr)
          continue
        }

        const { error: tErr } = await admin.from('patient_timeline_events').insert({
          patient_id: ev.patientId,
          event_type: 'sms_sent',
          body: action.templateKey,
          actor_user_id: null,
          payload: {
            template_key: action.templateKey,
            dedupe_key: action.dedupeKey,
            provider_message_id: sms.messageSid,
            workflow_source: ev.source,
          },
        })
        if (tErr) console.error('onPatientWorkflowEvent: timeline sms_sent', tErr)
      }
    } catch (err) {
      console.error('onPatientWorkflowEvent: action', action, err)
    }
  }
}

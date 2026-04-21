import type { SupabaseClient } from '@supabase/supabase-js'
import { OUTBOUND_JOB_TYPES, type EmailTransactionalPayload, type SmsTransactionalPayload } from '@/lib/jobs/outboundJobTypes'
import { sendTransactionalEmail } from '@/lib/notifications/emailResend'
import { sendPatientSms } from '@/lib/notifications/smsTwilio'
import { processChartAiReviewJob } from '@/lib/ai/processChartAiReviewJob'

export type DispatchOutcome = 'completed' | 'retry' | 'dead'

function asRecord(v: unknown): Record<string, unknown> {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {}
}

function parseEmailPayload(raw: unknown): EmailTransactionalPayload | null {
  const p = asRecord(raw)
  const patient_id = typeof p.patient_id === 'string' ? p.patient_id : null
  const dedupe_key = typeof p.dedupe_key === 'string' ? p.dedupe_key : null
  const template_key = typeof p.template_key === 'string' ? p.template_key : null
  const to = typeof p.to === 'string' ? p.to : null
  const subject = typeof p.subject === 'string' ? p.subject : null
  const html = typeof p.html === 'string' ? p.html : null
  const text = typeof p.text === 'string' ? p.text : null
  if (!patient_id || !dedupe_key || !template_key || !to || !subject || !html || !text) return null
  return {
    patient_id,
    dedupe_key,
    template_key,
    to,
    subject,
    html,
    text,
    insert_timeline_email_sent: p.insert_timeline_email_sent === true,
    workflow_source: typeof p.workflow_source === 'string' ? p.workflow_source : null,
  }
}

function parseSmsPayload(raw: unknown): SmsTransactionalPayload | null {
  const p = asRecord(raw)
  const patient_id = typeof p.patient_id === 'string' ? p.patient_id : null
  const dedupe_key = typeof p.dedupe_key === 'string' ? p.dedupe_key : null
  const template_key = typeof p.template_key === 'string' ? p.template_key : null
  const to_e164 = typeof p.to_e164 === 'string' ? p.to_e164 : null
  const body = typeof p.body === 'string' ? p.body : null
  if (!patient_id || !dedupe_key || !template_key || !to_e164 || !body) return null
  return {
    patient_id,
    dedupe_key,
    template_key,
    to_e164,
    body,
    workflow_source: typeof p.workflow_source === 'string' ? p.workflow_source : null,
  }
}

export async function dispatchOutboundJob(
  admin: SupabaseClient,
  jobType: string,
  payload: unknown
): Promise<{ outcome: DispatchOutcome; detail?: string }> {
  if (jobType === OUTBOUND_JOB_TYPES.emailTransactional) {
    const p = parseEmailPayload(payload)
    if (!p) return { outcome: 'dead', detail: 'invalid email.transactional payload' }

    const { data: existing } = await admin
      .from('patient_notification_deliveries')
      .select('id')
      .eq('dedupe_key', p.dedupe_key)
      .eq('channel', 'email')
      .maybeSingle()
    if (existing) return { outcome: 'completed', detail: 'already delivered' }

    const sent = await sendTransactionalEmail({
      to: p.to,
      subject: p.subject,
      html: p.html,
      text: p.text,
    })
    if (!sent.ok) {
      if ('skipped' in sent && sent.skipped) {
        return { outcome: 'completed', detail: sent.error }
      }
      return { outcome: 'retry', detail: sent.error }
    }

    const { error: insErr } = await admin.from('patient_notification_deliveries').insert({
      patient_id: p.patient_id,
      channel: 'email',
      dedupe_key: p.dedupe_key,
      template_key: p.template_key,
      provider_message_id: sent.id,
    })
    if (insErr) {
      if (String(insErr.message ?? '').toLowerCase().includes('duplicate') || insErr.code === '23505') {
        return { outcome: 'completed', detail: 'delivery race duplicate' }
      }
      return { outcome: 'retry', detail: insErr.message }
    }

    if (p.insert_timeline_email_sent) {
      const { error: tErr } = await admin.from('patient_timeline_events').insert({
        patient_id: p.patient_id,
        event_type: 'email_sent',
        body: `${p.template_key} → ${p.to}`,
        actor_user_id: null,
        payload: {
          template_key: p.template_key,
          dedupe_key: p.dedupe_key,
          provider_message_id: sent.id,
          workflow_source: p.workflow_source ?? null,
        },
      })
      if (tErr) console.error('dispatchOutboundJob: timeline email_sent', tErr)
    }

    return { outcome: 'completed' }
  }

  if (jobType === OUTBOUND_JOB_TYPES.smsTransactional) {
    const p = parseSmsPayload(payload)
    if (!p) return { outcome: 'dead', detail: 'invalid sms.transactional payload' }

    const { data: existing } = await admin
      .from('patient_notification_deliveries')
      .select('id')
      .eq('dedupe_key', p.dedupe_key)
      .eq('channel', 'sms')
      .maybeSingle()
    if (existing) return { outcome: 'completed', detail: 'already delivered' }

    const sms = await sendPatientSms({ toE164: p.to_e164, body: p.body })
    if (!sms.ok) {
      if ('skipped' in sms && sms.skipped) {
        return { outcome: 'completed', detail: sms.error }
      }
      return { outcome: 'retry', detail: sms.error }
    }

    const { error: insErr } = await admin.from('patient_notification_deliveries').insert({
      patient_id: p.patient_id,
      channel: 'sms',
      dedupe_key: p.dedupe_key,
      template_key: p.template_key,
      provider_message_id: sms.messageSid,
    })
    if (insErr) {
      if (String(insErr.message ?? '').toLowerCase().includes('duplicate') || insErr.code === '23505') {
        return { outcome: 'completed', detail: 'delivery race duplicate' }
      }
      return { outcome: 'retry', detail: insErr.message }
    }

    const { error: tErr } = await admin.from('patient_timeline_events').insert({
      patient_id: p.patient_id,
      event_type: 'sms_sent',
      body: p.template_key,
      actor_user_id: null,
      payload: {
        template_key: p.template_key,
        dedupe_key: p.dedupe_key,
        provider_message_id: sms.messageSid,
        workflow_source: p.workflow_source ?? null,
      },
    })
    if (tErr) console.error('dispatchOutboundJob: timeline sms_sent', tErr)

    return { outcome: 'completed' }
  }

  if (jobType === OUTBOUND_JOB_TYPES.chartAiReview) {
    const result = await processChartAiReviewJob(admin, payload)
    if (result.ok) return { outcome: 'completed' }
    return {
      outcome: result.retryable ? 'retry' : 'dead',
      detail: result.error,
    }
  }

  return { outcome: 'dead', detail: `unknown job_type: ${jobType}` }
}

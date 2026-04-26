export type SendSmsResult =
  | { ok: true; messageSid: string }
  | { ok: false; error: string; skipped?: boolean }

/**
 * Twilio outbound SMS — placeholder until `TWILIO_*` env vars are set and numbers are verified.
 * When wired: use `twilio` SDK, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER`, patient `phone` E.164.
 */
export async function sendPatientSms(params: {
  toE164: string
  body: string
}): Promise<SendSmsResult> {
  void params
  const sid = process.env.TWILIO_ACCOUNT_SID?.trim()
  const token = process.env.TWILIO_AUTH_TOKEN?.trim()
  const from = process.env.TWILIO_FROM_NUMBER?.trim()

  if (!sid || !token || !from) {
    return { ok: false, error: 'Twilio not configured', skipped: true }
  }

  // Deliberately not importing `twilio` until you add the dependency and A2P / consent flows.
  return {
    ok: false,
    error:
      'Twilio env present but SDK not wired yet — add `twilio` package and implement sendPatientSms in lib/notifications/smsTwilio.ts',
  }
}

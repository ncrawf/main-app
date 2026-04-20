/** Display-only masking for patient-facing screens (not security boundaries). */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  if (!domain || local === undefined) return '••••••••'
  if (local.length <= 2) return `••@${domain}`
  return `${local[0]}•••${local[local.length - 1]}@${domain}`
}

export function maskPhoneE164(e164: string | null | undefined): string {
  if (!e164) return '—'
  const digits = e164.replace(/\D/g, '')
  const last4 = digits.slice(-4)
  if (last4.length < 4) return '(•••) •••-••••'
  return `(•••) •••-${last4}`
}

const DEV_FALLBACK = 'dev-only-patient-portal-secret-min-32-chars!'

/**
 * HS256 key for patient portal JWTs. Set `PATIENT_PORTAL_SECRET` (32+ chars) in production.
 * If unset in development only, a fixed dev fallback is used (never use that in production).
 */
export function getPatientPortalSecretKey(): Uint8Array {
  const raw = process.env.PATIENT_PORTAL_SECRET?.trim()
  if (!raw) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('PATIENT_PORTAL_SECRET is required in production')
    }
    console.warn('[patient-portal] PATIENT_PORTAL_SECRET missing; using insecure dev fallback')
    return new TextEncoder().encode(DEV_FALLBACK)
  }
  if (raw.length < 32) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('PATIENT_PORTAL_SECRET must be at least 32 characters in production')
    }
    console.warn('[patient-portal] PATIENT_PORTAL_SECRET is short; using dev fallback key material')
    return new TextEncoder().encode(DEV_FALLBACK)
  }
  return new TextEncoder().encode(raw)
}

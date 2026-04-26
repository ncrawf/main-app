/**
 * Local development only: allow patient dashboard routes without a portal session cookie.
 * Production and preview builds keep the gate strict (NODE_ENV !== 'development').
 */
export function isPatientPortalGateRelaxed(): boolean {
  return process.env.NODE_ENV === 'development'
}

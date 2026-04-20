import { signPatientPortalBootstrapToken } from '@/lib/patient-portal/tokens'

function appOrigin(): string {
  const u = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (u) return u.replace(/\/$/, '')
  if (process.env.VERCEL_URL?.trim()) return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  return 'http://localhost:3000'
}

/**
 * One-hop URL: verifies bootstrap JWT, sets httpOnly session cookie, redirects to `next` (safe path).
 */
export async function buildPatientPortalExchangeUrl(patientId: string, nextPath?: string): Promise<string> {
  const token = await signPatientPortalBootstrapToken(patientId)
  const url = new URL('/api/patient-portal/session', appOrigin())
  url.searchParams.set('token', token)
  if (nextPath?.trim()) {
    url.searchParams.set('next', nextPath.trim())
  }
  return url.toString()
}

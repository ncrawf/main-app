import { createHash } from 'crypto'

const SALT = 'main_admin_session_v1'

/** Use HTTPS for Secure cookies (Vercel, prod TLS). Local http:// never uses Secure so login works with `next start`. */
export function adminCookieSecure(request: Request): boolean {
  const forwarded = request.headers.get('x-forwarded-proto')
  if (forwarded === 'https') return true
  if (forwarded === 'http') return false
  try {
    return new URL(request.url).protocol === 'https:'
  } catch {
    return process.env.NODE_ENV === 'production'
  }
}

export function adminSessionToken(secret: string): string {
  return createHash('sha256').update(`${SALT}:${secret}`).digest('hex')
}

export function verifyAdminSession(cookieValue: string | undefined, secret: string | undefined): boolean {
  if (!secret || !cookieValue) return false
  return cookieValue === adminSessionToken(secret)
}

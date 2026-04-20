import { createHash } from 'crypto'

const SALT = 'main_admin_session_v1'

export function adminSessionToken(secret: string): string {
  return createHash('sha256').update(`${SALT}:${secret}`).digest('hex')
}

export function verifyAdminSession(cookieValue: string | undefined, secret: string | undefined): boolean {
  if (!secret || !cookieValue) return false
  return cookieValue === adminSessionToken(secret)
}

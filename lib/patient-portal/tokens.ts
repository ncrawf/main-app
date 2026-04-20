import { SignJWT, jwtVerify } from 'jose'
import {
  PATIENT_PORTAL_AUD_BOOTSTRAP,
  PATIENT_PORTAL_AUD_SESSION,
} from '@/lib/patient-portal/constants'
import { getPatientPortalSecretKey } from '@/lib/patient-portal/secret'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function bootstrapTtl(): string {
  return process.env.PATIENT_PORTAL_BOOTSTRAP_TTL?.trim() || '24h'
}

function sessionTtl(): string {
  return process.env.PATIENT_PORTAL_SESSION_TTL?.trim() || '30d'
}

function sessionMaxAgeSeconds(): number {
  const raw = process.env.PATIENT_PORTAL_SESSION_MAX_AGE_SEC?.trim()
  if (raw && /^\d+$/.test(raw)) return Math.max(60, parseInt(raw, 10))
  return 60 * 60 * 24 * 30
}

export function getPatientPortalSessionMaxAgeSeconds(): number {
  return sessionMaxAgeSeconds()
}

export async function signPatientPortalBootstrapToken(patientId: string): Promise<string> {
  if (!UUID_RE.test(patientId)) throw new Error('Invalid patient id')
  const key = getPatientPortalSecretKey()
  return new SignJWT({ pid: patientId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setAudience(PATIENT_PORTAL_AUD_BOOTSTRAP)
    .setExpirationTime(bootstrapTtl())
    .sign(key)
}

export async function signPatientPortalSessionToken(patientId: string): Promise<string> {
  if (!UUID_RE.test(patientId)) throw new Error('Invalid patient id')
  const key = getPatientPortalSecretKey()
  return new SignJWT({ pid: patientId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setAudience(PATIENT_PORTAL_AUD_SESSION)
    .setExpirationTime(sessionTtl())
    .sign(key)
}

export async function verifyPatientPortalBootstrapToken(token: string): Promise<string | null> {
  try {
    const key = getPatientPortalSecretKey()
    const { payload } = await jwtVerify(token, key, { audience: PATIENT_PORTAL_AUD_BOOTSTRAP })
    const pid = payload.pid
    if (typeof pid !== 'string' || !UUID_RE.test(pid)) return null
    return pid
  } catch {
    return null
  }
}

export async function verifyPatientPortalSessionToken(token: string): Promise<string | null> {
  try {
    const key = getPatientPortalSecretKey()
    const { payload } = await jwtVerify(token, key, { audience: PATIENT_PORTAL_AUD_SESSION })
    const pid = payload.pid
    if (typeof pid !== 'string' || !UUID_RE.test(pid)) return null
    return pid
  } catch {
    return null
  }
}

export async function verifySessionCookieForPatientId(
  cookieValue: string | undefined,
  patientId: string
): Promise<boolean> {
  try {
    if (!cookieValue?.trim() || !UUID_RE.test(patientId)) return false
    const pid = await verifyPatientPortalSessionToken(cookieValue.trim())
    return pid === patientId
  } catch {
    return false
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { PATIENT_PORTAL_COOKIE_NAME } from '@/lib/patient-portal/constants'
import { resolvePatientPortalNextUrl } from '@/lib/patient-portal/safeNext'
import {
  getPatientPortalSessionMaxAgeSeconds,
  signPatientPortalSessionToken,
  verifyPatientPortalBootstrapToken,
} from '@/lib/patient-portal/tokens'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')?.trim()
  if (!token) {
    return NextResponse.json({ error: 'Missing token' }, { status: 400 })
  }

  let patientId: string | null
  try {
    patientId = await verifyPatientPortalBootstrapToken(token)
  } catch (e) {
    console.error('patient-portal session exchange', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  if (!patientId) {
    return NextResponse.json({ error: 'Invalid or expired link' }, { status: 401 })
  }

  let sessionJwt: string
  try {
    sessionJwt = await signPatientPortalSessionToken(patientId)
  } catch (e) {
    console.error('patient-portal session sign', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const origin = request.nextUrl.origin
  const next = resolvePatientPortalNextUrl(origin, patientId, request.nextUrl.searchParams.get('next'))
  const res = NextResponse.redirect(new URL(next, origin))

  const maxAge = getPatientPortalSessionMaxAgeSeconds()
  res.cookies.set(PATIENT_PORTAL_COOKIE_NAME, sessionJwt, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge,
  })

  return res
}

export async function DELETE(request: NextRequest) {
  const dest = request.nextUrl.searchParams.get('redirect')?.trim() || '/dashboard'
  const origin = request.nextUrl.origin
  let target: URL
  try {
    target = new URL(dest.startsWith('/') ? dest : `/${dest}`, origin)
    if (target.origin !== new URL(origin).origin) {
      target = new URL('/dashboard', origin)
    }
  } catch {
    target = new URL('/dashboard', origin)
  }

  const res = NextResponse.redirect(target)
  res.cookies.set(PATIENT_PORTAL_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return res
}

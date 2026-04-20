import { NextResponse } from 'next/server'
import { adminSessionToken } from '@/lib/admin/auth'

export async function POST(request: Request) {
  const secret = process.env.ADMIN_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Admin not configured (ADMIN_SECRET)' }, { status: 503 })
  }

  let body: { password?: string }
  try {
    body = (await request.json()) as { password?: string }
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (body.password !== secret) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = adminSessionToken(secret)
  const res = NextResponse.json({ ok: true })
  res.cookies.set('main_admin', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}

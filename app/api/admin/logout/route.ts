import { NextResponse } from 'next/server'
import { adminCookieSecure } from '@/lib/admin/auth'

export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const res = NextResponse.redirect(`${origin}/admin/login`)
  res.cookies.set('main_admin', '', {
    httpOnly: true,
    secure: adminCookieSecure(request),
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return res
}

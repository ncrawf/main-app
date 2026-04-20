import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  const res = NextResponse.redirect(`${origin}/admin/login`)
  res.cookies.set('main_admin', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return res
}

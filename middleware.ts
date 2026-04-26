import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'
import { PATIENT_PORTAL_COOKIE_NAME } from '@/lib/patient-portal/constants'
import { isPatientPortalGateRelaxed } from '@/lib/patient-portal/isPatientPortalGateRelaxed'
import { verifySessionCookieForPatientId } from '@/lib/patient-portal/tokens'
import { updateSession } from '@/lib/supabase/session'

/** First path segment after `/dashboard/` must be the patient UUID; subpaths use the same portal gate. */
const DASHBOARD_PATIENT_RE =
  /^\/dashboard\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:\/|$)/i

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)
  const pathname = request.nextUrl.pathname

  const match = pathname.match(DASHBOARD_PATIENT_RE)
  if (match && !isPatientPortalGateRelaxed()) {
    const patientId = match[1]

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options)
            })
          },
        },
      }
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { data: staff } = await supabase.from('staff_profiles').select('id').eq('id', user.id).maybeSingle()
      if (staff) {
        return response
      }
    }

    const portal = request.cookies.get(PATIENT_PORTAL_COOKIE_NAME)?.value
    const ok = await verifySessionCookieForPatientId(portal, patientId)
    if (!ok) {
      const dest = new URL('/dashboard', request.url)
      dest.searchParams.set('session', 'required')
      const redirect = NextResponse.redirect(dest)
      for (const c of response.cookies.getAll()) {
        redirect.cookies.set(c.name, c.value, c)
      }
      return redirect
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

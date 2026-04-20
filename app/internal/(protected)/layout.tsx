import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { signOutStaff } from './actions'

export default async function InternalProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/internal/login')
  }

  const profile = await getStaffProfile(supabase, user.id)

  if (!profile) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <h1 className="text-lg font-semibold text-neutral-900">No staff profile</h1>
        <p className="mt-3 text-sm text-neutral-600">
          You’re signed in as <span className="font-mono text-xs">{user.email}</span>, but there is no{' '}
          <code className="rounded bg-neutral-100 px-1">staff_profiles</code> row for your user id. Add one in Supabase
          SQL (see <code className="text-xs">docs/internal-rbac.md</code>) so RLS allows access.
        </p>
        <form action={signOutStaff} className="mt-8">
          <button type="submit" className="text-sm font-medium text-neutral-900 underline">
            Sign out
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3">
          <div className="text-sm text-neutral-700">
            <span className="font-medium text-neutral-900">{profile.display_name ?? user.email}</span>
            <span className="ml-2 rounded-full bg-neutral-200/80 px-2 py-0.5 text-xs font-medium text-neutral-800">
              {profile.role.replace(/_/g, ' ')}
            </span>
            {profile.service_state_codes?.length ? (
              <span className="ml-2 text-xs text-neutral-500">
                States: {profile.service_state_codes.join(', ')}
              </span>
            ) : null}
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <Link href="/internal" className="text-neutral-600 hover:text-neutral-900">
              Overview
            </Link>
            <Link href="/internal/patients" className="text-neutral-600 hover:text-neutral-900">
              Patients
            </Link>
            <Link href="/internal/search" className="text-neutral-600 hover:text-neutral-900">
              Search config
            </Link>
            <Link href="/internal/access" className="text-neutral-600 hover:text-neutral-900">
              Access
            </Link>
            <form action={signOutStaff}>
              <button type="submit" className="text-neutral-600 hover:text-neutral-900">
                Sign out
              </button>
            </form>
          </nav>
        </div>
      </div>
      {children}
    </div>
  )
}

import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'

export const dynamic = 'force-dynamic'

export default async function InternalHomePage() {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const profile = user ? await getStaffProfile(supabase, user.id) : null

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Internal overview</h1>
      <p className="mt-2 text-neutral-600">
        Signed in with <strong>identity</strong> (Supabase Auth), <strong>authorization</strong> (role on{' '}
        <code className="text-xs">staff_profiles</code>), and <strong>audit</strong> (<code className="text-xs">audit_events</code>).
        Patient list uses your session + RLS — not the service role.
      </p>

      {profile ? (
        <dl className="mt-8 space-y-2 rounded-xl border border-neutral-200 bg-white p-6 text-sm">
          <div className="flex gap-2">
            <dt className="w-40 shrink-0 text-neutral-500">Role</dt>
            <dd className="font-medium">{profile.role}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-40 shrink-0 text-neutral-500">Timezone</dt>
            <dd>{profile.timezone}</dd>
          </div>
          {profile.role === 'prescriber' ? (
            <>
              <div className="flex gap-2">
                <dt className="w-40 shrink-0 text-neutral-500">Credentials</dt>
                <dd>{profile.credentials ?? '—'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-40 shrink-0 text-neutral-500">Specialty</dt>
                <dd>{profile.specialty ?? '—'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-40 shrink-0 text-neutral-500">NPI</dt>
                <dd className="font-mono text-xs">{profile.npi ?? '—'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-40 shrink-0 text-neutral-500">DEA</dt>
                <dd className="font-mono text-xs">{profile.dea_number ?? '—'}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-40 shrink-0 text-neutral-500">Years in practice</dt>
                <dd>{profile.years_in_practice ?? '—'}</dd>
              </div>
            </>
          ) : null}
          <div className="flex gap-2">
            <dt className="w-40 shrink-0 text-neutral-500">Coverage (states)</dt>
            <dd>{profile.service_state_codes?.length ? profile.service_state_codes.join(', ') : '— (set for routing)'}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-40 shrink-0 align-top text-neutral-500">Availability JSON</dt>
            <dd className="font-mono text-xs text-neutral-700">
              {JSON.stringify(profile.availability || {})}
            </dd>
          </div>
        </dl>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/internal/patients"
          className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Patient queue
        </Link>
        <Link
          href="/internal/queues"
          className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
        >
          Operational queues
        </Link>
        <Link
          href="/internal/rx-presets"
          className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
        >
          Rx presets
        </Link>
        <Link
          href="/internal/search"
          className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
        >
          Search config
        </Link>
        <Link
          href="/internal/access"
          className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
        >
          Access management
        </Link>
        <Link
          href="/admin"
          className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
        >
          Legacy admin
        </Link>
      </div>
    </div>
  )
}

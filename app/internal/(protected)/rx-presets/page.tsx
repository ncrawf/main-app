import Link from 'next/link'
import { listOrgRxPresets } from '@/lib/care/orgRxPresets'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export default async function InternalRxPresetsPage() {
  const supabase = await createSupabaseServerClient()
  const presets = await listOrgRxPresets(supabase)

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        <Link href="/internal" className="text-neutral-600 hover:text-neutral-900 hover:underline">
          Internal
        </Link>
        <span className="mx-2 text-neutral-400">/</span>
        Rx presets
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">Org Rx presets</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Shared templates for common medications—seed rows in SQL or extend this page with create/edit forms. Apply
        from catalog and visit flows in a follow-up.
      </p>

      {presets.length === 0 ? (
        <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          No presets yet. After migration <code className="rounded bg-white/80 px-1">20260427140000_org_rx_presets</code>{' '}
          is applied, insert rows into <code className="rounded bg-white/80 px-1">org_rx_presets</code> (slug, label,
          treatment_key, dosage json).
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
          {presets.map((p) => (
            <li key={p.id} className="px-4 py-3 text-sm">
              <p className="font-medium text-neutral-900">{p.label}</p>
              <p className="mt-1 text-xs text-neutral-600">
                <span className="font-mono">{p.slug}</span> · key <span className="font-mono">{p.treatment_key}</span>
              </p>
              <pre className="mt-2 max-h-32 overflow-auto rounded bg-neutral-50 p-2 text-[11px] text-neutral-800">
                {JSON.stringify(p.dosage, null, 2)}
              </pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

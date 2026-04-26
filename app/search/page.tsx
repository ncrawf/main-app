import Link from 'next/link'
import { findSiteSearchResults } from '@/lib/search/siteSearch'
import { loadSiteSearchEntries } from '@/lib/search/loadSiteSearchEntries'

export const dynamic = 'force-dynamic'

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolved = (await searchParams) ?? {}
  const qRaw = resolved.q
  const query = (Array.isArray(qRaw) ? qRaw[0] : qRaw ?? '').trim()
  const entries = await loadSiteSearchEntries()

  const results = query ? findSiteSearchResults(query, entries) : []

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="text-xl font-semibold text-neutral-900">Search</h1>
      <form action="/search" method="get" className="mt-3 flex items-center gap-2">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Try: sermorelin, semaglutide, tadalafil..."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white"
        >
          Search
        </button>
      </form>

      {!query ? (
        <p className="mt-4 text-sm text-neutral-600">Search for a treatment, program, or intake option.</p>
      ) : results.length === 0 ? (
        <div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4">
          <p className="text-sm text-neutral-700">
            No exact match for <span className="font-medium">&quot;{query}&quot;</span>.
          </p>
          <p className="mt-1 text-xs text-neutral-500">Try terms like sermorelin, weight loss, GLP1, or ED.</p>
        </div>
      ) : (
        <ul className="mt-5 space-y-3">
          {results.map((result) => (
            <li key={result.id} className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
              <Link href={result.href} className="text-sm font-semibold text-neutral-900 underline-offset-2 hover:underline">
                {result.title}
              </Link>
              <p className="mt-1 text-xs text-neutral-600">{result.description}</p>
              <div className="mt-3">
                <Link
                  href={result.href}
                  className="inline-flex items-center rounded-md border border-neutral-900 bg-neutral-900 px-2.5 py-1.5 text-[11px] font-semibold text-white"
                >
                  {result.actionLabel}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

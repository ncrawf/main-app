'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getTopSiteSearches } from '@/lib/search/siteSearch'

const HIDDEN_PREFIXES = ['/internal', '/admin', '/api']
const TOP_SEARCHES = getTopSiteSearches()

export function SiteTopSearchBar() {
  const pathname = usePathname()
  const [topSearches, setTopSearches] = useState(TOP_SEARCHES)
  const shouldHide = HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  if (shouldHide) return null

  useEffect(() => {
    let active = true
    async function loadTopSearches() {
      try {
        const res = await fetch('/api/site-search/top', { cache: 'no-store' })
        if (!res.ok) return
        const body = (await res.json()) as { top?: Array<{ label: string; query: string }> }
        if (!active || !Array.isArray(body.top) || body.top.length === 0) return
        setTopSearches(body.top)
      } catch {
        // Keep fallback chips.
      }
    }
    loadTopSearches()
    return () => {
      active = false
    }
  }, [])

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm font-semibold text-neutral-900">
            MAIN
          </Link>
          <form action="/search" method="get" className="flex flex-1 items-center gap-2">
            <input
              type="search"
              name="q"
              placeholder="Search treatments or care options..."
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white"
            >
              Search
            </button>
          </form>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">Top searches</span>
          {topSearches.map((item) => (
            <Link
              key={item.query}
              href={`/search?q=${encodeURIComponent(item.query)}`}
              className="rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

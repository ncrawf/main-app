'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getTopSiteSearches } from '@/lib/search/siteSearch'

const TOP_SEARCHES = getTopSiteSearches()

type Variant = 'inline' | 'stacked'

type Props = {
  variant?: Variant
  className?: string
}

/**
 * Public marketing search field + top-search chips (shared by site header and logged-in menu drawer).
 */
export function PublicSiteSearchBlock({ variant = 'inline', className = '' }: Props) {
  const [topSearches, setTopSearches] = useState(TOP_SEARCHES)

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

  const inputClass =
    variant === 'inline'
      ? 'w-full min-w-0 flex-1 rounded-md border border-neutral-300 px-3 py-2 text-sm'
      : 'w-full rounded-md border border-neutral-300 px-3 py-2 text-sm'

  const formClass =
    variant === 'inline' ? 'flex w-full min-w-0 flex-1 items-center gap-2' : 'flex w-full flex-col gap-2'

  return (
    <div className={`min-w-0 ${variant === 'inline' ? 'flex-1' : ''} ${className}`.trim()}>
      <form action="/search" method="get" className={formClass}>
        <input
          type="search"
          name="q"
          placeholder="Search treatments or care options..."
          className={inputClass}
        />
        <button
          type="submit"
          className={`shrink-0 rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white ${
            variant === 'stacked' ? 'w-full' : ''
          }`}
        >
          Search
        </button>
      </form>
      <div className={`flex flex-wrap items-center gap-2 ${variant === 'inline' ? 'mt-2' : 'mt-3'}`}>
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
  )
}

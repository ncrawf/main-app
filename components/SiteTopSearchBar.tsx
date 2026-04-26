'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PublicSiteSearchBlock } from '@/components/PublicSiteSearchBlock'

const HIDDEN_PREFIXES = ['/internal', '/admin', '/api', '/dashboard']

export function SiteTopSearchBar() {
  const pathname = usePathname() ?? ''
  const shouldHide = HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  if (shouldHide) return null

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="shrink-0 text-sm font-semibold text-neutral-900">
            MAIN
          </Link>
          <PublicSiteSearchBlock variant="inline" />
        </div>
      </div>
    </header>
  )
}

import { NextResponse } from 'next/server'
import { getTopSiteSearches } from '@/lib/search/siteSearch'
import { loadSiteSearchEntries } from '@/lib/search/loadSiteSearchEntries'

export const dynamic = 'force-dynamic'

export async function GET() {
  const entries = await loadSiteSearchEntries()
  const top = getTopSiteSearches(entries)
  return NextResponse.json({ top })
}

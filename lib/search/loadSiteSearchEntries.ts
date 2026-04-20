import { createAdminClient } from '@/lib/supabase/admin'
import { DEFAULT_SITE_SEARCH_ENTRIES, type SiteSearchEntry } from '@/lib/search/siteSearch'

type SearchEntryRow = {
  id: string
  title: string
  href: string
  description: string
  terms: unknown
  action_label: string
  top_search_label: string | null
  top_search_query: string | null
  top_search_rank: number | null
  is_active: boolean
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is string => typeof item === 'string').map((item) => item.trim()).filter(Boolean)
}

function mapRowToEntry(row: SearchEntryRow): SiteSearchEntry {
  const terms = asStringArray(row.terms)
  return {
    id: row.id,
    title: row.title,
    href: row.href,
    description: row.description,
    terms,
    actionLabel: row.action_label,
    ...(row.top_search_label && row.top_search_query
      ? {
          topSearch: {
            label: row.top_search_label,
            query: row.top_search_query,
            rank: row.top_search_rank ?? 999,
          },
        }
      : {}),
  }
}

export async function loadSiteSearchEntries(): Promise<SiteSearchEntry[]> {
  const admin = createAdminClient()
  const { data, error } = await admin
    .from('site_search_entries')
    .select(
      'id, title, href, description, terms, action_label, top_search_label, top_search_query, top_search_rank, is_active'
    )
    .eq('is_active', true)
    .order('top_search_rank', { ascending: true, nullsFirst: false })
    .order('title', { ascending: true })

  if (error) {
    console.error('loadSiteSearchEntries', error)
    return DEFAULT_SITE_SEARCH_ENTRIES
  }
  const rows = ((data ?? []) as SearchEntryRow[]).filter((row) => row.is_active)
  if (rows.length === 0) {
    return DEFAULT_SITE_SEARCH_ENTRIES
  }
  return rows.map(mapRowToEntry)
}

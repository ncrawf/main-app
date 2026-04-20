import { createSupabaseServerClient } from '@/lib/supabase/server'
import { SearchConfigForms } from './SearchConfigForms'

export const dynamic = 'force-dynamic'

type EntryRow = {
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

function asTerms(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is string => typeof item === 'string')
}

export default async function InternalSearchConfigPage() {
  const supabase = await createSupabaseServerClient()
  const { data, error } = await supabase
    .from('site_search_entries')
    .select(
      'id, title, href, description, terms, action_label, top_search_label, top_search_query, top_search_rank, is_active'
    )
    .order('top_search_rank', { ascending: true, nullsFirst: false })
    .order('title', { ascending: true })

  if (error) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="text-lg font-semibold text-neutral-900">Search config</h1>
        <p className="mt-3 text-sm text-red-700">Could not load search entries: {error.message}</p>
      </div>
    )
  }

  const entries = ((data ?? []) as EntryRow[]).map((row) => ({
    id: row.id,
    title: row.title,
    href: row.href,
    description: row.description,
    terms: asTerms(row.terms),
    actionLabel: row.action_label,
    topSearchLabel: row.top_search_label,
    topSearchQuery: row.top_search_query,
    topSearchRank: row.top_search_rank,
    isActive: row.is_active,
  }))

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-lg font-semibold text-neutral-900">Search config</h1>
      <p className="mt-1 text-sm text-neutral-600">
        Manage public search results and top-search chips without editing code.
      </p>
      <div className="mt-6">
        <SearchConfigForms entries={entries} />
      </div>
    </div>
  )
}

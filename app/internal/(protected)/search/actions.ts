'use server'

import { revalidatePath } from 'next/cache'
import { requireCapability } from '@/lib/auth/capabilities'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'

export type SearchConfigActionResult = { ok: true } | { ok: false; error: string }

function parseTermsCsv(raw: string): string[] {
  return [...new Set(raw.split(',').map((part) => part.trim()).filter(Boolean))]
}

export async function upsertSiteSearchEntry(formData: FormData): Promise<SearchConfigActionResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const profile = await getStaffProfile(supabase, user.id)
  const id = String(formData.get('id') ?? '').trim().toLowerCase()
  const cap = await requireCapability(user, profile, 'can_manage_system_settings', {
    objectType: 'site_search_entry',
    objectId: id || null,
    workspace: 'admin',
    extraMetadata: { action: 'upsertSiteSearchEntry' },
  })
  if (!cap.ok) {
    return { ok: false, error: cap.error }
  }

  const title = String(formData.get('title') ?? '').trim()
  const href = String(formData.get('href') ?? '').trim()
  const description = String(formData.get('description') ?? '').trim()
  const actionLabel = String(formData.get('actionLabel') ?? '').trim() || 'Learn more'
  const termsCsv = String(formData.get('termsCsv') ?? '')
  const terms = parseTermsCsv(termsCsv)
  const topSearchLabel = String(formData.get('topSearchLabel') ?? '').trim()
  const topSearchQuery = String(formData.get('topSearchQuery') ?? '').trim()
  const topSearchRankRaw = String(formData.get('topSearchRank') ?? '').trim()
  const isActive = String(formData.get('isActive') ?? 'on') === 'on'

  if (!id || !title || !href || !description) {
    return { ok: false, error: 'ID, title, href, and description are required.' }
  }
  if (terms.length === 0) return { ok: false, error: 'At least one term is required.' }
  if (!href.startsWith('/')) return { ok: false, error: 'Href must start with /.' }

  let topSearchRank: number | null = null
  if (topSearchRankRaw.length > 0) {
    const rank = Number(topSearchRankRaw)
    if (!Number.isFinite(rank) || rank < 0) {
      return { ok: false, error: 'Top search rank must be a valid positive number.' }
    }
    topSearchRank = rank
  }

  const { error } = await supabase.from('site_search_entries').upsert(
    {
      id,
      title,
      href,
      description,
      terms,
      action_label: actionLabel,
      top_search_label: topSearchLabel || null,
      top_search_query: topSearchQuery || null,
      top_search_rank: topSearchRank === null ? null : Math.round(topSearchRank),
      is_active: isActive,
    },
    { onConflict: 'id' }
  )
  if (error) {
    console.error('upsertSiteSearchEntry', error)
    return { ok: false, error: 'Could not save search entry.' }
  }

  revalidatePath('/internal/search')
  revalidatePath('/search')
  return { ok: true }
}

export async function deleteSiteSearchEntry(formData: FormData): Promise<SearchConfigActionResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const profile = await getStaffProfile(supabase, user.id)
  const cap = await requireCapability(user, profile, 'can_manage_system_settings', {
    objectType: 'site_search_entry',
    objectId: String(formData.get('id') ?? '').trim().toLowerCase() || undefined,
    workspace: 'admin',
    extraMetadata: { action: 'deleteSiteSearchEntry' },
  })
  if (!cap.ok) {
    return { ok: false, error: cap.error }
  }

  const id = String(formData.get('id') ?? '').trim().toLowerCase()
  if (!id) return { ok: false, error: 'ID is required.' }

  const { error } = await supabase.from('site_search_entries').delete().eq('id', id)
  if (error) {
    console.error('deleteSiteSearchEntry', error)
    return { ok: false, error: 'Could not delete search entry.' }
  }

  revalidatePath('/internal/search')
  revalidatePath('/search')
  return { ok: true }
}

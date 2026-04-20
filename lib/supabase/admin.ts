import { createClient, SupabaseClient } from '@supabase/supabase-js'

let cached: SupabaseClient | null = null

/**
 * Service-role client for API routes only. Never import in client components.
 */
export function createAdminClient(): SupabaseClient {
  if (cached) return cached

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  }

  cached = createClient(url, key)
  return cached
}

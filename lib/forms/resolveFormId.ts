import type { SupabaseClient } from '@supabase/supabase-js'

export async function getLatestFormId(supabase: SupabaseClient, formKey: string): Promise<string> {
  const { data, error } = await supabase
    .from('forms')
    .select('id')
    .eq('key', formKey)
    .order('version', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) throw new Error(error.message)
  if (!data?.id) {
    throw new Error(
      `No form row for key "${formKey}". Apply supabase/migrations and ensure seed insert ran.`
    )
  }

  return data.id
}

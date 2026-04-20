import { processOutboundJobsBatch } from '@/lib/jobs/processOutboundJobs'
import { createAdminClient } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

/**
 * Vercel Cron (or manual): drains `outbound_jobs` using the service role.
 * Set `CRON_SECRET`; Vercel sends `Authorization: Bearer <CRON_SECRET>` for scheduled invocations.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET?.trim()
  if (secret) {
    const auth = request.headers.get('authorization')
    if (auth !== `Bearer ${secret}`) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }
  } else if (process.env.NODE_ENV === 'production') {
    return Response.json({ error: 'CRON_SECRET is required in production' }, { status: 500 })
  }

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('outbound-jobs cron: admin client', e)
    return Response.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const stats = await processOutboundJobsBatch(admin)
  return Response.json({ ok: true, ...stats })
}

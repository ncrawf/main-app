import { NextResponse } from 'next/server'
import { requireCapability } from '@/lib/auth/capabilities'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { resolveOrderPatientId, updateOrderFulfillment } from '@/lib/orders/updateFulfillment'

export const runtime = 'nodejs'

type Body = {
  status?: string | null
  trackingNumber?: string | null
  trackingUrl?: string | null
  carrier?: string | null
  internalNotes?: string | null
  exceptionReason?: string | null
  kitFulfillmentNotes?: string | null
}

function normalizeNullable(v: unknown): string | null | undefined {
  if (v === undefined) return undefined
  if (v === null) return null
  if (typeof v !== 'string') return undefined
  const trimmed = v.trim()
  return trimmed.length === 0 ? null : trimmed
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ orderNumber: string }> }
) {
  const { orderNumber } = await params
  if (!orderNumber) {
    return NextResponse.json({ error: 'Missing order identifier' }, { status: 400 })
  }

  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })

  const staff = await getStaffProfile(supabase, user.id)
  const orderPatientId = (await resolveOrderPatientId(supabase, orderNumber)) ?? undefined

  const touchesStatus = typeof body.status === 'string' && body.status.trim().length > 0
  const touchesFulfillmentDetails =
    touchesStatus ||
    body.internalNotes !== undefined ||
    body.exceptionReason !== undefined ||
    body.kitFulfillmentNotes !== undefined
  const touchesTracking =
    body.trackingNumber !== undefined || body.trackingUrl !== undefined || body.carrier !== undefined

  if (touchesFulfillmentDetails) {
    const statusCapability = await requireCapability(user, staff, 'can_advance_fulfillment', {
      objectType: 'order',
      objectId: orderNumber,
      patientId: orderPatientId,
      workspace: 'staff',
      extraMetadata: {
        route: '/api/internal/orders/[orderNumber]/fulfillment',
        operation: touchesStatus ? 'status_or_fulfillment_update' : 'fulfillment_update',
      },
    })
    if (!statusCapability.ok) {
      return NextResponse.json({ error: statusCapability.error }, { status: statusCapability.status })
    }
  }

  if (touchesTracking) {
    const trackingCapability = await requireCapability(user, staff, 'can_edit_tracking', {
      objectType: 'order',
      objectId: orderNumber,
      patientId: orderPatientId,
      workspace: 'staff',
      extraMetadata: {
        route: '/api/internal/orders/[orderNumber]/fulfillment',
        operation: 'tracking_update',
      },
    })
    if (!trackingCapability.ok) {
      return NextResponse.json({ error: trackingCapability.error }, { status: trackingCapability.status })
    }
  }

  const result = await updateOrderFulfillment(supabase, {
    identifier: orderNumber,
    actorStaffUserId: user.id,
    status:
      typeof body.status === 'string' && body.status.trim().length > 0
        ? body.status.trim()
        : undefined,
    trackingNumber: normalizeNullable(body.trackingNumber),
    trackingUrl: normalizeNullable(body.trackingUrl),
    carrier: normalizeNullable(body.carrier),
    internalNotes: normalizeNullable(body.internalNotes),
    exceptionReason: normalizeNullable(body.exceptionReason),
    kitFulfillmentNotes: normalizeNullable(body.kitFulfillmentNotes),
  })

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }
  return NextResponse.json({ ok: true, kind: result.kind, patientId: result.patientId })
}

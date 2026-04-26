import { NextResponse } from 'next/server'
import { requireCapability } from '@/lib/auth/capabilities'
import { approveTreatmentOrder, denyTreatmentOrder } from '@/lib/payments/approveTreatmentOrder'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'

type Body = {
  decision?: 'approve' | 'deny'
  reason?: string | null
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
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })
  const staff = await getStaffProfile(supabase, user.id)

  const { data: orderForPatient } = await supabase
    .from('treatment_orders')
    .select('patient_id')
    .eq('order_number', orderNumber)
    .maybeSingle()

  if (!orderForPatient) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 })
  }

  const capabilityCheck = await requireCapability(user, staff, 'can_prescribe', {
    objectType: 'treatment_order',
    objectId: orderNumber,
    patientId: orderForPatient.patient_id,
    workspace: 'provider',
    extraMetadata: {
      decision: body.decision === 'deny' ? 'deny' : 'approve',
      route: '/api/internal/orders/[orderNumber]/approve',
    },
  })
  if (!capabilityCheck.ok) {
    return NextResponse.json({ error: capabilityCheck.error }, { status: capabilityCheck.status })
  }

  if (body.decision === 'deny') {
    const result = await denyTreatmentOrder(supabase, {
      orderNumber,
      actorStaffUserId: user.id,
      reason: typeof body.reason === 'string' && body.reason.trim() ? body.reason.trim() : undefined,
    })
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }
    return NextResponse.json({ ok: true, decision: 'deny' })
  }

  const result = await approveTreatmentOrder(supabase, {
    orderNumber,
    actorStaffUserId: user.id,
  })
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }
  return NextResponse.json({
    ok: true,
    decision: 'approve',
    status: result.status,
    paymentIntentId: result.paymentIntentId,
    paymentFailureMessage: result.paymentFailureMessage,
  })
}

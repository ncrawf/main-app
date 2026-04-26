import { notFound, redirect } from 'next/navigation'
import { AddPaymentMethodBanner } from '@/components/dashboard/AddPaymentMethodBanner'
import { PatientOrderCard } from '@/components/dashboard/PatientOrderCard'
import { listPatientOrders } from '@/lib/dashboard/listPatientOrders'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientAccountOrdersPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const orders = await listPatientOrders(patientId)

  // Banner prompting card save when there is a pending treatment order and no saved method.
  const admin = createAdminClient()
  const { data: paymentMethodRow } = await admin
    .from('patients')
    .select('stripe_default_payment_method_id')
    .eq('id', patientId)
    .maybeSingle<{ stripe_default_payment_method_id: string | null }>()

  const pendingReviewCount = orders.filter(
    (o) => o.kind === 'treatment' && o.chargeDeferred
  ).length
  const needsPaymentMethod =
    pendingReviewCount > 0 && !paymentMethodRow?.stripe_default_payment_method_id

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-lg font-semibold text-neutral-900">Orders</h1>
        <p className="text-sm text-neutral-600">
          Your medication, supplement, and fulfillment activity. You’re only charged after a
          clinician approves a prescription.
        </p>
      </header>

      {needsPaymentMethod ? (
        <AddPaymentMethodBanner
          patientId={patientId}
          pendingOrderCount={pendingReviewCount}
          returnTo={`/dashboard/${patientId}/orders`}
        />
      ) : null}

      {orders.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 bg-white/60 p-6 text-center">
          <p className="text-sm font-medium text-neutral-800">No orders yet</p>
          <p className="mt-1 text-xs text-neutral-600">
            After you finish intake and a clinician reviews your case, your orders will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {orders.map((order) => (
            <PatientOrderCard key={order.identifier} order={order} />
          ))}
        </div>
      )}
    </div>
  )
}

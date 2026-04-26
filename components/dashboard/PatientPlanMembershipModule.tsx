import Link from 'next/link'
import type { PatientPlanMembership } from '@/lib/dashboard/getPatientPlanMembership'

function categoryLabel(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function statusCopy(status: PatientPlanMembership['status']): { title: string; detail: string; cta: string } {
  if (status === 'active') {
    return {
      title: 'Your plan is active',
      detail: 'Coverage is in place for your current care programs.',
      cta: 'Manage plan & billing',
    }
  }
  if (status === 'grace') {
    return {
      title: 'Your plan is active',
      detail: 'A billing update is needed soon to avoid interruption.',
      cta: 'Manage plan & billing',
    }
  }
  if (status === 'payment_issue') {
    return {
      title: 'Payment update needed',
      detail: 'There is a billing issue that may interrupt treatment continuation.',
      cta: 'Resolve billing',
    }
  }
  return {
    title: 'Your plan is inactive',
    detail: 'Coverage is not active for ongoing care at this time.',
    cta: 'Manage plan & billing',
  }
}

export function PatientPlanMembershipModule({
  patientId,
  membership,
}: {
  patientId: string
  membership: PatientPlanMembership
}) {
  const copy = statusCopy(membership.status)
  const categories = membership.included_categories.map(categoryLabel).filter(Boolean)
  const nextBilling =
    membership.next_billing_at &&
    new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(membership.next_billing_at))

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Your plan</p>
      <h3 className="mt-1 text-base font-semibold text-neutral-900">Coverage &amp; billing</h3>
      <p className="mt-2 text-sm font-medium text-neutral-900">{copy.title}</p>
      <p className="mt-1 text-sm text-neutral-700">{copy.detail}</p>
      {categories.length > 0 ? (
        <p className="mt-2 text-xs text-neutral-600">Included categories: {categories.join(' · ')}</p>
      ) : null}
      <p className="mt-1 text-xs text-neutral-600">
        {membership.payment_method_on_file === false
          ? 'No payment method on file.'
          : membership.payment_method_on_file === true
            ? `Payment method on file.${nextBilling ? ` Next billing date: ${nextBilling}.` : ''}`
            : 'Billing details are available in account settings.'}
      </p>
      <div className="mt-3">
        <Link
          href={`/dashboard/${patientId}/profile`}
          className="inline-flex rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
        >
          {copy.cta}
        </Link>
      </div>
    </section>
  )
}

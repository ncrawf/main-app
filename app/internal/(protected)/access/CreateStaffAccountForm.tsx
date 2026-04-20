'use client'

import { useState, useTransition } from 'react'
import { STAFF_ROLES } from '@/lib/staff/roles'
import { createStaffOrProviderAccount } from './actions'

export function CreateStaffAccountForm() {
  const [pending, start] = useTransition()
  const [message, setMessage] = useState('')
  const [role, setRole] = useState<(typeof STAFF_ROLES)[number]>('prescriber')

  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-neutral-900">Create staff/provider account</h2>
      <p className="mt-1 text-xs text-neutral-500">
        Creates a Supabase Auth user + linked staff profile in one action.
      </p>
      <form
        className="mt-4 grid gap-3 sm:grid-cols-2"
        action={(formData) =>
          start(async () => {
            setMessage('')
            const result = await createStaffOrProviderAccount(formData)
            setMessage(result.ok ? `Created user ${result.userId}.` : result.error)
          })
        }
      >
        <label className="text-xs font-medium text-neutral-700">
          Email
          <input name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm" />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Staff profile email
          <input
            name="workEmail"
            type="email"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            placeholder="Defaults to auth email"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Temporary password
          <input
            name="password"
            type="text"
            required
            minLength={8}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Role
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value as (typeof STAFF_ROLES)[number])}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          >
            {STAFF_ROLES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Display name
          <input
            name="displayName"
            required
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            placeholder="Jane Smith, MD"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          First name
          <input name="firstName" className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm" />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Last name
          <input name="lastName" className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm" />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Phone number
          <input
            name="phoneNumber"
            type="tel"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            placeholder="+1 555 555 1212"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Credentials
          <input
            name="credentials"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            placeholder="MD / DO / NP"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Specialty
          <input name="specialty" className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm" />
        </label>
        <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
          Board certifications (comma-separated)
          <input
            name="boardCertifications"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            placeholder="ABIM, AANP"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Years in practice
          <input
            name="yearsInPractice"
            type="number"
            min={0}
            max={80}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          NPI
          <input
            name="npi"
            inputMode="numeric"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm font-mono"
            placeholder="10 digits for prescribers"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          DEA (optional)
          <input name="deaNumber" className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm font-mono" />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Timezone
          <input
            name="timezone"
            defaultValue="America/New_York"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
          Service states (comma-separated)
          <input
            name="serviceStateCodes"
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            placeholder="MI, OH, FL"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
          State licenses (one per line: STATE,LICENSE_NUMBER,YYYY-MM-DD)
          <textarea
            name="stateLicenses"
            rows={3}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm font-mono"
            placeholder="MI,43012345,2027-06-30"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
          Prescriptive licenses (one per line: STATE,LICENSE_NUMBER,YYYY-MM-DD)
          <textarea
            name="prescriptionLicenses"
            rows={3}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm font-mono"
            placeholder="MI,RX12345,2027-06-30"
          />
        </label>
        <div className="sm:col-span-2 flex items-center gap-2">
          <button
            type="submit"
            disabled={pending}
            className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white disabled:opacity-60"
          >
            {pending ? 'Creating...' : 'Create account'}
          </button>
          {message ? <span className="text-xs text-neutral-600">{message}</span> : null}
        </div>
      </form>
    </section>
  )
}

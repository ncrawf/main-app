'use client'

import { useState } from 'react'

export function PatientPortalSignOut() {
  const [pending, setPending] = useState(false)

  return (
    <button
      type="button"
      disabled={pending}
      onClick={async () => {
        setPending(true)
        try {
          await fetch('/api/patient-portal/session', { method: 'DELETE' })
          window.location.href = '/dashboard'
        } finally {
          setPending(false)
        }
      }}
      className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline disabled:opacity-50"
    >
      {pending ? 'Signing out…' : 'Sign out of this device'}
    </button>
  )
}

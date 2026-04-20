'use client'

import { useState } from 'react'

export function PayForVisitButton({ patientId }: { patientId: string }) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onClick() {
    setError(null)
    setPending(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientId }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok) {
        setError(data.error ?? 'Could not start checkout')
        return
      }
      if (data.url) {
        window.location.href = data.url
        return
      }
      setError('No redirect URL')
    } catch {
      setError('Network error')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={onClick}
        disabled={pending}
        className="rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
      >
        {pending ? 'Redirecting…' : 'Pay for visit'}
      </button>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <p className="text-xs text-neutral-500">Secure checkout powered by Stripe. You’ll return here after paying.</p>
    </div>
  )
}

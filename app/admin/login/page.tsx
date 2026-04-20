'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    const password = String(fd.get('password') || '')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as { error?: string }
      setError(j.error || 'Sign-in failed')
      return
    }

    router.push('/admin')
    router.refresh()
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-20 text-neutral-900">
      <div className="mx-auto max-w-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">MAIN</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Admin</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Use the password from <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-xs">ADMIN_SECRET</code> in
          your environment.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-neutral-800">Password</span>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-neutral-900 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-neutral-900 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Sign in
          </button>
        </form>

        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      </div>
    </main>
  )
}

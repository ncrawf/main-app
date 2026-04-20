'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { createSupabaseBrowserClient } from '@/lib/supabase/client'

export default function InternalLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const supabase = createSupabaseBrowserClient()
    const { error: signErr } = await supabase.auth.signInWithPassword({ email, password })
    if (signErr) {
      setError(signErr.message)
      return
    }
    router.push('/internal')
    router.refresh()
  }

  return (
    <div className="mx-auto max-w-sm px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Staff sign in</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Use a Supabase Auth user that has a matching row in <code className="text-xs">staff_profiles</code>. Bootstrap steps
        are in <code className="text-xs">docs/internal-rbac.md</code> in the repo.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Work email</span>
          <input
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
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

      <p className="mt-10 text-center text-xs text-neutral-500">
        <Link href="/admin" className="underline">
          Legacy admin (password)
        </Link>{' '}
        ·{' '}
        <Link href="/" className="underline">
          Home
        </Link>
      </p>
    </div>
  )
}

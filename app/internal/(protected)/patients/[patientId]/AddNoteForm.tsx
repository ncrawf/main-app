'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { addStaffNote } from './actions'

export function AddNoteForm({ patientId }: { patientId: string }) {
  const router = useRouter()
  const [text, setText] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setPending(true)
    const result = await addStaffNote(patientId, text)
    setPending(false)
    if (!result.ok) {
      setError(result.error)
      return
    }
    setText('')
    router.refresh()
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-xl border border-neutral-200 bg-white p-4">
      <label className="block space-y-1.5">
        <span className="text-sm font-medium text-neutral-900">Add staff note</span>
        <span className="block text-xs text-neutral-500">
          Visible on this patient&apos;s timeline (e.g. callback, reaction, operational context).
        </span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          placeholder="Patient called — allergic reaction to …"
          required
        />
      </label>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
      >
        {pending ? 'Saving…' : 'Save to timeline'}
      </button>
    </form>
  )
}

'use client'

import { useState, useTransition } from 'react'
import { deleteSiteSearchEntry, upsertSiteSearchEntry } from './actions'

type Entry = {
  id: string
  title: string
  href: string
  description: string
  terms: string[]
  actionLabel: string
  topSearchLabel: string | null
  topSearchQuery: string | null
  topSearchRank: number | null
  isActive: boolean
}

export function SearchConfigForms({ entries }: { entries: Entry[] }) {
  const [pending, start] = useTransition()
  const [message, setMessage] = useState('')
  const [selectedId, setSelectedId] = useState(entries[0]?.id ?? '')
  const selected = entries.find((entry) => entry.id === selectedId) ?? null

  return (
    <div className="space-y-4">
      <section className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-neutral-900">Add or update search entry</h2>
        <p className="mt-1 text-xs text-neutral-500">Use this to control search results and top-search chips.</p>
        <form
          className="mt-3 grid gap-3 sm:grid-cols-2"
          action={(formData) =>
            start(async () => {
              setMessage('')
              const result = await upsertSiteSearchEntry(formData)
              setMessage(result.ok ? 'Saved search entry.' : result.error)
            })
          }
        >
          <label className="text-xs font-medium text-neutral-700">
            ID
            <input
              name="id"
              required
              defaultValue={selected?.id ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700">
            Title
            <input
              name="title"
              required
              defaultValue={selected?.title ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
            Href
            <input
              name="href"
              required
              defaultValue={selected?.href ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
            Description
            <textarea
              name="description"
              required
              defaultValue={selected?.description ?? ''}
              rows={2}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
            Terms (comma-separated)
            <input
              name="termsCsv"
              required
              defaultValue={selected?.terms.join(', ') ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700">
            Action label
            <input
              name="actionLabel"
              defaultValue={selected?.actionLabel ?? 'Learn more'}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700">
            Active
            <div className="mt-2">
              <input name="isActive" type="checkbox" defaultChecked={selected?.isActive ?? true} />
            </div>
          </label>
          <label className="text-xs font-medium text-neutral-700">
            Top search label
            <input
              name="topSearchLabel"
              defaultValue={selected?.topSearchLabel ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700">
            Top search query
            <input
              name="topSearchQuery"
              defaultValue={selected?.topSearchQuery ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <label className="text-xs font-medium text-neutral-700">
            Top search rank
            <input
              name="topSearchRank"
              type="number"
              min={0}
              defaultValue={selected?.topSearchRank ?? ''}
              className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
            />
          </label>
          <div className="sm:col-span-2 flex items-center gap-2">
            <button
              type="submit"
              disabled={pending}
              className="rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-xs font-semibold text-white disabled:opacity-60"
            >
              {pending ? 'Saving...' : 'Save entry'}
            </button>
            {message ? <span className="text-xs text-neutral-600">{message}</span> : null}
          </div>
        </form>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-neutral-900">Delete entry</h2>
        <form
          className="mt-3 flex flex-wrap items-end gap-2"
          action={(formData) =>
            start(async () => {
              setMessage('')
              const result = await deleteSiteSearchEntry(formData)
              setMessage(result.ok ? 'Deleted search entry.' : result.error)
            })
          }
        >
          <label className="text-xs font-medium text-neutral-700">
            Entry ID
            <input name="id" required className="mt-1 w-52 rounded-md border border-neutral-300 px-2 py-1.5 text-sm" />
          </label>
          <button
            type="submit"
            disabled={pending}
            className="rounded-md border border-red-700 bg-red-700 px-3 py-2 text-xs font-semibold text-white disabled:opacity-60"
          >
            {pending ? 'Deleting...' : 'Delete'}
          </button>
        </form>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-neutral-900">Current entries</h2>
        <label className="mt-3 block text-xs font-medium text-neutral-700">
          Load into form
          <select
            value={selectedId}
            onChange={(event) => setSelectedId(event.target.value)}
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          >
            {entries.map((entry) => (
              <option key={entry.id} value={entry.id}>
                {entry.id} — {entry.title}
              </option>
            ))}
          </select>
        </label>
        <ul className="mt-3 space-y-2 text-xs text-neutral-700">
          {entries.map((entry) => (
            <li key={entry.id} className="rounded border border-neutral-200 bg-neutral-50 px-2 py-2">
              <p className="font-semibold text-neutral-900">{entry.title}</p>
              <p>ID: {entry.id}</p>
              <p>Href: {entry.href}</p>
              <p>Top: {entry.topSearchLabel ? `${entry.topSearchLabel} (${entry.topSearchQuery ?? ''})` : '—'}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

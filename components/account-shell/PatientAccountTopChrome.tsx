'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { PatientPortalSignOut } from '@/components/dashboard/PatientPortalSignOut'
import { PublicSiteSearchBlock } from '@/components/PublicSiteSearchBlock'

type Props = {
  patientId: string
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </>
      )}
    </svg>
  )
}

/**
 * Logged-in account top row: MAIN hub link, Account entry, hamburger with public-site search + session actions.
 */
export function PatientAccountTopChrome({ patientId }: Props) {
  const hubHref = `/dashboard/${patientId}/programs`
  const [menuOpen, setMenuOpen] = useState(false)

  const close = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuOpen, close])

  return (
    <>
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-6 py-4">
          <Link href={hubHref} className="shrink-0 text-sm font-semibold tracking-wide text-neutral-900">
            MAIN
          </Link>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href={`/dashboard/${patientId}/profile`}
              className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
            >
              Account
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50"
              aria-expanded={menuOpen}
              aria-controls="patient-account-site-menu"
              aria-label={menuOpen ? 'Close site menu' : 'Open site menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" id="patient-account-site-menu">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={close}
          />
          <aside className="relative flex h-full w-full max-w-sm flex-col border-l border-neutral-200 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <p className="text-sm font-semibold text-neutral-900">Menu</p>
              <button
                type="button"
                className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                onClick={close}
                aria-label="Close menu"
              >
                <MenuIcon open />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Browse site</p>
              <p className="mt-1 text-xs text-neutral-600">Search and shortcuts from the public site.</p>
              <div className="mt-4">
                <PublicSiteSearchBlock variant="stacked" />
              </div>
              <div className="mt-6 border-t border-neutral-200 pt-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-neutral-700 underline-offset-4 hover:text-neutral-900 hover:underline"
                  onClick={close}
                >
                  Home
                </Link>
              </div>
            </div>
            <div className="border-t border-neutral-200 px-4 py-4">
              <PatientPortalSignOut />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  )
}

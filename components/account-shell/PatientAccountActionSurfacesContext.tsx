'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
import Link from 'next/link'
import type { PatientActionItem } from '@/lib/dashboard/resolvePatientActionItems'

type ContextValue = {
  items: PatientActionItem[]
  openDrawer: (actionId: string) => void
  closeDrawer: () => void
  isDrawerOpen: boolean
}

const PatientActionSurfacesContext = createContext<ContextValue | null>(null)

export function usePatientActionSurfaces() {
  const ctx = useContext(PatientActionSurfacesContext)
  if (!ctx) {
    throw new Error('usePatientActionSurfaces must be used within PatientAccountActionChrome')
  }
  return ctx
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean): void {
  useEffect(() => {
    if (!active || !containerRef.current) return
    const root = containerRef.current
    const getFocusables = () =>
      Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => el.offsetParent !== null || el.getClientRects().length > 0
      )

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusables = getFocusables()
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    root.addEventListener('keydown', onKeyDown)
    return () => root.removeEventListener('keydown', onKeyDown)
  }, [active, containerRef])
}

function ActionItemDrawer({
  open,
  item,
  onClose,
}: {
  open: boolean
  item: PatientActionItem | null
  onClose: () => void
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement | null>(null)
  useFocusTrap(panelRef, open && !!item)

  useEffect(() => {
    if (!open || !item) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, item, onClose])

  useEffect(() => {
    if (!open || !item) return
    closeBtnRef.current?.focus()
  }, [open, item])

  if (!open || !item) return null

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" role="presentation">
      <button type="button" className="absolute inset-0 bg-black/40" aria-label="Close action panel" onClick={onClose} />
      <aside
        ref={panelRef}
        className="relative flex h-full w-full max-w-md flex-col border-l border-neutral-200 bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="action-items-drawer-title"
        tabIndex={-1}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-neutral-200 px-4 py-3">
          <h2 id="action-items-drawer-title" className="text-base font-semibold text-neutral-900">
            Action Items
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Close"
            onClick={onClose}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6">
          <h3 className="text-lg font-semibold leading-snug text-neutral-900">{item.title}</h3>
          {item.description ? <p className="mt-3 text-sm text-neutral-600">{item.description}</p> : null}
          <p className="mt-4 text-xs text-neutral-500">Complete this to stay on track.</p>
          <div className="mt-6">
            <Link
              href={item.href}
              className="inline-flex w-full justify-center rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
              onClick={onClose}
            >
              {item.ctaLabel}
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

function GlobalActionBanner({ topTone, onOpen }: { topTone: PatientActionItem['tone']; onOpen: () => void }) {
  return (
    <div className={`border-b ${toneToBannerStripClass(topTone)}`}>
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-neutral-800 shadow-sm ring-1 ring-neutral-200">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
        </span>
        <button
          type="button"
          onClick={onOpen}
          className="min-w-0 flex-1 text-left text-sm font-medium text-neutral-900 hover:underline"
        >
          Complete your action item
        </button>
        <span className="shrink-0 text-neutral-400" aria-hidden>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  )
}

function toneToBannerStripClass(tone: PatientActionItem['tone']): string {
  if (tone === 'success') return 'border-emerald-200 bg-emerald-50/70'
  if (tone === 'warning') return 'border-amber-200 bg-amber-50/70'
  if (tone === 'info') return 'border-sky-200 bg-sky-50/60'
  return 'border-neutral-200 bg-white'
}

type ChromeProps = {
  items: PatientActionItem[]
  children: ReactNode
}

export function PatientAccountActionChrome({ items, children }: ChromeProps) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [focusId, setFocusId] = useState<string | null>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  const focused = useMemo(() => {
    if (items.length === 0) return null
    if (focusId) return items.find((i) => i.id === focusId) ?? items[0]
    return items[0]
  }, [items, focusId])

  const openDrawer = useCallback((actionId: string) => {
    const ae = document.activeElement
    returnFocusRef.current = ae instanceof HTMLElement ? ae : null
    setFocusId(actionId)
    setDrawerOpen(true)
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    queueMicrotask(() => {
      returnFocusRef.current?.focus?.()
      returnFocusRef.current = null
    })
  }, [])

  const openTop = useCallback(() => {
    if (items[0]) openDrawer(items[0].id)
  }, [items, openDrawer])

  useEffect(() => {
    if (!drawerOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [drawerOpen])

  const ctx = useMemo<ContextValue>(
    () => ({
      items,
      openDrawer,
      closeDrawer,
      isDrawerOpen: drawerOpen,
    }),
    [items, openDrawer, closeDrawer, drawerOpen]
  )

  return (
    <PatientActionSurfacesContext.Provider value={ctx}>
      {items.length > 0 ? <GlobalActionBanner topTone={items[0].tone} onOpen={openTop} /> : null}
      {children}
      <ActionItemDrawer open={drawerOpen} item={focused} onClose={closeDrawer} />
    </PatientActionSurfacesContext.Provider>
  )
}

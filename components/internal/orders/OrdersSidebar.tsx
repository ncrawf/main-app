import Link from 'next/link'

type SidebarLink = {
  href: string
  label: string
  count?: number | null
  exact?: boolean
}

export type OrdersSidebarCounts = {
  all: number
  treatments: number
  supplements: number
  labKits: number
  exceptions: number
}

export type OrdersSidebarTab =
  | 'all'
  | 'medications'
  | 'supplements'
  | 'lab-kits'
  | 'exceptions'

export function OrdersSidebar({
  activeTab,
  counts,
}: {
  activeTab: OrdersSidebarTab
  counts: OrdersSidebarCounts
}) {
  const links: SidebarLink[] = [
    { href: '/internal/orders', label: 'All orders', count: counts.all, exact: true },
    { href: '/internal/orders?tab=medications', label: 'Medications', count: counts.treatments },
    { href: '/internal/orders?tab=supplements', label: 'Supplements', count: counts.supplements },
    { href: '/internal/orders?tab=lab-kits', label: 'Lab kits', count: counts.labKits },
    { href: '/internal/orders?tab=exceptions', label: 'Needs attention', count: counts.exceptions },
  ]

  const activeHref = (() => {
    switch (activeTab) {
      case 'medications':
        return '/internal/orders?tab=medications'
      case 'supplements':
        return '/internal/orders?tab=supplements'
      case 'lab-kits':
        return '/internal/orders?tab=lab-kits'
      case 'exceptions':
        return '/internal/orders?tab=exceptions'
      default:
        return '/internal/orders'
    }
  })()

  return (
    <aside className="hidden w-60 shrink-0 border-r border-neutral-200 bg-neutral-50/60 lg:block">
      <div className="sticky top-0 px-3 py-5">
        <div className="px-2 pb-3">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            Orders
          </div>
          <p className="mt-1 text-xs text-neutral-500">
            Operational truth across Rx, supplements, and lab kits.
          </p>
        </div>
        <nav className="mt-2 flex flex-col gap-0.5">
          {links.map((link) => {
            const active = link.href === activeHref
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? 'flex items-center justify-between rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white'
                    : 'flex items-center justify-between rounded-md px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200/70 hover:text-neutral-900'
                }
              >
                <span>{link.label}</span>
                {typeof link.count === 'number' ? (
                  <span
                    className={
                      active
                        ? 'rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-semibold'
                        : 'rounded-full bg-neutral-200 px-1.5 py-0.5 text-[10px] font-semibold text-neutral-700'
                    }
                  >
                    {link.count}
                  </span>
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="mt-6 border-t border-neutral-200 pt-4">
          <div className="px-2 text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            Shortcuts
          </div>
          <nav className="mt-2 flex flex-col gap-0.5">
            <Link
              href="/internal/patients"
              className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900"
            >
              Patients
            </Link>
            <Link
              href="/internal/queues"
              className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900"
            >
              Review queues
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}

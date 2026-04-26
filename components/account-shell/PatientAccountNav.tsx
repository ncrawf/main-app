'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SECTIONS = [
  { label: 'Action Items', href: (id: string) => `/dashboard/${id}/action-items` },
  { label: 'Subscriptions', href: (id: string) => `/dashboard/${id}/programs` },
  { label: 'Messages', href: (id: string) => `/dashboard/${id}/messages` },
  { label: 'Orders', href: (id: string) => `/dashboard/${id}/orders` },
  { label: 'Appointments', href: (id: string) => `/dashboard/${id}/appointments` },
  { label: 'Labs', href: (id: string) => `/dashboard/${id}/labs` },
  { label: 'Profile', href: (id: string) => `/dashboard/${id}/profile` },
  { label: 'Support', href: (id: string) => `/dashboard/${id}/support` },
] as const

type Props = { patientId: string }

function sectionActive(pathname: string, patientId: string, href: string): boolean {
  if (href.endsWith('/programs')) {
    return pathname.startsWith(`/dashboard/${patientId}/programs`)
  }
  if (href.endsWith('/action-items')) {
    return pathname.startsWith(`/dashboard/${patientId}/action-items`)
  }
  if (href.endsWith('/labs')) {
    return pathname.startsWith(`/dashboard/${patientId}/labs`)
  }
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function PatientAccountNav({ patientId }: Props) {
  const pathname = usePathname() ?? ''

  return (
    <nav className="border-b border-neutral-200 bg-neutral-50" aria-label="Account sections">
      <div className="mx-auto max-w-3xl px-6">
        <ul className="flex flex-wrap gap-1 py-2">
          {SECTIONS.map((s) => {
            const href = s.href(patientId)
            const active = sectionActive(pathname, patientId, href)
            return (
              <li key={s.label}>
                <Link
                  href={href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    active ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200' : 'text-neutral-600 hover:bg-white/80'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {s.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

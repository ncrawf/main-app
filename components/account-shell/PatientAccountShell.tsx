import type { ReactNode } from 'react'
import { PatientAccountNav } from '@/components/account-shell/PatientAccountNav'
import { PatientAccountActionChrome } from '@/components/account-shell/PatientAccountActionSurfacesContext'
import { PatientAccountTopChrome } from '@/components/account-shell/PatientAccountTopChrome'
import type { PatientAccountActionItemRow } from '@/lib/dashboard/buildPatientAccountActionItemsQueue'
import { resolvePatientActionSurfaces } from '@/lib/dashboard/resolvePatientActionItems'

type Props = {
  patientId: string
  /** Ordered queue from cached dashboard model — single source for banner + Action Items tab. */
  actionItemsQueue: PatientAccountActionItemRow[]
  children: ReactNode
}

export function PatientAccountShell({ patientId, actionItemsQueue, children }: Props) {
  const { items } = resolvePatientActionSurfaces(actionItemsQueue)

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <PatientAccountTopChrome patientId={patientId} />
      <PatientAccountNav patientId={patientId} />
      <PatientAccountActionChrome items={items}>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
      </PatientAccountActionChrome>
    </div>
  )
}

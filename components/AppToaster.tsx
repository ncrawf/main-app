'use client'

import { Toaster } from 'sonner'

/**
 * Global toast host (Sonner). Use from any client component:
 *
 *   import { toast } from 'sonner'
 *   toast.success('Saved!')
 *   toast.error('Something went wrong')
 *
 * @see https://sonner.emilkowal.ski/
 */
export function AppToaster() {
  return <Toaster richColors position="top-center" closeButton duration={4_000} />
}

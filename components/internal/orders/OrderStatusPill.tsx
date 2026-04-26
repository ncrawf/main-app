import type { OrderStatusTone } from '@/lib/orders/treatmentOrderTransitions'

const TONE_CLASSES: Record<OrderStatusTone, string> = {
  neutral: 'bg-neutral-100 text-neutral-700 ring-neutral-200',
  info: 'bg-blue-50 text-blue-700 ring-blue-200',
  warn: 'bg-amber-50 text-amber-800 ring-amber-200',
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  danger: 'bg-rose-50 text-rose-700 ring-rose-200',
}

export function OrderStatusPill({
  tone,
  children,
}: {
  tone: OrderStatusTone
  children: React.ReactNode
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  )
}

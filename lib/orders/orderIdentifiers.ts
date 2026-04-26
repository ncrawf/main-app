/**
 * Staff Orders surface unifies three underlying tables under a single URL space:
 *   /internal/orders/RX-XXXXXXXX             -> treatment_orders.order_number
 *   /internal/orders/SUP-<uuid>              -> supplement_fulfillment_orders.id
 *   /internal/orders/LAB-<uuid>              -> lab_orders.id
 *
 * Treatment orders carry a real, DB-issued order_number; supplement and lab kit
 * rows don't have one, so we prefix their UUID to keep URLs deterministic and
 * human-scannable without a migration to those tables.
 */

export type OrderKind = 'treatment' | 'supplement' | 'lab_kit'

export type ParsedOrderIdentifier =
  | { kind: 'treatment'; orderNumber: string }
  | { kind: 'supplement'; id: string }
  | { kind: 'lab_kit'; id: string }

export function parseOrderIdentifier(raw: string): ParsedOrderIdentifier | null {
  if (!raw) return null
  const value = decodeURIComponent(raw).trim()
  if (!value) return null

  if (/^RX-[A-Z0-9]+$/i.test(value)) {
    return { kind: 'treatment', orderNumber: value.toUpperCase() }
  }
  if (/^SUP-[0-9a-f-]{36}$/i.test(value)) {
    return { kind: 'supplement', id: value.slice(4).toLowerCase() }
  }
  if (/^LAB-[0-9a-f-]{36}$/i.test(value)) {
    return { kind: 'lab_kit', id: value.slice(4).toLowerCase() }
  }
  return null
}

export function supplementOrderPath(id: string): string {
  return `/internal/orders/SUP-${id}`
}

export function labKitOrderPath(id: string): string {
  return `/internal/orders/LAB-${id}`
}

export function treatmentOrderPath(orderNumber: string): string {
  return `/internal/orders/${orderNumber}`
}

/**
 * Short display label for supplement + lab kit orders (first 8 hex of the UUID).
 * Treatment orders already ship with a human-scannable `order_number`, so callers
 * should pass that through directly.
 */
export function displayIdForUuid(prefix: 'SUP' | 'LAB', id: string): string {
  const head = id.replace(/-/g, '').slice(0, 8).toUpperCase()
  return `${prefix}-${head}`
}

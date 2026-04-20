/**
 * 503A / compounding partner handoff fields stored on `treatment_items.metadata`.
 * Retail SCRIPT/eRx is a separate future channel — keep `fulfillment_channel` explicit.
 */

export const RX_DURATION_DAY_OPTIONS = [30, 60, 90] as const
export type RxDurationDays = (typeof RX_DURATION_DAY_OPTIONS)[number]

export const FULFILLMENT_CHANNELS = ['503a_partner', 'retail_erx_planned', 'internal_only'] as const
export type FulfillmentChannel = (typeof FULFILLMENT_CHANNELS)[number]

export type RxSupplyMetadata = {
  duration_days: RxDurationDays
  refills_authorized: number
  written_at: string
}

export type PrescriberMetadata = {
  display_name: string
  credentials?: string | null
  state_license_number?: string | null
  prescription_license_number?: string | null
  npi: string
  dea_number?: string | null
  /** Free-text phone for fax covers / partner portal (E164 optional later). */
  phone?: string | null
  /** Clinic / org callback line for pharmacy. */
  organization_phone?: string | null
}

/** Strip to digits; US NPI is 10 digits (no check-digit validation in v1). */
export function normalizeNpi(raw: string): string {
  return raw.replace(/\D/g, '').slice(0, 10)
}

export function isValidNpi10(npi: string): boolean {
  return /^\d{10}$/.test(npi)
}

export function clampRefills(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0
  return Math.min(11, Math.floor(n))
}

export function buildRxHandoffMetadata(args: {
  durationDays: RxDurationDays
  refillsAuthorized: number
  fulfillmentChannel: FulfillmentChannel
  writtenAtIso: string
  prescriber: PrescriberMetadata
}): {
  rx_supply: RxSupplyMetadata
  prescriber: PrescriberMetadata
  fulfillment_channel: FulfillmentChannel
} {
  return {
    fulfillment_channel: args.fulfillmentChannel,
    prescriber: {
      display_name: args.prescriber.display_name.trim(),
      credentials: args.prescriber.credentials?.trim() || null,
      state_license_number: args.prescriber.state_license_number?.trim() || null,
      prescription_license_number: args.prescriber.prescription_license_number?.trim() || null,
      npi: args.prescriber.npi,
      dea_number: args.prescriber.dea_number?.trim() || null,
      phone: args.prescriber.phone?.trim() || null,
      organization_phone: args.prescriber.organization_phone?.trim() || null,
    },
    rx_supply: {
      duration_days: args.durationDays,
      refills_authorized: clampRefills(args.refillsAuthorized),
      written_at: args.writtenAtIso,
    },
  }
}

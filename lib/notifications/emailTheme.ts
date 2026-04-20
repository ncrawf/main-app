export type EmailTheme = {
  brandName: string
  accentHex: string
  logoUrl: string | null
  cardBg: string
  pageBg: string
  textPrimary: string
  textMuted: string
  border: string
}

function pickEnv(name: string): string | null {
  const v = process.env[name]?.trim()
  return v ? v : null
}

/**
 * Centralized brand/style tokens for outbound patient emails.
 * Keep content in templates; keep visual tokens here.
 */
export function getEmailTheme(): EmailTheme {
  return {
    brandName: pickEnv('EMAIL_BRAND_NAME') ?? 'MAIN',
    accentHex: pickEnv('EMAIL_ACCENT_HEX') ?? '#111827',
    logoUrl: pickEnv('EMAIL_LOGO_URL'),
    cardBg: '#ffffff',
    pageBg: '#f3f4f6',
    textPrimary: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
  }
}


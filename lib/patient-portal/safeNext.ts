const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * Only allow redirects to the same patient's dashboard path (optional query string).
 */
export function resolvePatientPortalNextUrl(origin: string, patientId: string, nextParam: string | null): string {
  const fallback = `/dashboard/${patientId}`
  if (!patientId || !UUID_RE.test(patientId)) return fallback
  if (!nextParam?.trim()) return fallback
  try {
    const u = new URL(nextParam.trim(), origin)
    if (u.pathname !== `/dashboard/${patientId}`) return fallback
    return `${u.pathname}${u.search}`
  } catch {
    return fallback
  }
}

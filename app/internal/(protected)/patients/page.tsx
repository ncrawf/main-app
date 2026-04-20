import Link from 'next/link'
import { MarkCheckinReviewedButton } from './MarkCheckinReviewedButton'
import { formatE164UsDisplay } from '@/lib/admin/format'
import { loadTreatmentCheckinReviewedSourceIds } from '@/lib/ops/patientCaseOps'
import { listPatientsWithState } from '@/lib/patients/listMerged'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

function formatDob(iso: string | null): string {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  if (!y || !m || !d) return iso
  return `${m}/${d}/${y}`
}

function humanizeToken(v: string | null | undefined): string {
  if (!v) return '—'
  return v
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

type CheckinAlert = {
  patientId: string
  sourceEventId: string
  treatmentLabel: string
  createdAt: string
  reasons: string[]
  severity: 'high' | 'medium'
}

type TimeWindowOption = {
  key: string
  label: string
  hours: number
}

type InternalTab = 'users' | 'orders' | 'activity'
type UserSortKey = 'created' | 'name'
type SortDirection = 'asc' | 'desc'

type RecentCheckoutActivity = {
  id: string
  patientId: string
  createdAt: string
  amountLabel: string | null
  checkoutType: string
  stripeCheckoutSessionId: string | null
}

type RecentSupplementOrderActivity = {
  id: string
  patientId: string
  createdAt: string
  status: string
  stripeCheckoutSessionId: string
}

type RecentStaffActivity = {
  id: string
  patientId: string
  createdAt: string
  eventType: string
  actorUserId: string
  body: string | null
}

const TIME_WINDOW_OPTIONS: TimeWindowOption[] = [
  { key: '24h', label: '24h', hours: 24 },
  { key: '48h', label: '48h', hours: 48 },
  { key: '72h', label: '72h', hours: 72 },
  { key: '30d', label: '30d', hours: 30 * 24 },
]

function amountLabel(amountTotal: unknown, currency: unknown): string | null {
  if (typeof amountTotal !== 'number' || typeof currency !== 'string' || !currency) return null
  return `${(amountTotal / 100).toFixed(2)} ${currency.toUpperCase()}`
}

function resolveTimeWindow(raw: string | undefined): TimeWindowOption {
  if (!raw) return TIME_WINDOW_OPTIONS[3]!
  return TIME_WINDOW_OPTIONS.find((option) => option.key === raw) ?? TIME_WINDOW_OPTIONS[3]!
}

function resolveInternalTab(raw: string | undefined): InternalTab {
  if (raw === 'orders' || raw === 'activity' || raw === 'users') return raw
  return 'users'
}

function resolveUserSortKey(raw: string | undefined): UserSortKey {
  if (raw === 'name' || raw === 'created') return raw
  return 'created'
}

function resolveSortDirection(raw: string | undefined): SortDirection {
  if (raw === 'asc' || raw === 'desc') return raw
  return 'desc'
}

function buildPatientsHref(params: {
  tab: InternalTab
  window: string
  q: string
  sort: UserSortKey
  dir: SortDirection
  orderStatus: string
}): string {
  const sp = new URLSearchParams()
  sp.set('tab', params.tab)
  sp.set('window', params.window)
  if (params.q) sp.set('q', params.q)
  sp.set('sort', params.sort)
  sp.set('dir', params.dir)
  if (params.orderStatus && params.orderStatus !== 'all') sp.set('orderStatus', params.orderStatus)
  return `/internal/patients?${sp.toString()}`
}

function withinCutoff(iso: string, cutoffMs: number): boolean {
  const t = new Date(iso).getTime()
  if (!Number.isFinite(t)) return false
  return t >= cutoffMs
}

async function loadRecentCheckoutActivity(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  cutoffIso: string
): Promise<RecentCheckoutActivity[]> {
  const { data, error } = await supabase
    .from('patient_timeline_events')
    .select('id, patient_id, created_at, payload')
    .eq('event_type', 'stripe_checkout_completed')
    .gte('created_at', cutoffIso)
    .order('created_at', { ascending: false })
    .limit(100)
  if (error) {
    console.error('loadRecentCheckoutActivity', error)
    return []
  }
  return (data ?? []).map((row) => {
    const payload = ((row.payload as Record<string, unknown>) ?? {}) as Record<string, unknown>
    const hasConsult = payload.has_consult === true
    const hasSupplement = payload.has_supplement === true
    const checkoutType = hasConsult
      ? hasSupplement
        ? 'Consult + supplements'
        : 'Consult'
      : hasSupplement
        ? 'Supplements'
        : 'Checkout'
    return {
      id: row.id as string,
      patientId: row.patient_id as string,
      createdAt: row.created_at as string,
      amountLabel: amountLabel(payload.amount_total, payload.currency),
      checkoutType,
      stripeCheckoutSessionId:
        typeof payload.stripe_checkout_session_id === 'string' ? payload.stripe_checkout_session_id : null,
    }
  })
}

async function loadRecentSupplementOrders(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  cutoffIso: string
): Promise<RecentSupplementOrderActivity[]> {
  const { data, error } = await supabase
    .from('supplement_fulfillment_orders')
    .select('id, patient_id, created_at, status, stripe_checkout_session_id')
    .gte('created_at', cutoffIso)
    .order('created_at', { ascending: false })
    .limit(100)
  if (error) {
    console.error('loadRecentSupplementOrders', error)
    return []
  }
  return (data ?? []).map((row) => ({
    id: row.id as string,
    patientId: row.patient_id as string,
    createdAt: row.created_at as string,
    status: row.status as string,
    stripeCheckoutSessionId: row.stripe_checkout_session_id as string,
  }))
}

async function loadRecentStaffActivity(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  cutoffIso: string
): Promise<RecentStaffActivity[]> {
  const { data, error } = await supabase
    .from('patient_timeline_events')
    .select('id, patient_id, created_at, event_type, actor_user_id, body')
    .not('actor_user_id', 'is', null)
    .gte('created_at', cutoffIso)
    .order('created_at', { ascending: false })
    .limit(120)
  if (error) {
    console.error('loadRecentStaffActivity', error)
    return []
  }
  return (data ?? []).map((row) => ({
    id: row.id as string,
    patientId: row.patient_id as string,
    createdAt: row.created_at as string,
    eventType: row.event_type as string,
    actorUserId: row.actor_user_id as string,
    body: typeof row.body === 'string' ? row.body : null,
  }))
}

function asNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === '') return null
  const n = Number(value)
  if (!Number.isFinite(n)) return null
  return n
}

function buildCheckinReasons(payload: Record<string, unknown>): { reasons: string[]; severity: 'high' | 'medium' } | null {
  const checkin = ((payload.checkin as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const reasons: string[] = []

  const doseAdequate = typeof checkin.dose_adequate === 'string' ? checkin.dose_adequate : null
  if (doseAdequate === 'no') reasons.push('Dose reported as not adequate')
  if (doseAdequate === 'unsure') reasons.push('Patient unsure about dose adequacy')

  const sideEffects = typeof checkin.side_effects === 'string' ? checkin.side_effects.trim() : ''
  if (sideEffects.length > 0) reasons.push('Side effects reported')

  const sleep = asNumber(checkin.sleep_quality)
  const appetite = asNumber(checkin.appetite_control)
  const energy = asNumber(checkin.energy_level)
  if (sleep !== null && sleep <= 2) reasons.push('Low sleep quality')
  if (appetite !== null && appetite <= 2) reasons.push('Poor appetite control')
  if (energy !== null && energy <= 2) reasons.push('Low energy')

  const firmness = asNumber(checkin.ed_firmness)
  const duration = asNumber(checkin.ed_duration)
  if (firmness !== null && firmness <= 2) reasons.push('Low ED firmness response')
  if (duration !== null && duration <= 2) reasons.push('Low ED duration response')

  if (reasons.length === 0) return null
  const severity: 'high' | 'medium' =
    sideEffects.length > 0 || doseAdequate === 'no' || reasons.some((r) => r.toLowerCase().includes('low ed'))
      ? 'high'
      : 'medium'
  return { reasons, severity }
}

async function listCheckinAlerts(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientIds: string[]
): Promise<CheckinAlert[]> {
  if (patientIds.length === 0) return []
  const cutoff = new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString()
  const reviewedFromOps = await loadTreatmentCheckinReviewedSourceIds(supabase, patientIds)
  const { data, error } = await supabase
    .from('patient_timeline_events')
    .select('id, patient_id, created_at, payload, event_type')
    .in('patient_id', patientIds)
    .in('event_type', ['patient_treatment_checkin_submitted', 'patient_treatment_checkin_reviewed'])
    .gte('created_at', cutoff)
    .order('created_at', { ascending: false })
    .limit(1000)

  if (error) {
    console.error('listCheckinAlerts', error)
    return []
  }

  const reviewedSourceEventIds = new Set<string>()
  for (const row of data ?? []) {
    if (row.event_type !== 'patient_treatment_checkin_reviewed') continue
    const payload = ((row.payload as Record<string, unknown>) ?? {}) as Record<string, unknown>
    const sourceEventId = typeof payload.source_event_id === 'string' ? payload.source_event_id : null
    if (sourceEventId) reviewedSourceEventIds.add(sourceEventId)
  }
  if (reviewedFromOps) {
    for (const id of reviewedFromOps) reviewedSourceEventIds.add(id)
  }

  const alerts: CheckinAlert[] = []
  const seen = new Set<string>()
  for (const row of data ?? []) {
    if (row.event_type !== 'patient_treatment_checkin_submitted') continue
    const sourceEventId = row.id as string
    if (reviewedSourceEventIds.has(sourceEventId)) continue

    const payload = ((row.payload as Record<string, unknown>) ?? {}) as Record<string, unknown>
    const treatmentItemId = typeof payload.treatment_item_id === 'string' ? payload.treatment_item_id : null
    const dedupeKey = `${row.patient_id}:${treatmentItemId ?? 'unknown'}`
    if (seen.has(dedupeKey)) continue
    seen.add(dedupeKey)

    const reasonInfo = buildCheckinReasons(payload)
    if (!reasonInfo) continue

    const treatmentLabel =
      (typeof payload.display_name === 'string' && payload.display_name.trim()) ||
      (typeof payload.treatment_key === 'string' && payload.treatment_key.trim()) ||
      'Treatment'
    alerts.push({
      patientId: row.patient_id as string,
      sourceEventId,
      treatmentLabel,
      createdAt: row.created_at as string,
      reasons: reasonInfo.reasons,
      severity: reasonInfo.severity,
    })
  }

  return alerts
}

export default async function InternalPatientsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const supabase = await createSupabaseServerClient()
  const resolvedSearchParams = (await searchParams) ?? {}
  const queryRaw = resolvedSearchParams.q
  const windowRaw = resolvedSearchParams.window
  const tabRaw = resolvedSearchParams.tab
  const sortRaw = resolvedSearchParams.sort
  const dirRaw = resolvedSearchParams.dir
  const orderStatusRaw = resolvedSearchParams.orderStatus
  const query = (Array.isArray(queryRaw) ? queryRaw[0] : queryRaw ?? '').trim()
  const windowKey = Array.isArray(windowRaw) ? windowRaw[0] : windowRaw
  const tabKey = Array.isArray(tabRaw) ? tabRaw[0] : tabRaw
  const sortKeyRaw = Array.isArray(sortRaw) ? sortRaw[0] : sortRaw
  const sortDirRaw = Array.isArray(dirRaw) ? dirRaw[0] : dirRaw
  const orderStatusKeyRaw = Array.isArray(orderStatusRaw) ? orderStatusRaw[0] : orderStatusRaw
  const selectedWindow = resolveTimeWindow(windowKey)
  const selectedTab = resolveInternalTab(tabKey)
  const selectedSort = resolveUserSortKey(sortKeyRaw)
  const selectedDir = resolveSortDirection(sortDirRaw)
  const selectedOrderStatus = (orderStatusKeyRaw ?? 'all').trim() || 'all'
  const nowMs = Date.now()
  const cutoffMs = nowMs - selectedWindow.hours * 60 * 60 * 1000
  const cutoffIso = new Date(cutoffMs).toISOString()

  const [rows, recentCheckouts, recentOrders, recentStaffEvents, staffRows] = await Promise.all([
    listPatientsWithState(supabase),
    loadRecentCheckoutActivity(supabase, cutoffIso),
    loadRecentSupplementOrders(supabase, cutoffIso),
    loadRecentStaffActivity(supabase, cutoffIso),
    supabase.from('staff_profiles').select('id, display_name'),
  ])
  const nameByPatientId = new Map(
    rows.map((r) => [r.id, [r.first_name, r.last_name].filter(Boolean).join(' ') || r.email] as const)
  )
  const checkinAlerts = await listCheckinAlerts(
    supabase,
    rows.map((r) => r.id)
  )
  const matchesGlobalQuery = (parts: Array<string | null | undefined>): boolean => {
    if (query.length === 0) return true
    return parts
      .filter((v): v is string => typeof v === 'string' && v.length > 0)
      .some((v) => v.toLowerCase().includes(query.toLowerCase()))
  }

  const filteredRows = rows.filter((r) => {
    const queryMatch =
      matchesGlobalQuery([
        [r.first_name, r.last_name].filter(Boolean).join(' '),
        r.first_name,
        r.last_name,
        r.email,
        r.phone,
      ]) && withinCutoff(r.created_at, cutoffMs)
    return queryMatch
  })
  const sortedRows = [...filteredRows].sort((a, b) => {
    if (selectedSort === 'name') {
      const aName = [a.first_name, a.last_name].filter(Boolean).join(' ').trim().toLowerCase()
      const bName = [b.first_name, b.last_name].filter(Boolean).join(' ').trim().toLowerCase()
      const nameCompare = aName.localeCompare(bName)
      return selectedDir === 'asc' ? nameCompare : -nameCompare
    }
    const aTime = new Date(a.created_at).getTime()
    const bTime = new Date(b.created_at).getTime()
    const createdCompare = aTime - bTime
    return selectedDir === 'asc' ? createdCompare : -createdCompare
  })
  const filteredCheckinAlerts = checkinAlerts.filter((alert) => withinCutoff(alert.createdAt, cutoffMs))
  const activeWindowLabel = selectedWindow.label
  const recentOrderItems = [...recentCheckouts.slice(0, 10), ...recentOrders.slice(0, 10)]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 60)
  const orderStatusOptions = [
    'all',
    ...new Set(
      recentOrderItems.map((item) =>
        'status' in item ? String(item.status).trim().toLowerCase() || 'unknown' : 'checkout'
      )
    ),
  ]
  const filteredRecentOrderItems = recentOrderItems
    .filter((item) => {
      const status = 'status' in item ? String(item.status).trim().toLowerCase() || 'unknown' : 'checkout'
      const statusPass = selectedOrderStatus === 'all' || status === selectedOrderStatus
      const queryPass = matchesGlobalQuery([
        nameByPatientId.get(item.patientId),
        'stripeCheckoutSessionId' in item ? item.stripeCheckoutSessionId : null,
      ])
      return statusPass && queryPass
    })
    .slice(0, 30)
  const filteredRecentStaffEvents = recentStaffEvents
    .filter((event) =>
      matchesGlobalQuery([
        nameByPatientId.get(event.patientId),
        humanizeToken(event.eventType),
        event.body,
        event.actorUserId,
      ])
    )
    .slice(0, 30)
  const staffDisplayNameById = new Map(
    ((staffRows.data ?? []) as Array<{ id: string; display_name: string | null }>).map((row) => [
      row.id,
      row.display_name?.trim() || `${row.id.slice(0, 8)}…`,
    ])
  )

  return (
    <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-8">
      <div className="mb-6">
        <h1 className="text-lg font-semibold tracking-tight">Patients</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Loaded with your session + RLS. Assignment column uses <code className="text-xs">patient_states.assigned_to</code> when
          set.
        </p>
      </div>

      <section className="mb-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
        <form method="get" className="flex flex-wrap items-end gap-3">
          <input type="hidden" name="tab" value={selectedTab} />
          <label className="min-w-[260px] flex-1 text-xs font-medium text-neutral-700">
            Search patients
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Type name, email, or phone..."
              className="mt-1 block w-full rounded-md border border-neutral-300 px-2.5 py-2 text-sm"
            />
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {TIME_WINDOW_OPTIONS.map((option) => (
              <Link
                key={option.key}
                href={buildPatientsHref({
                  tab: selectedTab,
                  window: option.key,
                  q: query,
                  sort: selectedSort,
                  dir: selectedDir,
                  orderStatus: selectedOrderStatus,
                })}
                className={
                  option.key === selectedWindow.key
                    ? 'rounded-md border border-neutral-900 bg-neutral-900 px-2.5 py-1.5 text-xs font-semibold text-white'
                    : 'rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100'
                }
              >
                {option.label}
              </Link>
            ))}
          </div>
          <button
            type="submit"
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-100"
          >
            Apply
          </button>
          <Link
            href={buildPatientsHref({
              tab: selectedTab,
              window: '30d',
              q: '',
              sort: 'created',
              dir: 'desc',
              orderStatus: 'all',
            })}
            className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-100"
          >
            Reset
          </Link>
        </form>
        <p className="mt-2 text-xs text-neutral-500">
          Showing users created in the last {activeWindowLabel}
          {query ? ` matching "${query}"` : ''}.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {([
            ['users', 'Users'],
            ['orders', 'Orders'],
            ['activity', 'Staff activity'],
          ] as const).map(([tab, label]) => (
            <Link
              key={tab}
              href={buildPatientsHref({
                tab,
                window: selectedWindow.key,
                q: query,
                sort: selectedSort,
                dir: selectedDir,
                orderStatus: selectedOrderStatus,
              })}
              className={
                selectedTab === tab
                  ? 'rounded-md border border-neutral-900 bg-neutral-900 px-2.5 py-1.5 text-xs font-semibold text-white'
                  : 'rounded-md border border-neutral-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-100'
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {selectedTab === 'orders' ? (
        <section className="mb-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Recent checkouts & orders ({activeWindowLabel})</h2>
          <p className="mt-1 text-xs text-neutral-500">Stripe checkouts and supplement fulfillment activity.</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {orderStatusOptions.map((status) => (
              <Link
                key={status}
                href={buildPatientsHref({
                  tab: 'orders',
                  window: selectedWindow.key,
                  q: query,
                  sort: selectedSort,
                  dir: selectedDir,
                  orderStatus: status,
                })}
                className={
                  selectedOrderStatus === status
                    ? 'rounded-full border border-neutral-900 bg-neutral-900 px-2.5 py-1 text-[11px] font-semibold text-white'
                    : 'rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-100'
                }
              >
                {status === 'all' ? 'All' : humanizeToken(status)}
              </Link>
            ))}
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {filteredRecentOrderItems.map((item) => {
              const isOrder = 'status' in item
              return (
                <li key={item.id} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-medium text-neutral-800">{nameByPatientId.get(item.patientId) ?? item.patientId}</p>
                    <time className="text-[11px] text-neutral-500" dateTime={item.createdAt}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(
                        new Date(item.createdAt)
                      )}
                    </time>
                  </div>
                  <p className="mt-1 text-xs text-neutral-700">
                    {isOrder
                      ? `Order · ${humanizeToken(item.status)} · ${item.stripeCheckoutSessionId}`
                      : `${item.checkoutType}${item.amountLabel ? ` · ${item.amountLabel}` : ''}${item.stripeCheckoutSessionId ? ` · ${item.stripeCheckoutSessionId}` : ''}`}
                  </p>
                  <Link
                    href={`/internal/patients/${item.patientId}`}
                    className="mt-1 inline-block text-[11px] font-medium text-neutral-900 underline-offset-2 hover:underline"
                  >
                    Open case
                  </Link>
                </li>
              )
            })}
          </ul>
          {filteredRecentOrderItems.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500">No checkout/order activity in this window.</p>
          ) : null}
        </section>
      ) : null}

      {selectedTab === 'activity' ? (
        <section className="mb-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-neutral-900">Recent provider/admin actions ({activeWindowLabel})</h2>
          <p className="mt-1 text-xs text-neutral-500">Latest staff-authored timeline activity.</p>
          <ul className="mt-3 space-y-2 text-sm">
            {filteredRecentStaffEvents.map((event) => (
              <li key={event.id} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-medium text-neutral-800">
                    {staffDisplayNameById.get(event.actorUserId) ?? `${event.actorUserId.slice(0, 8)}…`} ·{' '}
                    {humanizeToken(event.eventType)}
                  </p>
                  <time className="text-[11px] text-neutral-500" dateTime={event.createdAt}>
                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(
                      new Date(event.createdAt)
                    )}
                  </time>
                </div>
                <p className="mt-1 text-xs text-neutral-700">{nameByPatientId.get(event.patientId) ?? event.patientId}</p>
                {event.body ? <p className="mt-1 line-clamp-2 text-xs text-neutral-600">{event.body}</p> : null}
                <Link
                  href={`/internal/patients/${event.patientId}`}
                  className="mt-1 inline-block text-[11px] font-medium text-neutral-900 underline-offset-2 hover:underline"
                >
                  Open case
                </Link>
              </li>
            ))}
          </ul>
          {filteredRecentStaffEvents.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500">No staff actions in this window.</p>
          ) : null}
        </section>
      ) : null}

      {selectedTab === 'users' ? (
        <>
          <section className="mb-6 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-neutral-900">Check-ins needing review</h2>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
                {filteredCheckinAlerts.length}
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-500">
              Flags from recent patient treatment check-ins: side effects, poor efficacy, or dose concerns.
            </p>
            {filteredCheckinAlerts.length === 0 ? (
              <p className="mt-3 text-sm text-neutral-500">No flagged check-ins right now.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {filteredCheckinAlerts.slice(0, 20).map((alert) => (
                  <li
                    key={alert.sourceEventId}
                    className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-neutral-900">
                        {nameByPatientId.get(alert.patientId) ?? alert.patientId} · {alert.treatmentLabel}
                      </p>
                      <span
                        className={
                          alert.severity === 'high'
                            ? 'rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-semibold text-red-800'
                            : 'rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800'
                        }
                      >
                        {alert.severity === 'high' ? 'High priority' : 'Review soon'}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-600">{alert.reasons.join(' · ')}</p>
                    <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                      <time className="text-xs text-neutral-500" dateTime={alert.createdAt}>
                        {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                          new Date(alert.createdAt)
                        )}
                      </time>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/internal/patients/${alert.patientId}`}
                          className="text-xs font-medium text-neutral-900 underline-offset-2 hover:underline"
                        >
                          Open case
                        </Link>
                        <MarkCheckinReviewedButton patientId={alert.patientId} sourceEventId={alert.sourceEventId} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                <th className="py-3 pr-4">
                  <Link
                    href={buildPatientsHref({
                      tab: 'users',
                      window: selectedWindow.key,
                      q: query,
                      sort: 'name',
                      dir: selectedSort === 'name' && selectedDir === 'asc' ? 'desc' : 'asc',
                      orderStatus: selectedOrderStatus,
                    })}
                    className="inline-flex items-center gap-1 hover:text-neutral-800"
                  >
                    Name
                    {selectedSort === 'name' ? <span>{selectedDir === 'asc' ? '↑' : '↓'}</span> : null}
                  </Link>
                </th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Phone</th>
                <th className="py-3 pr-4">DOB</th>
                <th className="py-3 pr-4">Program</th>
                <th className="py-3 pr-4">Treatments</th>
                <th className="py-3 pr-4">Workflow status</th>
                <th className="py-3 pr-4">Assignee</th>
                <th className="py-3 pr-4">
                  <Link
                    href={buildPatientsHref({
                      tab: 'users',
                      window: selectedWindow.key,
                      q: query,
                      sort: 'created',
                      dir: selectedSort === 'created' && selectedDir === 'asc' ? 'desc' : 'asc',
                      orderStatus: selectedOrderStatus,
                    })}
                    className="inline-flex items-center gap-1 hover:text-neutral-800"
                  >
                    Created
                    {selectedSort === 'created' ? <span>{selectedDir === 'asc' ? '↑' : '↓'}</span> : null}
                  </Link>
                </th>
                <th className="py-3">Case</th>
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((r) => (
                <tr key={r.id} className="border-b border-neutral-100 bg-white hover:bg-neutral-100/50">
                  <td className="py-3 pr-4 font-medium text-neutral-900">
                    {[r.first_name, r.last_name].filter(Boolean).join(' ') || '—'}
                  </td>
                  <td className="py-3 pr-4">{r.email}</td>
                  <td className="py-3 pr-4 font-mono text-xs">{formatE164UsDisplay(r.phone)}</td>
                  <td className="py-3 pr-4">{formatDob(r.dob)}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                      {humanizeToken(r.primary_program_status)}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    {r.treatment_statuses.length === 0 ? (
                      <span className="text-xs text-neutral-500">—</span>
                    ) : (
                      <div className="flex flex-wrap gap-1">
                        {r.treatment_statuses.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700"
                          >
                            {humanizeToken(s)}
                          </span>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-neutral-200/90 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                      {humanizeToken(r.workflow_status)}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-neutral-700">
                    {r.assignee_display_name ?? (r.assigned_to ? `${r.assigned_to.slice(0, 8)}…` : '—')}
                  </td>
                  <td className="py-3 pr-4 text-neutral-600">
                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'short', timeStyle: 'short' }).format(
                      new Date(r.created_at)
                    )}
                  </td>
                  <td className="py-3">
                    <Link
                      href={`/internal/patients/${r.id}`}
                      className="font-medium text-neutral-900 underline-offset-2 hover:underline"
                    >
                      Timeline & notes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {sortedRows.length === 0 ? (
            <p className="mt-10 text-center text-neutral-500">No patients match this search/window yet.</p>
          ) : null}
        </>
      ) : null}
    </div>
  )
}

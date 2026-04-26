# Patient dashboard v2 (care model)

The patient app at `/dashboard/[patientId]` mirrors the internal **care_programs → treatment_items** model. Program cards link to `/dashboard/[patientId]/programs/[programId]` for a read-only drill-in (treatments, tenure, dosing text, refill request status).

## Dates patients see

| Field | Meaning |
|-------|--------|
| `care_programs.started_at` | When the **program** officially started (best for “how long on this track”). If null, the UI falls back to `created_at`. |
| `treatment_items.started_at` | When this **specific treatment** began (per-medication timeline). If null, the UI falls back to `created_at`. |
| `treatment_items.stopped_at` | Present in schema for ended treatments; patient UI can surface it when you start writing it from clinical tools. |

Relative copy (“N days ago”, “in N days”) is computed in the app from those timestamps.

## “Next refill / check-in” without new columns

Until dedicated scheduling tables exist, the dashboard reads **optional ISO date strings** from `treatment_items.metadata`:

- `next_checkin_at`
- `next_refill_due_at`
- `next_visit_at`

Example:

```json
{
  "next_refill_due_at": "2026-05-01T12:00:00.000Z",
  "next_checkin_at": "2026-04-28T09:00:00.000Z"
}
```

Staff or automation can set these; the patient view formats them with “in X days” / “was X days ago”.

## Structured dosing for the drill-in (`treatment_items.dosage`)

The patient formatter accepts **flexible keys** so prescribers can evolve the schema. Recommended canonical shape for new writes:

```json
{
  "drug_display": "Tirzepatide",
  "strength": { "amount": 12.5, "unit": "mg" },
  "route": "SQ",
  "frequency": "Once weekly",
  "sig": "Inject 12.5 mg subcutaneously once weekly.",
  "cycling": "Escalate per titration schedule in chart.",
  "hold_if": "Hold for persistent nausea/vomiting; contact clinic."
}
```

Aliases also supported (e.g. `drug_name`, flat `dose` / `strength` strings, `patient_instructions`, `stopping_instructions`). Empty `dosage` shows a single friendly placeholder until clinical data is entered.

## Refill queue

`refill_requests` is staff-RLS; the dashboard loads latest status via the **service role** in `getPatientCareOverview`. Status values: `requested`, `under_review`, `approved`, `denied`, `fulfilled`, `cancelled`.

## Auth

Nested routes under `/dashboard/[patientId]/...` require the same **patient portal cookie** or **staff preview** as the main dashboard (`middleware.ts` matches `/dashboard/<uuid>/...`).

## Internal formulary (staff)

`lib/care/medicationCatalog.ts` holds the full formulary (~40 lines: GLP-1s branded/compound, weight adjuncts, ED, hair, hormones, **levothyroxine in mcg** with 40/80/88-style steps, derm, sleep, peptides). Staff use **Formulary prescribing** on `/internal/patients/[patientId]`: each submit creates a **new** `treatment_items` row with structured `dosage`. Optional **Supersede prior treatment** stops the previous row (`stopped` + `stopped_at`) and links `metadata.supersedes_treatment_item_id`. Workflow migration `20260422100000_treatment_item_stop_any_status.sql` adds a wildcard transition so any status can move to `stopped` when superseding.

### 503A / partner handoff (`metadata`)

Staff form also writes:

- **`fulfillment_channel`**: `503a_partner` (default) | `retail_erx_planned` | `internal_only`
- **`rx_supply`**: `{ duration_days: 30|60|90, refills_authorized: 0–11, written_at: ISO }` — day supply **per fill** + refills for fax/portal payloads (not total therapy calendar math).
- **`prescriber`**: `{ display_name, npi (10 digits), phone?, organization_phone? }` — phones are optional free text for now (E164 normalization can come later).

Patient drill-in reads these in `formatDosageForPatient`; internal list uses `formatDosageSummary(dosage, metadata)`.

Full catalog list (Rx + supplements, grouped by domain): `docs/formulary-catalog-v1.md`.

## PDF for fax + chart (v1 plan)

**You do not need to pick “the final format” up front.** Fax vendors and staff workflows almost always accept **PDF**; some also take **TIFF**—same pipeline (binary file + pointer).

### Recommended approach

1. **Keep chart truth structured** — everything you already write on `treatment_items` (dosage, prescriber, NPI, supply, refills). That stays small in Postgres.
2. **Generate a PDF when someone clicks “Download / Send Rx”** (or on first “mark sent”) from that row — server-side render (e.g. React-PDF, PDFKit, or HTML → PDF). Same code path can power **print**, **download**, and **fax API upload**.
3. **Store the file in Supabase Storage** (private bucket, e.g. `rx_artifacts`), **not** as a bytea column. In `treatment_items.metadata.rx_pdf` store only a **pointer**: bucket, `object_path`, `generated_at`, optional `content_sha256`, optional `fax_sent_at` / `fax_to` / `partner_send_id`.
4. **Re-generate** if dosing changes (new `treatment_item` row anyway for titration) — old PDF path can remain for audit or be superseded by a new path.

### Is that “data heavy”?

**No**, relative to clinical volume: typical Rx PDFs are tens–low hundreds of **KB** each. Thousands of PDFs are normal object-storage use; cost is dominated by **total GB** and egress, not row count. Postgres stays light because you store **metadata + URL-like path**, not the PDF body.

Typed helpers: `lib/care/rxArtifact.ts` (`RxPdfArtifactMetadata`, `buildRxPdfArtifactPointer`, `attachRxPdfToMetadata`). Next implementation slice: Storage bucket + staff “Generate Rx PDF” action + signed download URL for staff (and optionally patient if policy allows).

### Current implementation notes

- Bucket + RLS migration: `20260422110000_rx_artifacts_storage.sql` (staff-only read/write).
- Internal case page now has **Generate Rx PDF** per treatment item (staff only).
- Temporary default fax destination is **`248-934-1307`** (`DEFAULT_TEMP_FAX_NUMBER`) and is stamped in artifact metadata until partner routing is finalized.
- Internal case page also has **Prepare send payload** per treatment item:
  - creates a `treatment_orders` row with `status=preparing` under the lifecycle enum introduced in `20260428100000_orders_lifecycle_v1.sql` (legacy `payload_ready` was folded into `preparing`)
  - snapshots shipping from `patients` (no confirmation step)
  - stores dispatch metadata (`dispatch_mode=fax_pdf`, temporary fax number) and logs timeline/audit.

import Link from 'next/link'

export default function DashboardNotFound() {
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-neutral-50 px-6 py-24 text-center text-neutral-900">
      <h1 className="text-xl font-semibold">Status page not found</h1>
      <p className="mt-3 text-neutral-600">
        This link may be wrong or out of date. Use the link from after intake, or start again — we match you by email.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Link
          href="/dashboard"
          className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Help
        </Link>
        <Link
          href="/forms/glp1-intake"
          className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
        >
          Intake
        </Link>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MAIN — Clinician-guided care',
  description: 'Medical weight loss, hormones, and peptides with intake, review, and ongoing support.',
}

export default function Home() {
  return (
    <main className="flex-1 bg-neutral-50">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">MAIN</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Medical care, structured for real life
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              Start with a guided intake. Your care team reviews history and goals, then you get a clear dashboard for
              refills, check-ins, and updates—without losing the thread between visits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/forms/glp1-intake"
                className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
              >
                Start intake
              </Link>
              <Link
                href="/search"
                className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                Search the site
              </Link>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-3 rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 text-sm text-neutral-700 shadow-sm">
            <p className="font-medium text-neutral-900">What you can expect</p>
            <ul className="list-inside list-disc space-y-2 text-neutral-600">
              <li>Secure intake tied to your chart</li>
              <li>Dashboard for reorder readiness and tasks</li>
              <li>Pathways for weight loss, hormones, and more</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h2 className="text-lg font-semibold text-neutral-900">Care pathways</h2>
        <p className="mt-1 text-sm text-neutral-600">Choose the program that fits; each route uses the same clinical intake core.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/forms/glp1-intake"
            className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-300 hover:shadow"
          >
            <h3 className="text-sm font-semibold text-neutral-900 group-hover:underline">GLP-1 weight loss</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              GLP-1 focused intake for medical weight management and follow-up.
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-neutral-800">Start →</span>
          </Link>
          <Link
            href="/care/female-health"
            className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-300 hover:shadow"
          >
            <h3 className="text-sm font-semibold text-neutral-900 group-hover:underline">Female health</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Hormone and wellness goals with clinician review.
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-neutral-800">Learn more →</span>
          </Link>
          <Link
            href="/care/sermorelin"
            className="group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-300 hover:shadow sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-sm font-semibold text-neutral-900 group-hover:underline">Sermorelin &amp; peptides</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600">
              Peptide pathway intake with guided next steps.
            </p>
            <span className="mt-3 inline-block text-xs font-semibold text-neutral-800">Learn more →</span>
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">Shop (coming soon)</h2>
            <p className="mt-1 text-xs text-neutral-600">Supplements and add-ons will appear here as fulfillment goes live.</p>
          </div>
          <Link
            href="/shop/coq10"
            className="shrink-0 rounded-md border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-50"
          >
            View sample product
          </Link>
        </div>
      </section>
    </main>
  )
}

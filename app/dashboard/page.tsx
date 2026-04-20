import Link from 'next/link'

export const metadata = {
  title: 'Your care | MAIN',
  robots: { index: false, follow: false },
}

type Props = {
  searchParams: Promise<{ session?: string }>
}

export default async function DashboardIndexPage({ searchParams }: Props) {
  const sp = await searchParams
  const sessionHint = sp.session === 'required'

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-neutral-50 px-6 py-16 text-neutral-900">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">MAIN</p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight">Your care</h1>
      {sessionHint ? (
        <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          This status page requires a <strong>signed access link</strong> (from your email, intake, or payment
          confirmation). Open the latest link you received, or complete intake again so we can send you a fresh one.
        </p>
      ) : null}
      <p className="mt-4 text-neutral-600">
        After you submit intake, we send you to a <strong>private status page</strong> (bookmark it). If you don’t have
        that link, complete intake again — we’ll match you by email.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/forms/glp1-intake"
          className="inline-flex justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Go to intake
        </Link>
        <Link
          href="/"
          className="inline-flex justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
        >
          Home
        </Link>
      </div>
    </main>
  )
}

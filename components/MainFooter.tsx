'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type FooterLink = { label: string; href: string }

const LEARN_LINKS: FooterLink[] = [
  { label: 'Labs', href: '/labs' },
  { label: 'Weight Loss', href: '/care/weight-loss' },
  { label: 'Sexual Health', href: '/care/sexual-health' },
  { label: 'Hormone Health', href: '/care/hormone-health' },
  { label: 'Hair Loss', href: '/care/hair-loss' },
  { label: 'Mental Health', href: '/care/mental-health' },
  { label: 'Drug Comparisons', href: '/learn/drug-comparisons' },
  { label: 'Drugs & Medications', href: '/learn/drugs-and-medications' },
  { label: 'About MAIN', href: '/about' },
]

const TOOL_LINKS: FooterLink[] = [
  { label: 'BMI Calculator', href: '/tools/bmi-calculator' },
  { label: 'TDEE Calculator', href: '/tools/tdee-calculator' },
  { label: 'Calorie Deficit Calculator', href: '/tools/calorie-deficit-calculator' },
  { label: 'Protein Calculator', href: '/tools/protein-calculator' },
  { label: 'Water Intake Calculator', href: '/tools/water-intake-calculator' },
]

const TREATMENT_LINKS: FooterLink[] = [
  { label: 'GLP-1 Therapy', href: '/care/glp-1-therapy' },
  { label: 'Sildenafil', href: '/care/sildenafil' },
  { label: 'Tadalafil', href: '/care/tadalafil' },
  { label: 'Hair Loss', href: '/care/hair-loss' },
  { label: 'TRT', href: '/care/trt' },
  { label: 'Sermorelin', href: '/care/sermorelin' },
  { label: 'NAD+', href: '/care/nad-plus' },
  { label: 'Minoxidil', href: '/care/minoxidil' },
  { label: 'Finasteride', href: '/care/finasteride' },
  { label: 'Supplements', href: '/care/supplements' },
]

const COMPANY_LINKS: FooterLink[] = [
  { label: 'About MAIN', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Clinical Standards', href: '/clinical-standards' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Quality & Safety', href: '/quality-and-safety' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Investors', href: '/investors' },
  { label: 'Professionals', href: '/professionals' },
  { label: 'Providers', href: '/providers' },
  { label: 'Customer Help Center', href: '/support' },
  { label: 'Press Center', href: '/press' },
]

const CONNECT_LINKS: FooterLink[] = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
]

const LEGAL_LINKS: FooterLink[] = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Sitemap', href: '/sitemap' },
  { label: 'Consumer Health Data Privacy', href: '/consumer-health-data-privacy' },
  { label: 'Your Privacy Choices', href: '/your-privacy-choices' },
]

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-sm text-neutral-300 transition hover:text-white">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({ children }: { children: string }) {
  return <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500">{children}</h3>
}

function MobileAccordionSection({
  title,
  links,
}: {
  title: string
  links: FooterLink[]
}) {
  return (
    <details className="group border-b border-neutral-800 py-3">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-neutral-100">
        {title}
        <span className="text-neutral-400 transition group-open:rotate-45">+</span>
      </summary>
      <div className="pt-3">
        <FooterLinkList links={links} />
      </div>
    </details>
  )
}

export function MainFooter() {
  const pathname = usePathname() ?? ''
  const hideFooter = ['/internal', '/admin', '/api'].some((prefix) => pathname.startsWith(prefix))
  if (hideFooter) return null

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-neutral-800 bg-[#0e1013] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 select-none text-[24vw] font-semibold uppercase leading-none tracking-[0.08em] text-white/5 md:text-[16vw]"
      >
        MAIN
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-14 md:px-8 lg:px-10">
        <div className="hidden gap-8 lg:grid lg:grid-cols-[1.25fr_repeat(4,minmax(0,1fr))]">
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">MAIN</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
              Personalized treatment plans built for long-term health.
            </h2>
            <p className="mt-3 text-sm text-neutral-300">
              Track care, labs, and medication progress in one modern platform.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-500">Featured Experience</p>
              <p className="mt-2 text-sm text-neutral-300">App preview / care guidance visual placeholder</p>
            </div>
          </section>

          <section>
            <SectionHeading>Learn</SectionHeading>
            <div className="mt-4">
              <FooterLinkList links={LEARN_LINKS} />
            </div>
          </section>

          <section>
            <SectionHeading>Tools</SectionHeading>
            <div className="mt-4">
              <FooterLinkList links={TOOL_LINKS} />
            </div>
          </section>

          <section>
            <SectionHeading>Popular Treatments</SectionHeading>
            <div className="mt-4">
              <FooterLinkList links={TREATMENT_LINKS} />
            </div>
          </section>

          <section>
            <SectionHeading>Company / Support</SectionHeading>
            <div className="mt-4">
              <FooterLinkList links={COMPANY_LINKS} />
            </div>
          </section>
        </div>

        <div className="lg:hidden">
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">MAIN</p>
            <h2 className="mt-3 text-xl font-semibold leading-tight text-white">
              Personalized treatment plans built for long-term health.
            </h2>
            <p className="mt-2 text-sm text-neutral-300">Care guidance and app experience, all in one place.</p>
          </section>

          <div className="mt-6">
            <MobileAccordionSection title="Learn" links={LEARN_LINKS} />
            <MobileAccordionSection title="Tools" links={TOOL_LINKS} />
            <MobileAccordionSection title="Popular Treatments" links={TREATMENT_LINKS} />
            <MobileAccordionSection title="Company / Support" links={COMPANY_LINKS} />
            <MobileAccordionSection title="Connect" links={CONNECT_LINKS} />
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6">
          <div className="flex flex-wrap items-center gap-3">
            {CONNECT_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center rounded-full border border-neutral-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-300 transition hover:border-neutral-500 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-xs text-neutral-400">
            <span className="font-semibold text-neutral-300">Trust & compliance:</span> certification and security badge
            placeholder
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="text-xs text-neutral-400 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-5 text-xs text-neutral-500">© {new Date().getFullYear()} MAIN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

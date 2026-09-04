'use client'

import { motion } from 'framer-motion'
import { SearchCheck, Globe, Rocket, ShieldCheck, TrendingUp, ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const services: {
  icon: React.ReactNode
  title: string
  label: string
  description: string
  features: string[]
}[] = [
  {
    icon: <SearchCheck size={22} />,
    title: 'Digital Audit',
    label: 'Know what you actually need.',
    description: 'Before I build anything, I look at what you already have — website, search visibility, performance, UX, content and security — and tell you honestly what’s needed. If a full rebuild isn’t the right answer, I say so.',
    features: [
      'Review of your existing website (if you have one)',
      'Search visibility and SEO check',
      'Performance and Core Web Vitals check',
      'UX, content and security review',
    ],
  },
  {
    icon: <Globe size={22} />,
    title: 'Website Development',
    label: 'Useful design, not just beautiful design.',
    description: 'Design and development that clearly communicates what your business does, is easy to navigate, and works well on mobile and desktop.',
    features: [
      'Custom design — no templates',
      'Mobile and desktop tested',
      'Fast, accessible, and built on a solid technical foundation',
      'Clear content structure and calls to action',
    ],
  },
  {
    icon: <Rocket size={22} />,
    title: 'Launch & Deployment',
    label: 'Ready to work, not just ready to look at.',
    description: 'Proper technical setup so your site works from day one — hosting, security, domain, and the basics search engines expect.',
    features: [
      'Hosting, domain and security setup',
      'SEO basics and Search Console',
      'Analytics set up and verified',
      'Cross-device and cross-browser testing',
    ],
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Monthly Digital Care',
    label: 'A real, ongoing service — not a vague promise.',
    description: 'After launch, I keep your site updated, secure and working properly, so it doesn’t quietly fall behind.',
    features: [
      'Updates and maintenance',
      'Security checks and backups',
      'Performance and analytics monitoring',
      'Small fixes and improvements',
    ],
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Search & Growth',
    label: 'Turning visitors into enquiries.',
    description: 'Ongoing, analytics-driven work to help people find your business and to turn the visitors you already get into enquiries.',
    features: [
      'Search engine optimisation (SEO)',
      'Analytics-driven improvements',
      'Better calls to action',
      'Finding opportunities to increase enquiries',
    ],
  },
]

// One-time project pricing: Audit, then Build + Launch.
const buildLaunchPricing: {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}[] = [
  {
    name: 'Starter',
    price: 'R 8,500',
    description: 'For small businesses and personal brands getting started online.',
    features: [
      'Up to 5 pages',
      'Mobile and desktop tested',
      'Contact form',
      'Hosting, domain and security setup',
      'Basic SEO and Search Console setup',
      '1 month of Digital Care included',
    ],
    cta: 'Start with a Digital Audit',
  },
  {
    name: 'Professional',
    price: 'R 18,500',
    description: 'For growing businesses that need a serious digital presence.',
    features: [
      'Up to 12 pages',
      'CMS integration',
      'Custom animations',
      'Hosting, domain and security setup',
      'Advanced SEO, Search Console and analytics setup',
      '3 months of Digital Care included',
    ],
    cta: 'Start with a Digital Audit',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For established companies requiring complex custom builds.',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'E-commerce integration',
      'Hosting, domain and security setup, built for scale',
      'Priority Digital Care included',
      'Quarterly reviews',
    ],
    cta: 'Talk to Me',
  },
]

// Monthly Digital Care + Growth retainer — priced separately from the one-time work above.
const retainerPricing: {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}[] = [
  {
    name: 'Care',
    price: 'R 950',
    description: 'Keeps your site running safely — updates, backups, and someone watching if something breaks.',
    features: [
      'Updates and maintenance',
      'Security checks and backups',
      'Performance monitoring',
      'Small fixes and improvements',
    ],
  },
  {
    name: 'Care + Grow',
    price: 'R 1,850',
    description: 'Everything in Care, plus ongoing SEO and analytics-driven work to turn visitors into enquiries.',
    features: [
      'Everything in Care',
      'Search engine optimisation (SEO)',
      'Analytics-driven improvements',
      'Better calls to action and enquiry opportunities',
    ],
    highlighted: true,
  },
]

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Services"
          title={"A full digital lifecycle,\nnot a one-off build."}
          subtitle="I look at the bigger picture — whether your business needs a website at all, what it needs to achieve, how people will find it, and how it keeps working after launch."
          className="max-w-3xl"
        />
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-8 border border-white/5 day:border-black/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02] flex flex-col"
            >
              <div className="w-11 h-11 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                {service.icon}
              </div>

              <span className="text-xs font-grotesk font-semibold text-accent uppercase tracking-widest mb-2 block">
                {service.label}
              </span>

              <h3 className="font-grotesk font-bold text-heading text-xl mb-2">{service.title}</h3>

              <p className="text-muted text-sm mb-7 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <ArrowUpRight size={14} className="text-accent flex-shrink-0 rotate-45" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button href="/quote" variant="secondary" className="w-full justify-center" arrow>
                Start with a Digital Audit
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* One-time pricing: Audit, then Build + Launch */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Pricing"
          title="Free Audit, then Build & Launch."
          subtitle="The Digital Audit costs nothing. Build & Launch pricing is below — no hidden fees, no surprises, in South African Rand."
          centered
          className="mb-14"
        />

        {/* Digital Audit — standalone entry point */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl p-8 border border-accent/25 bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] mb-16 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
            <SearchCheck size={24} />
          </div>
          <div className="flex-1">
            <span className="text-xs font-grotesk font-semibold text-accent uppercase tracking-widest mb-1 block">
              Step 1 — free
            </span>
            <h3 className="font-grotesk font-bold text-heading text-xl mb-1">Digital Audit</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">
              A free, no-obligation review of your current digital presence — or, if you don&apos;t have a
              website yet, a conversation about what to build. I&apos;ll tell you honestly what&apos;s working,
              what isn&apos;t, and what&apos;s actually needed, before any design work or pricing conversation
              happens.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
              <li>Website, search visibility &amp; performance review</li>
              <li>UX, content &amp; security review</li>
              <li>Written recommendation</li>
            </ul>
          </div>
          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0">
            <p className="text-2xl font-bold text-heading whitespace-nowrap">Free</p>
            <Button href="/quote" size="sm" arrow>Start the Audit</Button>
          </div>
        </motion.div>

        {/* Build + Launch tiers */}
        <div className="mb-8 text-center">
          <span className="text-xs font-grotesk font-semibold text-accent uppercase tracking-widest">
            Step 2 — one-time
          </span>
          <h3 className="font-grotesk font-bold text-heading text-2xl mt-2">Build &amp; Launch</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {buildLaunchPricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.highlighted
                  ? 'bg-accent/10 border-accent/50 glow-green'
                  : 'border-white/5 day:border-black/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02]'
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block text-xs font-grotesk font-semibold text-accent uppercase tracking-widest mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full w-fit">
                  Most popular
                </span>
              )}
              <h3 className="font-grotesk font-bold text-heading text-xl mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-heading mb-2 mt-3">{plan.price}</p>
              <p className="text-muted text-sm mb-7 leading-relaxed">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <ArrowUpRight size={14} className="text-accent flex-shrink-0 rotate-45" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href="/quote"
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="w-full justify-center"
                arrow
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-8">
          All prices are starting rates. Final quotes depend on scope and complexity, confirmed during the audit.
        </p>
      </section>

      <div className="divider" />

      {/* Monthly Digital Care & Growth retainer — kept visually separate from one-time pricing above */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Ongoing"
          title="Monthly Digital Care & Growth."
          subtitle="After launch, most clients move onto a monthly retainer — the Care and Grow stages of the journey — instead of one-off invoices for every small fix."
          centered
          className="mb-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl border border-accent/30 glow-green bg-gradient-to-br from-accent/[0.08] to-accent/[0.02] p-8 md:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            {retainerPricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  plan.highlighted
                    ? 'border border-accent/40 bg-accent/5'
                    : 'border border-white/10 day:border-black/10'
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block text-xs font-grotesk font-semibold text-accent uppercase tracking-widest mb-3 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full w-fit">
                    Most popular
                  </span>
                )}
                <h4 className="font-grotesk font-bold text-heading text-lg mb-1">{plan.name}</h4>
                <p className="text-2xl font-bold text-heading mb-2">
                  {plan.price}
                  <span className="text-muted text-sm font-normal"> /month</span>
                </p>
                <p className="text-muted text-sm mb-5 leading-relaxed">{plan.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <ArrowUpRight size={14} className="text-accent flex-shrink-0 rotate-45" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full justify-center"
                  arrow
                >
                  Talk about ongoing care
                </Button>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-muted text-sm mt-8 max-w-2xl mx-auto">
          Retainer pricing depends on site size and scope — confirmed after your Digital Audit or Build &amp; Launch project.
        </p>
      </section>
    </>
  )
}

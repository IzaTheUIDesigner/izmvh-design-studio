'use client'

import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Palette, Wrench, ArrowUpRight } from 'lucide-react'
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
    icon: <Globe size={22} />,
    title: 'Website Design & Development',
    label: 'Your online presence, perfected.',
    description: 'High-performance websites built from scratch to match your brand.',
    features: [
      'Custom responsive design — no templates',
      'SEO-optimised HTML structure',
      'Core Web Vitals performance',
      'CMS integration (Sanity, WordPress, Contentful)',
    ],
  },
  {
    icon: <Palette size={22} />,
    title: 'UI/UX Design',
    label: 'Design that thinks.',
    description: 'Research, prototyping, and interfaces people enjoy using.',
    features: [
      'User research and journey mapping',
      'Wireframes and interactive prototypes',
      'Design system and component library',
      'Accessibility (WCAG 2.1) compliance',
    ],
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'E-commerce Development',
    label: 'Sell more, online.',
    description: 'Full-featured online stores built for conversion and scale.',
    features: [
      'Shopify & custom e-commerce builds',
      'Secure payment gateway integration (PayFast, PayGate, Stripe)',
      'Inventory management systems',
      'Mobile-optimised checkout flow',
    ],
  },
  {
    icon: <Wrench size={22} />,
    title: 'Maintenance & Support',
    label: 'Always on, always up-to-date.',
    description: 'Ongoing care to keep your site fast, secure, and current.',
    features: [
      'Monthly CMS and plugin updates',
      'Performance monitoring and optimisation',
      'Security audits and threat monitoring',
      '48-hour response SLA',
    ],
  },
]

const pricing = [
  {
    name: 'Starter',
    price: 'R 8,500',
    description: 'For small businesses and personal brands getting started online.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO setup', '1 month support'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: 'R 18,500',
    description: 'For growing businesses that need a serious digital presence.',
    features: ['Up to 12 pages', 'CMS integration', 'Custom animations', 'Advanced SEO', 'Analytics setup', '3 months support'],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For established companies requiring complex custom builds.',
    features: ['Unlimited pages', 'Custom functionality', 'E-commerce integration', 'Priority support', 'SLA guarantee', 'Quarterly reviews'],
    cta: 'Contact Us',
  },
]

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Services"
          title={"What we do,\nand why it works."}
          subtitle="We specialise in building digital products that combine beautiful design with technical excellence — delivered on time and built to last."
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
                Get a Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Pricing */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Pricing"
          title="Simple, transparent pricing."
          subtitle="No hidden fees. No surprises. Prices in South African Rand."
          centered
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((plan, i) => (
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
          All prices are starting rates. Final quotes depend on scope and complexity.
        </p>
      </section>
    </>
  )
}

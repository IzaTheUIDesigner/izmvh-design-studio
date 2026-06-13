'use client'

import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Palette, Wrench, CheckCircle, ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Website Design & Development',
    subtitle: 'Your online presence, perfected.',
    description:
      'We design and build high-performance websites that look remarkable and convert visitors into customers. Every site is crafted from scratch to match your brand, with a focus on speed, SEO, and seamless user experience.',
    features: [
      'Custom responsive design — no templates',
      'SEO-optimised HTML structure',
      'Core Web Vitals performance',
      'CMS integration (Sanity, WordPress, Contentful)',
      'Analytics and tracking setup',
      'Mobile-first development',
    ],
    benefits: [
      'Position your brand as a credible, professional business',
      'Rank higher in Google search results',
      'Convert more visitors into leads and customers',
    ],
    gradient: 'from-green-dark/30 to-transparent',
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'E-commerce Development',
    subtitle: 'Sell more, online.',
    description:
      'Full-featured online stores designed for conversion and built to scale. Whether you need a Shopify store or a custom-built platform, we handle everything from catalogue to checkout.',
    features: [
      'Shopify & custom e-commerce builds',
      'Secure payment gateway integration (PayFast, PayGate, Stripe)',
      'Inventory management systems',
      'Mobile-optimised checkout flow',
      'Product photography guidance',
      'Order management & reporting',
    ],
    benefits: [
      'Start selling online within weeks, not months',
      'Reduce cart abandonment with optimised UX',
      'Accept payments securely in ZAR and other currencies',
    ],
    gradient: 'from-slate-700/20 to-transparent',
  },
  {
    icon: <Palette size={28} />,
    title: 'UI/UX Design',
    subtitle: 'Design that thinks.',
    description:
      'Thoughtful interfaces that put your users first. We research, prototype, and design digital experiences that are intuitive, accessible, and genuinely enjoyable to use.',
    features: [
      'User research and journey mapping',
      'Wireframes and interactive prototypes',
      'Design system and component library',
      'Figma deliverables',
      'Accessibility (WCAG 2.1) compliance',
      'Usability testing',
    ],
    benefits: [
      'Reduce user friction and increase task completion',
      'Build a consistent visual identity across all touchpoints',
      'Make data-informed design decisions',
    ],
    gradient: 'from-purple-900/20 to-transparent',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Maintenance & Support',
    subtitle: 'Always on, always up-to-date.',
    description:
      'Your website is a living asset that needs ongoing care. Our maintenance plans keep it fast, secure, and current — so you can focus on running your business.',
    features: [
      'Monthly CMS and plugin updates',
      'Performance monitoring and optimisation',
      'Security audits and threat monitoring',
      'Regular offsite backups',
      'Content updates and additions',
      '48-hour response SLA',
    ],
    benefits: [
      'Never worry about your site going down',
      'Stay ahead of security vulnerabilities',
      'Keep your content fresh without technical headaches',
    ],
    gradient: 'from-blue-900/20 to-transparent',
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

      {/* Service Detail Sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-6 mb-28">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className={`bg-white border border-grey-DEFAULT/60 rounded-3xl p-8 md:p-12 overflow-hidden relative`}
          >
            <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${service.gradient} pointer-events-none`} />

            <div className="grid lg:grid-cols-2 gap-10 relative z-10">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-green-DEFAULT/10 border border-green-DEFAULT/20 flex items-center justify-center text-green-light mb-6">
                  {service.icon}
                </div>
                <span className="text-xs font-grotesk font-semibold text-green-light uppercase tracking-widest mb-2 block">
                  {service.subtitle}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-grotesk text-navy-DEFAULT mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-navy-DEFAULT/60 leading-relaxed mb-8">{service.description}</p>
                <Button href="/quote" arrow>Get a Quote</Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-grotesk font-semibold text-navy-DEFAULT text-sm mb-4 uppercase tracking-wide">What&apos;s included</h4>
                  <ul className="space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-navy-DEFAULT/60">
                        <CheckCircle size={14} className="text-green-light mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-grotesk font-semibold text-navy-DEFAULT text-sm mb-4 uppercase tracking-wide">Key benefits</h4>
                  <ul className="space-y-2.5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-navy-DEFAULT/60">
                        <ArrowUpRight size={14} className="text-green-light mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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
                  ? 'bg-green-DEFAULT/10 border-green-DEFAULT/50 glow-green'
                  : 'bg-white border-grey-DEFAULT/60'
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block text-xs font-grotesk font-semibold text-green-light uppercase tracking-widest mb-4 px-3 py-1 bg-green-DEFAULT/10 border border-green-DEFAULT/20 rounded-full w-fit">
                  Most popular
                </span>
              )}
              <h3 className="font-grotesk font-bold text-navy-DEFAULT text-xl mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-navy-DEFAULT mb-2 mt-3">{plan.price}</p>
              <p className="text-navy-DEFAULT/60 text-sm mb-7 leading-relaxed">{plan.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-navy-DEFAULT/60">
                    <CheckCircle size={14} className="text-green-light flex-shrink-0" />
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
        <p className="text-center text-navy-DEFAULT/60 text-sm mt-8">
          All prices are starting rates. Final quotes depend on scope and complexity.
        </p>
      </section>
    </>
  )
}

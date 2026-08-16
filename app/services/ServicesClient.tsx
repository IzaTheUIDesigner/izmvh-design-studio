'use client'

import { motion } from 'framer-motion'
import { Globe, ShoppingBag, Palette, Wrench, ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

type ServiceSize = 'large' | 'tall' | 'small'

const services: {
  icon: React.ReactNode
  title: string
  subtitle: string
  description: string
  shortDescription: string
  tags: string[]
  features: string[]
  benefits: string[]
  size: ServiceSize
}[] = [
  {
    icon: <Globe size={24} />,
    title: 'Website Design & Development',
    subtitle: 'Your online presence, perfected.',
    description:
      'We design and build high-performance websites that look remarkable and convert visitors into customers. Every site is crafted from scratch to match your brand, with a focus on speed, SEO, and seamless user experience.',
    shortDescription: 'High-performance websites built from scratch to match your brand.',
    tags: ['No templates', 'SEO-optimised', 'Mobile-first', 'CMS integration'],
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
    size: 'large',
  },
  {
    icon: <Palette size={20} />,
    title: 'UI/UX Design',
    subtitle: 'Design that thinks.',
    description:
      'Thoughtful interfaces that put your users first. We research, prototype, and design digital experiences that are intuitive, accessible, and genuinely enjoyable to use.',
    shortDescription: 'Research, prototyping, and interfaces people enjoy using.',
    tags: ['Figma deliverables', 'WCAG 2.1', 'Usability testing'],
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
    size: 'tall',
  },
  {
    icon: <ShoppingBag size={18} />,
    title: 'E-commerce Development',
    subtitle: 'Sell more, online.',
    description:
      'Full-featured online stores designed for conversion and built to scale. Whether you need a Shopify store or a custom-built platform, we handle everything from catalogue to checkout.',
    shortDescription: 'Full-featured online stores built for conversion and scale.',
    tags: ['Shopify & custom builds', 'Secure checkout'],
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
    size: 'small',
  },
  {
    icon: <Wrench size={18} />,
    title: 'Maintenance & Support',
    subtitle: 'Always on, always up-to-date.',
    description:
      'Your website is a living asset that needs ongoing care. Our maintenance plans keep it fast, secure, and current — so you can focus on running your business.',
    shortDescription: 'Ongoing care to keep your site fast, secure, and current.',
    tags: ['Security audits', '48-hour SLA'],
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
    size: 'small',
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

const sizeClasses: Record<ServiceSize, string> = {
  large: 'sm:col-span-2 sm:row-span-1',
  tall: 'sm:col-span-1 sm:row-span-2',
  small: 'sm:col-span-1 sm:row-span-1',
}

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

      {/* Service Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:auto-rows-[1fr]">
          {services.map((service, i) => {
            const isLarge = service.size === 'large'
            const isTall = service.size === 'tall'

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden bg-white border border-grey-DEFAULT/60 rounded-3xl flex flex-col ${
                  isLarge ? 'p-8 md:p-10' : 'p-7'
                } ${sizeClasses[service.size]}`}
              >
                {isLarge && (
                  <Globe
                    size={220}
                    strokeWidth={1}
                    className="absolute -right-8 -bottom-10 text-green-DEFAULT/5 pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`rounded-2xl bg-green-DEFAULT/10 border border-green-DEFAULT/20 flex items-center justify-center text-green-light mb-5 ${
                      isLarge ? 'w-14 h-14' : 'w-11 h-11'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <span className="text-xs font-grotesk font-semibold text-green-light uppercase tracking-widest mb-2 block">
                    {service.subtitle}
                  </span>

                  <h3
                    className={`font-bold font-grotesk text-navy-DEFAULT leading-tight mb-3 ${
                      isLarge ? 'text-2xl md:text-3xl' : 'text-lg'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-navy-DEFAULT/60 leading-relaxed mb-5 ${
                      isLarge ? 'max-w-md' : 'text-sm'
                    }`}
                  >
                    {isLarge ? service.description : service.shortDescription}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${isTall ? 'flex-col items-start' : ''} mb-6`}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-green-light bg-green-DEFAULT/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {isLarge ? (
                      <Button href="/quote" arrow>
                        Get a Quote
                      </Button>
                    ) : (
                      <a
                        href="/quote"
                        className="inline-flex items-center gap-1.5 text-sm font-grotesk font-semibold text-green-light hover:gap-2.5 transition-all"
                      >
                        Get a Quote
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
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
                    <ArrowUpRight size={14} className="text-green-light flex-shrink-0 rotate-45" />
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

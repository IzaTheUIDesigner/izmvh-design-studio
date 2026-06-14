'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Globe, ShoppingBag, Wrench, Palette, CheckCircle,
  ArrowUpRight, Zap, Shield, TrendingUp, Star
} from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import ServiceCard from '@/components/ServiceCard'
import PortfolioCard from '@/components/PortfolioCard'
import TestimonialCard from '@/components/TestimonialCard'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const services = [
  {
    icon: <Globe size={22} />,
    title: 'Website Design & Development',
    description: 'High-performance, visually stunning websites built to convert visitors into customers.',
    features: ['Custom responsive design', 'SEO-optimised architecture', 'Performance-first build', 'CMS integration'],
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'E-commerce Development',
    description: 'Full-featured online stores with seamless checkout flows and payment integration.',
    features: ['Shopify & custom builds', 'Payment gateway setup', 'Inventory management', 'Mobile-optimised UX'],
  },
  {
    icon: <Palette size={22} />,
    title: 'UI/UX Design',
    description: 'Thoughtful interfaces that put your users first — elegant, intuitive, and conversion-focused.',
    features: ['User research & mapping', 'Wireframes & prototypes', 'Design system creation', 'Accessibility compliance'],
  },
  {
    icon: <Wrench size={22} />,
    title: 'Maintenance & Support',
    description: 'Ongoing care to keep your website fast, secure, and up-to-date — always.',
    features: ['Monthly updates & patches', 'Performance monitoring', '24h response SLA', 'Content updates'],
  },
]

const projects = [
  const projects = [
  {
    title: 'Harrison Law Firm',
    category: 'Web Design',
    description: 'A professional website for a law firm focused on credibility, trust, and client conversion.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-br from-slate-700 via-slate-800 to-green-dark',
    image: '/images/harrison.png',
  },
  {
    title: 'Northfield E-commerce',
    category: 'E-commerce',
    description: 'Full e-commerce build for Northfield with seamless checkout, inventory management and PayFast integration.',
    tags: ['Shopify', 'Liquid', 'PayFast'],
    gradient: 'bg-gradient-to-br from-rose-900/60 via-slate-800 to-slate-900',
    image: '/images/northfield.png',
  },
  {
    title: 'Thynk Unlimited',
    category: 'Web Design',
    description: 'A modern website for Thynk Unlimited with a focus on brand identity and user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'bg-gradient-to-br from-blue-900/40 via-slate-800 to-slate-900',
    image: '/images/thynkunlimited.png',
  },
]
    category: 'Web Design',
    description: 'A governance and strategic communications platform for an institutional transformation office.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    gradient: 'bg-gradient-to-br from-slate-800 via-slate-900 to-green-dark',
  },
  {
    title: 'EstateView Property',
    category: 'E-commerce',
    description: 'Premium property listings platform with advanced search, virtual tours, and lead capture.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'bg-gradient-to-br from-zinc-800 via-zinc-900 to-slate-900',
  },
  {
    title: 'Nexus Tech Startup',
    category: 'UI/UX Design',
    description: 'Brand identity and product website for a B2B SaaS startup entering the African market.',
    tags: ['Figma', 'Next.js', 'Framer Motion'],
    gradient: 'bg-gradient-to-br from-green-dark via-slate-900 to-zinc-900',
  },
]

const testimonials = [
  {
    quote: "IZMVH completely transformed our online presence. The site they built has directly increased our enquiries by 60%. Exceptional work from start to finish.",
    author: "Thando Nkosi",
    role: "CEO",
    company: "Nkosi Consulting",
  },
  {
    quote: "The attention to detail and communication throughout the project was world-class. Our new e-commerce store looks better than anything our competitors have.",
    author: "Sarah van der Berg",
    role: "Founder",
    company: "Bloom Boutique",
  },
  {
    quote: "They understood our vision immediately and delivered beyond our expectations. Professional, fast, and genuinely invested in our success.",
    author: "Lungelo Dlamini",
    role: "Marketing Director",
    company: "Apex Group",
  },
]

const process = [
  { title: 'Discovery', desc: 'We dig deep into your goals, audience, and competitors to form a strategic brief.' },
  { title: 'Design', desc: 'Custom UI concepts built around your brand — refined until they are exactly right.' },
  { title: 'Build', desc: 'Production-grade development with performance, SEO, and accessibility baked in.' },
  { title: 'Launch', desc: 'Full deployment, testing, and handover — with ongoing support available from day one.' },
]

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3×', label: 'Avg. traffic increase' },
  { value: '48h', label: 'Response guarantee' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-DEFAULT/10 border border-green-DEFAULT/25 rounded-full mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-light animate-pulse" />
              <span className="text-xs font-grotesk font-semibold text-green-light uppercase tracking-widest">
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-DEFAULT leading-[1.06] tracking-tight mb-7"
            >
              Designing Digital{' '}
              <span className="text-gradient-green">Experiences</span>{' '}
              That Grow Businesses.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-navy-DEFAULT/60 text-xl leading-relaxed mb-10 max-w-2xl"
            >
              We create modern websites, e-commerce solutions, and provide ongoing maintenance
              that helps businesses thrive online.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.33 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href="/quote" size="lg" arrow>
                Get a Quote
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex items-center gap-6 mt-12"
            >
              <div className="flex -space-x-2">
                {['T', 'S', 'L', 'A'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-green-dark border-2 border-black flex items-center justify-center text-green-light text-xs font-bold font-grotesk"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-navy-DEFAULT/60">Trusted by 50+ businesses</p>
              </div>
            </motion.div>
          </div>

          {/* Floating cards — right side desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 w-72"
          >
            {[
              { label: 'New enquiry', sub: 'Property website — just now', color: 'bg-green-DEFAULT' },
              { label: '↑ 142% traffic', sub: 'Nkosi Consulting · this month', color: 'bg-blue-600' },
              { label: 'Site deployed ✓', sub: 'Bloom Boutique · 2 min ago', color: 'bg-purple-600' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.15 }}
                className="bg-white/80 backdrop-blur-sm border border-grey-DEFAULT/60 rounded-xl p-4 glow-green-sm"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${card.color}`} />
                  <div>
                    <p className="text-navy-DEFAULT text-sm font-medium">{card.label}</p>
                    <p className="text-navy-DEFAULT/60 text-xs">{card.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="py-16 border-y border-grey-DEFAULT/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="text-4xl font-bold font-grotesk text-navy-DEFAULT mb-1">{s.value}</p>
                <p className="text-navy-DEFAULT/60 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IZMVH ────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionHeading
            label="Why IZMVH"
            title={"Built to perform.\nNot just look good."}
            subtitle="We combine sharp design thinking with technical precision to build digital products that create real business outcomes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: <Zap size={18} />, title: 'Performance-first', desc: 'Every site is optimised for Core Web Vitals from day one.' },
              { icon: <Shield size={18} />, title: 'Security by default', desc: 'SSL, hardened configs, and best-practice auth on every build.' },
              { icon: <TrendingUp size={18} />, title: 'Growth-oriented', desc: 'SEO and analytics built in — not bolted on after launch.' },
              { icon: <CheckCircle size={18} />, title: 'Ongoing partnership', desc: 'We stay with you after launch. Your success is our success.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-grey-DEFAULT/60 rounded-xl p-5 hover:border-green-DEFAULT/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-green-DEFAULT/10 border border-green-DEFAULT/20 flex items-center justify-center text-green-light mb-4">
                  {item.icon}
                </div>
                <h3 className="font-grotesk font-semibold text-navy-DEFAULT text-sm mb-1.5">{item.title}</h3>
                <p className="text-navy-DEFAULT/60 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Services"
          title="Everything your business needs online."
          subtitle="From initial concept through to long-term maintenance — we handle the full digital lifecycle."
          centered
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button href="/services" variant="secondary" size="lg" arrow>
            All Services
          </Button>
        </div>
      </section>

      <div className="divider" />

      {/* ── PORTFOLIO ────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <SectionHeading
            label="Portfolio"
            title={"Recent work\nthat speaks for itself."}
          />
          <Button href="/portfolio" variant="ghost" arrow>
            View all projects
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <PortfolioCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="Clients who trusted us."
          centered
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} {...t} index={i} />
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Process"
          title="How we work."
          subtitle="A clear, collaborative process that keeps you informed and in control at every stage."
          centered
          className="mb-16"
        />
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-green-DEFAULT/30 to-transparent" />
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center px-6 py-8 relative"
            >
              <div className="w-14 h-14 rounded-full bg-green-dark border border-green-DEFAULT/30 flex items-center justify-center mx-auto mb-5 relative z-10">
                <span className="font-grotesk font-bold text-green-light text-sm">0{i + 1}</span>
              </div>
              <h3 className="font-grotesk font-semibold text-navy-DEFAULT text-lg mb-2">{step.title}</h3>
              <p className="text-navy-DEFAULT/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-navy-DEFAULT/80 border border-green-DEFAULT/25 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden glow-green"
        >
          <div className="absolute inset-0 bg-green-glow opacity-30 pointer-events-none" />
          <span className="inline-block font-grotesk text-xs font-semibold uppercase tracking-widest text-green-light mb-5 px-3 py-1 bg-green-DEFAULT/10 border border-green-DEFAULT/20 rounded-full">
            Start your project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-DEFAULT leading-tight tracking-tight mb-5">
            Ready to build something{' '}
            <span className="text-gradient-green">remarkable?</span>
          </h2>
          <p className="text-navy-DEFAULT/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll put together a tailored proposal within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/quote" size="lg" arrow>
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us first
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}

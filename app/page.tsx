'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import {
  Globe, ShoppingBag, Wrench, Palette, CheckCircle,
  Zap, Shield, TrendingUp
} from 'lucide-react'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import ServiceCard from '@/components/ServiceCard'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

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

const process = [
  { title: 'Discovery', desc: 'We dig deep into your goals, audience, and competitors to form a strategic brief.' },
  { title: 'Design', desc: 'Custom UI concepts built around your brand — refined until they are exactly right.' },
  { title: 'Build', desc: 'Production-grade development with performance, SEO, and accessibility baked in.' },
  { title: 'Launch', desc: 'Full deployment, testing, and handover — with ongoing support available from day one.' },
]

export default function HomePage() {
  const processRef = useRef<HTMLElement>(null)
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start 85%', 'end 55%'],
  })
  const processLineScale = useTransform(processProgress, [0, 1], [0, 1])

  return (
    <>
      <Hero />

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
                className="border border-white/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02] rounded-xl p-5 hover:border-accent/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="font-grotesk font-semibold text-heading text-sm mb-1.5">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
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

      <Projects />

      <div className="divider" />

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section ref={processRef} className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Process"
          title="How we work."
          subtitle="A clear, collaborative process that keeps you informed and in control at every stage."
          centered
          className="mb-16"
        />
        <div className="grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line: static track + scroll-drawn accent fill */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" />
          <motion.div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-accent origin-left"
            style={{ scaleX: processLineScale }}
          />
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center px-6 py-8 relative"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5 relative z-10">
                <span className="font-grotesk font-bold text-accent text-sm">0{i + 1}</span>
              </div>
              <h3 className="font-grotesk font-semibold text-heading text-lg mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
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
          className="max-w-4xl mx-auto text-muted border border-accent/25 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden glow-green"
        >
          <div className="absolute inset-0 bg-accent-glow opacity-30 pointer-events-none" />
          <span className="inline-block font-grotesk text-xs font-semibold uppercase tracking-widest text-accent mb-5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
            Start your project
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-heading leading-tight tracking-tight mb-5">
            Ready to build something{' '}
            <span className="text-gradient-green">remarkable?</span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
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

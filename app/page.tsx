'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FeaturedWork from '@/components/sections/FeaturedWork'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/Button'

const services = [
  {
    title: 'Digital Audit',
    description: 'A clear look at your website, search visibility, performance and security — so you know exactly what you need.',
  },
  {
    title: 'Website Development',
    description: 'A site that clearly explains what your business does, works well on any device, and loads fast.',
  },
  {
    title: 'Launch & Deployment',
    description: 'Hosting, security, domain, SEO basics and analytics set up properly — so your site is ready to work.',
  },
  {
    title: 'Monthly Digital Care',
    description: 'Ongoing updates, backups, security checks and small fixes, so your site stays reliable.',
  },
  {
    title: 'Search & Growth',
    description: 'SEO, analytics and stronger calls to action — turning visitors into enquiries.',
  },
]

const process = [
  { title: 'Digital Audit', desc: 'I review your existing site, search visibility, performance and security to find out what you actually need — before building anything.' },
  { title: 'Build', desc: 'A site that explains what you do clearly, works well on mobile and desktop, and is fast and well-built underneath.' },
  { title: 'Launch', desc: 'Proper technical setup — hosting, security, SEO basics, analytics — so your site is ready to work, not just ready to look at.' },
  { title: 'Care', desc: 'Ongoing updates, maintenance, security checks and backups, so your site stays reliable long after launch.' },
  { title: 'Grow', desc: 'SEO, analytics-driven improvements and stronger calls to action — finding ways to turn visitors into enquiries.' },
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

      <div className="divider max-w-7xl mx-auto" />

      <FeaturedWork />

      <div className="divider max-w-7xl mx-auto" />

      <About />

      <div className="divider max-w-7xl mx-auto" />

      {/* ── SERVICES (numbered journey) ──────────────────────── */}
      <section className="py-section max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Services"
          title="How I help your business grow online."
          subtitle="A full digital lifecycle — audit, build, launch, care and growth — not just a one-off build."
          className="mb-16"
        />
        <div>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="grid md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-baseline md:items-center py-8 border-t border-white/10 day:border-black/10 last:border-b">
                <span className="font-grotesk text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-grotesk font-semibold text-xl text-heading mb-1">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xl">{s.description}</p>
                </div>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1.5 text-sm text-heading font-medium hover:text-accent transition-colors whitespace-nowrap"
                >
                  Learn more
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section id="process" ref={processRef} className="py-section max-w-7xl mx-auto px-6">
        <SectionHeading
          label="How I Work"
          title="Audit → Build → Launch → Care → Grow."
          subtitle="A clear process that starts with a look at what you already have, and keeps going after launch."
          centered
          className="mb-16"
        />
        <div className="grid md:grid-cols-5 gap-0 relative">
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-white/10 day:bg-black/10" />
          <motion.div
            className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-accent origin-left"
            style={{ scaleX: processLineScale }}
          />
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="text-center px-6 py-6 relative">
              <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-5 relative z-10 bg-dark">
                <span className="font-grotesk font-semibold text-accent text-sm">0{i + 1}</span>
              </div>
              <h3 className="font-grotesk font-semibold text-heading text-lg mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>
        <p className="text-muted text-sm text-center max-w-xl mx-auto mt-10">
          It doesn&apos;t stop at Grow. Most of my clients stay in Care and Grow long-term, and I
          revisit the audit as their business changes.
        </p>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-section px-6">
        <Reveal className="max-w-4xl mx-auto text-center">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
            No obligation
          </span>
          <h2 className="text-statement font-semibold text-heading leading-tight tracking-tight mb-6">
            Ready to see what your site actually needs?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Tell me about your business and I&apos;ll start with a digital audit — clear findings, no generic pitch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/quote" size="lg" arrow>
              Start with a Digital Audit
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to me first
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  )
}

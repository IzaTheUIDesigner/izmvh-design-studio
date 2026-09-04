'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { SearchCheck, Globe, Rocket, ShieldCheck, TrendingUp } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Journey from '@/components/sections/Journey'
import Projects from '@/components/sections/Projects'
import ServiceCard from '@/components/ServiceCard'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const services = [
  {
    icon: <SearchCheck size={22} />,
    title: 'Digital Audit',
    description: 'A clear look at your website, search visibility, performance and security — so you know exactly what you need.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Website Development',
    description: 'A site that clearly explains what your business does, works well on any device, and loads fast.',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Launch & Deployment',
    description: 'Hosting, security, domain, SEO basics and analytics set up properly — so your site is ready to work.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Monthly Digital Care',
    description: 'Ongoing updates, backups, security checks and small fixes, so your site stays reliable.',
  },
  {
    icon: <TrendingUp size={22} />,
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

      <About />

      <div className="divider" />

      <Journey />

      <div className="divider" />

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Services"
          title="How I help your business grow online."
          subtitle="A full digital lifecycle — audit, build, launch, care and growth — not just a one-off build."
          centered
          className="mb-16"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <section id="process" ref={processRef} className="py-28 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="How I Work"
          title="Audit → Build → Launch → Care → Grow."
          subtitle="A clear process that starts with a look at what you already have, and keeps going after launch."
          centered
          className="mb-16"
        />
        <div className="grid md:grid-cols-5 gap-0 relative">
          {/* Connecting line: static track + scroll-drawn accent fill */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-white/10 day:bg-black/10" />
          <motion.div
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-accent origin-left"
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
        <p className="text-muted text-sm text-center max-w-xl mx-auto mt-6">
          It doesn&apos;t stop at Grow. Most of my clients stay in Care and Grow long-term, and I
          revisit the audit as their business changes.
        </p>
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
            No obligation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-heading leading-tight tracking-tight mb-5">
            Ready to see what your site{' '}
            <span className="text-gradient-green">actually needs?</span>
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
        </motion.div>
      </section>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgb(var(--accent-rgb) / 0.08) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <span className="inline-block font-grotesk text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
          Iza Vuyo Mehlomane · IZMVH Design Studio
        </span>
        <h1 className="text-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
          Your digital presence should do more than exist.
        </h1>
        <p className="text-muted text-lg md:text-xl mb-10 leading-relaxed">
          I help businesses build, manage and grow their digital presence — from digital
          audits and website builds through to launch, ongoing care, and search visibility.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/quote" size="lg" arrow>
            Start with a Digital Audit
          </Button>
          <Button href="#process" variant="secondary" size="lg">
            See how I work
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/Button'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        <Reveal immediate duration={0.8}>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-8">
            Iza Vuyo Mehlomane — IZMVH Design Studio
          </span>
        </Reveal>

        <Reveal immediate duration={0.9} delay={0.1}>
          <h1 className="text-statement-lg font-semibold text-heading mb-10 max-w-4xl">
            Your digital presence should do more than exist.
          </h1>
        </Reveal>

        <Reveal immediate duration={0.8} delay={0.25}>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-12">
            I help businesses build, manage and grow their digital presence — from
            digital audits and website builds through to launch, ongoing care, and
            search visibility.
          </p>
        </Reveal>

        <Reveal immediate duration={0.7} delay={0.4}>
          <div className="flex flex-wrap items-center gap-8">
            <Button href="/quote" size="lg" arrow>
              Start with a Digital Audit
            </Button>
            <Link
              href="#process"
              className="text-sm font-medium text-heading border-b border-transparent hover:border-accent transition-colors duration-300"
            >
              See how I work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

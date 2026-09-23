'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'
import ImageFrame from '@/components/ImageFrame'

export default function About() {
  return (
    <section id="about" className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <ImageFrame
            src="/images/unsplash/about-workspace.webp"
            alt="A calm, minimal design workspace — desk, laptop and natural light"
            aspect="aspect-[4/5]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
            About
          </span>
          <p className="text-heading text-2xl md:text-3xl leading-snug tracking-tight mb-8 max-w-lg">
            I don&apos;t just build websites. I help businesses build, manage, improve
            and grow their digital presence — working solo, directly with a small
            number of clients at a time.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-accent transition-colors"
          >
            More about me
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

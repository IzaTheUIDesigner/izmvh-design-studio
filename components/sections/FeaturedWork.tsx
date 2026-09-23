'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'
import Reveal, { EASE } from '@/components/motion/Reveal'
import { getVisibleProjects } from '@/lib/projects'

const featured = getVisibleProjects().slice(0, 4)

function FeaturedRow({ project, index }: { project: (typeof featured)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-40, 40])
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 md:py-20 border-t border-white/10 day:border-black/10 ${
        reversed ? '' : ''
      }`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden bg-surface group ${reversed ? 'md:order-2' : ''}`}>
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-0"
        >
          <motion.div style={{ y }} className="absolute inset-0 -top-10 -bottom-10">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="img-hover-scale object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-surface">
                <span className="text-muted text-sm">Preview coming soon</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <Reveal className={reversed ? 'md:order-1' : ''}>
        <span className="block font-grotesk text-sm text-accent mb-4">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold text-heading tracking-tight mb-3">
          {project.title}
        </h3>
        <span className="block text-xs uppercase tracking-widest text-muted mb-4">
          {project.category}
        </span>
        <p className="text-muted leading-relaxed mb-6 max-w-md">{project.description}</p>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-accent transition-colors"
          >
            Visit Live Site <ArrowUpRight size={14} />
          </a>
        ) : (
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-accent transition-colors"
          >
            View Case Study <ArrowUpRight size={14} />
          </Link>
        )}
      </Reveal>
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-section max-w-7xl mx-auto px-6">
      <SectionHeading
        label="Featured Work"
        title="A few recent projects."
        subtitle="A mix of real client work and concept builds — each one designed and developed from scratch."
        className="mb-4"
      />

      <div>
        {featured.map((project, i) => (
          <FeaturedRow key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="pt-4">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-accent transition-colors"
        >
          See all work
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}

'use client'

import { forwardRef, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const categories = ['All', 'Web Design', 'E-commerce', 'UI/UX', 'EdTech']

const projects = [
  {
    id: 0,
    title: 'CampusOrbit',
    category: 'EdTech',
    duration: 'Ongoing',
    description:
      'A multi-tenant venue and event management SaaS platform built for South African public universities. Features AI-driven scheduling, sustainability analytics, and white-label deployment across 26 institutions.',
    tags: ['Next.js', 'PostgreSQL', 'Node.js'],
    image: '',
  },
  {
    id: 1,
    title: 'Harrison Law Firm',
    category: 'Web Design',
    duration: 'Concept',
    description: 'A concept website for a law firm brand, designed around credibility, trust, and conversion-focused UX.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/harrison.png',
  },
  {
    id: 2,
    title: 'Northfield E-commerce',
    category: 'E-commerce',
    duration: 'Concept',
    description: 'A concept e-commerce build with seamless checkout, inventory management, and PayFast integration.',
    tags: ['Shopify', 'Liquid', 'PayFast'],
    image: '/images/northfield.png',
  },
  {
    id: 3,
    title: 'Thynk Unlimited',
    category: 'Web Design',
    duration: 'Concept',
    description: 'A concept website exploring brand identity and user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/thynkunlimited.png',
  },
  {
    id: 4,
    title: 'Audi Website Redesign',
    category: 'UI/UX',
    duration: 'Concept',
    description:
      'A conceptual redesign of the Audi website featuring modern UI patterns, smooth animations, and an elevated digital showroom experience.',
    tags: ['Figma', 'Next.js', 'Framer Motion'],
    image: '/images/uiux.png',
  },
]

const ProjectCard = forwardRef<HTMLDivElement, { project: (typeof projects)[number]; index: number }>(
  function ProjectCard({ project, index }, ref) {
  const imageFrameRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imageFrameRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24])

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative border border-white/5 day:border-black/5 bg-surface rounded-2xl overflow-hidden transition-colors hover:border-accent/30"
    >
      <Link href="/portfolio" className="absolute inset-0 z-10" aria-label={`View ${project.title} case study`} />

      <div ref={imageFrameRef} className="relative overflow-hidden h-52">
        {project.image ? (
          <motion.div
            style={{ y: imageY, top: '-24px', height: 'calc(100% + 48px)' }}
            className="absolute inset-x-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
            <span className="text-muted text-sm">Preview coming soon</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-1">{project.category}</span>
          <h4 className="text-heading font-semibold text-lg">{project.title}</h4>
        </div>

        <span
          aria-hidden
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark/60 border border-white/10 flex items-center justify-center text-heading opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowUpRight size={15} />
        </span>
      </div>

      <div className="p-5">
        <p className="text-muted text-xs leading-relaxed mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-white/5 day:bg-black/5 text-muted">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[11px] text-muted whitespace-nowrap ml-2">{project.duration}</span>
        </div>
      </div>
    </motion.div>
  )
})

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-28 max-w-7xl mx-auto px-6">
      <SectionHeading
        label="Portfolio"
        title="Portfolio"
        subtitle="A selection of real and concept projects across web design, e-commerce, UI/UX, and EdTech."
        centered
        className="mb-12"
      />

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              active === cat
                ? 'bg-accent text-black'
                : 'border border-white/10 day:border-black/10 text-muted hover:text-heading hover:border-accent/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex justify-center mt-14">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 day:border-black/10 text-heading text-sm font-medium transition-colors hover:border-accent/40"
        >
          View full portfolio
          <ArrowUpRight size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  )
}

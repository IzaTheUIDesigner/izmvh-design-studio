'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const categories = ['All', 'Web Design', 'E-commerce', 'UI/UX', 'EdTech', 'Template Customization']

const projects: {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  gradient: string
  image: string
  duration: string
  link?: string
}[] = [
  {
    id: 0,
    title: 'CampusOrbit',
    category: 'EdTech',
    description: 'A multi-tenant venue and event management SaaS platform built for South African public universities. Features AI-driven scheduling, sustainability analytics, and white-label deployment across 26 institutions.',
    tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Railway', 'Vercel'],
    gradient: 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900',
    image:'',
    duration: 'Ongoing',
  },
  {
    id: 1,
    title: 'Harrison Law Firm',
    category: 'Web Design',
    description: 'A concept website for a law firm brand, designed around credibility, trust, and conversion-focused UX.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900',
    image: '/images/harrison.png',
    duration: 'Concept',
  },
  {
    id: 2,
    title: 'Northfield E-commerce',
    category: 'E-commerce',
    description: 'A concept e-commerce build with seamless checkout, inventory management, and PayFast integration.',
    tags: ['Shopify', 'Liquid', 'PayFast', 'Custom Theme'],
    gradient: 'bg-gradient-to-br from-rose-900/60 via-slate-800 to-slate-900',
    image: '/images/northfield.png',
    duration: 'Concept',
  },
  {
    id: 3,
    title: 'Loom & Line',
    category: 'Template Customization',
    description: 'A licensed Envato template rebuilt end-to-end for a fictional interior design studio — full rebrand, rewritten copy, 200+ placeholder images replaced with real photography, and a new palette and type system.',
    tags: ['HTML5', 'Bootstrap 4', 'jQuery', 'Rebrand'],
    gradient: 'bg-gradient-to-br from-orange-950/40 via-slate-800 to-slate-900',
    image: '/images/loomandline.png',
    duration: 'Concept',
    link: 'https://loom-and-line-kappa.vercel.app',
  },
  {
    id: 4,
    title: 'Audi Website Redesign',
    category: 'UI/UX',
    description: 'A conceptual redesign of the Audi website featuring modern UI patterns, smooth animations, and an elevated digital showroom experience.',
    tags: ['Figma', 'Next.js', 'Framer Motion', 'UI Redesign'],
    gradient: 'bg-gradient-to-br from-zinc-800 via-slate-800 to-slate-900',
    image: '/images/uiux.png',
    duration: 'Concept',
  },
]

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title={"Work that\ndefines the standard."}
          subtitle="A selection of projects across web design, e-commerce, EdTech, and brand identity. Every project is unique — built from scratch, never from a template."
          className="max-w-3xl mb-12"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-black glow-green-sm'
                  : 'border border-white/10 day:border-black/10 text-muted hover:text-heading hover:border-white/20 day:hover:border-black/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group border border-white/5 day:border-black/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02] rounded-2xl overflow-hidden card-hover"
              >
                <div className={`h-52 relative overflow-hidden ${project.gradient}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/40 text-sm font-grotesk">Preview coming soon</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-grotesk font-semibold uppercase tracking-widest text-accent">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted">{project.duration}</span>
                  </div>
                  <h3 className="font-grotesk font-bold text-xl text-heading mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-white/5 day:bg-black/5 border border-white/10 day:border-black/10 rounded-full text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted font-medium group-hover:text-accent group-hover:gap-2.5 transition-all"
                    >
                      Visit Live Site <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-1.5 text-sm text-muted font-medium group-hover:text-accent group-hover:gap-2.5 transition-all">
                      View Case Study <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto border border-white/5 day:border-black/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02] rounded-3xl p-12 text-center glow-green">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Want to see your project here?
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            Let&apos;s build something you&apos;re proud to show off.
          </p>
          <Button href="/quote" size="lg" arrow>
            Start with a Digital Audit
          </Button>
        </div>
      </section>
    </>
  )
}

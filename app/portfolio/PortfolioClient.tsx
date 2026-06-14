'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const categories = ['All', 'Web Design', 'E-commerce', 'UI/UX', 'EdTech']

const projects = [
  {
    id: 0,
    title: 'CampusOrbit',
    category: 'EdTech',
    description: 'A multi-tenant venue and event management SaaS platform built for South African public universities. Features AI-driven scheduling, sustainability analytics, and white-label deployment across 26 institutions.',
    tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Railway', 'Vercel'],
    gradient: 'bg-gradient-to-br from-green-900/60 via-slate-800 to-slate-900',
    image: '/images/uiux.png',
    result: 'Targeting 26 SA public universities',
    duration: 'Ongoing',
  },
  {
    id: 1,
    title: 'Harrison Law Firm',
    category: 'Web Design',
    description: 'A professional website for a law firm focused on credibility, trust, and client conversion.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-br from-slate-700 via-slate-800 to-green-dark',
    image: '/images/harrison.png',
    result: 'Professional online presence',
    duration: '4 weeks',
  },
  {
    id: 2,
    title: 'Northfield E-commerce',
    category: 'E-commerce',
    description: 'Full e-commerce build for Northfield with seamless checkout, inventory management and PayFast integration.',
    tags: ['Shopify', 'Liquid', 'PayFast', 'Custom Theme'],
    gradient: 'bg-gradient-to-br from-rose-900/60 via-slate-800 to-slate-900',
    image: '/images/northfield.png',
    result: 'Full online store launched',
    duration: '5 weeks',
  },
  {
    id: 3,
    title: 'Thynk Unlimited',
    category: 'Web Design',
    description: 'A modern website for Thynk Unlimited with a focus on brand identity and user experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'bg-gradient-to-br from-blue-900/40 via-slate-800 to-slate-900',
    image: '/images/thynkunlimited.png',
    result: 'Brand presence established',
    duration: '3 weeks',
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
                  ? 'bg-green-DEFAULT text-white glow-green-sm'
                  : 'bg-white border border-grey-DEFAULT/60 text-navy-DEFAULT/60 hover:text-navy-DEFAULT'
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
                className="group bg-white border border-grey-DEFAULT/60 rounded-2xl overflow-hidden card-hover"
              >
                <div className={`h-52 relative overflow-hidden ${project.gradient}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top absolute inset-0"
                      style={{ zIndex: 1 }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/40 text-sm font-grotesk">Preview coming soon</span>
                    </div>
                  )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-grotesk font-semibold uppercase tracking-widest text-green-DEFAULT">
                      {project.category}
                    </span>
                    <span className="text-xs text-navy-DEFAULT/60">{project.duration}</span>
                  </div>
                  <h3 className="font-grotesk font-bold text-xl text-navy-DEFAULT mb-2 group-hover:text-green-DEFAULT transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-navy-DEFAULT/60 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-grey-DEFAULT border border-grey-DEFAULT/60 rounded-full text-navy-DEFAULT/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-sm text-navy-DEFAULT/40 font-medium group-hover:text-green-DEFAULT group-hover:gap-2.5 transition-all">
                    View Case Study <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-white border border-green-DEFAULT/20 rounded-3xl p-12 text-center glow-green">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-DEFAULT mb-4">
            Want to see your project here?
          </h2>
          <p className="text-navy-DEFAULT/60 mb-8 leading-relaxed">
            Let&apos;s build something you&apos;re proud to show off.
          </p>
          <Button href="/quote" size="lg" arrow>
            Start a Project
          </Button>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Globe, ShoppingBag, Palette } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const categories = ['All', 'Web Design', 'E-commerce', 'UI/UX']

const projects = [
  {
    id: 1,
    title: 'Transformation Office',
    category: 'Web Design',
    description: 'A governance communications platform for an institutional transformation office. Focused on clarity, accessibility, and document management.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    gradient: 'bg-gradient-to-br from-slate-700 via-slate-800 to-green-dark',
    result: '↑ 80% increase in document downloads',
    duration: '6 weeks',
  },
  {
    id: 2,
    title: 'EstateView Property',
    category: 'Web Design',
    description: 'Premium property listings platform with advanced search filters, virtual tour integration, and a lead capture pipeline for real estate agents.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
    gradient: 'bg-gradient-to-br from-zinc-700 via-zinc-800 to-slate-900',
    result: '3× increase in qualified enquiries',
    duration: '10 weeks',
  },
  {
    id: 3,
    title: 'Bloom Boutique Store',
    category: 'E-commerce',
    description: 'Full Shopify build for a premium lifestyle boutique, with custom theme development, product photography art direction, and PayFast integration.',
    tags: ['Shopify', 'Liquid', 'PayFast', 'Custom Theme'],
    gradient: 'bg-gradient-to-br from-rose-900/60 via-slate-800 to-slate-900',
    result: 'R 120k revenue in first 3 months',
    duration: '5 weeks',
  },
  {
    id: 4,
    title: 'Nexus Tech Startup',
    category: 'UI/UX',
    description: 'Brand identity and product website for a B2B SaaS startup entering the African market. Includes full design system and Figma component library.',
    tags: ['Figma', 'Next.js', 'Framer Motion', 'Design System'],
    gradient: 'bg-gradient-to-br from-green-dark via-slate-900 to-zinc-900',
    result: 'Secured seed funding 4 weeks post-launch',
    duration: '8 weeks',
  },
  {
    id: 5,
    title: 'Apex Group Website',
    category: 'Web Design',
    description: 'Multi-division corporate website for a diversified holding company. Built with enterprise-grade CMS, multi-language support, and investor relations portal.',
    tags: ['Next.js', 'Contentful', 'TypeScript', 'i18n'],
    gradient: 'bg-gradient-to-br from-blue-900/40 via-slate-800 to-slate-900',
    result: '↑ 200% organic traffic in 60 days',
    duration: '12 weeks',
  },
  {
    id: 6,
    title: 'Nkosi Consulting Brand',
    category: 'UI/UX',
    description: 'Full brand identity redesign and website for a professional services consultancy. Research-led approach with executive-level design quality.',
    tags: ['Figma', 'Webflow', 'Brand Identity', 'Motion Design'],
    gradient: 'bg-gradient-to-br from-amber-900/30 via-slate-800 to-slate-900',
    result: '60% more inbound leads post-launch',
    duration: '7 weeks',
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
      {/* Hero */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title={"Work that\ndefines the standard."}
          subtitle="A selection of projects across web design, e-commerce, and brand identity. Every project is unique — built from scratch, never from a template."
          className="max-w-3xl mb-12"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-green-DEFAULT text-navy-DEFAULT glow-green-sm'
                  : 'bg-white border border-grey-DEFAULT/60 text-navy-DEFAULT/60 hover:text-navy-DEFAULT hover:border-grey-subtle'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
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
                {/* Visual */}
                <div className={`h-52 relative overflow-hidden ${project.gradient}`}>
                  {/* Browser chrome */}
                  <div className="absolute top-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400/70" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                      <div className="w-2 h-2 rounded-full bg-green-400/70" />
                      <div className="ml-2 h-1.5 bg-white/10 rounded-full flex-1" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-white/20 rounded-full w-1/2" />
                      <div className="h-1.5 bg-white/10 rounded-full w-full" />
                    </div>
                  </div>
                  {/* Result badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-green-DEFAULT/30 rounded-lg text-xs text-green-light font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-light" />
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-grotesk font-semibold uppercase tracking-widest text-green-light">
                      {project.category}
                    </span>
                    <span className="text-xs text-navy-DEFAULT/60">{project.duration}</span>
                  </div>
                  <h3 className="font-grotesk font-bold text-xl text-navy-DEFAULT mb-2 group-hover:text-green-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-navy-DEFAULT/60 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-grey-DEFAULT border border-grey-DEFAULT/60 rounded-full text-navy-DEFAULT/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-sm text-navy-DEFAULT/50 font-medium group-hover:text-green-light group-hover:gap-2.5 transition-all">
                    View Case Study <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
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

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import ImageFrame from '@/components/ImageFrame'
import Reveal from '@/components/motion/Reveal'
import { getVisibleProjects, getCategories } from '@/lib/projects'

const allProjects = getVisibleProjects()
const categories = getCategories(allProjects)

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title={"Work that\ndefines the standard."}
          subtitle="A selection of projects across web design, e-commerce, EdTech, and brand identity. Every project is unique — built from scratch, never from a template."
          className="max-w-3xl mb-14"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? 'bg-accent text-black'
                  : 'border border-white/10 day:border-black/10 text-muted hover:text-heading hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-section">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.image ? (
                  <ImageFrame
                    src={project.image}
                    alt={project.title}
                    aspect="aspect-[4/3]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    eyebrow={project.category}
                    caption={project.title}
                  />
                ) : (
                  <div className="aspect-[4/3] bg-surface flex items-center justify-center">
                    <span className="text-muted text-sm">Preview coming soon</span>
                  </div>
                )}

                <div className="pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.hidden && (
                        <span className="text-[10px] uppercase tracking-widest text-muted border border-white/15 day:border-black/15 rounded-full px-2 py-0.5">
                          Hidden
                        </span>
                      )}
                      <span className="text-xs text-muted">{project.duration}</span>
                    </div>
                  </div>
                  <h3 className="font-grotesk font-semibold text-xl text-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 day:bg-black/5 text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-heading font-medium hover:text-accent hover:gap-2.5 transition-all"
                    >
                      Visit Live Site <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <button className="inline-flex items-center gap-1.5 text-sm text-heading font-medium hover:text-accent hover:gap-2.5 transition-all">
                      View Case Study <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="py-24 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 tracking-tight">
            Want to see your project here?
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            Let&apos;s build something you&apos;re proud to show off.
          </p>
          <Button href="/quote" size="lg" arrow>
            Start with a Digital Audit
          </Button>
        </Reveal>
      </section>
    </>
  )
}

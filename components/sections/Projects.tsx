'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const panel = 'border border-white/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02]'

const categories = ['Web Design', 'E-commerce', 'UI/UX', 'EdTech']

const projects = [
  {
    title: 'Harrison Law Firm',
    category: 'Web Design',
    duration: 'Concept',
    description: 'A concept website for a law firm brand, designed around credibility, trust, and conversion-focused UX.',
    image: '/images/harrison.png',
  },
  {
    title: 'Northfield E-commerce',
    category: 'E-commerce',
    duration: 'Concept',
    description: 'A concept e-commerce build with seamless checkout, inventory management, and PayFast integration.',
    image: '/images/northfield.png',
  },
  {
    title: 'Thynk Unlimited',
    category: 'Web Design',
    duration: 'Concept',
    description: 'A concept website exploring brand identity and user experience.',
    image: '/images/thynkunlimited.png',
  },
]

export default function Projects() {
  return (
    <section className="px-4 md:px-6 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header bar: view-all link + scrolling category marquee */}
        <div className={`flex items-center gap-4 p-3 mb-4 ${panel}`}>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 px-5 py-3 border border-white/10 text-heading text-[13px] whitespace-nowrap shrink-0 transition-colors hover:border-accent/40"
          >
            View all projects
            <ArrowUpRight size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div
            className="relative flex-1 overflow-hidden py-3"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)' }}
          >
            <motion.div
              className="flex items-center gap-3 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            >
              {[...categories, ...categories].map((cat, i) => (
                <span key={i} className="flex items-center gap-3 text-muted text-xs">
                  {cat}
                  <span className="text-accent/50">✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-[7px] pb-6 ${panel} transition-colors hover:border-accent/30`}
            >
              <Link href="/portfolio" className="absolute inset-0 z-10" aria-label={`View ${project.title} case study`} />

              <div className="relative overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-2.5 right-2.5 px-3 py-2 text-[10px] text-heading opacity-0 group-hover:opacity-100 transition-opacity ${panel}`}>
                  {project.category}{project.duration ? ` · ${project.duration}` : ''}
                </span>
              </div>

              <div className="pl-2 pr-10">
                <h3 className="text-heading text-base font-medium tracking-tight mb-2 transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{project.description}</p>
              </div>

              <span
                aria-hidden
                className="absolute right-5 bottom-5 w-8 h-8 flex items-center justify-center border border-white/10 text-muted transition-colors group-hover:text-accent group-hover:border-accent/30"
              >
                <ArrowUpRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

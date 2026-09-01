'use client'

import { motion } from 'framer-motion'
import { PenTool, Code2, Sparkles, Rocket } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

const milestones = [
  {
    icon: <PenTool size={18} />,
    year: '2023',
    title: 'Started as an editorial & graphic designer',
    desc: 'Took on early clients through Nelson Mandela University while still a student.',
  },
  {
    icon: <Code2 size={18} />,
    year: '2023 — Present',
    title: 'Expanded into UI/UX design and web development',
    desc: 'Self-taught, building out a range that now runs from brand identity and editorial work through to full websites and product design.',
  },
  {
    icon: <Sparkles size={18} />,
    year: 'Notable project',
    title: 'AD Group of Companies',
    desc: 'Designed the website and full brand identity for AD Group of Companies.',
  },
  {
    icon: <Rocket size={18} />,
    year: 'Present',
    title: 'Founder, IZMVH Design Studio',
    desc: 'Independent client work and freelance design, alongside independent product development.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-28 max-w-4xl mx-auto px-6">
      <SectionHeading label="Journey" title="My Journey" centered className="mb-16" />

      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-white/10 day:bg-black/10" />

        <div className="flex flex-col gap-10">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                {m.icon}
              </div>
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">{m.year}</span>
              <h3 className="text-heading font-semibold text-lg mt-1 mb-2">{m.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

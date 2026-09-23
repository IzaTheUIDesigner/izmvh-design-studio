'use client'

import { PenTool, Code2, Sparkles, Rocket } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/motion/Reveal'

const milestones = [
  {
    icon: <PenTool size={16} />,
    year: '2023',
    title: 'Started as an editorial & graphic designer',
    desc: 'Took on early clients through Nelson Mandela University while still a student.',
  },
  {
    icon: <Code2 size={16} />,
    year: '2023 — Present',
    title: 'Expanded into UI/UX design and web development',
    desc: 'Self-taught, building out a range that now runs from brand identity and editorial work through to full websites and product design.',
  },
  {
    icon: <Sparkles size={16} />,
    year: 'Notable project',
    title: 'AD Group of Companies',
    desc: 'Designed the website and full brand identity for AD Group of Companies.',
  },
  {
    icon: <Rocket size={16} />,
    year: 'Present',
    title: 'Founder, IZMVH Design Studio',
    desc: 'Independent client work and freelance design, alongside independent product development.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-section max-w-3xl mx-auto px-6">
      <SectionHeading label="Journey" title="My journey so far." className="mb-16" />

      <div className="flex flex-col">
        {milestones.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.08}>
            <div className="grid grid-cols-[auto_1fr] gap-5 py-8 border-t border-white/10 day:border-black/10 first:border-t-0">
              <div className="w-9 h-9 rounded-full border border-accent/30 flex items-center justify-center text-accent shrink-0">
                {m.icon}
              </div>
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">{m.year}</span>
                <h3 className="text-heading font-semibold text-lg mt-1 mb-2">{m.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

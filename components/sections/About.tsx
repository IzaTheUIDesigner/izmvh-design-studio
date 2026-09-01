'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Mail, Phone, CalendarCheck } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'

const panel = 'border border-white/5 day:border-black/5 bg-surface'

const details = [
  { icon: <Briefcase size={16} />, label: 'Working since', value: '2023' },
  { icon: <MapPin size={16} />, label: 'Based in', value: 'Gqeberha, South Africa' },
  { icon: <Mail size={16} />, label: 'Email', value: 'iza.vuyo@izmvh.co.za' },
  { icon: <Phone size={16} />, label: 'Phone', value: '063 481 1469' },
  { icon: <CalendarCheck size={16} />, label: 'Availability', value: 'Available for new projects' },
]

const skills = ['UI/UX Design', 'Web Development', 'Editorial Design']

export default function About() {
  return (
    <section id="about" className="py-28 max-w-7xl mx-auto px-6">
      <SectionHeading label="About Me" title="About Me" centered className="mb-16" />

      <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className={`${panel} rounded-2xl p-8 text-center`}
        >
          <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="text-accent font-bold text-xl tracking-wide">IVM</span>
          </div>
          <h3 className="text-heading font-bold text-lg mb-1">Iza Vuyo Mehlomane</h3>
          <span className="text-muted text-sm block mb-6">Founder &amp; Designer</span>
          <Button href="/contact" variant="secondary" className="w-full justify-center">
            Contact
          </Button>
        </motion.div>

        {/* Bio + details + skills */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted leading-relaxed mb-4">
              Iza Vuyo Mehlomane is a self-taught designer and developer based in Gqeberha, South Africa.
              Starting out in 2023 as an editorial designer, Iza built an early client base through Nelson
              Mandela University while still a student, before expanding into UI/UX design and web development.
            </p>
            <p className="text-muted leading-relaxed">
              That range now runs from brand identity and editorial work through to full websites and product
              design — including designing the website and brand identity for AD Group of Companies. Today Iza
              works independently under IZMVH Design Studio, taking on client and freelance design work
              alongside independent product development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {details.map((d) => (
              <div key={d.label} className={`${panel} rounded-xl p-4 flex items-center gap-3`}>
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  {d.icon}
                </div>
                <div className="min-w-0">
                  <span className="block text-muted text-xs uppercase tracking-wider">{d.label}</span>
                  <strong className="block text-heading text-sm font-medium truncate">{d.value}</strong>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
              Core Skills
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm text-heading border border-accent/20 bg-accent/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

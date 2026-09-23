'use client'

import { Briefcase, MapPin, Mail, Phone, CalendarCheck } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import ImageFrame from '@/components/ImageFrame'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/Button'
import Journey from '@/components/sections/Journey'

const details = [
  { icon: <Briefcase size={16} />, label: 'Working since', value: '2023' },
  { icon: <MapPin size={16} />, label: 'Based in', value: 'Gqeberha, South Africa' },
  { icon: <Mail size={16} />, label: 'Email', value: 'iza.vuyo@izmvh.co.za' },
  { icon: <Phone size={16} />, label: 'Phone', value: '063 481 1469' },
  { icon: <CalendarCheck size={16} />, label: 'Availability', value: 'Available for new projects' },
]

const skills = ['UI/UX Design', 'Web Development', 'Editorial Design']

export default function AboutClient() {
  return (
    <>
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <SectionHeading label="About" title="About me." className="max-w-2xl mb-16" />

        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <ImageFrame
              src="/images/unsplash/about-workspace.webp"
              alt="A calm, minimal design workspace — desk, laptop and natural light"
              aspect="aspect-[4/5]"
            />
            <div className="mt-6">
              <h3 className="text-heading font-semibold text-lg mb-1">Iza Vuyo Mehlomane</h3>
              <span className="text-muted text-sm block mb-6">Founder &amp; Designer</span>
              <Button href="/contact" variant="secondary" className="w-full justify-center">
                Contact
              </Button>
            </div>
          </Reveal>

          <div className="flex flex-col gap-12">
            <Reveal delay={0.1}>
              <p className="text-muted leading-relaxed mb-4">
                I don&apos;t just build websites. I help businesses build, manage, improve and grow their
                digital presence — because a website is only one part of that. I look at whether a business
                actually needs one, what it needs to achieve, how people will find it, and how it performs
                once it&apos;s live.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                I&apos;m a self-taught designer and developer based in Gqeberha, South Africa. Starting out in
                2023 as an editorial designer, I built an early client base through Nelson Mandela University
                while still a student, before expanding into UI/UX design, web development and, more recently,
                the wider work of keeping a site healthy and growing after it launches.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                That range now runs from brand identity and editorial work through to full websites and product
                design — including designing the website and brand identity for AD Group of Companies. Today I
                work independently under IZMVH Design Studio, taking on client and freelance design work
                alongside independent product development.
              </p>
              <p className="text-muted leading-relaxed">
                Working solo is deliberate, not a limitation. I take on a small number of clients at a time, so
                there&apos;s no account-manager layer between you and the work — you deal with me directly, from
                the first audit through to ongoing care, and I&apos;m personally accountable for the outcome.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-3 py-3 border-t border-white/10 day:border-black/10">
                  <div className="text-accent shrink-0">{d.icon}</div>
                  <div className="min-w-0">
                    <span className="block text-muted text-xs uppercase tracking-wider">{d.label}</span>
                    <strong className="block text-heading text-sm font-medium truncate">{d.value}</strong>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.3}>
              <span className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 block">
                Core Skills
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-sm text-heading">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      <Journey />
    </>
  )
}

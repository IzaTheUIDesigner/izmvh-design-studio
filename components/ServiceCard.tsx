'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href?: string
  index?: number
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href = '/services',
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-white/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02] rounded-2xl p-7 overflow-hidden transition-colors hover:border-accent/30"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-accent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 text-accent group-hover:bg-accent/20 transition-colors">
        {icon}
      </div>

      {/* Content */}
      <h3 className="font-grotesk font-semibold text-xl text-heading mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-6">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-2.5 transition-all"
      >
        Learn more <ArrowUpRight size={14} />
      </Link>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(centered && 'text-center', className)}
    >
      {label && (
        <span className="inline-block font-grotesk text-xs font-semibold uppercase tracking-[0.15em] text-green-light mb-4 px-3 py-1 bg-green-DEFAULT/10 border border-green-DEFAULT/20 rounded-full">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-DEFAULT leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-navy-DEFAULT/60 text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

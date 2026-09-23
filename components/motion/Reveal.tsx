'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import clsx from 'clsx'

export const EASE = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  /** Set true for elements already in the viewport on load (e.g. hero content). */
  immediate?: boolean
}

/**
 * Shared scroll-reveal primitive: fade + small upward translate, once:true,
 * staggered via `delay`. Under prefers-reduced-motion the translate is
 * dropped entirely and only the opacity fade remains.
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  className,
  immediate = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : y

  const animateProps = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' } }

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      {...animateProps}
      transition={{ duration, delay, ease: EASE }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  )
}

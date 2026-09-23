'use client'

import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
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

// If the IntersectionObserver-based trigger hasn't fired within this long,
// force the content visible anyway. Content must never stay permanently
// invisible just because a scroll-reveal never got triggered.
const FALLBACK_MS = 1200

/**
 * Shared scroll-reveal primitive: fade + small upward translate, once:true,
 * staggered via `delay`. Uses an amount-based viewport threshold (10% of
 * the element visible) rather than a fixed negative margin, since a fixed
 * margin can behave unpredictably against very tall/short elements or
 * viewports. A hard timeout fallback guarantees the content still shows
 * even if the observer never reports "in view" at all.
 *
 * Under prefers-reduced-motion the translate is dropped entirely and only
 * the opacity fade remains.
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
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [fellBack, setFellBack] = useState(false)

  useEffect(() => {
    if (immediate || inView) return
    const timer = setTimeout(() => setFellBack(true), FALLBACK_MS)
    return () => clearTimeout(timer)
  }, [immediate, inView])

  const visible = immediate || inView || fellBack

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration, delay, ease: EASE }}
      className={clsx(className)}
      data-reveal={visible ? 'visible' : 'pending'}
    >
      {children}
    </motion.div>
  )
}

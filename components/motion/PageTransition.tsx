'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { EASE } from './Reveal'

/**
 * Soft fade/slide between routes. Wraps {children} in the root layout,
 * keyed by pathname so AnimatePresence can exit the old page and enter
 * the new one. Reduced motion drops the y-shift, keeping only the fade.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const offset = reduceMotion ? 0 : 14

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -offset }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

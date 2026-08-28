'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Ambient background glow, mounted once at the root layout, sitting behind all page
 * content (fixed, z-0, pointer-events-none). Same warm accent-toned glow in both themes —
 * by day it's dialed up to read as a soft sunlight highlight; by night it's dialed down to
 * a dim, distant ember rather than introducing a second "moon" color into the palette.
 */
export default function SunLayer() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 -top-[20%] w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.05] day:opacity-[0.16]"
        style={{ background: 'radial-gradient(circle, rgb(var(--accent-rgb) / 0.9) 0%, transparent 65%)' }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 30, -20, 0], y: [0, -20, 15, 0], scale: [1, 1.05, 0.98, 1] }
        }
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

'use client'

import { motion, useReducedMotion } from 'framer-motion'

const SIZE = 460
const GLOW_SIZE = 620
// Horizontal offset of the occlusion circle's center from the disc's center. For two
// equal-radius circles, the visible crescent width at the midline equals this offset —
// so a SMALL offset carves a THIN sliver (occlusion nearly covers the disc), and a large
// offset would barely nick the edge, leaving it almost full. Counterintuitive, easy to get backwards.
const CRESCENT_OFFSET = 95

// Craters: baked into the disc's own background as extra radial-gradient layers.
// The visible sliver only spans roughly the outer (100 - CRESCENT_OFFSET/SIZE*100)% of the
// disc's width, so these are concentrated in that band — anything further left just gets
// carved away by the occlusion circle below anyway.
const CRATERS = [
  { x: 84, y: 28, r: 9, a: 0.4 },
  { x: 90, y: 50, r: 7, a: 0.48 },
  { x: 82, y: 68, r: 8, a: 0.35 },
  { x: 94, y: 40, r: 5, a: 0.45 },
  { x: 87, y: 82, r: 6, a: 0.38 },
]

/**
 * Ambient crescent moon, mounted once at the root layout, sitting behind all page
 * content (fixed, z-0, pointer-events-none). Night-theme only — a dark/orange moon
 * shape doesn't read as ambient atmosphere against a white daytime page, so it fades
 * out under the day theme rather than trying to double as a sun.
 *
 * The crescent itself is two overlapping circles: a gradient-lit disc, occluded by a
 * second circle painted in the page background color, offset left so only a thin
 * sliver on the right remains visible.
 */
export default function MoonLayer() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-100 day:opacity-0 transition-opacity duration-700"
      aria-hidden="true"
    >
      <div
        className="absolute"
        style={{ top: '4%', right: '4%', width: SIZE, height: SIZE }}
      >
        {/* Rim glow: soft halo hugging the bright limb, bleeding into the dark sky */}
        <motion.div
          className="absolute rounded-full blur-[90px]"
          style={{
            width: GLOW_SIZE,
            height: GLOW_SIZE,
            left: 100,
            top: -82,
            background: 'radial-gradient(circle, rgb(var(--accent-rgb) / 0.5) 0%, transparent 68%)',
          }}
          animate={reduceMotion ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Moon disc: terminator-to-limb lighting gradient + baked-in crater texture */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: [
              ...CRATERS.map(
                (c) => `radial-gradient(circle at ${c.x}% ${c.y}%, rgba(0,0,0,${c.a}) 0%, transparent ${c.r}%)`
              ),
              'linear-gradient(90deg, #0a0502 0%, #2a0f02 42%, rgb(var(--accent-rgb)) 100%)',
            ].join(', '),
          }}
        />

        {/* Occlusion circle: carves the crescent by covering the dark side with the page background */}
        <div
          className="absolute rounded-full bg-dark"
          style={{ width: SIZE, height: SIZE, left: -CRESCENT_OFFSET, top: 0 }}
        />
      </div>
    </div>
  )
}

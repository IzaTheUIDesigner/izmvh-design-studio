'use client'

import { ReactLenis } from 'lenis/react'
import { useReducedMotion } from 'framer-motion'

/**
 * Mounted once in the root layout. Lenis smooths native scroll in place —
 * it doesn't hijack layout or replace scroll position, so Framer Motion's
 * useScroll/useTransform (e.g. the homepage process line) keeps working
 * unmodified underneath it.
 *
 * Skipped entirely under prefers-reduced-motion: rendering nothing here
 * leaves the browser's native (instant) scroll behaviour in place.
 */
export default function SmoothScroll() {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null

  return (
    <ReactLenis
      root
      options={{
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.5,
      }}
    />
  )
}

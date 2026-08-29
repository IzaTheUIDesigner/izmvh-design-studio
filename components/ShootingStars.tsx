'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

interface Star {
  id: number
  startX: number
  startY: number
  dx: number
  dy: number
  angle: number
  length: number
  duration: number
}

const MIN_DELAY = 3000
const MAX_DELAY = 6000
const MAX_CONCURRENT = 4

function createStar(id: number): Star {
  // Upper-to-mid sky, travelling down-and-across at a shallow diagonal — classic
  // shooting-star look. Direction (left-to-right or right-to-left) is randomized.
  const goingRight = Math.random() > 0.5
  const angle = 18 + Math.random() * 16 // 18-34deg below horizontal
  const distance = 220 + Math.random() * 160 // 220-380px travel
  const rad = (angle * Math.PI) / 180
  const dx = (goingRight ? 1 : -1) * distance * Math.cos(rad)
  const dy = distance * Math.sin(rad)

  return {
    id,
    startX: Math.random() * 80 + 5, // 5-85% of viewport width
    startY: Math.random() * 28, // 0-28% of viewport height
    dx,
    dy,
    angle: goingRight ? angle : 180 - angle,
    length: 70 + Math.random() * 70, // 70-140px
    duration: 0.55 + Math.random() * 0.35, // 0.55-0.9s — fast
  }
}

/**
 * Occasional shooting stars for the night theme, mounted at the root layout (fixed,
 * z-0, pointer-events-none, behind all content). Fires roughly every 3-6s with
 * randomized position/angle/timing, capped at MAX_CONCURRENT so it never feels busy.
 * Skips entirely under prefers-reduced-motion and outside the night theme, rather than
 * scheduling work that just stays invisible.
 */
export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])
  const reduceMotion = useReducedMotion()
  const idRef = useRef(0)

  useEffect(() => {
    if (reduceMotion) return
    if (typeof document === 'undefined') return
    if (document.documentElement.getAttribute('data-theme') !== 'night') return

    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout>

    const scheduleNext = () => {
      const delay = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY)
      timeoutId = setTimeout(() => {
        if (cancelled) return
        setStars((prev) => {
          if (prev.length >= MAX_CONCURRENT) return prev
          const star = createStar(idRef.current++)
          setTimeout(() => {
            setStars((p) => p.filter((s) => s.id !== star.id))
          }, star.duration * 1000 + 150)
          return [...prev, star]
        })
        scheduleNext()
      }, delay)
    }

    scheduleNext()
    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none day:opacity-0" aria-hidden="true">
      <AnimatePresence>
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full"
            style={{
              left: `${s.startX}%`,
              top: `${s.startY}%`,
              width: s.length,
              height: 2,
              rotate: s.angle,
              transformOrigin: 'left center',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 65%, rgb(var(--accent-rgb)) 100%)',
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], x: s.dx, y: s.dy }}
            exit={{ opacity: 0 }}
            transition={{ duration: s.duration, times: [0, 0.15, 1], ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

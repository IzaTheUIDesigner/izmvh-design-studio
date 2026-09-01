'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/Button'

const TAGLINES = ['UI/UX Designer', 'Web Developer', 'Editorial Designer']

/** Minimal typewriter rotation — a React-native stand-in for Typed.js, no new dependency. */
function useTypedRotation(words: string[], enabled: boolean) {
  const [text, setText] = useState(words[0])
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!enabled) return
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 65)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35)
    } else {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, enabled])

  return enabled ? text : words[0]
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const typed = useTypedRotation(TAGLINES, !reduceMotion)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgb(var(--accent-rgb) / 0.08) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h1 className="text-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
          Hi, I&apos;m Iza Vuyo Mehlomane
        </h1>
        <p className="text-muted text-lg md:text-xl mb-10">
          I&apos;m a <span className="text-accent font-medium">{typed}</span>
          <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle animate-pulse" aria-hidden="true" />
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/quote" size="lg" arrow>
            Get a Quote
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg">
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

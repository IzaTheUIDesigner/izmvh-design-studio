'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import SlideMenu from './SlideMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled && !open ? 'nav-scrolled py-4' : 'py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative z-50 font-grotesk font-semibold text-heading text-lg tracking-tight"
          >
            IZMVH
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex items-center gap-2 text-heading text-sm font-medium uppercase tracking-[0.15em] hover:text-accent transition-colors"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>

      <AnimatePresence>{open && <SlideMenu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}

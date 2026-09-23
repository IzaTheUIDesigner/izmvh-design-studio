'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { EASE } from './motion/Reveal'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function SlideMenu({ onClose }: { onClose: () => void }) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-0 z-40 bg-dark flex flex-col justify-between px-6 md:px-16 pt-28 pb-10 md:pt-36 md:pb-14 overflow-y-auto"
    >
      <nav className="flex flex-col gap-1 md:gap-2">
        {navLinks.map((link, i) => {
          const active = pathname === link.href
          return (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: EASE }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={`inline-block text-[clamp(2.25rem,7vw,4.5rem)] font-semibold tracking-tight leading-[1.1] transition-colors duration-300 ${
                  active ? 'text-accent' : 'text-heading hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-10 mt-10 border-t border-white/10 day:border-black/10"
      >
        <div className="flex flex-col gap-3 text-sm text-muted">
          <a href="mailto:iza.vuyo@izmvh.co.za" className="inline-flex items-center gap-2 hover:text-heading transition-colors w-fit">
            <Mail size={14} className="text-accent" /> iza.vuyo@izmvh.co.za
          </a>
          <a href="tel:+27634811469" className="inline-flex items-center gap-2 hover:text-heading transition-colors w-fit">
            <Phone size={14} className="text-accent" /> 063 481 1469
          </a>
        </div>
        <Link
          href="/quote"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black text-sm font-medium rounded-full hover:bg-accent/90 transition-colors w-fit"
        >
          Start a Digital Audit
        </Link>
      </motion.div>
    </motion.div>
  )
}

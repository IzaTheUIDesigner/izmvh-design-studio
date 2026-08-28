'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import Button from '@/components/Button'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const panel = 'border border-white/5 bg-gradient-to-br from-accent/[0.05] to-accent/[0.02]'

function useLiveTime(timeZone: string) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-ZA', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
    })
    const tick = () => setTime(formatter.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}

export default function Hero() {
  const time = useLiveTime('Africa/Johannesburg')

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const recedeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35])
  const recedeScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const recedeY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={sectionRef} className="relative pt-36 md:pt-40 pb-16 px-4 md:px-6">
      <motion.div
        style={{ opacity: recedeOpacity, scale: recedeScale, y: recedeY }}
        className={`max-w-7xl mx-auto p-3 md:p-4 ${panel}`}
      >
        <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
          {/* Brand visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full lg:w-[298px] h-[220px] lg:h-auto shrink-0 overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, rgb(var(--accent-rgb) / 0.14) 0%, rgba(4,4,4,0.94) 70%)' }}
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(249,249,249,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,249,249,0.06) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <motion.div
              className="absolute w-40 h-40 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgb(var(--accent-rgb) / 0.35) 0%, transparent 70%)',
                top: '28%',
                left: '28%',
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="block text-heading font-bold text-2xl tracking-tight leading-none">IZ</span>
              <span className="block text-muted text-[11px] uppercase tracking-[0.2em] mt-1.5">
                Design Studio
              </span>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4">
            {/* Top row: availability, clock, CTAs */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className={`flex items-center gap-3 px-5 py-3 ${panel}`}>
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" />
                </span>
                <span className="text-heading text-[13px] whitespace-nowrap">Available for new projects</span>
              </div>

              <div className={`flex items-center gap-2 px-5 py-3 ${panel} text-heading text-[13px] whitespace-nowrap`}>
                <Clock size={14} className="text-accent" />
                {time || '--:--'} SAST
              </div>

              <div className="flex items-center gap-3 md:ml-auto">
                <Button href="/quote" size="md" arrow>
                  Get a Quote
                </Button>
                <Button href="/portfolio" variant="secondary" size="md">
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            {/* Bottom row: headline block + location panel */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-1">
              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.15 }}
                className={`flex-1 p-7 flex flex-col justify-end ${panel}`}
              >
                <span className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-3">
                  Web Design Studio
                </span>
                <h1 className="text-heading text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.05] tracking-tight mb-4 max-w-xl">
                  Designing Digital Experiences That Grow Businesses.
                </h1>
                <p className="text-muted text-sm leading-relaxed max-w-lg">
                  We create modern websites, e-commerce solutions, and provide ongoing maintenance
                  that helps businesses thrive online.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.25 }}
                className={`relative w-full md:w-[260px] shrink-0 overflow-hidden min-h-[140px] ${panel}`}
              >
                <div className="relative z-10 p-4">
                  <span className="inline-flex items-center gap-2 text-heading text-[13px]">
                    <MapPin size={13} className="text-accent shrink-0" />
                    Gqeberha, South Africa
                  </span>
                </div>
                <div
                  className="absolute inset-0 opacity-70 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 70% 100%, rgb(var(--accent-rgb) / 0.25) 0%, transparent 60%)' }}
                />
                <motion.div
                  className="absolute -bottom-16 -right-10 w-48 h-48 rounded-full border border-accent/20"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute -bottom-24 -right-16 w-56 h-56 rounded-full border border-accent/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  index?: number
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-grey-DEFAULT/60 rounded-2xl p-7 flex flex-col gap-5"
    >
      <Quote size={24} className="text-green-DEFAULT opacity-60" />
      <p className="text-navy-DEFAULT/80 text-base leading-relaxed flex-1">"{quote}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-grey-DEFAULT/60">
        <div className="w-9 h-9 rounded-full bg-green-dark flex items-center justify-center text-green-light font-grotesk font-bold text-sm">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-navy-DEFAULT font-medium text-sm">{author}</p>
          <p className="text-navy-DEFAULT/60 text-xs">{role} · {company}</p>
        </div>
      </div>
    </motion.div>
  )
}

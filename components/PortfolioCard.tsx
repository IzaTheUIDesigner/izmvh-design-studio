'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  tags: string[]
  gradient: string
  image?: string
  href?: string
  index?: number
}

export default function PortfolioCard({
  title,
  category,
  description,
  tags,
  gradient,
  image,
  href = '/portfolio',
  index = 0,
}: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-grey-DEFAULT/60 rounded-2xl overflow-hidden card-hover"
    >
      <div className={`h-52 relative overflow-hidden ${gradient}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        ) : (
          <>
            <div className="absolute top-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-400/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <div className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>
              <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="h-2 bg-white/20 rounded-full w-2/3" />
              <div className="h-2 bg-white/10 rounded-full w-full" />
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <span className="text-xs font-grotesk font-semibold uppercase tracking-widest text-green-light mb-2 block">
          {category}
        </span>
        <h3 className="font-grotesk font-bold text-xl text-navy-DEFAULT mb-2 group-hover:text-green-light transition-colors">
          {title}
        </h3>
        <p className="text-navy-DEFAULT/60 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-grey-DEFAULT border border-grey-DEFAULT/60 rounded-full text-navy-DEFAULT/60">
              {tag}
            </span>
          ))}
        </div>
        <Link href={href} className="inline-flex items-center gap-1.5 text-sm text-navy-DEFAULT/40 font-medium group-hover:opacity-100 group-hover:text-green-light group-hover:gap-2.5 transition-all">
          View Case Study <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}

import clsx from 'clsx'
import Reveal from '@/components/motion/Reveal'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={clsx(centered && 'text-center mx-auto', className)}>
      {label && (
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-semibold text-heading leading-[1.1] tracking-tight mb-4 whitespace-pre-line">
        {title}
      </h2>
      {subtitle && (
        <p className={clsx('text-muted text-lg leading-relaxed max-w-2xl', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

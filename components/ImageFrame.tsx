import Image from 'next/image'
import clsx from 'clsx'

interface ImageFrameProps {
  src: string
  alt: string
  /** Tailwind aspect-ratio class, e.g. 'aspect-[4/3]'. Fixed to avoid layout shift. */
  aspect?: string
  sizes?: string
  eyebrow?: string
  caption?: string
  priority?: boolean
  className?: string
}

/**
 * Shared hover-image frame: fixed aspect ratio (no CLS), slow scale on
 * hover via the .img-hover-scale CSS utility (globals.css), and an
 * optional caption bar that slides up from the bottom on hover.
 */
export default function ImageFrame({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  eyebrow,
  caption,
  priority = false,
  className,
}: ImageFrameProps) {
  return (
    <div className={clsx('group relative overflow-hidden bg-surface', aspect, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="img-hover-scale object-cover"
      />
      {(eyebrow || caption) && (
        <div
          className="absolute inset-x-0 bottom-0 bg-dark/80 day:bg-white/85 px-5 py-4 transition-transform duration-500 ease-smooth translate-y-full group-hover:translate-y-0"
          aria-hidden="true"
        >
          {eyebrow && (
            <span className="block text-[11px] uppercase tracking-[0.15em] text-accent mb-1">{eyebrow}</span>
          )}
          {caption && <span className="block text-heading text-sm font-medium">{caption}</span>}
        </div>
      )}
    </div>
  )
}

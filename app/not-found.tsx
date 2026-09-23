import Link from 'next/link'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">404</span>
      <h1 className="text-statement font-semibold text-heading mb-6 max-w-xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-muted mb-10 max-w-sm">
        It may have moved, or the link was broken. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="/" size="lg" arrow>
          Back to Home
        </Button>
        <Link href="/contact" className="text-sm font-medium text-heading hover:text-accent transition-colors">
          Or get in touch
        </Link>
      </div>
    </section>
  )
}

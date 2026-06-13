import type { Metadata } from 'next'
import QuotePageClient from './QuoteClient'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: "Tell us about your project and we'll put together a detailed, tailored proposal within 48 hours.",
}

export default function QuotePage() {
  return <QuotePageClient />
}

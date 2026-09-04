import type { Metadata } from 'next'
import QuotePageClient from './QuoteClient'

export const metadata: Metadata = {
  title: 'Start a Digital Audit',
  description: "Tell me about your business and I'll start with a digital audit, then put together tailored next steps within 48 hours.",
}

export default function QuotePage() {
  return <QuotePageClient />
}

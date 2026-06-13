import type { Metadata } from 'next'
import PortfolioPageClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See our recent web design, e-commerce, and UI/UX work for South African and international businesses.',
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

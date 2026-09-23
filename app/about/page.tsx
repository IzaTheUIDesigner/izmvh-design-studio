import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About',
  description: 'Iza Vuyo Mehlomane — founder and designer at IZMVH Design Studio, based in Gqeberha, South Africa.',
}

export default function AboutPage() {
  return <AboutClient />
}

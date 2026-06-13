import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'IZMVH Design Studio | Premium Web Design & Development',
    template: '%s | IZMVH Design Studio',
  },
  description: 'IZMVH Design Studio builds exceptional digital experiences — websites, e-commerce solutions, and ongoing support that help businesses grow online.',
  keywords: ['web design South Africa', 'web development', 'e-commerce development', 'UI/UX design'],
  authors: [{ name: 'IZMVH Design Studio' }],
  creator: 'IZMVH Design Studio',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://izmvh.co.za',
    title: 'IZMVH Design Studio',
    description: 'Designing digital experiences that grow businesses.',
    siteName: 'IZMVH Design Studio',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  duration: string
  link?: string
  hidden?: boolean
}

// Single source of truth for portfolio data — previously duplicated between
// the homepage teaser and the full /portfolio page. `hidden` controls live
// visibility (flip to false to bring a project back); `link`, when set,
// points at a real deployed site for that project.
export const projects: Project[] = [
  {
    id: 0,
    title: 'CampusOrbit',
    category: 'EdTech',
    description: 'A multi-tenant venue and event management SaaS platform built for South African public universities. Features AI-driven scheduling, sustainability analytics, and white-label deployment across 26 institutions.',
    tags: ['Next.js', 'PostgreSQL', 'Node.js', 'Railway', 'Vercel'],
    image: '',
    duration: 'Ongoing',
    hidden: false,
  },
  {
    id: 1,
    title: 'Harrison Law Firm',
    category: 'Web Design',
    description: 'A concept website for a law firm brand, designed around credibility, trust, and conversion-focused UX.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/harrison.png',
    duration: 'Concept',
    // Hidden for now — flip to false to bring back on the live site.
    hidden: true,
  },
  {
    id: 2,
    title: 'Northfield E-commerce',
    category: 'E-commerce',
    description: 'A concept e-commerce build with seamless checkout, inventory management, and PayFast integration.',
    tags: ['Shopify', 'Liquid', 'PayFast', 'Custom Theme'],
    image: '/images/northfield.png',
    duration: 'Concept',
    hidden: true,
  },
  {
    id: 3,
    title: 'Loom & Line',
    category: 'Template Customization',
    description: 'An interior design and architecture studio brand, built around a warm terracotta palette and clean modern layouts that showcase services, process, and finished spaces.',
    tags: ['HTML5', 'Bootstrap 4', 'jQuery', 'Rebrand'],
    image: '/images/loomandline.png',
    duration: 'Concept',
    link: 'https://loom-and-line-kappa.vercel.app',
    hidden: true,
  },
  {
    id: 4,
    title: 'Audi Website Redesign',
    category: 'UI/UX',
    description: 'A conceptual redesign of the Audi website featuring modern UI patterns, smooth animations, and an elevated digital showroom experience.',
    tags: ['Figma', 'Next.js', 'Framer Motion', 'UI Redesign'],
    image: '/images/uiux.png',
    duration: 'Concept',
    hidden: true,
  },
]

const isDev = process.env.NODE_ENV === 'development'

/**
 * Live-visible projects. In development, hidden projects are included too
 * (each still carrying `hidden: true` so callers can render a "Hidden"
 * badge) so the grid is reviewable locally without touching the flags —
 * production always resolves to only the visible set.
 */
export function getVisibleProjects(): Project[] {
  return isDev ? projects : projects.filter((p) => !p.hidden)
}

export function getCategories(list: Project[]): string[] {
  return ['All', ...Array.from(new Set(list.map((p) => p.category)))]
}

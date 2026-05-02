import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
})

const BASE_URL = 'https://blog.morenadoaco.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Alexandre Alan — Network Analyst N2 & Software Developer',
    template: '%s | Alexandre Alan',
  },
  description:
    'Alexandre Alan — Network Analyst N2, Full Stack Developer and Infrastructure Specialist. Expert in pfSense Security, Python, TypeScript, Docker and corporate networks. Remote consulting available.',
  keywords: [
    'Alexandre Alan',
    'Network Analyst',
    'Full Stack Developer',
    'Infrastructure Specialist',
    'pfSense Security',
    'Python Expert',
    'TypeScript Expert',
    'Software Developer',
    'Analista de Redes N2',
    'Desenvolvedor Full-Stack',
    'Docker',
    'Linux',
    'PostgreSQL',
    'Next.js',
    'FastAPI',
    'VPN',
    'Firewall',
    'Remote Consulting',
    'Consultoria Remota',
  ],
  authors: [{ name: 'Alexandre Alan', url: 'https://github.com/AlexandreAlan' }],
  creator: 'Alexandre Alan',
  publisher: 'Alexandre Alan',
  category: 'technology',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: BASE_URL,
    siteName: 'Alexandre Alan — Portfolio & Blog',
    title: 'Alexandre Alan — Network Analyst N2 & Software Developer',
    description:
      'Network Analyst N2, Full Stack Developer and Infrastructure Specialist. pfSense Security, Python & TypeScript Expert. Remote consulting available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandre Alan — Network Analyst N2 & Software Developer',
    description:
      'Network Analyst N2, Full Stack Developer and Infrastructure Specialist. pfSense Security, Python & TypeScript Expert.',
    creator: '@AlexandreAlan',
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'pt-BR': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Alexandre Alan',
      url: BASE_URL,
      image: `${BASE_URL}/opengraph-image`,
      jobTitle: ['Network Analyst N2', 'Software Developer', 'Infrastructure Specialist'],
      description:
        'Network Analyst N2 and Full Stack Developer specializing in corporate network infrastructure, pfSense security, Python, TypeScript and Docker-based systems.',
      knowsAbout: [
        'Network Analysis',
        'pfSense Firewall',
        'OPNsense',
        'Infrastructure as Code',
        'Python',
        'TypeScript',
        'Next.js',
        'FastAPI',
        'Docker',
        'PostgreSQL',
        'Linux Administration',
        'VPN',
        'OSPF',
        'BGP',
        'VLAN',
        'Nginx',
        'SSL/TLS',
        'Full Stack Development',
      ],
      sameAs: [
        'https://github.com/AlexandreAlan',
        'https://www.linkedin.com/in/alexandre-alan-a5a8362ab',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional',
        availableLanguage: ['Portuguese', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Alexandre Alan — Portfolio & Blog',
      description: 'Portfolio and professional blog of Alexandre Alan, Network Analyst N2 and Software Developer.',
      publisher: { '@id': `${BASE_URL}/#person` },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

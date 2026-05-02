import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Specialties from '@/components/Specialties'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import BlogSection from '@/components/BlogSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

const BASE_URL = 'https://blog.morenadoaco.com.br'

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
        'Network Analysis', 'pfSense Firewall', 'OPNsense', 'Infrastructure as Code',
        'Python', 'TypeScript', 'Next.js', 'FastAPI', 'Docker', 'PostgreSQL',
        'Linux Administration', 'VPN', 'OSPF', 'BGP', 'VLAN', 'Nginx', 'SSL/TLS',
        'Full Stack Development',
      ],
      sameAs: [
        'https://github.com/AlexandreAlan',
        'https://www.linkedin.com/in/alexandre-alan-a5a8362ab',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Alexandre Alan — Portfolio & Blog',
      publisher: { '@id': `${BASE_URL}/#person` },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${BASE_URL}/#profilepage`,
      url: BASE_URL,
      name: 'Alexandre Alan — Portfolio & Blog',
      dateCreated: '2025-01-01',
      dateModified: '2026-05-02',
      mainEntity: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://arretadospeed.morenadoaco.com.br/#app',
      name: 'Arretado Speed',
      url: 'https://arretadospeed.morenadoaco.com.br',
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      description:
        'Internet speed test running 24/7 in production. Measures ping, jitter, download and upload with 4 parallel connections, animated real-time gauge, history and quality score.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
      },
      author: { '@id': `${BASE_URL}/#person` },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function Home() {
  const posts = getAllPosts()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <TechStack />
        <Projects />
        <BlogSection posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

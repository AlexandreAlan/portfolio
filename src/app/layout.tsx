import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alexandre Alan — Analista de Redes N3 & Dev Full-Stack',
  description:
    'Portfólio de Alexandre Alan: especialista em infraestrutura, redes, segurança e desenvolvimento de sistemas inteligentes.',
  keywords: [
    'Alexandre Alan',
    'Analista de Redes',
    'Full-Stack',
    'Python',
    'pfSense',
    'Docker',
    'PostgreSQL',
    'Linux',
  ],
  authors: [{ name: 'Alexandre Alan' }],
  openGraph: {
    title: 'Alexandre Alan — Analista de Redes N3 & Dev Full-Stack',
    description: 'Especialista em Infraestrutura, Redes e Desenvolvimento de Sistemas Inteligentes.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://blog.morenadoaco.com.br',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

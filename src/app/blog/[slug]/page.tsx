import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

const BASE_URL = 'https://blog.morenadoaco.com.br'
const OG_IMAGE = `${BASE_URL}/opengraph-image`

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
function formatDate(dateStr: string) {
  const [year, mm, dd] = dateStr.split('-')
  return `${dd} ${MONTHS[parseInt(mm, 10) - 1]} ${year}`
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  const url = `${BASE_URL}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: 'Alexandre Alan', url: BASE_URL }],
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ['Alexandre Alan'],
      tags: post.tags,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${post.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.date,
    dateModified: post.date,
    image: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: 'Alexandre Alan',
      url: BASE_URL,
      sameAs: [
        'https://github.com/AlexandreAlan',
        'https://www.linkedin.com/in/alexandre-alan-a5a8362ab',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alexandre Alan',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
    },
    keywords: post.tags.join(', '),
    inLanguage: 'pt-BR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Alexandre Alan — Portfolio & Blog',
      url: BASE_URL,
    },
  }

  return (
    <div className="min-h-screen px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-2xl mx-auto">

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#6a6055] hover:text-[#f0ebe0] mb-10 transition-colors font-mono"
        >
          <ArrowLeft size={14} /> todos os posts
        </Link>

        <header className="mb-10">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-[rgba(201,168,76,0.1)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)] rounded-md"
                >
                  <Tag size={8} /> {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-[#f0ebe0] leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-[#8a8070] leading-relaxed mb-5">{post.description}</p>

          <div className="flex items-center gap-4 text-xs font-mono text-[#5a5550] pb-6 border-b border-white/[0.06]">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
        </header>

        <div
          className="prose-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-[#6a6055] hover:text-[#f0ebe0] transition-colors font-mono"
          >
            <ArrowLeft size={14} /> Todos os posts
          </Link>
          <Link
            href="/"
            className="text-sm text-[#c9a84c] hover:text-[#e8c97a] transition-colors font-mono"
          >
            Voltar ao portfólio →
          </Link>
        </div>
      </div>
    </div>
  )
}

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Alexandre Alan`,
    description: post.description,
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white mb-10 transition-colors font-mono"
        >
          <ArrowLeft size={14} /> todos os posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md"
                >
                  <Tag size={8} /> {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-slate-500 leading-relaxed mb-5">{post.description}</p>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600 pb-6 border-b border-white/[0.06]">
            <span>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} /> {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors font-mono"
          >
            <ArrowLeft size={14} /> Todos os posts
          </Link>
          <Link
            href="/"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
          >
            Voltar ao portfólio →
          </Link>
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Alexandre Alan',
  description: 'Dicas de redes, infraestrutura, Linux, Docker e desenvolvimento.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white mb-10 transition-colors font-mono"
        >
          <ArrowLeft size={14} /> voltar ao portfólio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-cyan-500 uppercase tracking-widest mb-3">Conhecimento</p>
          <h1 className="text-4xl font-bold text-white mb-3">Blog &amp; Dicas</h1>
          <p className="text-slate-500 text-sm">
            Scripts úteis, configurações de rede, Linux, Docker e desenvolvimento.
          </p>
        </div>

        {/* Posts list */}
        {posts.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <p className="font-mono text-slate-600 text-sm">// nenhum post ainda — em breve!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="glass glass-hover rounded-xl p-6 transition-all group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md"
                      >
                        <Tag size={8} /> {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors mb-1">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
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
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

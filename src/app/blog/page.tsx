import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas de redes, infraestrutura, Linux, Docker e desenvolvimento.',
}

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function formatDate(dateStr: string) {
  const [year, mm, dd] = dateStr.split('-')
  return `${dd} ${MONTHS[parseInt(mm, 10) - 1]} ${year}`
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6a6055] hover:text-[#f0ebe0] mb-10 transition-colors font-mono"
        >
          <ArrowLeft size={14} /> voltar ao portfólio
        </Link>

        <div className="mb-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#c9a84c] mb-3">Conhecimento</p>
          <h1 className="text-4xl font-black text-[#f0ebe0] tracking-tight mb-3">Blog &amp; Dicas</h1>
          <p className="text-[#6a6055] text-sm leading-relaxed">
            Scripts úteis, configurações de rede, Linux, Docker e desenvolvimento.
          </p>
          <div className="divider mt-8" />
        </div>

        {posts.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <p className="font-mono text-[#4a4540] text-sm">// nenhum post ainda — em breve!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="glass glass-hover rounded-2xl p-6 transition-all group-hover:-translate-y-0.5 relative">
                  <ArrowUpRight
                    size={16}
                    className="absolute top-6 right-6 text-[#5a5550] group-hover:text-[#c9a84c] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                  <div className="flex flex-wrap gap-1.5 mb-3 pr-8">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.14)] text-[#c9a84c] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-[#d4cfc5] group-hover:text-[#f0ebe0] transition-colors mb-1 tracking-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#6a6055] text-sm leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#5a5550]">
                    <span>{formatDate(post.date)}</span>
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

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function BlogSection({ posts }: { posts: PostMeta[] }) {
  return (
    <section id="blog" className="py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-16"
        >
          <div>
            <p className="section-label mb-4">Artigos</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#f0ebe0] tracking-tight leading-none">
              Blog & Dicas
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-sm text-[#c9a84c] hover:text-[#e8c97a] font-medium transition-colors font-mono tracking-wide flex-shrink-0"
          >
            Ver todos <ArrowRight size={13} />
          </Link>
        </motion.div>

        <div className="divider mb-10" />

        {posts.length === 0 ? (
          <div className="glass rounded-2xl p-14 text-center">
            <p className="font-mono text-[#4a4540] text-sm tracking-widest">// posts em breve</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.slice(0, 3).map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1">

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.14)] text-[#c9a84c] rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="font-bold text-[#d4cfc5] group-hover:text-[#f0ebe0] transition-colors mb-3 leading-snug flex-1 tracking-tight">
                      {post.title}
                    </h3>

                    <p className="text-[#6a6055] text-sm leading-relaxed mb-5 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(255,255,255,0.04)]">
                      <span className="font-mono text-[11px] text-[#5a5550]">
                        {new Date(post.date).toLocaleDateString('pt-BR', {
                          day: '2-digit', month: 'short', year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-[#5a5550]">
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

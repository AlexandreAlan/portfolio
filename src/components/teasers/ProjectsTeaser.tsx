'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, ExternalLink, HardDriveDownload } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsTeaser() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <p className="section-label mb-4 text-[#c9a84c] font-mono text-xs uppercase tracking-[0.3em] font-bold">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#f0ebe0] tracking-tighter leading-none">
              Cases de <br /> <span className="text-[#c9a84c] italic">Sucesso.</span>
            </h2>
          </div>
          <Link 
            href="/projetos" 
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-[#c9a84c] font-bold transition-all font-mono tracking-widest uppercase border-b border-white/5 pb-1"
          >
            Ver portfólio de cases <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Case: VexoSync */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 rounded-[40px] border border-white/5 bg-white/[0.01] overflow-hidden hover:border-[#c9a84c]/20 transition-all"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c9a84c]/[0.02] rounded-full blur-3xl group-hover:bg-[#c9a84c]/[0.04] transition-all" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center">
                   <HardDriveDownload size={24} />
                 </div>
                 <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest">Enterprise Solution</span>
              </div>
              
              <h3 className="text-3xl font-black text-[#f0ebe0] mb-4 tracking-tight italic">Proteção de Dados em Larga Escala</h3>
              <p className="text-[#8a8070] text-lg leading-relaxed mb-8">
                Desenvolvemos uma engine de backup distribuído que reduziu custos de infraestrutura em 90% via deduplicação nativa e criptografia AES-256 de ponta a ponta.
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-4">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold tracking-widest">Saving</span>
                      <span className="text-xs font-bold text-[#c9a84c]">90% Space</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold tracking-widest">Security</span>
                      <span className="text-xs font-bold text-[#c9a84c]">Military Grade</span>
                   </div>
                </div>
                <span className="text-[10px] font-mono text-[#c9a84c] uppercase tracking-widest font-bold bg-[#c9a84c]/10 px-2 py-1 rounded-md">VexoSync</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Case: AltivaAI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative p-10 rounded-[40px] border border-white/5 bg-white/[0.01] overflow-hidden hover:border-violet-500/20 transition-all"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/[0.02] rounded-full blur-3xl group-hover:bg-violet-500/[0.04] transition-all" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
                   <Code2 size={24} />
                 </div>
                 <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest">SaaS Architecture</span>
              </div>
              
              <h3 className="text-3xl font-black text-[#f0ebe0] mb-4 tracking-tight italic">Automação de Leads com IA</h3>
              <p className="text-[#8a8070] text-lg leading-relaxed mb-8">
                Arquitetura multi-tenant escalável para o setor imobiliário, automatizando 100% do primeiro contato via WhatsApp e integrando com Meta Ads para conversão.
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex gap-4">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold tracking-widest">Efficiency</span>
                      <span className="text-xs font-bold text-violet-400">24/7 Auto-reply</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-zinc-600 uppercase font-bold tracking-widest">Ops</span>
                      <span className="text-xs font-bold text-violet-400">Multi-channel</span>
                   </div>
                </div>
                <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest font-bold bg-violet-500/10 px-2 py-1 rounded-md">AltivaAI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

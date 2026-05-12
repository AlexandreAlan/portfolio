'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, MapPin, Layers, Network } from 'lucide-react'
import Link from 'next/link'

const vp = { once: true, amount: 0 }

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-10 pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[rgba(201,168,76,0.05)] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-24">

        {/* Left — Business Messaging */}
        <div className="flex flex-col gap-8">

          <motion.div {...fade(0.1)}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.2)] text-[10px] font-bold tracking-[0.2em] text-[#c9a84c] uppercase shadow-luxury">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]" />
              </span>
              Disponível para Consultoria Estratégica
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.p {...fade(0.2)} className="font-mono text-xs tracking-[0.3em] uppercase text-[#8a8070] font-bold">
              Elite Infrastructure &amp; Software Solutions
            </motion.p>

            <motion.h1 {...fade(0.25)} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tight text-[#f0ebe0]">
              Infraestrutura<br />
              <span className="text-[#c9a84c] text-glow-gold italic">Inabalável.</span>
            </motion.h1>
          </div>

          <motion.p {...fade(0.35)} className="text-[#8a8070] text-base md:text-lg leading-[1.65] max-w-lg">
            Projetamos e escalamos sistemas de <span className="text-zinc-100 italic">alta densidade</span> para empresas que não aceitam falhas. Segurança N2, performance nativa e arquitetura resiliente.
          </motion.p>

          <motion.div {...fade(0.45)} className="flex flex-wrap gap-4 items-center">
            <Link
              href="/contato"
              className="flex items-center gap-2 px-8 py-4 bg-zinc-100 text-black font-black text-sm rounded-xl hover:bg-white transition-all duration-300 shadow-luxury active:scale-95"
            >
              Agendar Auditoria <ArrowRight size={16} />
            </Link>
            <Link
              href="/servicos"
              className="flex items-center gap-2 px-8 py-4 glass glass-hover text-[#f0ebe0] font-bold text-sm rounded-xl transition-all duration-300 border-white/10"
            >
              Ver Soluções
            </Link>
          </motion.div>

          <motion.div {...fade(0.5)} className="flex items-center gap-6 pt-4 border-t border-white/5 max-w-sm">
             <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold">Security</span>
                <span className="text-xs font-bold text-zinc-400 italic">AES-256 Standards</span>
             </div>
             <div className="w-px h-8 bg-white/5" />
             <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold">Availability</span>
                <span className="text-xs font-bold text-zinc-400 italic">99.9% Up-time focus</span>
             </div>
          </motion.div>
        </div>

        {/* Right — Profile/Trust Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative group/avatar">
            <div className="absolute inset-0 rounded-[40px] bg-[#c9a84c]/5 blur-[60px] group-hover/avatar:bg-[#c9a84c]/10 transition-all" />

            <div className="relative w-80 h-[450px] rounded-[40px] glass border-white/10 flex flex-col p-8 shadow-luxury overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
              
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-3xl bg-[#c9a84c]/20 blur-2xl animate-pulse-slow" />
                <div className="relative w-32 h-32 rounded-3xl border border-[#c9a84c]/40 bg-zinc-900/50 p-1 overflow-hidden">
                   <img 
                    src="/me.jpg" 
                    alt="Alexandre Alan" 
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover/avatar:grayscale-0 transition-all duration-700" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<span class="font-mono font-black text-5xl text-[#c9a84c]">AA</span>';
                    }}
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-xl text-[#f0ebe0] tracking-tight">Alexandre Alan</h3>
                <p className="text-[12px] text-[#c9a84c] mt-1 font-medium mb-6">Analista de Redes N2 &amp; Full-Stack Developer</p>

                <div className="space-y-5">
                   <TrustMetric icon={<Network size={14} />} label="Foco" value="Redes corporativas & Full-Stack" />
                   <TrustMetric icon={<Layers size={14} />} label="Stack" value="Python · TypeScript · Docker · pfSense" />
                   <TrustMetric icon={<MapPin size={14} />} label="Atuação" value="Fortaleza · Remoto" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-4">
                 <a href="https://github.com/AlexandreAlan" target="_blank" className="text-zinc-500 hover:text-zinc-200 transition-colors"><Github size={18} /></a>
                 <a href="https://www.linkedin.com/in/alexandre-alan-a5a8362ab" target="_blank" className="text-zinc-500 hover:text-zinc-200 transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 uppercase font-bold">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-[#c9a84c] to-transparent"
        />
      </div>
    </section>
  )
}

function TrustMetric({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-[#c9a84c] mt-0.5">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-zinc-500 leading-none mb-1">{label}</p>
        <p className="text-[12px] font-medium text-zinc-300 leading-snug">{value}</p>
      </div>
    </div>
  )
}

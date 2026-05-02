'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'

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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgba(201,168,76,0.03)] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center py-20">

        {/* Left — Text */}
        <div className="flex flex-col gap-7">

          <motion.div {...fade(0.1)}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Disponível para projetos
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.p {...fade(0.2)} className="font-mono text-xs tracking-[0.25em] uppercase text-[#8a8070]">
              Analista de Redes N2 &amp; Software Developer
            </motion.p>

            <motion.h1 {...fade(0.25)} className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-[#f0ebe0]">
              Alexandre<br />
              <span className="text-[#c9a84c] text-glow-gold">Alan.</span>
            </motion.h1>
          </div>

          <motion.p {...fade(0.35)} className="text-[#8a8070] text-base md:text-lg leading-[1.85] max-w-lg">
            Especialista em{' '}
            <span className="text-[#c9a84c] font-medium">infraestrutura</span>,{' '}
            <span className="text-[#c9a84c] font-medium">redes corporativas</span> e{' '}
            <span className="text-[#c9a84c] font-medium">desenvolvimento de sistemas</span>.
            Construo soluções robustas que funcionam em produção — sem gambiarras.
          </motion.p>

          <motion.div {...fade(0.45)} className="flex flex-wrap gap-3 items-center">
            <a
              href="#especialidades"
              className="flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#080808] font-bold text-sm rounded-lg hover:bg-[#e8c97a] transition-all duration-300 shadow-gold-sm hover:shadow-gold-md"
            >
              Ver Especialidades <ArrowRight size={14} />
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 px-6 py-3 glass glass-hover text-[#b0a898] font-semibold text-sm rounded-lg transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </motion.div>

          <motion.div {...fade(0.5)} className="flex items-center gap-2 pt-2">
            <div className="h-px w-8 bg-[rgba(201,168,76,0.3)]" />
            <a
              href="https://github.com/AlexandreAlan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass glass-hover rounded-lg text-[#6a6055] hover:text-[#f0ebe0] transition-all"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-alan-a5a8362ab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 glass glass-hover rounded-lg text-[#6a6055] hover:text-[#f0ebe0] transition-all"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right — Avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[rgba(201,168,76,0.08)] blur-2xl scale-110" />

            <div className="relative w-72 h-80 rounded-3xl glass-gold flex flex-col items-center justify-center gap-5 shadow-luxury">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[rgba(201,168,76,0.15)] blur-xl animate-pulse-slow" />
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[rgba(201,168,76,0.2)] to-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.3)] flex items-center justify-center">
                  <span className="font-mono font-black text-4xl text-[#c9a84c] text-glow-gold">AA</span>
                </div>
              </div>

              <div className="text-center px-4">
                <p className="font-bold text-[#f0ebe0] text-lg tracking-tight">Alexandre Alan</p>
                <p className="font-mono text-xs text-[#8a8070] mt-1 tracking-wide">Analista N2 · Software Developer</p>
              </div>

              <div className="flex gap-6 pt-1 border-t border-[rgba(201,168,76,0.1)] w-full justify-center px-6 py-3">
                {[
                  { val: 'N2', lbl: 'Nível' },
                  { val: '24/7', lbl: 'Infra' },
                  { val: '5+', lbl: 'Anos' },
                ].map((s) => (
                  <div key={s.lbl} className="text-center">
                    <p className="font-mono font-bold text-[#c9a84c] text-sm">{s.val}</p>
                    <p className="font-mono text-[10px] text-[#6a6055] tracking-wider uppercase mt-0.5">{s.lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#5a5550] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[rgba(201,168,76,0.3)] to-transparent"
        />
      </div>
    </section>
  )
}

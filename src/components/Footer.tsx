'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[rgba(255,255,255,0.04)] py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.05)] flex items-center justify-center">
                <span className="font-mono text-[11px] font-bold text-[#c9a84c]">AA</span>
              </div>
              <span className="font-bold text-[#f0ebe0] tracking-tight">Alexandre Alan</span>
            </div>
            <p className="font-mono text-[11px] text-[#5a5550] tracking-wide">
              Analista de Redes N3 · Dev Full-Stack
            </p>
            <p className="font-mono text-[11px] text-[#4a4540] mt-1">
              © {year} — Todos os direitos reservados
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/AlexandreAlan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass glass-hover rounded-xl text-sm text-[#6a6055] hover:text-[#f0ebe0] transition-all"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-alan-a5a8362ab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass glass-hover rounded-xl text-sm text-[#6a6055] hover:text-[#f0ebe0] transition-all"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="https://wa.me/5585988770078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)] text-[#c9a84c] font-bold text-sm rounded-xl hover:bg-[rgba(201,168,76,0.18)] transition-all"
            >
              <MessageCircle size={14} /> Cuida!
            </a>
          </div>
        </motion.div>

        <div className="divider mt-8 mb-5" />

        <p className="font-mono text-[11px] text-[#4a4540] text-center tracking-wide">
          Feito com Next.js · Tailwind CSS · Framer Motion · VPS Linux — EUA
        </p>
      </div>
    </footer>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function ContactTeaser() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 md:p-24 rounded-[64px] border border-[rgba(201,168,76,0.15)] bg-gradient-to-b from-[rgba(201,168,76,0.05)] to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-40" />
          
          <h2 className="text-3xl md:text-5xl font-black text-[#f0ebe0] tracking-tight mb-6 leading-[1.05]">
            Escale sua <br /> <span className="text-[#c9a84c]">Operação.</span>
          </h2>

          <p className="text-[#8a8070] text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Se sua empresa precisa de blindagem de infraestrutura ou software escalável, estamos prontos para o deploy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contato"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold text-base rounded-xl hover:bg-zinc-200 transition-all shadow-luxury active:scale-95"
            >
              Solicitar Auditoria
            </Link>
            <a
              href="https://wa.me/5585988770078"
              target="_blank"
              className="w-full sm:w-auto px-7 py-3.5 glass glass-hover text-[#d4cfc5] font-medium text-base rounded-xl transition-all flex items-center justify-center gap-2.5 border-white/5"
            >
              <MessageSquare size={20} className="text-[#c9a84c]" />
              WhatsApp Business
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

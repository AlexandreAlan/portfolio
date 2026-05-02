'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá Alexandre! Meu nome é *${form.name}*.\n\n*Assunto:* ${form.subject}\n\n${form.message}\n\n_Email para retorno: ${form.email}_`
    )
    window.open(`https://wa.me/5585988770078?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const input =
    'w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-xl px-4 py-3.5 text-sm text-[#d4cfc5] placeholder-[#3a3530] font-sans outline-none focus:border-[rgba(201,168,76,0.35)] focus:bg-[rgba(201,168,76,0.02)] transition-all duration-300'

  return (
    <section id="contato" className="py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Fale comigo</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#f0ebe0] tracking-tight leading-none">
            Contato
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-7"
          >
            <p className="text-[#8a8070] leading-[1.9] text-base">
              Tem um projeto em mente, precisa de suporte em infraestrutura ou quer bater um papo sobre tecnologia?
              <span className="text-[#b0a898]"> Manda mensagem. </span>
              Respondo em até 24 horas.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5585988770078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 glass glass-hover rounded-xl group transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:bg-green-500/15 transition-all">
                  <MessageCircle size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#d4cfc5]">WhatsApp</p>
                  <p className="font-mono text-xs text-[#5a5550]">+55 (85) 98877-0078</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/alexandre-alan-a5a8362ab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 glass glass-hover rounded-xl group transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/15 transition-all">
                  <Linkedin size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#d4cfc5]">LinkedIn</p>
                  <p className="font-mono text-xs text-[#5a5550]">alexandre-alan</p>
                </div>
              </a>

              <a
                href="https://github.com/AlexandreAlan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 glass glass-hover rounded-xl group transition-all"
              >
                <div className="w-9 h-9 rounded-lg glass border border-white/[0.07] flex items-center justify-center text-[#8a8070] group-hover:text-[#f0ebe0] transition-all">
                  <Github size={17} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#d4cfc5]">GitHub</p>
                  <p className="font-mono text-xs text-[#5a5550]">@AlexandreAlan</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-widest text-[#6a6055]">Nome</label>
                  <input
                    className={input}
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] uppercase tracking-widest text-[#6a6055]">E-mail</label>
                  <input
                    type="email"
                    className={input}
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-widest text-[#6a6055]">Assunto</label>
                <input
                  className={input}
                  placeholder="Ex: Consultoria de rede, desenvolvimento..."
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-widest text-[#6a6055]">Mensagem</label>
                <textarea
                  className={`${input} resize-none`}
                  rows={5}
                  placeholder="Descreva como posso te ajudar..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#c9a84c] text-[#080808] font-bold text-sm rounded-xl hover:bg-[#e8c97a] transition-all duration-300 shadow-gold-sm hover:shadow-gold-md mt-1"
              >
                {sent ? '✓ Abrindo WhatsApp…' : (
                  <><Send size={14} /> Enviar via WhatsApp</>
                )}
              </button>

              <p className="font-mono text-[11px] text-[#4a4540] text-center">
                A mensagem será enviada diretamente pelo WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

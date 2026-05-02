'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Server, Bot, FlaskConical } from 'lucide-react'

type Category = 'producao' | 'laboratorio'

type Project = {
  category: Category
  name: string
  tagline: string
  description: string
  stack: string[]
  url: string | null
  github: string | null
  icon: React.ReactNode
  iconColor: string
  iconBg: string
  stats: { v: string; l: string }[]
  sector?: string
  highlights?: string[]
}

const projects = [
  {
    category: 'producao' as Category,
    name: 'AltivaAI',
    tagline: 'SaaS de Atendimento Imobiliário com Inteligência Artificial',
    description:
      'Sistema desenvolvido sob medida para o setor imobiliário — automatiza o atendimento de leads via WhatsApp, Instagram e Facebook com agentes de IA treinados no contexto de vendas e locação de imóveis. Arquitetura multi-tenant com banco de dados isolado por cliente, CRM integrado, painel administrativo completo, relatórios de atendimento e integração com Facebook Ads para captura direta de leads.',
    stack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker', 'JWT', 'WhatsApp API', 'Meta API'],
    url: null,
    github: null,
    icon: <Bot size={20} strokeWidth={1.5} />,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    stats: [{ v: 'Imóveis', l: 'Setor' }, { v: 'Multi', l: 'Canais' }, { v: 'IA', l: 'Agentes' }],
    sector: 'Imobiliário',
    highlights: [
      'Captura automática de leads via Facebook Ads',
      'Agentes de IA treinados para vendas e locação',
      'Banco de dados isolado por cliente (multi-tenant)',
      'Relatórios de atendimento e conversão',
    ],
  },
  {
    category: 'producao' as Category,
    name: 'Arretado Speed',
    tagline: 'Teste de Velocidade Self-Hosted',
    description:
      'Sistema de teste de velocidade de internet rodando 24/7 em produção. Medição de ping, jitter, download e upload com 4 conexões paralelas, gauge animado em tempo real, histórico e nota de qualidade.',
    stack: ['FastAPI', 'PostgreSQL', 'Nginx', 'Docker', 'SSL'],
    url: 'https://arretadospeed.morenadoaco.com.br',
    github: 'https://github.com/AlexandreAlan/arretadospeed',
    icon: <Zap size={20} strokeWidth={1.5} />,
    iconColor: 'text-[#c9a84c]',
    iconBg: 'bg-[rgba(201,168,76,0.1)] border-[rgba(201,168,76,0.25)]',
    stats: [{ v: '24/7', l: 'Uptime' }, { v: '100MB', l: 'Stream' }, { v: 'A+', l: 'SSL' }],
  },
  {
    category: 'laboratorio' as Category,
    name: 'Infraestrutura VPS',
    tagline: 'Stack de produção pessoal',
    description:
      'VPS Linux com múltiplos projetos orquestrados em Docker, Nginx como reverse proxy centralizado, certificados SSL automáticos e PostgreSQL compartilhado entre serviços.',
    stack: ['Linux', 'Docker', 'Nginx', 'Certbot', 'PostgreSQL'],
    url: null,
    github: null,
    icon: <Server size={20} strokeWidth={1.5} />,
    iconColor: 'text-slate-400',
    iconBg: 'bg-white/[0.04] border-white/[0.08]',
    stats: [{ v: 'EUA', l: 'Região' }, { v: 'TLS 1.3', l: 'Protocolo' }, { v: 'Multi', l: 'Apps' }],
  },
]

const catLabel: Record<Category, { label: string; color: string; bg: string; border: string }> = {
  producao:    { label: 'Produção',    color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
  laboratorio: { label: 'Laboratório', color: 'text-[#c9a84c]',   bg: 'bg-[rgba(201,168,76,0.08)]', border: 'border-[rgba(201,168,76,0.2)]' },
}

export default function Projects() {
  const producao   = projects.filter((p) => p.category === 'producao')
  const laboratorio = projects.filter((p) => p.category === 'laboratorio')

  return (
    <section id="projetos" className="py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Portfólio</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#e8e3d8] tracking-tight leading-none">
            Projetos
          </h2>
          <div className="divider mt-8" />
        </motion.div>

        {/* Produção */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_7px_rgba(52,211,153,0.7)]" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#6a6055]">Em produção</p>
          </div>
          <div className="flex flex-col gap-4">
            {producao.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>

        {/* Laboratório */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical size={13} className="text-[#c9a84c]" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#6a6055]">Laboratório</p>
          </div>
          <div className="flex flex-col gap-4">
            {laboratorio.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const cat = catLabel[p.category]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative glass glass-hover rounded-2xl p-7 overflow-hidden"
    >
      {/* Subtle glow for featured projects with sector */}
      {p.sector && (
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="relative flex flex-col md:flex-row md:items-start gap-6">
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border ${p.iconBg} ${p.iconColor}`}>
          {p.icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-1">
            <h3 className="font-bold text-xl text-[#e8e3d8] tracking-tight">{p.name}</h3>
            <span className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border ${cat.bg} ${cat.border} ${cat.color}`}>
              {cat.label}
            </span>
            {p.sector && (
              <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                {p.sector}
              </span>
            )}
          </div>

          <p className="font-mono text-[11px] text-[#5a5550] uppercase tracking-widest mb-3">{p.tagline}</p>
          <p className="text-[#908880] text-sm leading-relaxed mb-5 max-w-2xl">{p.description}</p>

          {/* Highlights */}
          {p.highlights && (
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-[#808070]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c9a84c] flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {p.stack.map((tag) => (
              <span key={tag} className="font-mono text-[11px] px-3 py-1 glass text-[#706860] rounded-lg">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats + Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.04]">
            <div className="flex gap-7">
              {p.stats.map((s) => (
                <div key={s.l}>
                  <p className="font-mono text-[10px] text-[#4a4540] uppercase tracking-widest">{s.l}</p>
                  <p className="font-mono font-bold text-sm text-[#c9a84c] mt-0.5">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[rgba(201,168,76,0.1)] text-[#c9a84c] border border-[rgba(201,168,76,0.25)] rounded-lg hover:bg-[rgba(201,168,76,0.18)] transition-all">
                  <ExternalLink size={12} /> Ver ao vivo
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold glass glass-hover text-[#706860] rounded-lg transition-all">
                  <Github size={12} /> Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

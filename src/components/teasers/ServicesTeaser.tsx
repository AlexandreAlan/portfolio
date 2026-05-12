'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldAlert, Code, ServerCog, Layers } from 'lucide-react'
import Link from 'next/link'

export default function ServicesTeaser() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-4 text-[#c9a84c] font-mono text-xs uppercase tracking-[0.3em] font-bold">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#f0ebe0] tracking-tight leading-[1.05]">
              Soluções <br /> <span className="text-[#c9a84c]">Sob Medida.</span>
            </h2>
          </motion.div>
          <Link 
            href="/servicos" 
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#c9a84c] font-bold transition-all font-mono tracking-widest uppercase border-b border-white/5 pb-1"
          >
            Ver catálogo completo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<ShieldAlert size={28} />}
            title="Network Security"
            desc="Auditoria, implementação de Firewalls (pfSense), VPNs corporativas e blindagem de infraestrutura contra ataques."
            tags={['Firewall', 'IDS/IPS', 'Zero Trust']}
          />
          <ServiceCard 
            icon={<Code size={28} />}
            title="Custom SaaS"
            desc="Desenvolvimento de sistemas web de alta performance, escaláveis e focados em resolver gargalos operacionais."
            tags={['Full Stack', 'Cloud Native', 'API First']}
          />
          <ServiceCard 
            icon={<ServerCog size={28} />}
            title="DevOps & SRE"
            desc="Orquestração via Docker/Kubernetes, automação de deploys e monitoramento proativo 24/7 de aplicações."
            tags={['Docker', 'CI/CD', 'Uptime']}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, tags }: { icon: React.ReactNode, title: string, desc: string, tags: string[] }) {
  return (
    <div className="group p-8 rounded-[32px] glass border-white/5 hover:border-[#c9a84c]/30 transition-all relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/[0.02] blur-3xl group-hover:bg-[#c9a84c]/5 transition-all" />
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-[#c9a84c] mb-8 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-zinc-100 mb-3 tracking-tight">{title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span key={t} className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-600 border border-white/5 px-2 py-1 rounded-md bg-white/[0.01]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

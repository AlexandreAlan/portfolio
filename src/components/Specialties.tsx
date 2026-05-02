'use client'

import { motion } from 'framer-motion'
import { Network, ShieldCheck, Code2, Server, Wifi, Database } from 'lucide-react'

const specialties = [
  {
    icon: <Network size={26} strokeWidth={1.5} />,
    title: 'Redes & Infraestrutura',
    level: 'N2',
    description:
      'Projeto, implantação e manutenção de redes corporativas. Switching, roteamento, VLANs, QoS, VPN, monitoramento proativo e escalabilidade.',
    items: ['Switching L2/L3', 'Roteamento OSPF/BGP', 'VPN Site-to-Site', 'QoS & Traffic Shaping', 'VLAN & Segmentação'],
  },
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} />,
    title: 'Segurança & Firewall',
    level: 'Especialista',
    description:
      'Hardening de redes e sistemas, políticas de firewall avançadas, análise de tráfego, prevenção de intrusões e conformidade de segurança.',
    items: ['pfSense & OPNsense', 'IDS/IPS (Snort/Suricata)', 'Regras de Firewall', 'Análise de Logs', 'Hardening de Servidores'],
  },
  {
    icon: <Code2 size={26} strokeWidth={1.5} />,
    title: 'Desenvolvimento Full-Stack',
    level: 'Sênior',
    description:
      'Criação de sistemas web, APIs robustas e automações. Do banco de dados à interface — entregando produtos que escalam em produção.',
    items: ['Python & FastAPI', 'Next.js & TypeScript', 'PostgreSQL & Docker', 'APIs REST', 'Automação & Scripts'],
  },
]

const extra = [
  { icon: <Server size={16} strokeWidth={1.5} />, label: 'Administração de Servidores Linux' },
  { icon: <Wifi size={16} strokeWidth={1.5} />, label: 'Wireless Corporativo (802.11ac/ax)' },
  { icon: <Database size={16} strokeWidth={1.5} />, label: 'Banco de Dados & Otimização' },
]

export default function Specialties() {
  return (
    <section id="especialidades" className="py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-4">O que eu faço</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#f0ebe0] tracking-tight leading-none">
              Especialidades
            </h2>
            <p className="text-[#6a6055] text-sm max-w-sm leading-relaxed md:text-right">
              Mais de 5 anos resolvendo problemas reais de infraestrutura e desenvolvimento em ambientes corporativos.
            </p>
          </div>
          <div className="divider mt-8" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {specialties.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col gap-5 group"
            >
              {/* Icon + level */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-[rgba(201,168,76,0.07)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[#c9a84c] group-hover:bg-[rgba(201,168,76,0.12)] transition-all">
                  {s.icon}
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#c9a84c] bg-[rgba(201,168,76,0.07)] border border-[rgba(201,168,76,0.15)] px-2.5 py-1 rounded-full">
                  {s.level}
                </span>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="font-bold text-[#f0ebe0] text-lg mb-2 tracking-tight">{s.title}</h3>
                <p className="text-[#8a8070] text-sm leading-relaxed">{s.description}</p>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-2 mt-auto pt-4 border-t border-[rgba(255,255,255,0.04)]">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[#8a8070] text-xs">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Extra row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {extra.map((e) => (
            <div
              key={e.label}
              className="flex items-center gap-2.5 px-4 py-2.5 glass glass-hover rounded-xl text-sm text-[#8a8070]"
            >
              <span className="text-[#c9a84c]">{e.icon}</span>
              {e.label}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

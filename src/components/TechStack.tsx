'use client'

import { motion } from 'framer-motion'
import {
  SiPython, SiTypescript, SiJavascript, SiPhp, SiCplusplus,
  SiLinux, SiDocker, SiNginx, SiPostgresql,
  SiNextdotjs, SiFastapi, SiTailwindcss, SiReact, SiFramer,
} from 'react-icons/si'
import { ShieldCheck } from 'lucide-react'

const groups = [
  {
    label: 'Linguagens',
    techs: [
      { name: 'Python',     Icon: SiPython,     color: '#3776AB', bg: 'rgba(55,118,171,0.1)',  border: 'rgba(55,118,171,0.25)' },
      { name: 'TypeScript', Icon: SiTypescript,  color: '#3178C6', bg: 'rgba(49,120,198,0.1)',  border: 'rgba(49,120,198,0.25)' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#F7DF1E', bg: 'rgba(247,223,30,0.08)', border: 'rgba(247,223,30,0.22)' },
      { name: 'PHP',        Icon: SiPhp,         color: '#9B7FC8', bg: 'rgba(155,127,200,0.1)', border: 'rgba(155,127,200,0.25)' },
      { name: 'C++',        Icon: SiCplusplus,   color: '#00599C', bg: 'rgba(0,89,156,0.1)',    border: 'rgba(0,89,156,0.25)' },
    ],
  },
  {
    label: 'Infra & Segurança',
    techs: [
      { name: 'Linux',      Icon: SiLinux,       color: '#FCC624', bg: 'rgba(252,198,36,0.08)', border: 'rgba(252,198,36,0.22)' },
      { name: 'Docker',     Icon: SiDocker,      color: '#2496ED', bg: 'rgba(36,150,237,0.1)',  border: 'rgba(36,150,237,0.25)' },
      { name: 'Nginx',      Icon: SiNginx,       color: '#009639', bg: 'rgba(0,150,57,0.1)',    border: 'rgba(0,150,57,0.25)' },
      { name: 'pfSense',    Icon: ShieldCheck,   color: '#CC0000', bg: 'rgba(204,0,0,0.1)',     border: 'rgba(204,0,0,0.25)', size: 18 },
      { name: 'PostgreSQL', Icon: SiPostgresql,  color: '#4169E1', bg: 'rgba(65,105,225,0.1)',  border: 'rgba(65,105,225,0.25)' },
    ],
  },
  {
    label: 'Frameworks & Ferramentas',
    techs: [
      { name: 'Next.js',   Icon: SiNextdotjs,   color: '#e8e3d8', bg: 'rgba(232,227,216,0.06)', border: 'rgba(232,227,216,0.14)' },
      { name: 'FastAPI',   Icon: SiFastapi,     color: '#009688', bg: 'rgba(0,150,136,0.1)',    border: 'rgba(0,150,136,0.25)' },
      { name: 'Tailwind',  Icon: SiTailwindcss, color: '#06B6D4', bg: 'rgba(6,182,212,0.1)',    border: 'rgba(6,182,212,0.25)' },
      { name: 'React',     Icon: SiReact,       color: '#61DAFB', bg: 'rgba(97,218,251,0.08)',  border: 'rgba(97,218,251,0.22)' },
      { name: 'Framer',    Icon: SiFramer,      color: '#8855FF', bg: 'rgba(136,85,255,0.1)',   border: 'rgba(136,85,255,0.25)' },
    ],
  },
]

type Tech = {
  name: string
  Icon: React.ElementType
  color: string
  bg: string
  border: string
  size?: number
}

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -3, scale: 1.04 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default transition-shadow hover:shadow-lg"
      style={{
        background: tech.bg,
        border: `1px solid ${tech.border}`,
      }}
    >
      <tech.Icon size={tech.size ?? 20} color={tech.color} style={{ flexShrink: 0 }} />
      <span className="text-sm font-medium text-[#c8c3b8]">{tech.name}</span>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Ferramentas</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#e8e3d8] tracking-tight leading-none">
            Stack Tecnológica
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#4a4540] mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.techs.map((tech, ti) => (
                  <TechCard key={tech.name} tech={tech} index={gi * 5 + ti} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="divider mt-16" />
      </div>
    </section>
  )
}

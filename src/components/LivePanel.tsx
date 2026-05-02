'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Activity, Zap, Globe, RefreshCw, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react'

interface Stats {
  latency: number | null
  status: 'online' | 'offline' | 'checking'
  arretadoStatus: 'online' | 'offline' | 'checking'
  lastCheck: string
}

export default function LivePanel() {
  const [stats, setStats] = useState<Stats>({
    latency: null,
    status: 'checking',
    arretadoStatus: 'checking',
    lastCheck: '—',
  })
  const [refreshing, setRefreshing] = useState(false)

  const check = useCallback(async () => {
    setRefreshing(true)
    try {
      const t0 = performance.now()
      const res = await fetch('https://arretadospeed.morenadoaco.com.br/api/ping', { cache: 'no-store' })
      const lat = Math.round(performance.now() - t0)
      setStats({
        latency: lat,
        status: 'online',
        arretadoStatus: res.ok ? 'online' : 'offline',
        lastCheck: new Date().toLocaleTimeString('pt-BR'),
      })
    } catch {
      setStats((p) => ({ ...p, status: 'offline', arretadoStatus: 'offline', lastCheck: new Date().toLocaleTimeString('pt-BR') }))
    } finally {
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    check()
    const id = setInterval(check, 30_000)
    return () => clearInterval(id)
  }, [check])

  const statusColor = (s: string) =>
    s === 'online' ? 'text-emerald-400' : s === 'offline' ? 'text-red-400' : 'text-[#8a8070]'
  const statusDot = (s: string) =>
    s === 'online' ? 'bg-emerald-400' : s === 'offline' ? 'bg-red-400' : 'bg-[#3a3530]'
  const statusLabel = (s: string) =>
    s === 'online' ? 'Online' : s === 'offline' ? 'Offline' : 'Verificando…'

  const latencyColor =
    stats.latency === null ? 'text-[#8a8070]'
    : stats.latency < 100 ? 'text-emerald-400'
    : stats.latency < 250 ? 'text-[#c9a84c]'
    : 'text-red-400'

  const latencyLabel =
    stats.latency === null ? '—'
    : stats.latency < 100 ? 'Excelente'
    : stats.latency < 250 ? 'Normal (VPS EUA)'
    : 'Alta'

  return (
    <section className="py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-7 md:p-9"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="section-label mb-2">Monitoramento em tempo real</p>
              <h3 className="text-xl font-bold text-[#f0ebe0] tracking-tight">Painel de Infraestrutura</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#5a5550]">
                Última verificação: <span className="text-[#8a8070]">{stats.lastCheck}</span>
              </span>
              <button
                onClick={check}
                disabled={refreshing}
                className="p-2 glass glass-hover rounded-lg text-[#6a6055] hover:text-[#f0ebe0] transition-all disabled:opacity-40"
                title="Atualizar"
              >
                <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} />
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* VPS */}
            <div className="glass-gold rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={14} className="text-[#c9a84c]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6a6055]">VPS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${statusDot(stats.status)} ${stats.status === 'online' ? 'shadow-[0_0_6px_rgba(52,211,153,0.6)]' : ''}`} />
                <span className={`font-bold text-base ${statusColor(stats.status)}`}>
                  {statusLabel(stats.status)}
                </span>
              </div>
              <p className="font-mono text-[10px] text-[#5a5550] mt-1 uppercase tracking-wider">Estados Unidos</p>
            </div>

            {/* Latência */}
            <div className="glass-gold rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={14} className="text-[#c9a84c]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6a6055]">Latência</span>
              </div>
              <p className={`font-mono font-bold text-xl ${latencyColor}`}>
                {stats.latency !== null ? `${stats.latency}ms` : '—'}
              </p>
              <p className="font-mono text-[10px] text-[#5a5550] mt-1 uppercase tracking-wider">{latencyLabel}</p>
            </div>

            {/* ArretadoSpeed */}
            <div className="glass-gold rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Globe size={14} className="text-[#c9a84c]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6a6055]">ArretadoSpeed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${statusDot(stats.arretadoStatus)} ${stats.arretadoStatus === 'online' ? 'shadow-[0_0_6px_rgba(52,211,153,0.6)]' : ''}`} />
                <span className={`font-bold text-base ${statusColor(stats.arretadoStatus)}`}>
                  {statusLabel(stats.arretadoStatus)}
                </span>
              </div>
              <a
                href="https://arretadospeed.morenadoaco.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-[#c9a84c]/60 hover:text-[#c9a84c] mt-1 uppercase tracking-wider transition-colors block"
              >
                arretadospeed ↗
              </a>
            </div>

            {/* SSL */}
            <div className="glass-gold rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Activity size={14} className="text-[#c9a84c]" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#6a6055]">SSL / TLS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                <span className="font-bold text-base text-emerald-400">Ativo</span>
              </div>
              <p className="font-mono text-[10px] text-[#5a5550] mt-1 uppercase tracking-wider">Let's Encrypt</p>
            </div>
          </div>

          {/* Footer note */}
          <p className="font-mono text-[11px] text-[#4a4540] mt-6 leading-relaxed">
            * A latência reflete a distância real entre o seu dispositivo e a VPS nos EUA. Valores entre 150–250ms são normais para usuários no Brasil.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

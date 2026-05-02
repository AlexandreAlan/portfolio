'use client'

import { useState, useEffect } from 'react'
import { Activity } from 'lucide-react'

export default function SystemStatus() {
  const [latency, setLatency] = useState<number | null>(null)
  const [online, setOnline] = useState(true)

  useEffect(() => {
    const measure = async () => {
      try {
        const t0 = performance.now()
        await fetch('https://arretadospeed.morenadoaco.com.br/api/ping', { cache: 'no-store' })
        setLatency(Math.round(performance.now() - t0))
        setOnline(true)
      } catch {
        setOnline(false)
        setLatency(null)
      }
    }
    measure()
    const id = setInterval(measure, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] font-mono tracking-wider">
      <Activity size={10} className={online ? 'text-[#c9a84c]' : 'text-red-500'} />
      <span className={online ? 'text-[#6a6055]' : 'text-red-500'}>
        VPS {online ? 'Online' : 'Offline'}
      </span>
      {latency !== null && (
        <>
          <span className="text-[#2a2520]">·</span>
          <span className="text-[#c9a84c]">{latency}ms</span>
        </>
      )}
    </div>
  )
}

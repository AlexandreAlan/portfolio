'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Cases', href: '/projetos' },
  { label: 'Insights', href: '/blog' },
  { label: 'Consultoria', href: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-lg border-b border-white/[0.04]'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.06)] flex items-center justify-center group-hover:border-[rgba(201,168,76,0.5)] transition-all duration-300 overflow-hidden">
            {/* Foto do Usuário — Caso queira trocar, basta subir uma imagem para /public/me.jpg */}
            <img 
              src="/me.jpg" 
              alt="Alexandre Alan" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback caso a foto não exista
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="font-mono text-[10px] font-bold text-[#c9a84c]">AA</span>';
              }}
            />
          </div>
          <span className="text-sm font-bold text-[#f0ebe0] group-hover:text-[#c9a84c] tracking-tight transition-colors uppercase">
            Alexandre Alan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`px-3.5 py-2 text-[0.75rem] uppercase tracking-widest font-bold transition-all duration-200 rounded-md ${
                  isActive 
                    ? 'text-[#c9a84c] bg-[rgba(201,168,76,0.05)]' 
                    : 'text-[#8a8070] hover:text-[#f0ebe0] hover:bg-white/[0.03]'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#8a8070] hover:text-[#f0ebe0] transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/[0.04] px-6 pb-5 pt-2"
          >
            {links.map((l) => {
              const isActive = pathname === l.href
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm font-bold uppercase tracking-widest border-b border-white/[0.04] last:border-0 transition-colors ${
                    isActive ? 'text-[#c9a84c]' : 'text-[#8a8070] hover:text-[#f0ebe0]'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

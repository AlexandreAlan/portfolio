'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.06)] flex items-center justify-center group-hover:border-[rgba(201,168,76,0.5)] transition-all duration-300">
            <span className="font-mono text-xs font-bold text-[#c9a84c]">AA</span>
          </div>
          <span className="text-sm font-semibold text-[#f0ebe0]/80 group-hover:text-[#f0ebe0] tracking-wide transition-colors">
            Alexandre Alan
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3.5 py-2 text-[0.8rem] text-[#8a8070] hover:text-[#f0ebe0] rounded-md hover:bg-white/[0.03] transition-all duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
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
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-[#8a8070] hover:text-[#f0ebe0] border-b border-white/[0.04] last:border-0 transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

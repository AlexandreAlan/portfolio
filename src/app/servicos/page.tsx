import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ShieldCheck, Code2, CheckCircle2, Zap } from 'lucide-react'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#080808] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          
          <header className="mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest mb-6">
              Solutions & Consulting
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#f0ebe0] tracking-tighter mb-10 leading-[0.95]">
              Arquitetura de <br /> <span className="text-[#c9a84c] italic">Alta Disponibilidade.</span>
            </h1>
            <p className="text-base md:text-lg text-[#8a8070] leading-relaxed max-w-3xl">
              Apoiamos empresas na modernização de sua infraestrutura digital. Do provisionamento de servidores à segurança de borda, entregamos soluções que escalam com o seu negócio.
            </p>
          </header>

          <div className="grid gap-24">
            {/* Service 1 */}
            <ServiceSection 
              title="Redes & Cibersegurança"
              subtitle="Proteção de Borda e Gestão de Tráfego"
              desc="Especialistas em implementações críticas de pfSense e OPNsense. Projetamos arquiteturas de rede 'Zero Trust', VPNs de alta performance e sistemas de detecção de intrusão (IDS/IPS) para garantir que sua operação nunca pare."
              features={[
                'Auditoria completa de Firewall & Regras',
                'Implementação de VPN Multi-Site (IPsec/OpenVPN)',
                'Configuração de Alta Disponibilidade (Failover)',
                'Monitoramento de tráfego em tempo real',
              ]}
              icon={<ShieldCheck size={32} />}
            />

            {/* Service 2 */}
            <ServiceSection
              title="Desenvolvimento Full-Stack"
              subtitle="Sob Medida — SaaS, Web Apps & Sistemas PDV"
              desc="Construo sistemas web e soluções SaaS sob medida, do MVP à produção. Sistemas de PDV (ponto de venda), painéis administrativos, integrações com APIs e ferramentas internas — usando Next.js, FastAPI, PostgreSQL e Docker."
              features={[
                'Plataformas SaaS e Web Apps sob medida',
                'Sistemas PDV (ponto de venda)',
                'Painéis administrativos e dashboards',
                'APIs em Python/FastAPI e integrações',
              ]}
              icon={<Code2 size={32} />}
              reversed
            />
          </div>

          {/* Business CTA */}
          <section className="mt-40 p-12 md:p-24 rounded-[64px] bg-gradient-to-br from-zinc-900 to-[#080808] border border-white/5 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 blur-[120px] rounded-full" />
             <div className="relative">
                <Zap size={48} className="text-[#c9a84c] mx-auto mb-8 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-black text-zinc-100 mb-6 tracking-tight">Pronto para elevar o nível da sua operação?</h2>
                <p className="text-zinc-500 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
                  Oferecemos auditorias iniciais gratuitas para projetos de infraestrutura de longo prazo. Entre em contato e vamos desenhar sua próxima arquitetura.
                </p>
                <a href="/contato" className="px-8 py-3.5 bg-[#c9a84c] text-black font-bold text-base rounded-xl hover:bg-[#e8c97a] transition-all shadow-luxury active:scale-95 inline-block">
                  Solicitar Auditoria Técnica
                </a>
             </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

function ServiceSection({ title, subtitle, desc, features, icon, reversed = false }: { title: string, subtitle: string, desc: string, features: string[], icon: React.ReactNode, reversed?: boolean }) {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-start`}>
      <div className="flex-1">
        <div className="inline-flex p-4 rounded-3xl bg-[#c9a84c]/10 text-[#c9a84c] mb-8 border border-[#c9a84c]/20">
          {icon}
        </div>
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#c9a84c] mb-2">{subtitle}</h3>
        <h2 className="text-2xl md:text-4xl font-black text-zinc-100 mb-5 tracking-tight">{title}</h2>
        <p className="text-zinc-500 text-base leading-relaxed mb-8 max-w-xl">{desc}</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {features.map(f => (
            <li key={f} className="flex items-center gap-3 text-sm font-medium text-zinc-400">
               <CheckCircle2 size={16} className="text-[#c9a84c]" />
               {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-[400px] h-[320px] rounded-[40px] bg-zinc-900/40 border border-white/5 flex items-center justify-center relative group overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="relative text-zinc-700 opacity-25 group-hover:opacity-40 transition-opacity scale-[3]">
            {icon}
         </div>
      </div>
    </div>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Specialties from '@/components/Specialties'
import TechStack from '@/components/TechStack'

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#080808] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
          <div className="mb-20">
            <p className="section-label mb-4 text-[#c9a84c] font-mono text-xs uppercase tracking-[0.3em]">Trajectory</p>
            <h1 className="text-4xl md:text-5xl font-black text-[#f0ebe0] tracking-tight mb-6 leading-[1.05]">
              Arquiteto de <br /> <span className="text-[#c9a84c]">Sistemas & Redes.</span>
            </h1>
            <p className="text-[#8a8070] text-base md:text-lg leading-relaxed max-w-3xl">
              Com foco em alta performance e segurança, atuo na intersecção entre a infraestrutura robusta de redes e o desenvolvimento ágil de software. Nível N2 certificado e Desenvolvedor Full-Stack.
            </p>
          </div>
          
          <div className="space-y-32">
            <Specialties />
            <TechStack />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

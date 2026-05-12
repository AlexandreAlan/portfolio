import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#080808] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
           <div className="mb-20 text-center">
             <p className="section-label mb-4 text-[#c9a84c] font-mono text-xs uppercase tracking-[0.3em]">Connect</p>
             <h1 className="text-4xl md:text-5xl font-black text-[#f0ebe0] tracking-tight mb-6 leading-[1.05]">
               Mande uma <br /> <span className="text-[#c9a84c]">Mensagem.</span>
             </h1>
             <p className="text-[#8a8070] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
               Estou sempre aberto a novos desafios técnicos, parcerias em projetos Open Source ou consultorias especializadas.
             </p>
           </div>
           <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

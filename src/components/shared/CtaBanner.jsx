import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="py-[80px] bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="relative bg-[#1a1f36] dark:bg-slate-900 rounded-3xl px-10 py-[60px] text-center overflow-hidden shadow-2xl border border-transparent dark:border-slate-800/80">
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(234,88,12,0.15) 0%, transparent 70%)' }}></div>
          <h2 className="relative text-[clamp(32px,4vw,48px)] font-black tracking-[-1.5px] text-white mb-4">Ready to transform your business?</h2>
          <p className="relative text-[16px] text-white/70 max-w-[480px] mx-auto mb-8 font-medium">
            Join hundreds of enterprises operating efficiently with LedgerCart ERP and our Managed IT Services.
          </p>
          <div className="relative flex items-center justify-center gap-3.5 mb-6 flex-wrap">
            <Link to="/contact" className="px-6 py-3 text-[15px] font-semibold text-white bg-orange-600 border border-orange-600 rounded-[8px] hover:bg-orange-700 hover:border-orange-700 transition-all hover:shadow-lg hover:shadow-orange-600/30 no-underline">Request Consultation</Link>
            <Link to="/service" className="px-6 py-3 text-[15px] font-semibold text-white bg-transparent border border-white/20 rounded-[8px] hover:bg-white/10 transition-all no-underline">Explore Services</Link>
          </div>
          <p className="relative text-[13px] text-white/40">Predictable timelines · Custom quotes · Enterprise-grade support</p>
        </div>
      </div>
    </section>
  )
}

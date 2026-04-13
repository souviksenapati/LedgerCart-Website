import { Link } from 'react-router-dom'

export default function PricingCtaStrip() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0f1a] text-center transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-orange-600 mb-4">TALK TO US</p>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1px] text-gray-900 dark:text-slate-100 mb-4">Get your tailored IT solution</h2>
        <p className="text-base text-gray-500 dark:text-slate-400 mb-8">Let's discuss how LedgerCart can transform your business workflows.</p>
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <Link to="/contact" className="px-7 py-3.5 text-[15px] font-semibold text-white bg-orange-600 rounded-[10px] hover:bg-orange-700 transition-all hover:-translate-y-px no-underline shadow-lg shadow-orange-600/20">Request a Consultation</Link>
          <Link to="/product" className="px-7 py-3.5 text-[15px] font-semibold text-gray-800 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-[10px] hover:border-gray-800 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all no-underline">Explore LedgerCart ERP</Link>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Our Flagship Product
        </div>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[800px] mx-auto mb-6">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">LedgerCart ERP</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 max-w-[640px] mx-auto mb-8 leading-[1.7]">
          An end-to-end Enterprise Resource Planning solution designed to streamline your operations, unify your data, and scale your business with ease.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link to="/contact" className="px-6 py-2.5 text-[15px] font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-orange-600/30 no-underline">
            Request a Demo
          </Link>
          <Link to="/contact" className="px-6 py-2.5 text-[15px] font-semibold text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-gray-400 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all no-underline">
            Get Pricing Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

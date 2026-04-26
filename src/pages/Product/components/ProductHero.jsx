import { Link } from 'react-router-dom'
import erpLogoLightWebp from '../../../assets/LedgerCart ERP Logo Light.webp'
import erpLogoDarkWebp from '../../../assets/LedgerCart ERP Logo Dark.webp'

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-16 bg-gradient-to-b from-orange-50 via-white to-white dark:from-dark-bg dark:via-slate-950 dark:to-dark-bg transition-colors duration-300">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[780px] h-[780px] bg-orange-200/60 dark:bg-orange-500/10 blur-3xl rounded-full" />
        <div className="absolute top-10 right-[-240px] w-[640px] h-[640px] bg-sky-200/45 dark:bg-sky-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-380px] left-[-260px] w-[720px] h-[720px] bg-indigo-200/35 dark:bg-indigo-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center justify-center rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-gray-200/70 dark:border-slate-800 px-5 py-3 shadow-sm backdrop-blur">
            <img src={erpLogoLightWebp} alt="LedgerCart ERP" className="h-[56px] w-auto object-contain dark:hidden" height="56" fetchpriority="high" decoding="async" />
            <img src={erpLogoDarkWebp} alt="LedgerCart ERP" className="h-[56px] w-auto object-contain hidden dark:block" height="56" fetchpriority="high" decoding="async" />
          </div>
        </div>

        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[920px] mx-auto mb-6">
          The Complete Unified{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Commerce & ERP</span>{' '}
          Ecosystem
        </h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 max-w-[700px] mx-auto mb-8 leading-[1.7]">
          Seamlessly integrated SaaS for next-gen B2C Retail, Wholesale B2B Commerce, and Complex Inventory & Logistics Management. Designed for High-Growth Indian SMBs and Enterprises.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link to="/contact" className="px-6 py-2.5 text-[15px] font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-orange-600/30 no-underline">
            Request a Demo
          </Link>
          <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2.5 text-[15px] font-semibold text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-gray-400 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all cursor-pointer">
            Get Pricing Quote
          </button>
        </div>
      </div>
    </section>
  )
}

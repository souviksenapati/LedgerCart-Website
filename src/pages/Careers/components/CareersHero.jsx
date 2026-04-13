
export default function CareersHero() {
  return (
    <section className="pt-6 pb-20 bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-center transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          We are Hiring
        </div>
        <h1 className="text-[clamp(36px,5vw,56px)] font-black tracking-[-2px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-8 max-w-[900px] mx-auto">
          Build the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Enterprise Operations</span> with us.
        </h1>
        <p className="text-xl text-gray-500 dark:text-slate-400 max-w-[700px] mx-auto mb-10 leading-[1.7] font-medium">
          Join a global team of experts dedicated to transforming how businesses manage their core workflows through LedgerCart ERP and state-of-the-art IT services.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#positions" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all hover:shadow-lg hover:shadow-orange-200 no-underline">
            View Openings
          </a>
          <a href="#apply" className="px-8 py-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-300 font-bold rounded-xl border border-gray-200 dark:border-slate-800 hover:border-gray-900 dark:hover:border-slate-600 transition-all no-underline">
            Contact Talent Team ↓
          </a>
        </div>
      </div>
    </section>
  )
}

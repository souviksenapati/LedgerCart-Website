export default function ServiceOverviewHero() {
  return (
    <section className="relative pt-6 pb-[80px] bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-center border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Our Services
        </div>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[800px] mx-auto mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Comprehensive IT</span> Solutions
        </h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 max-w-[640px] mx-auto mb-0 leading-[1.7]">
          From strategy to execution – no operational worries, just seamless growth.<br className="hidden sm:block" />
          LedgerCart provides end-to-end technology services tailored to your enterprise.
        </p>
      </div>
    </section>
  )
}

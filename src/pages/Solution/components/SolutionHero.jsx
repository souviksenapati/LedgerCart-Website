export default function SolutionHero() {
  return (
    <section className="relative pt-6 pb-[80px] bg-gradient-to-b from-[#fdfaf6] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-gray-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 blur-[150px] rounded-full"></div>
      </div>
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Industry Solutions
        </div>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] text-gray-900 dark:text-slate-100 leading-[1.05] mb-6">
          Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-500">Industry</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-slate-400 max-w-[800px] mx-auto mb-0 leading-[1.7]">
          Discover LedgerCart’s targeted solutions tailored for the specific demands of your vertical.<br className="hidden sm:block" />
          Drive innovation, ensure compliance, and scale intelligently with our specialized platforms.
        </p>
      </div>
    </section>
  )
}

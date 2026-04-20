export default function CaseStudy() {
  return (
    <section className="py-[60px] bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-[20px] p-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-orange-600 mb-4">CASE STUDY</p>
            <h2 className="text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-0.8px] leading-[1.15] mb-4 text-gray-900 dark:text-slate-100">
              A Kolkata startup increased efficiency by{' '}
              <span className="text-orange-600">78%</span>
              <br />with LedgerCart ERP
            </h2>
            <p className="text-base text-gray-500 dark:text-slate-400 mb-6 font-medium">
              From manual data entry and disjointed systems to a{' '}
              <span className="text-orange-600 font-extrabold">fully automated</span>{' '}
              centralized architecture, accelerating their growth.
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#fff1eb] dark:bg-orange-950/30 text-orange-600 font-semibold text-sm rounded-lg border border-orange-600/20 hover:bg-orange-600 hover:text-white transition-colors no-underline">
              Read case study →
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200 dark:bg-slate-800 self-stretch"></div>

          {/* Right – Quote */}
          <div>
            <div className="text-[80px] leading-[0.5] mb-4 font-serif text-orange-600 opacity-60">"</div>
            <blockquote className="text-[17px] text-gray-600 dark:text-slate-300 leading-[1.7] italic mb-6">
              "With LedgerCart ERP, you no longer need to worry about siloed departments or manual reporting — it simply works. Their IT support team is world-class."
            </blockquote>
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-lg shadow-orange-600/20">RD</div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-slate-200">Rajesh Das</div>
                <div className="text-[13px] text-gray-500 dark:text-slate-500">Chief Operations Officer, Intugine Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

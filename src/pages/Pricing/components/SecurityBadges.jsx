export default function SecurityBadges() {
  return (
    <section className="py-[60px] bg-gray-50 dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-white dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800 rounded-2xl px-10 py-9 flex flex-col md:flex-row items-center gap-12">
          <div className="flex gap-4 flex-shrink-0 flex-wrap justify-center">
            {[['SOC II', 'Type 2'], ['ISO', '27001'], ['GDPR', ''], ['CCPA', '']].map(([b, s]) => (
              <div key={b} className="flex flex-col items-center gap-1 px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-[10px] text-xs font-bold text-gray-800 dark:text-slate-200 text-center min-w-[70px]">
                <span className="text-sm text-green-500 font-bold">✓</span>
                <span>{b}</span>
                {s && <span className="text-[10px] font-medium text-gray-500 dark:text-slate-500">{s}</span>}
              </div>
            ))}
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">We take security and privacy seriously!</h3>
            <p className="text-[15px] text-gray-500 dark:text-slate-400">
              <a href="#" className="text-orange-600 font-semibold hover:underline no-underline">View our certifications</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

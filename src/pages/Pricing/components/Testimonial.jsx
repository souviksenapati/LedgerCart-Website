export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0f1a] text-center transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <blockquote className="text-[clamp(18px,2.5vw,26px)] font-semibold text-gray-900 dark:text-slate-100 max-w-[780px] mx-auto mb-8 leading-[1.6] italic px-4">
          "With LedgerCart ERP, the implementation process was structured and seamless. Their team handled our complex data migration, significantly simplifying our daily operations."
        </blockquote>
        <div className="flex items-center justify-center gap-3.5">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-lg shadow-orange-600/20">JK</div>
          <div className="text-left">
            <div className="text-sm font-bold text-gray-900 dark:text-slate-200">Jorik Kraaikamp Mulder</div>
            <div className="text-[13px] text-gray-500 dark:text-slate-400">Chief Operations Officer, Stepler</div>
          </div>
        </div>
      </div>
    </section>
  )
}

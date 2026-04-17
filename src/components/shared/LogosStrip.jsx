const logos = ['LedgerCart Client One', 'LedgerCart Client Two', 'LedgerCart Client Three', 'LedgerCart Client Four', 'LedgerCart Client Five', 'LedgerCart Client Six', 'LedgerCart Client Seven', 'LedgerCart Client Eight']

export default function LogosStrip() {
  return (
    <section className="py-[60px] bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-center text-gray-500 dark:text-slate-400 text-[15px] max-w-[720px] mx-auto mb-10 leading-[1.7]">
          Businesses trust LedgerCart to eliminate operational bottlenecks and streamline growth. By replacing disjointed software with our unified ERP and Managed IT Services, we've helped companies like{' '}
          <a href="#" className="text-orange-600 no-underline hover:underline font-semibold">LedgerCart Client One</a> and{' '}
          <a href="#" className="text-orange-600 no-underline hover:underline font-semibold">LedgerCart Client Two</a> increase efficiency by up to 78% while giving management total peace of mind to focus on scaling.
        </p>
        <div className="overflow-hidden mask-fade-x">
          <div className="flex items-center gap-[60px] w-max animate-scrollLogos">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-lg font-bold text-gray-400 dark:text-slate-700 tracking-[-0.03em] flex-shrink-0 opacity-70">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

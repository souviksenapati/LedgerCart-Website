export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#0a0f1a] pt-6 pb-32 lg:pb-48 text-center flex flex-col items-center transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[60vw] h-[60vw] bg-orange-100/50 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-pulseRing" style={{ animationDuration: '8s' }} />
        <div className="absolute top-10 right-1/4 w-[50vw] h-[50vw] bg-rose-50/60 dark:bg-rose-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-pulseRing" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        {/* Subtle SVG Grid for premium feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAxMTUsIDIyLCAwLjA0KSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 animate-fadeInDown shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Let's Talk
        </div>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-gray-900 dark:text-slate-100 tracking-[-1px] leading-tight mb-6 animate-fadeInDown" style={{ animationDelay: '0.1s' }}>
          Ready to build your <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">next big thing?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fadeInDown font-medium" style={{ animationDelay: '0.2s' }}>
          Whether you need a custom ERP, cloud infrastructure, or advanced AI integration, our team of experts is ready to help you scale.
        </p>
      </div>
    </section>
  )
}

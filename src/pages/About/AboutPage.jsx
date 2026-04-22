import { useEffect } from 'react'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import faviconImg from '../../assets/favicon.png'
import faviconDarkImg from '../../assets/favicon_dark.png'

function Section({ children, className = '' }) {
  return (
    <section className={`py-20 md:py-32 px-6 ${className}`}>
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="animate-[fadeInUp_0.4s_ease-out]">
        {/* Header Section */}
        <section className="pt-6 pb-[80px] bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-center border-b border-gray-100 dark:border-slate-800 transition-colors">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Our Story
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[800px] mx-auto mb-6">
              Consulting excellence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">now packaged in SaaS.</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              LedgerCart evolved from a specialized IT service provider into a global engineering powerhouse. We didn't just want to fix problems; we wanted to transform how industries operate.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-6 tracking-tight">The LedgerCart Origin Story</h2>
              <div className="space-y-6 text-gray-600 dark:text-slate-400 text-[16px] leading-relaxed">
                <p>
                  Founded in 2014 as a boutique IT consultancy, we spent years solving complex ERP, healthcare, and logistics challenges for hundreds of clients. We saw firsthand the fragmentation and technical debt that slowed down great companies.
                </p>
                <p>
                  In 2021, we recognized a recurring pattern: enterprises didn't just need better code; they needed better systems. We decided to pivot from building individual solutions to crafting a unified ecosystem. 
                </p>
                <p>
                  <strong>LedgerCart ERP</strong> was born from this vision—a system built by consultants, refined by real-world deployments, and powered by the latest in AI and cloud engineering.
                </p>
              </div>
            </div>
            <div className="bg-orange-600/5 dark:bg-orange-500/5 border border-orange-200/50 dark:border-orange-500/20 rounded-[32px] p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <img src={faviconDarkImg} alt="" className="w-[120px] h-[120px] object-contain dark:hidden" />
                 <img src={faviconImg}     alt="" className="w-[120px] h-[120px] object-contain hidden dark:block" />
               </div>
               <blockquote className="relative z-10">
                 <p className="text-xl italic font-medium text-gray-800 dark:text-slate-200 mb-6">
                   "We don't just build software. We build the foundational layers that allow modern businesses to breathe and scale without friction."
                 </p>
                 <footer className="text-sm font-bold text-orange-600 uppercase tracking-widest">— CEO, LedgerCart IT Solutions</footer>
               </blockquote>
            </div>
          </div>
        </Section>

        {/* Mission / Vision / Values */}
        <Section className="bg-gray-50 dark:bg-slate-900/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3">Our Mission</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                To simplify complex digital transformations for enterprises through intelligent automation and robust engineering.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl mb-4">🔭</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3">Our Vision</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                A software world where ERP and IT systems empower teams rather than burdening them with technical debt.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3">Core Values</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                Security-First Design, Absolute Transparency, User-Centricity, and Relentless Innovation.
              </p>
            </div>
          </div>
        </Section>

        {/* Impact Stats */}
        <Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Global Clients', val: '500+' },
              { label: 'Uptime SLA', val: '99.99%' },
              { label: 'Consulting Years', val: '12+' },
              { label: 'Lines of Code', val: '4M+' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl md:text-5xl font-black text-orange-600 mb-2">{s.val}</div>
                <div className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

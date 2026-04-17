import { useEffect } from 'react'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

function Section({ children, className = '' }) {
  return (
    <section className={`py-20 md:py-32 px-6 ${className}`}>
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  )
}

export default function PartnersPage() {
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
              Partners
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[800px] mx-auto mb-6">
              Grow together with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">LedgerCart Ecosystem.</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Join a network of technology vendors, consulting agencies, and independent experts scaling the next generation of cloud-native ERP solutions.
            </p>
          </div>
        </section>

        {/* Tiers Section */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                tier: 'Bronze / Registered', 
                icon: '🥉', 
                desc: 'The starting point for emerging partners.', 
                benefits: ['Access to Partner Portal', 'Standard Training Assets', 'Basic Marketing Kit', 'LedgerCart Registered Badge'] 
              },
              { 
                tier: 'Silver / Authorized', 
                icon: '🥈', 
                desc: 'For established firms Scaling their LedgerCart presence.', 
                benefits: ['Co-marketing Funds (MDF)', 'Joint Sales Webinars', 'Priority Support Desk', 'Lead Rotation Access'] 
              },
              { 
                tier: 'Gold / Elite', 
                icon: '🥇', 
                desc: 'Our most dedicated strategic collaborators.', 
                benefits: ['Product Roadmap Influence', 'Executive Sponsorship', 'Dedicate Channel Manager', 'Deepest Revenue Share'] 
              },
            ].map(pair => (
               <div key={pair.tier} className="p-8 rounded-[32px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-transparent hover:border-b-orange-600">
                 <div className="text-4xl mb-6">{pair.icon}</div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3 tracking-tight">{pair.tier}</h3>
                 <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed">{pair.desc}</p>
                 <ul className="space-y-3 mb-10">
                   {pair.benefits.map(b => (
                     <li key={b} className="flex items-center gap-3 text-sm text-gray-700 dark:text-slate-300">
                       <span className="text-orange-500 opacity-60">✓</span> {b}
                     </li>
                   ))}
                 </ul>
               </div>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section className="bg-orange-600 rounded-[40px] m-6 text-center text-white py-20 px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),transparent)] opacity-50"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to scale together?</h2>
            <p className="text-lg text-orange-50 mb-10 opacity-90 leading-relaxed">
              Become a certified LedgerCart partner today and gain access to the infrastructure, data, and support you need to succeed in the enterprise market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a href="/contact" className="w-full sm:w-auto px-10 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] no-underline">Apply to Partner Portal →</a>
               <a href="/contact" className="w-full sm:w-auto px-10 py-4 bg-orange-700/30 text-white border border-white/20 font-bold rounded-xl hover:bg-orange-700/50 transition-all no-underline">View Developer Docs</a>
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  )
}

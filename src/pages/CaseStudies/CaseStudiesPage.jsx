import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

const CASE_STUDIES = [
  {
    id: 1,
    slug: 'transglobal-logistics-erp',
    client: 'TransGlobal Logistics',
    title: 'Automating Multi-Region Supply Chains with LedgerCart ERP',
    result: '40% Reduction in Operational Costs',
    industry: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1280&auto=format&fit=crop',
    challenge: 'Fragmented data silos across 12 countries, leading to 15% manual data entry error rate.',
    solution: 'Deployment of a unified LedgerCart ERP instance with custom multi-currency and real-time customs integration.',
    impact: 'Established a single source of truth, reducing lead times by 22% and eliminating manual reconciliation errors.'
  },
  {
    id: 2,
    slug: 'healthprime-telehealth',
    client: 'HealthPrime Wellness',
    title: 'Secure Patient Portals: Digital Transformation for Urban Clinics',
    result: '99.9% Patient Data Accessibility',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1280&auto=format&fit=crop',
    challenge: 'Obsolete legacy systems and inability to share data across cardiology and oncology wards.',
    solution: 'Custom-engineered, HIPAA-compliant patient portal integrated with real-time diagnostic AI agents.',
    impact: 'Patients can now access records in under 3 seconds, resulting in a 30% increase in outpatient throughput.'
  }
]

export default function CaseStudiesPage() {
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
              Case Studies
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[800px] mx-auto mb-6">
              Proven Success, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Global Impact.</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              See how LedgerCart's unique blend of custom IT services and proprietary ERP software solves high-stakes problems for world-class enterprises.
            </p>
          </div>
        </section>

        {/* Success Stories Gallery */}
        <section className="py-24 px-6 max-w-[1280px] mx-auto">
          {CASE_STUDIES.map((study, idx) => (
            <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
               {/* Visual Side */}
               <div className={`[direction:ltr] relative group overflow-hidden rounded-[40px] shadow-2xl border border-white dark:border-slate-800`}>
                 <img 
                    src={study.image} 
                    alt={study.client} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">{study.client}</p>
                    <h3 className="text-2xl font-bold italic">"{study.result}"</h3>
                  </div>
               </div>

               {/* Content Side */}
               <div className="[direction:ltr] space-y-8">
                  <div>
                    <span className="px-4 py-1.5 bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full">{study.industry} Story</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-slate-100 mt-6 leading-tight tracking-tight">
                      {study.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                       <h4 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-2">The Challenge</h4>
                       <p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed font-medium">{study.challenge}</p>
                    </div>
                    <div>
                       <h4 className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-2">Our Approach</h4>
                       <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                     <Link to={`/case-studies/${study.slug}`} className="inline-flex px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white transition-all shadow-xl hover:-translate-y-1 no-underline">View Full Case Study →</Link>
                  </div>
               </div>
            </div>
          ))}
        </section>

        {/* Global Impact CTA */}
        <section className="bg-orange-600 py-32 px-6 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 Q50,100 100,0 V100 H0 Z" fill="rgba(255,255,255,0.05)"/></svg>
           </div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Ready to write your own success story with LedgerCart?</h2>
             <p className="text-lg text-orange-50 mb-12 opacity-90 font-medium">Join hundreds of global clients who have transformed their technical operational logic with our hybrid service-software model.</p>
             <a href="/contact" className="px-12 py-5 bg-white text-orange-600 font-black rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all no-underline text-lg">Work with us Today ↗</a>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

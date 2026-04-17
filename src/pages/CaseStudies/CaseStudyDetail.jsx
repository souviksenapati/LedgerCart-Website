import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { applySeo } from '../../lib/seo'

const CASE_STUDIES = [
  {
    id: 1,
    slug: 'transglobal-logistics-erp',
    client: 'TransGlobal Logistics',
    title: 'Automating Multi-Region Supply Chains with LedgerCart ERP',
    content: `
      <h2>The Challenge</h2>
      <p>TransGlobal Logistics was struggling with highly fragmented data silos across its 12 global regions. This led to a 15% manual data entry error rate and nearly $20,000 lost monthly in reconciliation inaccuracies.</p>
      <h2>Our Strategic Deployment</h2>
      <p>We deployed a unified LedgerCart ERP system with a custom Multi-Currency Engine and Real-Time Customs API integration. This allowed for instantaneous tracking and financial visibility across all ports of entry.</p>
      <h2>The Metrics of Success</h2>
      <p>After just 6 months of operation:</p>
      <ul>
        <li><strong>40% reduction</strong> in overall operational overhead.</li>
        <li><strong>22% reduction</strong> in supply chain lead times.</li>
        <li><strong>100% elimination</strong> of manual data reconciliation errors.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>TransGlobal now operates as a truly unified data organism, scaling seamlessly as they add new international regions.</p>
    `,
    industry: 'Logistics',
  },
  {
    id: 2,
    slug: 'healthprime-telehealth',
    client: 'HealthPrime Wellness',
    title: 'Secure Patient Portals: Digital Transformation for Urban Clinics',
    content: `
      <h2>The Challenge</h2>
      <p>HealthPrime Wellness needed to modernize patient access while operating across departments with legacy systems that couldn’t reliably share data.</p>
      <h2>Our Strategic Deployment</h2>
      <p>We delivered a secure patient portal designed for healthcare workflows, with streamlined access patterns and a focus on privacy, auditability, and performance.</p>
      <h2>The Metrics of Success</h2>
      <ul>
        <li><strong>99.9% accessibility</strong> for patient data and key records.</li>
        <li><strong>Under 3 seconds</strong> to access records end-to-end.</li>
        <li><strong>30% increase</strong> in outpatient throughput.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>HealthPrime now operates with a modern, secure patient experience and a foundation that supports future digital transformation initiatives.</p>
    `,
    industry: 'Healthcare',
  },
]

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = CASE_STUDIES.find(p => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)

    const origin = window.location.origin
    if (study) {
      applySeo({
        title: `${study.client} Success Story | LedgerCart`,
        description: `${study.client} case study: how LedgerCart delivered measurable impact through secure software and ERP modernization.`,
        canonicalUrl: `${origin}/case-studies/${study.slug}`,
        robots: 'index, follow',
        ogType: 'article',
        imageUrl: `${origin}/og-image.png`,
      })
    } else {
      applySeo({
        title: 'Case Study Not Found | LedgerCart',
        description: 'The requested case study could not be found.',
        canonicalUrl: `${origin}/case-studies/${slug}`,
        robots: 'noindex, follow',
        ogType: 'website',
        imageUrl: `${origin}/og-image.png`,
      })
    }
  }, [slug, study])

  if (!study) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0f1a] flex flex-col items-center justify-center">
        <p className="text-xl text-gray-500 mb-4">Case study not found</p>
        <Link to="/case-studies" className="text-orange-600 hover:underline">← Back to Case Studies</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="animate-[fadeInUp_0.4s_ease-out] pt-8 pb-24 px-6">
        <article className="max-w-4xl mx-auto">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 mb-10 no-underline uppercase tracking-widest">
            ← All Success Stories
          </Link>
          
          <div className="mb-14 pb-10 border-b border-gray-100 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-widest mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              {study.industry} Impact Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-gray-900 dark:text-slate-100 mt-6 leading-[1.05]">
              {study.title}
            </h1>
          </div>

          <div 
             className="legal-content text-[17px] leading-[1.8] text-gray-600 dark:text-slate-300"
             dangerouslySetInnerHTML={{ __html: study.content }}
          />

          <section className="mt-20 p-10 md:p-14 bg-gray-50 dark:bg-slate-900 rounded-[40px] border border-gray-100 dark:border-slate-800">
             <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-6 tracking-tight">Ready to achieve similar results?</h2>
                <p className="text-gray-500 dark:text-slate-400 mb-10 leading-relaxed text-[16px]">
                  Our team of custom IT specialists and ERP consultants are ready to analyze your specific operational challenges and deliver a hardened, scalable solution.
                </p>
                <Link to="/contact" className="inline-flex px-10 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-orange-600/20 active:scale-95 transition-all no-underline text-[15px]">Schedule a Strategic Consultation</Link>
             </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}

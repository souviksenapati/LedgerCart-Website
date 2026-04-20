import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { applySeo } from '../../lib/seo'

const CASE_STUDIES = [
  {
    id: 1,
    slug: 'intugine-logistics-erp',
    client: 'Intugine Technologies',
    title: 'Automating Real-Time Shipment Tracking with LedgerCart ERP',
    content: `
      <h2>The Challenge</h2>
      <p>Intugine Technologies, a Kolkata-based B2B logistics intelligence startup, was struggling with fragmented carrier data across 8 major Indian logistics hubs. This led to a 15% manual data reconciliation error rate and over ₹12 lakh lost monthly in SLA penalty inaccuracies.</p>
      <h2>Our Strategic Deployment</h2>
      <p>We deployed a unified LedgerCart ERP system with a Real-Time Carrier API Integration Layer and an automated SLA performance dashboard. This enabled instantaneous shipment visibility and financial accountability across all carrier networks.</p>
      <h2>The Metrics of Success</h2>
      <p>After just 6 months of operation:</p>
      <ul>
        <li><strong>40% reduction</strong> in overall operational overhead.</li>
        <li><strong>22% reduction</strong> in shipment lead times across Pan-India routes.</li>
        <li><strong>100% elimination</strong> of manual data reconciliation errors.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Intugine now operates as a truly unified logistics data platform, scaling seamlessly as they expand into new carrier networks and tier-2 city corridors.</p>
    `,
    industry: 'Logistics',
  },
  {
    id: 2,
    slug: 'arka2050-cleantech-portal',
    client: 'Arka2050',
    title: 'Building a Secure Carbon Credit Management Platform for Green Kolkata',
    content: `
      <h2>The Challenge</h2>
      <p>Arka2050, a Kolkata-based cleantech startup focused on urban sustainability, needed to track and audit carbon credit transactions across multiple West Bengal urban development partners and government bodies — with zero margin for error.</p>
      <h2>Our Strategic Deployment</h2>
      <p>We delivered a secure compliance portal with immutable audit trails, granular role-based access controls, and real-time MRV (Measurement, Reporting & Verification) dashboards designed for government-grade accountability.</p>
      <h2>The Metrics of Success</h2>
      <ul>
        <li><strong>99.9% accessibility</strong> for all carbon credit transaction data.</li>
        <li><strong>Under 3 seconds</strong> to verify credit records end-to-end.</li>
        <li><strong>30% acceleration</strong> in project certification timelines.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Arka2050 now operates with a modern, audit-ready compliance infrastructure that supports their mission of building a greener, more accountable West Bengal.</p>
    `,
    industry: 'CleanTech',
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

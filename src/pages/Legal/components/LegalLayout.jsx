import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnnouncementBar from '../../../components/layout/AnnouncementBar'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'

const LEGAL_NAV = [
  { name: 'Privacy Policy', path: '/legal/privacy' },
  { name: 'Terms of Service', path: '/legal/terms' },
  { name: 'Cookie Policy', path: '/legal/cookies' },
  { name: 'Security & Compliance', path: '/legal/security' },
]

export default function LegalLayout({ children, title, lastUpdated }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${title} - LedgerCart Legal`
  }, [title, location.pathname])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] flex flex-col font-sans text-gray-900 dark:text-slate-100 transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 relative">
        
        {/* Sticky Sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-28">
             <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 dark:text-slate-500 mb-6">Legal Hub</h3>
             <nav className="flex flex-col gap-1.5">
               {LEGAL_NAV.map(nav => {
                  const isActive = location.pathname === nav.path
                  return (
                    <Link
                      key={nav.path}
                      to={nav.path}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-500 shadow-sm border border-orange-100 dark:border-orange-900/30' 
                          : 'text-gray-600 dark:text-slate-400 border border-transparent hover:text-orange-600 hover:bg-white dark:hover:bg-slate-900 shadow-sm shadow-transparent hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.4)]'
                      }`}
                    >
                      {nav.name}
                    </Link>
                  )
               })}
             </nav>
             
             {/* Contact Support Block in Sidebar */}
             <div className="mt-12 p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-orange-50 dark:bg-orange-950/30 text-orange-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-slate-100 mb-2">Have a question?</h4>
                <p className="text-[13px] text-gray-500 dark:text-slate-400 mb-5 leading-relaxed">Reach out to our legal and support team directly regarding policies.</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-slate-100 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors w-full justify-center">
                  Contact Support
                </Link>
             </div>
          </div>
        </aside>

        {/* Content Area */}
        <article className="animate-[fadeInUp_0.4s_ease-out] bg-white dark:bg-slate-900 p-8 md:p-12 lg:p-16 border border-gray-200 dark:border-slate-800 xl:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:xl:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-[32px]">
          <div className="mb-14 border-b border-gray-100 dark:border-slate-800 pb-10">
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-1.5px] text-gray-900 dark:text-slate-100 mb-4">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="legal-content text-[15px] lg:text-[16px] text-gray-600 dark:text-slate-300">
             {children}
          </div>
        </article>

      </main>

      <Footer />
    </div>
  )
}

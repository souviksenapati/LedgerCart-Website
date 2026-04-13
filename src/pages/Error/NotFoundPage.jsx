import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Page Not Found - LedgerCart'
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] flex flex-col font-sans transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-xl w-full text-center animate-[fadeInUp_0.5s_ease-out]">
          <div className="relative inline-block mb-8">
             <h1 className="text-[120px] md:text-[180px] font-black text-gray-100 dark:text-slate-800/50 leading-none tracking-tighter select-none">
               404
             </h1>
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-4xl">🧭</div>
             </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-1px] text-gray-900 dark:text-slate-100 mb-6">
            Looks like you've wandered off the map.
          </h2>
          
          <p className="text-gray-500 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 font-bold rounded-xl transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

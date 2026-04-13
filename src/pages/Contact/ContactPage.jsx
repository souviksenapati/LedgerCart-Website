import { useEffect } from 'react'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ContactHero from './components/ContactHero'
import ContactGrid from './components/ContactGrid'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us - LedgerCart'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f1a] flex flex-col font-sans text-gray-900 dark:text-slate-100 selection:bg-orange-500/30 selection:text-orange-900 transition-colors duration-300">
      {/* Global Layout Components */}
      <AnnouncementBar />
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col items-center">
        <ContactHero />
        <section className="w-full max-w-[1280px] mx-auto px-6 pb-[100px] mt-8 lg:-mt-16 z-10 relative">
          <ContactGrid />
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}

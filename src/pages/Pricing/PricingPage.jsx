import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import PricingCards from './components/PricingCards'
import Testimonial from './components/Testimonial'
import FaqAccordion from './components/FaqAccordion'
import SecurityBadges from './components/SecurityBadges'

export default function PricingPage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-6 pb-[60px] bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-center transition-colors duration-300">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Pricing
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-2px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-5">
              Tailored Pricing<br />for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Your Enterprise Needs</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-[620px] mx-auto mb-9 leading-[1.7]">
              We offer customized IT Services and implementations of LedgerCart ERP that strictly align with your goals.<br className="hidden md:block" />
              Tell us your requirements and we will build the perfect plan for you.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-[10px] hover:border-gray-800 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all no-underline mx-auto">
              Contact Sales ›
            </a>
          </div>
        </section>

        <PricingCards />
        <Testimonial />
        <FaqAccordion />
        <SecurityBadges />
      </main>
      <Footer />
    </div>
  )
}

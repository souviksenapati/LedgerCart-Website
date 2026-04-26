import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { Link } from 'react-router-dom'
import erpLogoLightWebp from '../../assets/LedgerCart ERP Logo Light.webp'
import erpLogoDarkWebp from '../../assets/LedgerCart ERP Logo Dark.webp'

export default function ProductPage() {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="pt-6 pb-[80px] bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-center border-b border-gray-100 dark:border-slate-800 transition-colors">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Products
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-5">
              Built for modern operations
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-[720px] mx-auto leading-[1.7]">
              Explore LedgerCart products designed to streamline workflows, improve visibility, and help teams scale with confidence.
            </p>
          </div>
        </section>

        <section className="py-[80px] bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/product/ledgercart-erp"
                className="group bg-white dark:bg-slate-900/40 border border-gray-200 dark:border-slate-800 rounded-[28px] p-8 flex flex-col gap-4 no-underline transition-all hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-11 w-[150px] flex items-center">
                      <img src={erpLogoLightWebp} alt="LedgerCart ERP" className="h-10 w-auto object-contain dark:hidden" height="40" fetchpriority="high" decoding="async" />
                      <img src={erpLogoDarkWebp} alt="LedgerCart ERP" className="h-10 w-auto object-contain hidden dark:block" height="40" fetchpriority="high" decoding="async" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[15px] font-extrabold tracking-[-0.2px] text-gray-900 dark:text-slate-100 truncate">
                        LedgerCart ERP
                      </div>
                      <div className="text-[13px] text-gray-500 dark:text-slate-400 truncate">
                        Unified commerce, inventory, procurement, and finance
                      </div>
                    </div>
                  </div>

                  <span className="text-[26px] leading-none text-gray-200 dark:text-slate-700 transition-all group-hover:text-orange-600 group-hover:translate-x-1">
                    ›
                  </span>
                </div>

                <p className="text-[14px] text-gray-600 dark:text-slate-300 leading-[1.7]">
                  A complete ERP platform designed for high-growth businesses — automate workflows, reduce manual overhead, and gain real-time operational clarity.
                </p>

                <div className="pt-1 flex items-center gap-2 text-orange-600 font-bold text-[14px]">
                  View LedgerCart ERP <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

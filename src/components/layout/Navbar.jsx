import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ContactModal from '../shared/ContactModal'
import logoImg from '../../assets/logo.png'
import logoDarkImg from '../../assets/logo_dark.png'
import faviconImg from '../../assets/favicon.png'
import faviconDarkImg from '../../assets/favicon_dark.png'
import erpLogoLight from '../../assets/LedgerCart ERP Logo Light.png'
import erpLogoDark from '../../assets/LedgerCart ERP Logo Dark.png'

const PRODUCTS_ITEMS = [
  { to: '/product', title: 'All Products' },
  { to: '/product/ledgercart-erp', title: 'LedgerCart ERP', logoOnly: true },
]

const SOLUTIONS = [
  { to: '/solution#healthtech', title: 'HealthTech & Healthcare' },
  { to: '/solution#fintech', title: 'FinTech & BFSI' },
  { to: '/solution#edtech', title: 'EdTech & Education' },
  { to: '/solution#ecommerce', title: 'E-commerce & Retail' },
  { to: '/solution#supplychain', title: 'Supply Chain & Logistics' },
  { to: '/solution#hrtech', title: 'HRTech & Workforce' },
]

const COMPANY_ITEMS = [
  { to: '/about', title: 'About Us' },
  { to: '/blog', title: 'Blog & Insights' },
  { to: '/partners', title: 'Partners Network' },
  { to: '/case-studies', title: 'Success Stories' },
]

const SERVICES_ITEMS = [
  { to: '/service#software-engineering', title: 'Software Engineering' },
  { to: '/service#software-development', title: 'Software Development' },
  { to: '/service#web-development', title: 'Web Development' },
  { to: '/service#mobile-app', title: 'Mobile App Development' },
  { to: '/service#ecommerce-development', title: 'E-Commerce Development' },
  { to: '/service#ui-ux', title: 'UI/UX Design' },
  { to: '/service#game-development', title: 'Game Development' },
  { to: '/service#digital-transformation', title: 'Digital Transformation' },
  { to: '/service#ai-ml', title: 'AI & Machine Learning' },
  { to: '/service#cloud-engineering', title: 'Cloud Engineering' },
  { to: '/service#data-engineering', title: 'Data Engineering' },
  { to: '/service#business-intelligence', title: 'Business Intelligence' },
  { to: '/service#ar-vr', title: 'Augmented & Virtual Reality' },
  { to: '/service#iot', title: 'Internet Of Things (IoT)' },
  { to: '/service#cyber-security', title: 'Cyber Security and Threat' },
  { to: '/service#ai-agent', title: 'AI Agent' },
  { to: '/service#martech', title: 'Marketing Technology' },
  { to: '/service#digital-marketing', title: 'Digital Marketing' },
]

function NeedAssistanceCard() {
  return (
    <div className="bg-[#f0f9ff] dark:bg-orange-950/20 p-6 rounded-2xl border border-blue-100/50 dark:border-orange-900/20 flex flex-col items-center text-center max-w-[240px]">
      <div className="mb-4 bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm">
        <img src={faviconDarkImg} alt="LedgerCart" className="w-[50px] h-[50px] object-contain dark:hidden" />
        <img src={faviconImg}     alt="LedgerCart" className="w-[50px] h-[50px] object-contain hidden dark:block" />
      </div>
      <h4 className="text-[15px] font-bold text-gray-900 dark:text-slate-100 mb-2 leading-snug">Need Assistance?<br />Schedule a Meeting Now!</h4>
      <Link 
        to="/contact" 
        className="mt-3 w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 no-underline group shadow-sm shadow-orange-200 dark:shadow-orange-900/40"
      >
        Let's connect <span className="text-lg group-hover:translate-x-0.5 transition-transform">↗</span>
      </Link>
    </div>
  )
}

function DropMenu({ items, columns = 1 }) {
  return (
    <div className="flex items-start gap-8 p-6 pr-4">
      {/* Links Column(s) */}
      <div className={`grid content-start gap-x-12 gap-y-2.5 ${columns === 3 ? 'grid-cols-3' : columns === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {items.map((item) => (
          item.logoOnly ? (
            <Link
              key={item.title}
              to={item.to}
              className="py-1.5 no-underline inline-flex items-center"
              aria-label={item.title}
            >
              <img src={erpLogoLight} alt={item.title} className="h-9 w-auto object-contain dark:hidden" />
              <img src={erpLogoDark} alt={item.title} className="h-9 w-auto object-contain hidden dark:block" />
            </Link>
          ) : (
            <Link
              key={item.title}
              to={item.to}
              className="text-[14px] font-medium text-gray-600 dark:text-slate-400 hover:text-orange-600 transition-colors py-1.5 no-underline block"
            >
              {item.title}
            </Link>
          )
        ))}
      </div>
      
      {/* Assistance Card */}
      <div className="flex-shrink-0">
        <NeedAssistanceCard />
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkCls = (path) => [
    'inline-flex items-center gap-1 px-3 py-[7px] text-[14px] font-medium rounded-lg transition-all no-underline',
    location.pathname === path
      ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/30'
      : 'text-gray-700 dark:text-slate-300 hover:text-orange-600 hover:bg-gray-50 dark:hover:bg-slate-800',
  ].join(' ')

  return (
    <div className={`sticky z-[999] transition-all duration-300 ${
      scrolled 
        ? 'top-4 px-4 pointer-events-none' 
        : 'top-0 px-0 pointer-events-auto'
    }`}>
      <nav className={`mx-auto bg-white dark:bg-slate-900 transition-all duration-300 pointer-events-auto ${
        scrolled
          ? 'max-w-[1150px] rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-200/80 dark:border-slate-800'
          : 'max-w-full rounded-none shadow-none border-b border-transparent'
      }`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between xl:justify-start gap-4 xl:gap-6">

        {/* Logo — light/dark swap */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img src={logoDarkImg} alt="LedgerCart" className="h-[44px] w-auto object-contain dark:hidden" />
          <img src={logoImg}     alt="LedgerCart" className="h-[44px] w-auto object-contain hidden dark:block" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1 h-full">
          {/* Products dropdown */}
          <div className="relative group h-full flex items-center">
            <button className={`${location.pathname.startsWith('/product') ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/30' : 'text-gray-700 dark:text-slate-300'} inline-flex items-center gap-1.5 px-3 py-[7px] text-[14px] font-medium rounded-lg hover:text-orange-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all bg-transparent border-none cursor-pointer`}>
              Products <span className="text-[10px] opacity-40">▾</span>
            </button>
            <div className="absolute top-[100%] left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 -translate-y-2 group-hover:translate-y-0 z-[1000]">
              <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] min-w-[500px]">
                <DropMenu items={PRODUCTS_ITEMS} columns={1} />
              </div>
            </div>
          </div>

          {/* Solutions dropdown */}
          <div className="relative group h-full flex items-center">
            <button className={`${location.pathname.startsWith('/solution') ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/30' : 'text-gray-700 dark:text-slate-300'} inline-flex items-center gap-1.5 px-3 py-[7px] text-[14px] font-medium rounded-lg hover:text-orange-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all bg-transparent border-none cursor-pointer`}>
              Solutions <span className="text-[10px] opacity-40">▾</span>
            </button>
            <div className="absolute top-[100%] left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 -translate-y-2 group-hover:translate-y-0 z-[1000]">
              <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] min-w-[500px]">
                <DropMenu items={SOLUTIONS} columns={1} />
              </div>
            </div>
          </div>

          {/* Services dropdown */}
          <div className="relative group h-full flex items-center">
            <button className={`${location.pathname.startsWith('/service') ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/30' : 'text-gray-700 dark:text-slate-300'} inline-flex items-center gap-1.5 px-3 py-[7px] text-[14px] font-medium rounded-lg hover:text-orange-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all bg-transparent border-none cursor-pointer`}>
              Services <span className="text-[10px] opacity-40">▾</span>
            </button>
            <div className="absolute top-[100%] left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 -translate-y-2 group-hover:translate-y-0 z-[1000]">
              <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] min-w-[700px]">
                <DropMenu items={SERVICES_ITEMS} columns={2} />
              </div>
            </div>
          </div>

          {/* Company dropdown */}
          <div className="relative group h-full flex items-center">
            <button className={`${location.pathname.startsWith('/about') || location.pathname.startsWith('/blog') || location.pathname.startsWith('/partners') || location.pathname.startsWith('/case-studies') ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/30' : 'text-gray-700 dark:text-slate-300'} inline-flex items-center gap-1.5 px-3 py-[7px] text-[14px] font-medium rounded-lg hover:text-orange-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all bg-transparent border-none cursor-pointer`}>
              Company <span className="text-[10px] opacity-40">▾</span>
            </button>
            <div className="absolute top-[100%] left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 -translate-y-2 group-hover:translate-y-0 z-[1000]">
              <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_48px_rgba(0,0,0,0.5)] min-w-[500px]">
                <DropMenu items={COMPANY_ITEMS} columns={1} />
              </div>
            </div>
          </div>

          <Link to="/careers" className={linkCls('/careers')}>Careers</Link>
          <Link to="/contact" className={linkCls('/contact')}>Contact Us</Link>
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-2 ml-auto pointer-events-auto">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-5 py-2.5 text-[14px] font-bold text-white bg-orange-600 border border-orange-600 rounded-xl hover:bg-orange-700 hover:border-orange-700 transition-all hover:shadow-lg hover:shadow-orange-200 whitespace-nowrap cursor-pointer"
          >
            Get a free Consultation →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 ml-auto outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-slate-300 rounded-sm transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-slate-300 rounded-sm transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-slate-300 rounded-sm transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pb-4 pt-1 flex flex-col gap-0.5 animate-fadeInDown">
          <Link to="/" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Home</Link>
          <Link to="/product" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Products</Link>
          <Link to="/product/ledgercart-erp" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">LedgerCart ERP</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">About Us</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Blog</Link>
          <Link to="/solution" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Solutions</Link>
          <Link to="/service" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Services</Link>
          <Link to="/careers" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Careers</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-orange-600 transition-colors">Contact Us</Link>
          <div className="flex gap-2 mt-2 pointer-events-auto">
            <button onClick={() => { setMobileOpen(false); setIsContactModalOpen(true); }} className="flex-1 text-center border-none cursor-pointer px-4 py-3 text-sm font-bold text-white bg-orange-600 rounded-xl no-underline dark:shadow-lg dark:shadow-orange-900/20">Get a free Consultation</button>
          </div>
        </div>
      )}
      </nav>

      {/* Global Contact Modal Portal */}
      {isContactModalOpen && (
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      )}
    </div>
  )
}

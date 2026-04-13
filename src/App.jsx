import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { GlobalErrorBoundary } from './components/shared/GlobalErrorBoundary'
import CookieConsent from './components/shared/CookieConsent'
import ScrollToTop from './components/shared/ScrollToTop'

// Lazy loaded public pages
const HomePage = lazy(() => import('./pages/Home/HomePage'))
const PricingPage = lazy(() => import('./pages/Pricing/PricingPage'))
const ServicePage = lazy(() => import('./pages/Service/ServicePage'))
const SolutionPage = lazy(() => import('./pages/Solution/SolutionPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
const ProductPage = lazy(() => import('./pages/Product/ProductPage'))
const CareersPage = lazy(() => import('./pages/Careers/CareersPage'))
const NotFoundPage = lazy(() => import('./pages/Error/NotFoundPage'))

// Legal Hub
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/Legal/TermsOfService'))
const CookiePolicy = lazy(() => import('./pages/Legal/CookiePolicy'))
const Security = lazy(() => import('./pages/Legal/Security'))

// Corporate Expansion
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const PartnersPage = lazy(() => import('./pages/Partners/PartnersPage'))
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'))
const BlogPostDetail = lazy(() => import('./pages/Blog/BlogPostDetail'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudies/CaseStudiesPage'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudies/CaseStudyDetail'))

// Admin portal — lazy loaded
const AdminPage = lazy(() => import('./pages/Admin/AdminPage'))

// Ultra-fast slim page loader transition
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0a0f1a] z-50 transition-colors duration-300">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mb-4"></div>
      <div className="text-xs font-bold tracking-widest text-gray-400 uppercase animate-pulse">Loading LedgerCart</div>
    </div>
  </div>
)

// SEO Dynamic Engine
const SEOEngine = () => {
  const location = useLocation()
  
  useEffect(() => {
    let title = 'LedgerCart – Cloud Application Platform'
    let metaDesc = 'LedgerCart is the home to your web projects. Deploy applications, databases, and static sites effortlessly.'

    switch (location.pathname) {
      case '/pricing':
        title = 'Transparent Pricing | LedgerCart'
        metaDesc = 'Explore flexible, transparent pricing plans tailored for growing startups and established enterprises scaling into the cloud.'
        break
      case '/service':
        title = 'Our Services & Architecture | LedgerCart'
        metaDesc = 'Deep dive into LedgerCart powerful services, offering scalable cloud hosting, robust databases, and zero-downtime security architectures.'
        break
      case '/solution':
        title = 'Industry Solutions | LedgerCart'
        metaDesc = 'Transform your industry with customized digital platforms. Secure and scalable tech solutions for Healthcare, FinTech, and Enterprise Logistics.'
        break
      case '/contact':
        title = 'Contact Sales & Support | LedgerCart'
        metaDesc = 'Get in touch with LedgerCart experts to discuss your enterprise requirements, or drop into our global support channels.'
        break
      case '/product':
        title = 'Platform Features & Products | LedgerCart'
        metaDesc = 'Uncover the full product suite inside LedgerCart, delivering CI/CD pipelines, integrated metrics, and seamless multi-region deployment.'
        break
      case '/careers':
        title = 'Join the Vision — Careers | LedgerCart'
        metaDesc = 'Come build the foundational layer of the internet. View open positions in engineering, design, and sales at LedgerCart.'
        break
      case '/admin':
        title = 'Secure Admin Portal | LedgerCart'
        break
      case '/about':
        title = 'About LedgerCart | Our Vision & History'
        metaDesc = 'Learn how LedgerCart evolved from a specialized IT service provider into a global ERP leader. Discover our mission, vision, and core values.'
        break
      case '/partners':
        title = 'Partner Program | LedgerCart Ecosystem'
        metaDesc = 'Join the LedgerCart Partner Network. Explore technology, channel, and referral tiers designed for growth and mutual success.'
        break
      case '/blog':
        title = 'Insights & Innovation | LedgerCart Blog'
        metaDesc = 'Expert Perspectives on ERP, AI, and Custom IT Solutions. Stay ahead with the latest from LedgerCart engineering.'
        break
      case '/case-studies':
        title = 'Success Stories | LedgerCart Impact'
        metaDesc = 'Real-world digital transformation across Healthcare, Logistics, and Finance. See how LedgerCart delivers results.'
        break
      default:
        break
    }
    document.title = title
    // Update Meta Description
    let meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', metaDesc)
    }
    // Scroll to top automatically on route changes (smooth ux)
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo(0, 0)
        }
      }, 100) // slight delay to ensure render
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

function App() {
  return (
    <GlobalErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <SEOEngine />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/solution" element={<SolutionPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/admin" element={<AdminPage />} />
              
              {/* Legal Hub Routes */}
              <Route path="/legal/privacy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms" element={<TermsOfService />} />
              <Route path="/legal/cookies" element={<CookiePolicy />} />
              <Route path="/legal/security" element={<Security />} />
              
              {/* Corporate Pages Routes */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              
              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <CookieConsent />
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalErrorBoundary>
  )
}

export default App

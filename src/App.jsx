import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { GlobalErrorBoundary } from './components/shared/GlobalErrorBoundary'
import CookieConsent from './components/shared/CookieConsent'
import ScrollToTop from './components/shared/ScrollToTop'
import { applySeo, setJsonLd } from './lib/seo'

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
    const DEFAULT_TITLE = 'LedgerCart – IT Services, Cybersecurity & ERP'
    const DEFAULT_DESC = 'LedgerCart delivers custom software, cybersecurity, and ERP solutions to help teams modernize operations and scale with confidence.'

    const getSeoForPath = (pathname) => {
      if (pathname === '/') {
        return {
          title: DEFAULT_TITLE,
          description: DEFAULT_DESC,
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/pricing') {
        return {
          title: 'Pricing & Engagement | LedgerCart',
          description: 'Request a pricing quote for LedgerCart ERP and IT services — tailored to your scope, timelines, and security requirements.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/service') {
        return {
          title: 'IT Services | Software, Cloud & Security | LedgerCart',
          description: 'Explore LedgerCart services: custom software engineering, cloud engineering, cybersecurity, data engineering, and digital transformation.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/solution') {
        return {
          title: 'Industry Solutions | LedgerCart',
          description: 'Discover LedgerCart industry solutions for Healthcare, FinTech, Education, Retail, Logistics, and HR — built for reliability and compliance.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/contact') {
        return {
          title: 'Contact | Talk to LedgerCart',
          description: 'Get in touch with LedgerCart to discuss custom software, cybersecurity, and ERP implementation. We’ll respond with next steps quickly.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/product') {
        return {
          title: 'LedgerCart ERP | Product Overview',
          description: 'Learn how LedgerCart ERP helps standardize workflows, improve visibility, and automate operations with secure, scalable architecture.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/careers') {
        return {
          title: 'Careers | LedgerCart',
          description: 'Join LedgerCart and help build secure, high-impact software for businesses worldwide. Explore open roles and apply online.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/about') {
        return {
          title: 'About | LedgerCart',
          description: 'Learn about LedgerCart: our mission, approach, and the team behind our IT services and ERP solutions.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/partners') {
        return {
          title: 'Partners | LedgerCart',
          description: 'Partner with LedgerCart to deliver ERP implementations and IT services. Explore collaboration models and program benefits.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname === '/blog') {
        return {
          title: 'Blog | LedgerCart Insights',
          description: 'Read LedgerCart articles on engineering, ERP, security, and modern software delivery — practical insights from the team.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname.startsWith('/blog/')) {
        return {
          title: 'Blog Post | LedgerCart',
          description: DEFAULT_DESC,
          robots: 'index, follow',
          ogType: 'article',
        }
      }

      if (pathname === '/case-studies') {
        return {
          title: 'Case Studies | LedgerCart',
          description: 'Explore real-world case studies showing how LedgerCart delivers measurable outcomes across operations, security, and ERP modernization.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname.startsWith('/case-studies/')) {
        return {
          title: 'Case Study | LedgerCart',
          description: 'A real-world LedgerCart implementation story: the challenge, the solution, and the measurable impact.',
          robots: 'index, follow',
          ogType: 'article',
        }
      }

      if (pathname.startsWith('/legal/')) {
        return {
          title: 'Legal | LedgerCart',
          description: 'LedgerCart policies, terms, and security information.',
          robots: 'index, follow',
          ogType: 'website',
        }
      }

      if (pathname.startsWith('/admin')) {
        return {
          title: 'Admin | LedgerCart',
          description: DEFAULT_DESC,
          robots: 'noindex, nofollow',
          ogType: 'website',
        }
      }

      return {
        title: 'Page Not Found | LedgerCart',
        description: DEFAULT_DESC,
        robots: 'noindex, follow',
        ogType: 'website',
      }
    }

    const seo = getSeoForPath(location.pathname)
    const canonicalUrl = `${window.location.origin}${location.pathname}`

    applySeo({
      ...seo,
      canonicalUrl,
      imageUrl: `${window.location.origin}/og-image.png`,
      imageAlt: 'LedgerCart – IT Services, Cybersecurity & ERP',
    })

    // Structured data (JSON-LD) — helps modern crawlers understand the site.
    const origin = window.location.origin
    setJsonLd('org', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LedgerCart',
      url: origin,
      logo: `${origin}/favicon.svg`,
      sameAs: ['https://www.linkedin.com/company/ledgercart/'],
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'sales', email: 'sales@ledgercart.in' },
        { '@type': 'ContactPoint', contactType: 'support', email: 'support@ledgercart.in' },
        { '@type': 'ContactPoint', contactType: 'general', email: 'info@ledgercart.in' },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Moni Bhander, Module C, WEBEL Bhawan, EP & GP Block, Sector V',
        addressLocality: 'Kolkata',
        addressRegion: 'West Bengal',
        postalCode: '700091',
        addressCountry: 'IN',
      },
    })

    setJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'LedgerCart',
      url: origin,
    })

    setJsonLd('webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title || DEFAULT_TITLE,
      description: seo.description || DEFAULT_DESC,
      url: canonicalUrl,
      isPartOf: { '@type': 'WebSite', name: 'LedgerCart', url: origin },
      about: { '@type': 'Organization', name: 'LedgerCart', url: origin },
    })

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

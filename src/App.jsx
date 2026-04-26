import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { GlobalErrorBoundary } from './components/shared/GlobalErrorBoundary'
import CookieConsent from './components/shared/CookieConsent'
import ScrollToTop from './components/shared/ScrollToTop'
import { applySeo, setJsonLd, removePageJsonLd } from './lib/seo'

// Lazy loaded public pages
const HomePage = lazy(() => import('./pages/Home/HomePage'))
const PricingPage = lazy(() => import('./pages/Pricing/PricingPage'))
const ServicePage = lazy(() => import('./pages/Service/ServicePage'))
const SolutionPage = lazy(() => import('./pages/Solution/SolutionPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
const ProductPage = lazy(() => import('./pages/Product/ProductPage'))
const LedgerCartErpPage = lazy(() => import('./pages/Product/LedgerCartErpPage'))
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

// Admin portal
const AdminPage = lazy(() => import('./pages/Admin/AdminPage'))

// Ultra-fast slim page loader
const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0a0f1a] z-50 transition-colors duration-300">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin mb-4"></div>
      <div className="text-xs font-bold tracking-widest text-gray-400 uppercase animate-pulse">Loading LedgerCart</div>
    </div>
  </div>
)

/* ═══════════════════════════════════════════════════════════════════════
   SEO DYNAMIC ENGINE
   Runs on every client-side route change. Injects:
     1. Per-route title / meta description / canonical / og / twitter
     2. Page-specific JSON-LD structured data (rich snippets)
     3. BreadcrumbList for all non-root pages
   Global schemas (Organization + WebSite) live in index.html and are
   intentionally NOT repeated here to avoid duplication.
═══════════════════════════════════════════════════════════════════════ */
const SEOEngine = () => {
  const location = useLocation()

  useEffect(() => {
    const DEFAULT_TITLE = 'LedgerCart – IT Services, Cybersecurity & ERP'
    const DEFAULT_DESC = 'LedgerCart delivers custom software, cybersecurity, and ERP solutions to help teams modernize operations and scale with confidence.'
    const origin = window.location.origin
    const absImg = `${origin}/og-image.webp`

    // ── 1. Route → meta config ──────────────────────────────────────
    const META = {
      '/':                    { title: DEFAULT_TITLE,                                                                       description: DEFAULT_DESC,                                                                                                                                           robots: 'index, follow', ogType: 'website' },
      '/pricing':             { title: 'Pricing & Engagement | LedgerCart',                                                 description: 'Request a pricing quote for LedgerCart ERP and IT services — tailored to your scope, timelines, and security requirements.',                            robots: 'index, follow', ogType: 'website' },
      '/service':             { title: 'IT Services | Custom Software, Cloud & Cybersecurity | LedgerCart',                 description: 'Explore LedgerCart services: custom software engineering, cloud, cybersecurity, data engineering, and digital transformation for Indian enterprises.', robots: 'index, follow', ogType: 'website' },
      '/solution':            { title: 'Industry Solutions | Healthcare, FinTech, Logistics & More | LedgerCart',           description: 'LedgerCart industry solutions for Healthcare, FinTech, Education, Retail, Logistics, and HR — built for reliability and compliance.',                      robots: 'index, follow', ogType: 'website' },
      '/contact':             { title: 'Contact LedgerCart | Custom Software & ERP Consultation',                           description: 'Get in touch with LedgerCart to discuss custom software, cybersecurity, and ERP implementation. Based in Kolkata, serving clients across India.',        robots: 'index, follow', ogType: 'website' },
      '/product':             { title: 'Products | LedgerCart ERP & Business Solutions',                                    description: 'Explore LedgerCart products built to help teams modernize operations, improve visibility, and scale with confidence.',                                   robots: 'index, follow', ogType: 'website' },
      '/product/ledgercart-erp': { title: 'LedgerCart ERP | Complete Enterprise Resource Planning System',                  description: 'LedgerCart ERP: unified commerce, inventory, procurement, finance, and HR. Automate operations and gain real-time clarity for high-growth businesses.',    robots: 'index, follow', ogType: 'website' },
      '/careers':             { title: 'Careers at LedgerCart | Software & ERP Jobs in Kolkata',                            description: 'Join LedgerCart and build secure, high-impact software for businesses worldwide. Open roles in engineering, cybersecurity, and ERP consulting.',            robots: 'index, follow', ogType: 'website' },
      '/about':               { title: 'About LedgerCart | IT Services Company in Kolkata, India',                          description: 'Learn about LedgerCart: our mission, team, and the story behind our IT services and ERP solutions. Trusted by businesses across India.',                   robots: 'index, follow', ogType: 'website' },
      '/partners':            { title: 'Partner with LedgerCart | IT & ERP Partnership Program',                            description: 'Partner with LedgerCart to deliver ERP implementations and IT services across India. Explore collaboration models and program benefits.',                 robots: 'index, follow', ogType: 'website' },
      '/blog':                { title: 'Blog | LedgerCart Insights on ERP, Software & Cybersecurity',                       description: 'Read LedgerCart articles on engineering, ERP, security, and modern software delivery — practical insights from our team in Kolkata.',                      robots: 'index, follow', ogType: 'website' },
      '/case-studies':        { title: 'Case Studies | LedgerCart Success Stories',                                         description: 'Explore real-world LedgerCart case studies showing measurable outcomes across logistics, cleantech, healthcare, and ERP modernization.',                  robots: 'index, follow', ogType: 'website' },
    }

    const getSeo = (pathname) => {
      if (META[pathname]) return META[pathname]
      if (pathname.startsWith('/blog/'))           return { title: 'Blog Post | LedgerCart',   description: DEFAULT_DESC,                                                   robots: 'index, follow',    ogType: 'article' }
      if (pathname.startsWith('/case-studies/'))   return { title: 'Case Study | LedgerCart',  description: 'A real-world LedgerCart implementation: challenge, solution, and measurable impact.', robots: 'index, follow', ogType: 'article' }
      if (pathname.startsWith('/legal/'))          return { title: 'Legal | LedgerCart',        description: 'LedgerCart legal policies, terms, and security information.',    robots: 'index, follow',    ogType: 'website' }
      if (pathname.startsWith('/admin'))           return { title: 'Admin | LedgerCart',        description: DEFAULT_DESC,                                                   robots: 'noindex, nofollow', ogType: 'website' }
      return { title: 'Page Not Found | LedgerCart', description: DEFAULT_DESC, robots: 'noindex, follow', ogType: 'website' }
    }

    const seo = getSeo(location.pathname)
    const canonicalUrl = `${origin}${location.pathname}`

    applySeo({ ...seo, canonicalUrl, imageUrl: absImg, imageAlt: 'LedgerCart – IT Services, Cybersecurity & ERP' })

    // ── 2. Clean previous page-specific JSON-LD ─────────────────────
    removePageJsonLd()

    // ── 3. WebPage schema (every route) ─────────────────────────────
    setJsonLd('webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      name: seo.title,
      description: seo.description,
      url: canonicalUrl,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', '@id': `${origin}/#website` },
      about: { '@type': 'Organization', '@id': `${origin}/#organization` },
      dateModified: new Date().toISOString().split('T')[0],
    })

    // ── 4. BreadcrumbList for all non-root / non-admin pages ────────
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts.length > 0 && !location.pathname.startsWith('/admin')) {
      setJsonLd('breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
          ...parts.map((part, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            item: `${origin}/${parts.slice(0, i + 1).join('/')}`,
          })),
        ],
      })
    }

    // ── 5. Page-type rich schemas ────────────────────────────────────
    const org = { '@type': 'Organization', '@id': `${origin}/#organization`, name: 'LedgerCart', url: origin }

    // HOME: LocalBusiness + SoftwareApplication
    if (location.pathname === '/') {
      setJsonLd('localBusiness', {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${origin}/#localbusiness`,
        name: 'LedgerCart',
        description: DEFAULT_DESC,
        url: origin,
        email: 'info@ledgercart.in',
        address: { '@type': 'PostalAddress', streetAddress: 'Moni Bhander, Module C, WEBEL Bhawan, EP & GP Block, Sector V', addressLocality: 'Salt Lake, Kolkata', addressRegion: 'West Bengal', postalCode: '700091', addressCountry: 'IN' },
        geo: { '@type': 'GeoCoordinates', latitude: 22.5726, longitude: 88.3639 },
        openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        sameAs: ['https://www.linkedin.com/company/ledgercart/'],
        image: absImg,
        priceRange: '₹₹',
      })
      setJsonLd('erp-software', {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'LedgerCart ERP',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'A complete ERP platform for high-growth businesses — automate workflows, reduce manual overhead, and gain real-time operational clarity.',
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: '0', description: 'Custom pricing — contact for quote' },
        url: `${origin}/product/ledgercart-erp`,
        publisher: org,
      })
    }

    // SERVICE: ItemList of service offerings
    if (location.pathname === '/service') {
      setJsonLd('service-list', {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'LedgerCart IT Services',
        url: `${origin}/service`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Custom Software Development', provider: org, url: `${origin}/service#software` } },
          { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Cybersecurity',               provider: org, url: `${origin}/service#cybersecurity` } },
          { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Cloud Engineering',           provider: org, url: `${origin}/service#cloud` } },
          { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'ERP Implementation',          provider: org, url: `${origin}/service#erp` } },
          { '@type': 'ListItem', position: 5, item: { '@type': 'Service', name: 'Data Engineering',            provider: org, url: `${origin}/service#data` } },
          { '@type': 'ListItem', position: 6, item: { '@type': 'Service', name: 'Digital Transformation',      provider: org, url: `${origin}/service#digital` } },
        ],
      })
    }

    // PRODUCT ERP: SoftwareApplication detail
    if (location.pathname === '/product/ledgercart-erp') {
      setJsonLd('erp-detail', {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'LedgerCart ERP',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Enterprise Resource Planning',
        operatingSystem: 'Web, iOS, Android',
        description: 'LedgerCart ERP helps standardize workflows, improve visibility, and automate operations with secure, scalable architecture.',
        featureList: ['Inventory Management','Finance & Accounting','HR & Payroll','Procurement','Sales & CRM','Analytics Dashboard','Multi-location Support'],
        screenshot: absImg,
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: '0', description: 'Custom pricing based on modules' },
        url: `${origin}/product/ledgercart-erp`,
        publisher: org,
        inLanguage: 'en-IN',
      })
    }

    // ABOUT: AboutPage + Organization detail
    if (location.pathname === '/about') {
      setJsonLd('about-page', {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About LedgerCart',
        url: `${origin}/about`,
        description: 'LedgerCart is a Kolkata-based IT services company delivering custom software, cybersecurity, and ERP solutions to enterprises across India.',
        mainEntity: {
          '@type': 'Organization',
          '@id': `${origin}/#organization`,
          name: 'LedgerCart',
          foundingDate: '2020',
          foundingLocation: { '@type': 'Place', name: 'Kolkata, West Bengal, India' },
          areaServed: 'IN',
          knowsAbout: ['ERP Systems','Custom Software Development','Cybersecurity','Cloud Engineering'],
        },
      })
    }

    // CONTACT: ContactPage schema
    if (location.pathname === '/contact') {
      setJsonLd('contact-page', {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact LedgerCart',
        url: `${origin}/contact`,
        description: 'Contact LedgerCart for custom software, cybersecurity, and ERP consultation. Based in Kolkata, India.',
        mainEntity: {
          '@type': 'Organization',
          name: 'LedgerCart',
          email: 'info@ledgercart.in',
          address: { '@type': 'PostalAddress', streetAddress: 'Moni Bhander, Module C, WEBEL Bhawan, EP & GP Block, Sector V', addressLocality: 'Salt Lake, Kolkata', addressRegion: 'West Bengal', postalCode: '700091', addressCountry: 'IN' },
        },
      })
    }

    // PRICING: FAQPage schema — enables inline Q&A accordion in Google SERP
    if (location.pathname === '/pricing') {
      setJsonLd('pricing-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How does custom pricing work?',          acceptedAnswer: { '@type': 'Answer', text: 'Because every business is unique, we create a custom quote based on the modules, integrations, and services you need.' } },
          { '@type': 'Question', name: 'How long does an ERP implementation take?', acceptedAnswer: { '@type': 'Answer', text: 'Implementation timelines vary from 4 weeks to 6 months, depending on your system complexity and required data migrations.' } },
          { '@type': 'Question', name: 'Do you offer a free trial?',             acceptedAnswer: { '@type': 'Answer', text: 'While we do not offer a self-serve free trial, we provide extensive live demonstrations using your own data samples.' } },
          { '@type': 'Question', name: 'Can I purchase individual ERP modules?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! LedgerCart ERP is modular by design. You can start with Finance and HR and add modules as you grow.' } },
          { '@type': 'Question', name: 'What is included in Managed IT Services?', acceptedAnswer: { '@type': 'Answer', text: 'Our packages cover DevOps, 24/7 security monitoring, cloud migration, end-user support, and infrastructure administration.' } },
          { '@type': 'Question', name: 'Are there any hidden consulting fees?',  acceptedAnswer: { '@type': 'Answer', text: 'No hidden fees. Our project proposals explicitly detail all implementation, licensing, and support costs before contract signing.' } },
          { '@type': 'Question', name: 'Is support included with the ERP?',      acceptedAnswer: { '@type': 'Answer', text: 'Yes, standard support is included. Premium 24/7 priority support with dedicated account managers is available for enterprise clients.' } },
          { '@type': 'Question', name: 'Do you integrate with third-party tools?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. LedgerCart ERP has a robust API and our team can integrate with existing tools. Contact us to discuss specific integrations.' } },
        ],
      })
    }

    // CAREERS: JobPosting schema — enables Google Jobs integration
    if (location.pathname === '/careers') {
      setJsonLd('careers-page', {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: 'Software Engineer — Multiple Openings',
        description: 'LedgerCart is hiring software engineers, cybersecurity specialists, and ERP consultants to build next-generation enterprise tools for Indian businesses.',
        hiringOrganization: { '@type': 'Organization', name: 'LedgerCart', sameAs: origin, logo: absImg },
        jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', streetAddress: 'WEBEL Bhawan, Sector V', addressLocality: 'Salt Lake, Kolkata', addressRegion: 'West Bengal', postalCode: '700091', addressCountry: 'IN' } },
        employmentType: 'FULL_TIME',
        datePosted: new Date().toISOString().split('T')[0],
        validThrough: new Date(Date.now() + 90 * 86400000).toISOString().split('T')[0],
        url: `${origin}/careers`,
      })
    }

    // CASE STUDIES LIST: ItemList
    if (location.pathname === '/case-studies') {
      setJsonLd('case-studies-list', {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'LedgerCart Case Studies',
        url: `${origin}/case-studies`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, url: `${origin}/case-studies/intugine-logistics-erp`,   name: 'Automating Real-Time Shipment Tracking with LedgerCart ERP' },
          { '@type': 'ListItem', position: 2, url: `${origin}/case-studies/arka2050-cleantech-portal`, name: 'Building a Secure Carbon Credit Management Platform for Green Kolkata' },
        ],
      })
    }

    // BLOG INDEX: Blog schema
    if (location.pathname === '/blog') {
      setJsonLd('blog-list', {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'LedgerCart Blog',
        url: `${origin}/blog`,
        publisher: org,
        inLanguage: 'en-IN',
      })
    }

    // PARTNERS: WebPage with partner action
    if (location.pathname === '/partners') {
      setJsonLd('partners-page', {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'LedgerCart Partner Program',
        url: `${origin}/partners`,
        about: org,
      })
    }

    // ── 6. Scroll handling ───────────────────────────────────────────
    if (location.hash) {
      const hash = location.hash.replace('#', '')
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(hash)
        if (el) { el.scrollIntoView({ behavior: 'smooth' }) }
        else if (attempts < 20) { attempts++; setTimeout(tryScroll, 100) }
        else { window.scrollTo(0, 0) }
      }
      tryScroll()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

/* ═══════════════════════════════════════════════════════════════════════
   APP ROOT
═══════════════════════════════════════════════════════════════════════ */
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
              <Route path="/product/ledgercart-erp" element={<LedgerCartErpPage />} />
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

              {/* Catch-all 404 */}
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

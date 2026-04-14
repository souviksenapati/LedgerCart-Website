import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const Logo = () => (
  <Link to="/" className="flex items-center gap-[10px] mb-5 no-underline">
    <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill="#ea580c"/>
      <rect x="10" y="8"  width="16" height="4" rx="1" fill="white"/>
      <rect x="10" y="8"  width="4"  height="10" rx="1" fill="white"/>
      <rect x="10" y="16" width="16" height="4" rx="1" fill="white"/>
      <rect x="22" y="18" width="4"  height="10" rx="1" fill="white"/>
      <rect x="10" y="24" width="16" height="4" rx="1" fill="white"/>
    </svg>
    <div className="flex flex-col leading-[1.1] justify-center">
      <span className="text-[20px] font-bold text-gray-900 dark:text-slate-100 tracking-[-0.3px]">LedgerCart</span>
    </div>
  </Link>
)

const themes = [
  { id: 'light', icon: '☀', label: 'Light' },
  { id: 'system', icon: '⚙', label: 'System' },
  { id: 'dark', icon: '☾', label: 'Dark' },
]

function Footer() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  return (
    <footer className="bg-white dark:bg-[#0a0f1a] border-t border-gray-200 dark:border-slate-800 transition-colors duration-300 pt-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-[60px] pb-[60px] border-b border-gray-200 dark:border-slate-800">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-[1.7] mb-2.5">A leading IT Service Provider delivering innovative solutions, enterprise custom software, and the powerful LedgerCart ERP system.</p>
            <p className="text-[13px] text-gray-500 dark:text-slate-500 mb-6">LedgerCart® - Your trusted technology partner.</p>
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center shrink-0">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 leading-none mb-1">Sales & Enquiries</h4>
                   <a href="mailto:sales@ledgercart.in" className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline">sales@ledgercart.in</a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center shrink-0">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 leading-none mb-1">Technical Support</h4>
                   <a href="mailto:support@ledgercart.in" className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline">support@ledgercart.in</a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center shrink-0">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 4h10m-10 4h10m-10 4h7" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 leading-none mb-1">General Contact</h4>
                   <a href="mailto:info@ledgercart.in" className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline">info@ledgercart.in</a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center shrink-0">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 leading-none mb-1">Office Address</h4>
                   <p className="text-gray-500 dark:text-slate-500 text-[13px] leading-tight mt-0.5">Moni Bhander, Module C,<br/>WEBEL Bhawan, EP &amp; GP Block, Sector V,<br/>Salt Lake, Kolkata, West Bengal 700091, India</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div>
              <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 mb-4">Products</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-[14px]">
                <li><Link to="/product" className="text-gray-500 dark:text-slate-400 hover:text-orange-600 transition-colors no-underline">LedgerCart ERP</Link></li>
              </ul>
              <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 mb-4 mt-8">Solutions</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-[14px]">
                {[{label: 'HealthTech', id: 'healthtech'}, {label: 'FinTech', id: 'fintech'}, {label: 'EdTech', id: 'edtech'}, {label: 'E-commerce', id: 'ecommerce'}, {label: 'Supply Chain', id: 'supplychain'}, {label: 'HRTech', id: 'hrtech'}].map(({label, id}) => (
                  <li key={label}><Link to={`/solution#${id}`} className="text-gray-500 dark:text-slate-400 hover:text-orange-600 transition-colors no-underline">{label} & Solutions</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 mb-4">Services</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-[14px]">
                {[
                  ['Software Engineering', '/service#software-engineering'], 
                  ['Web Development', '/service#web-development'], 
                  ['Mobile Development', '/service#mobile-app'], 
                  ['AI & Machine Learning', '/service#ai-ml'],
                  ['Cloud Engineering', '/service#cloud-engineering'],
                  ['Cybersecurity', '/service#cyber-security'],
                  ['Digital Marketing', '/service#digital-marketing']
                ].map(([label, to]) => (
                  <li key={label}><Link to={to} className="text-gray-500 dark:text-slate-400 hover:text-orange-600 transition-colors no-underline">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-[14px]">
                {[
                  ['About us', '/about'], 
                  ['Careers', '/careers'], 
                  ['Partners', '/partners'], 
                  ['Blogs', '/blog'], 
                  ['Case Studies', '/case-studies'],
                  ['Contact Us', '/contact']
                ].map(([label, to]) => {
                  const isActive = location.pathname === to
                  return (
                    <li key={label}>
                      {to.startsWith('/') ? 
                         <Link 
                           to={to} 
                           className={`transition-colors no-underline ${isActive ? 'text-orange-600 font-bold' : 'text-gray-500 dark:text-slate-400 hover:text-orange-600'}`}
                         >
                           {label}
                         </Link> :
                         <a href={to} className="text-gray-500 dark:text-slate-400 hover:text-orange-600 transition-colors no-underline">{label}</a>
                      }
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-gray-900 dark:text-slate-100 mb-4">Legal</h4>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-[14px]">
                {[
                  { label: 'Privacy policy ↗', to: '/legal/privacy' },
                  { label: 'Terms of service ↗', to: '/legal/terms' },
                  { label: 'Cookie policy ↗', to: '/legal/cookies' },
                  { label: 'Security ↗', to: '/legal/security' },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-gray-500 dark:text-slate-400 hover:text-orange-600 transition-colors no-underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-slate-400">Theme :</span>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`w-8 h-8 rounded-lg border text-sm flex items-center justify-center transition-colors cursor-pointer ${theme === t.id ? 'border-orange-600 text-orange-600 bg-orange-50 dark:bg-orange-950/30' : 'border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-400 hover:border-orange-600 hover:text-orange-600'}`}
                title={t.label}
              >{t.icon}</button>
            ))}
          </div>
          <div className="text-xs text-gray-400 dark:text-slate-600 text-center">
            © 2026 LedgerCart IT Solutions. All rights reserved. LedgerCart® is a registered trademark.
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-slate-500">
            <span>Follow us on:</span>
            <a
              href="https://www.linkedin.com/company/ledgercart/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-base text-gray-500 dark:text-slate-400 hover:text-orange-600 transition-colors no-underline font-semibold"
            >
              in
            </a>
            <span className="flex items-center gap-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-amber-400 inline-block"></span>
              Live Systems
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
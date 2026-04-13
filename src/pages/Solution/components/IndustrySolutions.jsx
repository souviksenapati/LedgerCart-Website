import { Link } from 'react-router-dom'

const solutions = [
  {
    id: 'healthtech',
    label: 'HEALTHTECH & HEALTHCARE',
    title: 'Secure, Compliant Healthcare Platforms',
    desc: 'Empower patients and providers with HIPAA-compliant healthcare solutions. We deliver telemedicine apps, electronic health records (EHR) integration, and scalable patient portals focused on delivering better care.',
    features: ['HIPAA / GDPR Compliance', 'EHR & EMR Integrations', 'Telemedicine infrastructure', 'IoT Medical device syncing'],
    reverse: false,
    cta: 'Learn More',
    to: '#'
  },
  {
    id: 'fintech',
    label: 'FINTECH & BFSI',
    title: 'Bank-Grade Financial Technology',
    desc: 'Revolutionize the financial world with highly secure, low-latency transaction systems. From digital wallets to blockchain integrations, we build uncompromised fintech architectures.',
    features: ['High-frequency trading platforms', 'PCI-DSS compliant infrastructure', 'Blockchain & Crypto solutions', 'Fraud detection AI'],
    reverse: true,
    cta: 'Explore FinTech',
    to: '#'
  },
  {
    id: 'edtech',
    label: 'EDTECH & EDUCATION',
    title: 'Transform the Learning Experience',
    desc: 'Scale online education with interactive, video-ready platforms. We build Learning Management Systems (LMS), virtual classrooms, and data-driven student performance trackers.',
    features: ['Video streaming & Virtual Classrooms', 'LMS & SCORM compliance', 'Gamified learning tools', 'Student analytics dashboards'],
    reverse: false,
    cta: 'Start Building',
    to: '/contact'
  },
  {
    id: 'ecommerce',
    label: 'E-COMMERCE & RETAIL',
    title: 'Omnichannel Commerce at Scale',
    desc: 'Deliver seamless shopping experiences with lightning-fast storefronts, robust payment gateways, and unified inventory management systems ready for the modern retail era.',
    features: ['Headless commerce architecture', 'Global payment gateway integrations', 'Real-time inventory syncing', 'AI-powered product recommendations'],
    reverse: true,
    cta: 'View Retail Solutions',
    to: '#'
  },
  {
    id: 'supplychain',
    label: 'SUPPLY CHAIN & LOGISTICS',
    title: 'Intelligent Supply Chain Management',
    desc: 'Optimize your entire logistics network using real-time tracking, predictive demand forecasting, and automated routing built precisely for global operations.',
    features: ['Real-time fleet tracking', 'Predictive demand forecasting', 'Warehouse management systems', 'Supplier portal integration'],
    reverse: false,
    cta: 'Optimize Supply Chain',
    to: '#'
  },
  {
    id: 'hrtech',
    label: 'HRTECH & WORKFORCE',
    title: 'Modernize Human Resources',
    desc: 'Automate tedious HR tasks from recruitment and onboarding to payroll and performance reviews. Build an engaged workforce using smart, intuitive HR software.',
    features: ['Applicant Tracking Systems (ATS)', 'Employee self-service portals', 'Automated payroll & tax engines', 'Performance & goal tracking'],
    reverse: true,
    cta: 'Discover HRTech',
    to: '#'
  }
]

export default function IndustrySolutions() {
  return (
    <section className="py-[100px] bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-[140px]">
        {solutions.map((row) => (
          <div id={row.id} key={row.id} className={`scroll-mt-32 flex flex-col lg:flex-row gap-20 items-center ${row.reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Content Segment */}
            <div className="flex-1 w-full relative z-10 p-4 lg:p-0">
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-orange-600 mb-3.5 tracking-[0.2em]">{row.label}</p>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.5px] text-gray-900 dark:text-slate-100 mb-4 leading-[1.2]">{row.title}</h2>
              <p className="text-[16px] text-gray-500 dark:text-slate-400 leading-[1.7] mb-6 max-w-[580px]">{row.desc}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-8 border-t border-gray-100 dark:border-slate-800 pt-6">
                {row.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] font-medium text-gray-800 dark:text-slate-300">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span> 
                    {f}
                  </li>
                ))}
              </ul>
              <Link to={row.to} className="inline-flex items-center px-7 py-3.5 text-[15px] font-bold text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-[10px] hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all shadow-md shadow-gray-200 dark:shadow-none no-underline">
                {row.cta}
              </Link>
            </div>
            
            {/* Visual Graphic Segment */}
            <div className="flex-1 w-full flex items-center justify-center bg-gray-50 dark:bg-[#1e293b] rounded-[24px] overflow-hidden min-h-[400px] border border-gray-100 dark:border-slate-800 shadow-sm">
              <div className="text-center px-10">
                 {/* Decorative block standing in for dynamic visual */}
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl mx-auto mb-6 shadow-xl shadow-orange-500/20 transform rotate-3 flex items-center justify-center">
                  <span className="text-white font-extrabold text-[24px] uppercase tracking-tighter opacity-90">{row.id.substring(0,2)}</span>
                </div>
                <h3 className="text-[20px] font-bold text-gray-900 dark:text-slate-100">{row.label.split('&')[0]}</h3>
                <div className="w-16 h-1 bg-orange-500/50 mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
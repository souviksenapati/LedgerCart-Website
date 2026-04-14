import { Link } from 'react-router-dom'

const solutions = [
  {
    id: 'healthtech',
    label: 'HEALTHTECH & HEALTHCARE',
    title: 'Secure, Compliant Healthcare Platforms',
    desc: 'Empower patients and providers with HIPAA-compliant healthcare solutions. We deliver telemedicine apps, electronic health records (EHR) integration, and scalable patient portals focused on delivering better care.',
    features: ['HIPAA / GDPR Compliance', 'EHR & EMR Integrations', 'Telemedicine infrastructure', 'IoT Medical device syncing'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Doctors collaborating around digital healthcare systems',
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
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Fintech dashboards and digital payment analytics',
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
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Students using digital learning platform on laptops',
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
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Modern online shopping and retail checkout experience',
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
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Logistics containers and global supply chain transport',
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
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'HR team reviewing candidate and workforce data',
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
            <div className="flex-1 w-full bg-gray-50 dark:bg-[#1e293b] rounded-[24px] overflow-hidden min-h-[400px] border border-gray-100 dark:border-slate-800 shadow-sm relative group">
              <img
                src={row.image}
                alt={row.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-900/30 to-gray-900/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="inline-flex rounded-full bg-orange-500/90 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-white">
                  {row.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
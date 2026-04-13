import { Link } from 'react-router-dom'

const AppHostingIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
    <rect x="10" y="10" width="60" height="60" rx="4" stroke="#ea580c" strokeWidth="2"/>
    <rect x="20" y="22" width="40" height="6" rx="2" stroke="#ea580c" strokeWidth="1.5"/>
    <rect x="20" y="36" width="40" height="6" rx="2" stroke="#ea580c" strokeWidth="1.5"/>
    <rect x="20" y="50" width="40" height="6" rx="2" stroke="#ea580c" strokeWidth="1.5"/>
  </svg>
)
const StorageIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
    <ellipse cx="40" cy="28" rx="24" ry="10" stroke="#ea580c" strokeWidth="2"/>
    <path d="M16 28v24c0 5.523 10.745 10 24 10s24-4.477 24-10V28" stroke="#ea580c" strokeWidth="2"/>
    <path d="M16 40c0 5.523 10.745 10 24 10s24-4.477 24-10" stroke="#ea580c" strokeWidth="1.5"/>
  </svg>
)
const DatabaseIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
    <ellipse cx="40" cy="24" rx="22" ry="8" stroke="#ea580c" strokeWidth="2"/>
    <path d="M18 24v12c0 4.418 9.85 8 22 8s22-3.582 22-8V24" stroke="#ea580c" strokeWidth="2"/>
    <path d="M18 36v12c0 4.418 9.85 8 22 8s22-3.582 22-8V36" stroke="#ea580c" strokeWidth="2"/>
    <path d="M18 36c0 4.418 9.85 8 22 8s22-3.582 22-8" stroke="#ea580c" strokeWidth="1.5"/>
  </svg>
)
const StaticIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
    <path d="M40 10L55 30H45V55H35V30H25L40 10Z" stroke="#ea580c" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <path d="M25 65H55" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const services = [
  { icon: AppHostingIcon, name: 'Web Development', desc: 'Custom web applications built with modern frameworks for optimal performance.', to: '/service' },
  { icon: StorageIcon, name: 'Managed IT', desc: 'End-to-end technology management, infrastructure setup, and 24/7 support.', to: '/service' },
  { icon: DatabaseIcon, name: 'LedgerCart ERP', desc: 'Our flagship enterprise resource planning system tailored to your business.', to: '/product' },
  { icon: StaticIcon, name: 'Cybersecurity', desc: 'Comprehensive audits, penetration testing, and enterprise-grade network security.', to: '/service' },
]

export default function ServicesGrid() {
  return (
    <section className="py-[100px] bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.12em] uppercase text-orange-600 text-center mb-4">OUR EXPERTISE</p>
        <h2 className="text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-1px] leading-[1.1] text-gray-900 dark:text-slate-100 text-center mb-5">IT Services & Solutions</h2>
        <p className="text-base text-gray-500 dark:text-slate-400 text-center max-w-[640px] mx-auto mb-[60px] leading-[1.7]">
          From strategy to execution – no operational worries, just seamless growth.<br />
          LedgerCart provides end-to-end technology services tailored to your enterprise.<br />
          We have the <a href="/service" className="text-orange-600 no-underline hover:underline font-semibold">expertise</a> to make your vision a reality!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <Link
              key={svc.name}
              to={svc.to}
              className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-2xl p-7 flex flex-col items-start gap-3 relative cursor-pointer overflow-hidden transition-all duration-200 hover:border-orange-600/30 hover:shadow-[0_8px_32px_rgba(234,88,12,0.1)] dark:hover:shadow-[0_8px_32px_rgba(234,88,12,0.05)] hover:-translate-y-[3px] group no-underline"
            >
              <div className="mb-1">{svc.icon && <svc.icon />}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-slate-200">{svc.name}</h3>
              <p className="text-sm text-gray-500 dark:text-slate-500 leading-[1.6] flex-1">{svc.desc}</p>
              <span className="absolute right-5 bottom-6 text-[22px] text-gray-200 dark:text-slate-800 transition-all duration-200 group-hover:text-orange-600 group-hover:translate-x-1">›</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

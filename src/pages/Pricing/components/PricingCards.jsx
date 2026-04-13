import { Link } from 'react-router-dom'

const pricingData = [
  {
    name: 'ERP Starter Track',
    sub: 'For growing businesses',
    price: 'Custom',
    unit: 'Quote-based pricing',
    desc: 'Core ERP modules to jumpstart your operations.',
    features: ['Finance & Accounting', 'Basic Inventory Management', 'Employee self-service', 'Standard Support', 'Monthly automated backups'],
    note: 'Consultation required',
    cta: 'Request a Quote →',
  },
  {
    name: 'Enterprise ERP',
    sub: 'For large-scale operations',
    price: 'Tailored',
    unit: 'Quote-based pricing',
    desc: 'Full-suite LedgerCart ERP with unlimited capabilities.',
    features: ['All ERP modules included', 'Custom Integrations', 'Dedicated Account Manager', '24/7 Priority Support', 'On-premise or Cloud deployment'],
    note: 'Consultation required',
    cta: 'Request a Quote →',
  },
  {
    name: 'Managed IT Services',
    sub: 'End-to-end technology management',
    price: 'Custom',
    unit: 'Quote-based pricing',
    desc: 'Let us handle your infrastructure, security, and cloud.',
    features: ['24/7 Cybersecurity Monitoring', 'Cloud Migration & Management', 'Infrastructure as a Service (IaaS)', 'Network architecture setup', 'Regular compliance audits'],
    note: 'Assessed per requirement',
    cta: 'Discuss your needs →',
  },
  {
    name: 'Custom Development',
    sub: 'Tailor-made software solutions',
    price: 'Hourly',
    unit: 'or Project-based',
    desc: 'Bring your unique business ideas to life with our dev team.',
    features: ['Web & Mobile App Dev', 'AI & Machine Learning models', 'Legacy System Modernization', 'API Development & Integration', 'Dedicated Agile Teams'],
    note: 'Scope-based estimates',
    cta: 'Start a Project →',
  },
]

export default function PricingCards() {
  return (
    <section className="pb-20 bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-950 dark:to-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-[-30px]">
          {pricingData.map((plan) => (
            <div
              key={plan.name}
              className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col gap-4 transition-all duration-200 hover:border-orange-600/30 dark:hover:border-orange-600/50 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] dark:hover:shadow-none hover:-translate-y-1"
            >
              <div>
                <div className="text-base font-bold text-gray-900 dark:text-slate-100">{plan.name}</div>
                <div className="text-[13px] text-gray-500 dark:text-slate-400">{plan.sub}</div>
              </div>
              <div>
                <div className="flex items-start gap-0.5 leading-none">
                  <span className="text-[36px] font-black tracking-[-1px] text-gray-900 dark:text-slate-100 leading-none">
                    {plan.price}
                  </span>
                </div>
                <div className="text-[13px] text-gray-500 dark:text-slate-400 font-normal mt-1">{plan.unit}</div>
              </div>

              <div className="text-sm text-gray-500 dark:text-slate-400">{plan.desc}</div>
              <Link to="/contact" className="text-sm font-semibold text-center text-white bg-orange-600 border border-orange-600 px-4 py-2.5 rounded-lg hover:bg-orange-700 hover:border-orange-700 transition-all no-underline shadow-lg shadow-orange-600/20">{plan.cta}</Link>
              <div className="h-px bg-gray-200 dark:bg-slate-800"></div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-slate-300">
                    <span className="text-orange-600 text-[13px] flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="text-[13px] text-orange-600 font-medium text-center">{plan.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

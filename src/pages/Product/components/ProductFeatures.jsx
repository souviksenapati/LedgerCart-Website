import ErpVisual from '../../Service/components/visuals/ErpVisual'
import DatabaseVisual from '../../Service/components/visuals/DatabaseVisual'
import WebDevVisual from '../../Service/components/visuals/WebDevVisual'

const modules = [
  {
    title: 'Finance & Accounting',
    desc: 'Automate your financial processes, manage cash flow, and generate real-time reports with our comprehensive financial module.',
    features: ['Real-time general ledger', 'Automated invoicing & billing', 'Tax compliance & reporting', 'Multi-currency support'],
    visual: <ErpVisual />,
    reverse: false
  },
  {
    title: 'Human Resources',
    desc: 'Empower your workforce with self-service portals, automated payroll, and seamless talent management.',
    features: ['Payroll automation', 'Time & attendance tracking', 'Employee self-service portal', 'Performance management'],
    visual: <DatabaseVisual />,
    reverse: true
  },
  {
    title: 'Inventory & CRM',
    desc: 'Track stock across multiple warehouses and manage your customer relationships in one unified platform.',
    features: ['Multi-warehouse tracking', 'Automated reordering', 'Sales pipeline management', 'Customer interaction history'],
    visual: <WebDevVisual />,
    reverse: false
  }
]

export default function ProductFeatures() {
  return (
    <section className="py-[100px] bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-20">
        {modules.map((mod) => (
          <div key={mod.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${mod.reverse ? 'lg:[direction:rtl]' : ''}`}>
            {/* Content */}
            <div className={mod.reverse ? '[direction:ltr]' : ''}>
              <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.5px] text-gray-900 dark:text-slate-100 mb-3.5 leading-[1.2]">{mod.title}</h2>
              <p className="text-[15px] text-gray-500 dark:text-slate-400 leading-[1.7] mb-5">{mod.desc}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 mb-7">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-slate-300">
                    <span className="text-orange-600 text-[13px] flex-shrink-0 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual */}
            <div className={`relative bg-transparent h-[280px] flex items-center justify-center overflow-hidden ${mod.reverse ? '[direction:ltr]' : ''}`}>
              <div className="relative z-10 w-full h-full">{mod.visual}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

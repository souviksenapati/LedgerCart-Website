import ecommerceImg from '../../../assets/features/ecommerce_dashboard_1776881354454.png'
import b2bImg from '../../../assets/features/b2b_wholesale_portal_1776881380752.png'
import wmsImg from '../../../assets/features/warehouse_logistics_wms_1776881410156.png'
import erpImg from '../../../assets/features/financial_erp_dashboard_1776881436517.png'

const imgVisual = (src) => (
  <img 
    src={src} 
    alt="Platform Dashboard" 
    className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-gray-200/50 dark:shadow-black/60 border border-gray-100 dark:border-slate-800 transition-transform hover:scale-[1.02] duration-500" 
  />
)

const modules = [
  {
    title: 'Intelligent Storefront Experience (B2C & B2B)',
    desc: 'Lightning-fast, frictionless shopping journey optimized for high conversion rates. Features dynamic catalogs, multi-session carts, and dual-pricing rules.',
    features: ['Infinite Category Depth', 'Persistent Wishlist & Cart', 'Dual B2C / B2B Pricing', 'Verified Reviews Ecosystem'],
    visual: imgVisual(ecommerceImg),
    reverse: false
  },
  {
    title: 'Marketing & Conversion Engine',
    desc: 'Equip your teams to run automated, time-sensitive campaigns directly from the dashboard. Highlight seasonal sales and drive loyalty.',
    features: ['Dynamic Promotional Banners', 'Intelligent Coupon Logic', 'Targeted B2B Promotions', 'Cart-minimum Discount Triggers'],
    visual: imgVisual(ecommerceImg),
    reverse: true
  },
  {
    title: 'Advanced B2B Wholesale & Partner Operations',
    desc: 'Purpose-built for complex business logic. Easily manage vetted business partners, assign credit limits, and seamlessly convert RFQs to Orders.',
    features: ['Dedicated B2B Customer Portal', 'Sales Quotations (RFQ)', 'Instant Order Conversion (SO)', 'Negotiated Unit Pricing'],
    visual: imgVisual(b2bImg),
    reverse: false
  },
  {
    title: 'Omnichannel Inventory Logistics (WMS)',
    desc: 'ERP-grade logistical backend. Stop relying on third-party spreadsheets and track your stock across retail branches and fulfillment centers dynamically.',
    features: ['Multi-Warehouse Architectures', 'Real-Time Master Inventory', 'Immutable Inventory Ledgers', 'Inwards & Outwards Tracking'],
    visual: imgVisual(wmsImg),
    reverse: true
  },
  {
    title: 'Procure-to-Pay Automation',
    desc: 'Manage your procurement supply chain digitally. Generate Purchase Orders automatically and verify incoming stock against Goods Receipt Notes.',
    features: ['Supplier Directory', 'Automated Purchase Orders', 'Goods Receipt Notes (GRN)', 'Purchase Invoicing'],
    visual: imgVisual(b2bImg),
    reverse: false
  },
  {
    title: 'Financial Workflows & Business Intelligence',
    desc: 'Close the loop on revenue realization. Gain real-time visualization of your Gross Merchandise Value and outstanding receivables.',
    features: ['Tax-Compliant Sales Invoicing', 'Executive Dashboard Reports', 'Regional Sales Heatmaps', 'Receivables/Payables Tracking'],
    visual: imgVisual(erpImg),
    reverse: true
  },
  {
    title: 'High-Fidelity Document Generation',
    desc: 'Remove the need for manual Word or Excel formatting. The built-in PDF engine dynamically generates print-ready, legally-formatted documents.',
    features: ['Sales Quotations & Orders', 'Tax-Ready Sales Invoices', 'Procurement Paperwork (PO)', 'Downloadable via Browser'],
    visual: imgVisual(erpImg),
    reverse: false
  },
  {
    title: 'Enterprise Identity & Security Control',
    desc: 'Extreme operational security for internal teams and cloud deployments. Role-based access ensures staff only see what they are authorized to see.',
    features: ['Strict Role-Based Access (RBAC)', 'Granular Staff Assignment', 'Frontend Zero-Trust Guards', 'DDoS & Scraping Protection'],
    visual: imgVisual(wmsImg),
    reverse: true
  },
  {
    title: 'SaaS Operations Console',
    desc: 'A dedicated multi-tenancy dashboard for platform owners to oversee onboarding, active merchant subscriptions, and overall system health.',
    features: ['True Multi-Tenancy Architecture', 'Tenant Management Console', 'Dynamic Plan Tiering', 'Resource Bandwidth Limits'],
    visual: imgVisual(ecommerceImg),
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

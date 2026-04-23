import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const plansINR = [
  {
    name: 'Starter',
    price: '₹1,999',
    period: '/ month',
    fee: '+ 1.5% transaction fee',
    target: 'Solopreneurs & Small Boutiques',
    desc: 'For emerging D2C retailers needing a professional storefront without heavy operational overhead.',
    features: [
      '1 Admin/Staff Account',
      '1 Warehouse Location',
      'Unlimited B2C Customers',
      'Up to 1,000 Products',
      'Fully hosted B2C Storefront'
    ]
  },
  {
    name: 'Professional',
    price: '₹4,999',
    period: '/ month',
    fee: '+ 1.0% transaction fee',
    target: 'Growing B2C + Basic B2B',
    desc: 'For scaling retail brands venturing into wholesale buyers with a small team.',
    features: [
      'Up to 5 Staff Accounts (RBAC)',
      'Up to 3 Warehouse Locations',
      'B2B Customer Management',
      'Inventory Transaction Ledger',
      'Automated PDF Invoicing'
    ],
    popular: true
  },
  {
    name: 'Enterprise ERP',
    price: '₹9,999',
    period: '/ month',
    fee: '+ 0.5% transaction fee',
    target: 'Complex Supply Chains',
    desc: 'For established mid-market companies needing complete control over purchasing and multi-location logistics.',
    features: [
      'Up to 25 Staff Accounts',
      'Unlimited Warehouse Locations',
      'Full Procure-to-Pay (PO, GRN)',
      'Full Order-to-Cash (RFQ, SO)',
      'Advanced Multi-Site Inventory'
    ]
  },
  {
    name: 'Platform / Unlimited',
    price: 'Custom',
    period: 'Pricing',
    fee: '0% transaction fee',
    target: 'Agencies & Franchises',
    desc: 'For massive multinational retailers or brands requiring dedicated cloud infrastructure.',
    features: [
      'Unlimited Staff & Warehouses',
      'Dedicated Database Instance',
      'White-labeled Console Frontend',
      'Custom Headless APIs',
      'Priority SLA & Account Manager'
    ]
  }
]

const plansUSD = [
  {
    name: 'Starter',
    price: '$24',
    period: '/ month',
    fee: '+ 1.5% transaction fee',
    target: 'Solopreneurs & Small Boutiques',
    desc: 'For emerging D2C retailers needing a professional storefront without heavy operational overhead.',
    features: [
      '1 Admin/Staff Account',
      '1 Warehouse Location',
      'Unlimited B2C Customers',
      'Up to 1,000 Products',
      'Fully hosted B2C Storefront'
    ]
  },
  {
    name: 'Professional',
    price: '$59',
    period: '/ month',
    fee: '+ 1.0% transaction fee',
    target: 'Growing B2C + Basic B2B',
    desc: 'For scaling retail brands venturing into wholesale buyers with a small team.',
    features: [
      'Up to 5 Staff Accounts (RBAC)',
      'Up to 3 Warehouse Locations',
      'B2B Customer Management',
      'Inventory Transaction Ledger',
      'Automated PDF Invoicing'
    ],
    popular: true
  },
  {
    name: 'Enterprise ERP',
    price: '$119',
    period: '/ month',
    fee: '+ 0.5% transaction fee',
    target: 'Complex Supply Chains',
    desc: 'For established mid-market companies needing complete control over purchasing and multi-location logistics.',
    features: [
      'Up to 25 Staff Accounts',
      'Unlimited Warehouse Locations',
      'Full Procure-to-Pay (PO, GRN)',
      'Full Order-to-Cash (RFQ, SO)',
      'Advanced Multi-Site Inventory'
    ]
  },
  {
    name: 'Platform / Unlimited',
    price: 'Custom',
    period: 'Pricing',
    fee: '0% transaction fee',
    target: 'Agencies & Franchises',
    desc: 'For massive multinational retailers or brands requiring dedicated cloud infrastructure.',
    features: [
      'Unlimited Staff & Warehouses',
      'Dedicated Database Instance',
      'White-labeled Console Frontend',
      'Custom Headless APIs',
      'Priority SLA & Account Manager'
    ]
  }
]


const featuresMatrix = [
  {
    category: 'Storefront (B2C)',
    rows: [
      { feature: 'B2C Storefront', starter: '✔️ Included', pro: '✔️ Included', enterprise: '✔️ Included', platform: '✔️ Custom Whitelabel' },
      { feature: 'Product Limits', starter: 'Up to 1,000 SKUs', pro: 'Up to 10,000 SKUs', enterprise: 'Unlimited SKUs', platform: 'Unlimited SKUs' },
    ]
  },
  {
    category: 'Wholesale (B2B)',
    rows: [
      { feature: 'B2B Wholesale Portal', starter: '❌ Not Included', pro: '✔️ Included', enterprise: '✔️ Included (Advanced)', platform: '✔️ Included' },
    ]
  },
  {
    category: 'Operations & Logistics',
    rows: [
      { feature: 'Warehouses', starter: '1 Location', pro: '3 Locations', enterprise: 'Unlimited', platform: 'Unlimited' },
      { feature: 'Inventory Ledger & GRN', starter: '❌ Basic Only', pro: '✔️ Included', enterprise: '✔️ Included', platform: '✔️ Included' },
      { feature: 'Procurement (POs)', starter: '❌ Not Included', pro: '❌ Not Included', enterprise: '✔️ Included', platform: '✔️ Auto-Procurement API' },
    ]
  },
  {
    category: 'Administration & Security',
    rows: [
      { feature: 'Staff Accounts (RBAC)', starter: '2 Users', pro: '5 Users', enterprise: '15 Users', platform: 'Unlimited' },
      { feature: 'PDF Generation', starter: 'Sales Invoices Only', pro: 'Sales + Purchase', enterprise: 'Full PDF Suite', platform: 'Custom Layouts' },
      { feature: 'Rate Limiting & DDoS', starter: 'Standard', pro: 'Standard', enterprise: 'Advanced', platform: 'Dedicated WAF' },
    ]
  }
]

export default function ProductPricing() {
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const [currency, setCurrency] = useState('INR')

  const plans = currency === 'INR' ? plansINR : plansUSD

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight text-gray-900 dark:text-slate-100 mb-4">
            Strategic Subscription Pricing
          </h2>
          <p className="text-lg text-gray-500 dark:text-slate-400 mb-6">
            LedgerCart sits perfectly between basic storefronts and expensive, clunky ERP setups. Choose the plan that fits your growth.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex bg-gray-200 dark:bg-slate-800 p-1.5 rounded-xl border border-gray-300/50 dark:border-slate-700 shadow-sm">
            <button 
              onClick={() => setCurrency('INR')} 
              className={`px-5 py-2 rounded-lg text-[14px] font-bold transition-all border-none cursor-pointer outline-none ${currency === 'INR' ? 'bg-white dark:bg-slate-700 shadow-sm text-gray-900 dark:text-white' : 'bg-transparent text-gray-500 hover:text-gray-700 dark:text-slate-400'}`}
            >
              INR (₹)
            </button>
            <button 
              onClick={() => setCurrency('USD')} 
              className={`px-5 py-2 rounded-lg text-[14px] font-bold transition-all border-none cursor-pointer outline-none ${currency === 'USD' ? 'bg-white dark:bg-slate-700 shadow-sm text-gray-900 dark:text-white' : 'bg-transparent text-gray-500 hover:text-gray-700 dark:text-slate-400'}`}
            >
              USD ($)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 border ${plan.popular ? 'border-orange-500 shadow-xl shadow-orange-500/10' : 'border-gray-200 dark:border-slate-700 shadow-sm'} transition-all hover:shadow-md`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-slate-100">{plan.price}</span>
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400">{plan.period}</span>
              </div>
              <div className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-4">{plan.fee}</div>
              <div className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-md mb-4">
                {plan.target}
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-6 h-[60px]">
                {plan.desc}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-slate-300">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Expand Comparison Toggle */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => setIsCompareOpen(!isCompareOpen)}
            className="flex items-center gap-2 text-[15px] font-bold text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition-colors cursor-pointer bg-transparent border-none outline-none py-2 px-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            View Detailed Comparison
            <span className={`transform transition-transform duration-300 text-sm ${isCompareOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
        </div>

        {/* Expandable Comparison Matrix */}
        <div className={`transition-all duration-500 ease-in-out ${isCompareOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-x-auto shadow-sm p-2 sm:p-6">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700 w-1/5"></th>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700 w-1/5 text-sm font-bold text-gray-900 dark:text-slate-100">Starter</th>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700 w-1/5 text-sm font-bold text-gray-900 dark:text-slate-100">Professional</th>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700 w-1/5 text-sm font-bold text-gray-900 dark:text-slate-100">Enterprise</th>
                  <th className="p-4 border-b border-gray-200 dark:border-slate-700 w-1/5 text-sm font-bold text-gray-900 dark:text-slate-100">Platform</th>
                </tr>
              </thead>
              <tbody>
                {featuresMatrix.map((cat, i) => (
                  <React.Fragment key={i}>
                    <tr>
                      <td colSpan={5} className="bg-gray-50 dark:bg-slate-800/50 p-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-4 border-y border-gray-200 dark:border-slate-700">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.rows.map((row, j) => (
                      <tr key={j} className="hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="p-4 border-b border-gray-100 dark:border-slate-700/50 text-sm font-medium text-gray-900 dark:text-slate-200">{row.feature}</td>
                        <td className="p-4 border-b border-gray-100 dark:border-slate-700/50 text-sm text-gray-600 dark:text-slate-400">{row.starter}</td>
                        <td className="p-4 border-b border-gray-100 dark:border-slate-700/50 text-sm text-gray-600 dark:text-slate-400">{row.pro}</td>
                        <td className="p-4 border-b border-gray-100 dark:border-slate-700/50 text-sm text-gray-600 dark:text-slate-400">{row.enterprise}</td>
                        <td className="p-4 border-b border-gray-100 dark:border-slate-700/50 text-sm text-gray-600 dark:text-slate-400">{row.platform}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="flex justify-center mt-12">
          <Link to="/contact" className="px-8 py-3 text-[16px] font-bold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-orange-600/30 no-underline shadow-md">
            Request a Demo
          </Link>
        </div>

      </div>
    </section>
  )
}

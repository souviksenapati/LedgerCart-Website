import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  { q: 'How does custom pricing work?', a: 'Because every business is unique, we create a custom quote based specifically on the modules, integrations, and services you need. We will assess your requirements and deliver a clear, predictable proposal.' },
  { q: 'How long does an ERP implementation take?', a: 'Implementation timelines vary from 4 weeks to 6 months, depending on the complexity of your current systems, required data migrations, and the custom modules you select.' },
  { q: 'Do you offer a free trial?', a: 'While we do not offer a self-serve free trial for LedgerCart ERP given its enterprise nature, we do provide extensive live demonstrations using your own data samples.' },
  { q: 'Can I purchase individual ERP modules?', a: 'Yes! LedgerCart ERP is modular by design. If you only need our Finance and HR modules to start, we will configure your system accordingly. You can scale and add modules later.' },
  { q: 'What is included in Managed IT Services?', a: 'Our Managed IT packages are comprehensive and can cover DevOps, 24/7 security monitoring, cloud migration, end-user support, and infrastructure administration.' },
  { q: 'Are there any hidden consulting fees?', a: 'No hidden fees. We believe in complete transparency. Our project proposals explicitly detail all implementation, licensing, and support costs before a contract is signed.' },
  { q: 'Is support included with the ERP?', a: 'Yes, standard support is included with every LedgerCart ERP implementation. We also offer premium 24/7 priority support with dedicated account managers for enterprise organizations.' },
  { q: 'Do you integrate with third-party tools?', a: <>Absolutely. LedgerCart ERP has a robust API, and our custom development team can integrate it with existing tools you currently use. <Link to="/contact" className="text-orange-600 hover:underline">Contact our team</Link> to discuss specific integrations.</> },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-20 bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-16 mt-12">
          <div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.5px] text-gray-900 dark:text-slate-100 mb-3.5">Frequently asked questions</h2>
            <p className="text-[15px] text-gray-500 dark:text-slate-400 leading-[1.7]">
              Can't find the answer you're looking for? Don't hesitate to get in touch with our{' '}
              <Link to="/contact" className="text-orange-600 no-underline font-semibold hover:underline">customer support</Link> team.
            </p>
          </div>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 dark:border-slate-800">
                <button
                  className="w-full flex items-center justify-between py-5 px-1 text-base font-medium text-gray-900 dark:text-slate-200 cursor-pointer hover:text-orange-600 transition-colors bg-transparent border-none text-left gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {faq.q}
                  <span className={`text-orange-600 text-lg flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-90' : ''}`}>›</span>
                </button>
                {open === i && (
                  <div className="px-1 pb-5 text-[15px] text-gray-500 dark:text-slate-400 leading-[1.7]">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

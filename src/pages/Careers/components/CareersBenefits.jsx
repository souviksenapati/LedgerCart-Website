const benefits = [
  {
    icon: '🌍',
    title: 'Remote-First Culture',
    desc: 'Work from anywhere in the world and collaborate with a global team.'
  },
  {
    icon: '🏢',
    title: 'Health & Wellness',
    desc: 'Full-suite health insurance for you and your family, plus wellness days.'
  },
  {
    icon: '📈',
    title: 'Growth Budget',
    desc: 'Annual stipend for learning, certifications, and attending conferences.'
  },
  {
    icon: '☕',
    title: 'Modern Tech Stack',
    desc: 'Build with React, AI models, and custom ERP architectures at scale.'
  },
]

export default function CareersBenefits() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-1px] text-gray-900 dark:text-slate-100 mb-12">Why join our mission?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white dark:bg-slate-900/50 p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm dark:shadow-none text-center transform transition-all hover:-translate-y-1">
              <div className="text-[40px] mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-slate-200 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-[1.6]">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

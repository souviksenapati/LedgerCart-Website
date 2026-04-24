import { useEffect } from 'react'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CtaBanner from '../../components/shared/CtaBanner'

function Section({ children, className = '', id = '' }) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="animate-[fadeInUp_0.4s_ease-out]">
        {/* Header Section */}
        <section className="pt-8 pb-16 bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-[#0a0f1a] text-center transition-colors">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 text-orange-600 dark:text-orange-400 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              About LedgerCart
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-gray-900 dark:text-slate-50 max-w-[800px] mx-auto mb-6">
              Driving enterprise success through <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">intelligent technology.</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Founded in 2021, our vision has always been to build the foundational layers that allow modern businesses to breathe and scale without friction. LedgerCart blends deep domain expertise, cutting-edge software engineering, and strategic consulting to help organizations navigate the future.
            </p>
          </div>
        </section>

        {/* Impact Stats Banner */}
        <section className="border-y border-gray-100 dark:border-slate-800 bg-white dark:bg-[#0a0f1a] transition-colors">
          <div className="max-w-[1280px] mx-auto px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 sm:divide-x divide-gray-100 dark:divide-slate-800">
              {[
                { label: 'Global Clientele', val: '500+' },
                { label: 'Platform Integrations', val: '120+' },
                { label: 'Uptime Reliability', val: '99.99%' },
              ].map((s, i) => (
                <div key={s.label} className={`text-center ${i > 0 ? 'sm:pl-8' : ''}`}>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-slate-100 mb-3">{s.val}</div>
                  <div className="text-sm font-bold text-orange-600 dark:text-orange-500 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-slate-50 mb-6 tracking-tight leading-tight">
                Empowering organizations through digital innovation.
              </h3>
            </div>
            <div className="space-y-6 text-gray-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                LedgerCart is a global IT services, consulting, and business solutions provider, empowering organizations. At the heart of everything we do is a commitment to robust engineering, scalable architecture, and user-centric design—core drivers of modern business success.
              </p>
              <p>
                Our foundation is built on diverse expertise. We specialize in delivering comprehensive technology solutions across industry verticals to spark transformation and drive growth. Every solution we design reflects precision, insight, and a commitment to solving real-world challenges.
              </p>
              <p>
                With strategic partnerships and a focus on innovation, we craft technology tailored to your goals—whether enhancing operations or unlocking new opportunities. We don’t just meet client expectations; we surpass them, cultivating long-term relationships and mutual success.
              </p>
            </div>
          </div>
        </Section>

        {/* What We Do */}
        <Section className="bg-gray-50 dark:bg-slate-900/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">What We Do</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-slate-50 mb-6 tracking-tight leading-tight">
                We bring ideas to life through advanced technology.
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  At LedgerCart, we build the digital backbone of modern businesses. At the heart of everything we do are the pillars of <strong>Custom Software, Cybersecurity, Cloud Infrastructure, and the LedgerCart ERP</strong>—the core drivers of enterprise success.
                </p>
                <p>
                  Our global team blends design, technology, and strategy to empower brands with meaningful value. We don't just fill capability gaps; we act as your trusted digital advisors. By merging engineering excellence with an absolute commitment to quality, we deliver robust solutions that drive progress and raise productivity standards.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Custom Software', icon: '💻', desc: 'Scalable applications tailored perfectly to your unique operational needs.' },
                { title: 'LedgerCart ERP', icon: '⚡', desc: 'Our flagship ecosystem connecting HR, Finance, CRM, and Operations.' },
                { title: 'Cybersecurity', icon: '🛡️', desc: 'Enterprise-grade protection ensuring your data remains secure and compliant.' },
                { title: 'Cloud & AI', icon: '☁️', desc: 'Future-ready architectures that leverage automation and machine learning.' },
              ].map(item => (
                <div key={item.title} className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 hover:border-orange-500/50 transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* We Live by Powerful Values */}
        <Section>
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">Our DNA</h2>
             <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-slate-50 tracking-tight leading-tight">
               We Live by Powerful Values
             </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Commitment to Excellence', desc: 'A relentless pursuit of perfection, driving us to consistently raise the bar and deliver superior, robust code in all our endeavors.' },
              { title: 'Leading Change', desc: 'Proactively embracing innovation, adaptability, and transformation to remain at the forefront of the ever-evolving technology landscape.' },
              { title: 'Ethics & Integrity', desc: 'The cornerstone of our organization, guiding us to maintain security-first design, absolute transparency, and principled decisions.' },
              { title: 'Customer Focus', desc: 'Our guiding principle, inspiring us to place our clients at the center of everything we do, ensuring their success remains our top priority.' },
              { title: 'People First', desc: 'We prioritize our employees\' well-being and foster a culture of belonging, knowing that great software comes from great teams.' },
              { title: 'Relentless Innovation', desc: 'We refuse to accept the status quo. We are continuously seeking broader perspectives and engineering creative solutions.' },
            ].map((v, i) => (
              <div key={v.title} className="bg-gray-50 dark:bg-slate-900/50 p-8 rounded-[24px] border border-gray-100 dark:border-slate-800/60 transition-colors">
                <div className="text-orange-500 font-black text-xl mb-4">0{i + 1}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-3">{v.title}</h4>
                <p className="text-gray-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-orange-600/5 dark:bg-orange-500/5 border border-orange-200/50 dark:border-orange-500/20 rounded-[32px] p-10 text-center relative overflow-hidden transition-colors">
            <h4 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-slate-200 relative z-10">
              Our vision is to be the <span className="font-bold text-orange-600 dark:text-orange-500">Partner of Choice</span> for all our customers, delivering best-in-class services, products, and integrations.
            </h4>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section className="bg-gray-900 text-white dark:bg-[#05080f] border-t border-slate-800 relative overflow-hidden transition-colors">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ea580c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="relative z-10">
            <div className="mb-16 md:w-2/3">
               <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">Partner With Us</h2>
               <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                 Join the businesses growing with LedgerCart
               </h3>
               <p className="text-lg text-slate-400 leading-relaxed">
                 We don't just build software. We build the foundational layers that allow modern businesses to breathe and scale without friction.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { num: '01', title: 'Domain Experience', desc: 'With deep domain expertise across industries, we deliver solutions that address your complex challenges with precision and insight.' },
                { num: '02', title: 'Technology Leadership', desc: 'Our certified experts provide cutting-edge technology, turning opportunities into strategic projects aligned with your business goals.' },
                { num: '03', title: 'Engineering Excellence', desc: 'Rooted in quality and technical precision, we deliver excellence with robust design, architecture, and uncompromising security standards.' },
                { num: '04', title: 'Strong Collaboration', desc: 'Our deeply integrated team aligns with your business, driving management, enhancement, and lasting digital innovation.' },
              ].map(item => (
                <div key={item.num} className="relative group">
                   <div className="text-5xl font-black text-slate-800 group-hover:text-orange-500/20 transition-colors absolute -top-8 -left-4 z-0 pointer-events-none">{item.num}</div>
                   <div className="relative z-10">
                     <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                     <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CtaBanner 
          title="Delivering IT Solutions That Vow Your Success"
          subtitle="Let's build the future of your enterprise together."
          primaryAction={{ text: "Get in Touch", link: "/contact" }}
          secondaryAction={{ text: "Explore Services", link: "/service" }}
          disclaimer=""
        />
      </main>

      <Footer />
    </div>
  )
}

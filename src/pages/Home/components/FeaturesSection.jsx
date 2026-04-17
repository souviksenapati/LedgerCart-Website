export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0f1a] font-sans transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-32">
        
        {/* ROW 1: Custom IT Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start md:pr-12">
            <div className="inline-block border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 text-orange-600 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-widest uppercase mb-6">
              TAILORED SOLUTIONS
            </div>
            <h2 className="text-[42px] leading-[1.1] font-light tracking-[-1.5px] text-[#1a1f36] dark:text-slate-100 mb-5">
              Custom IT Services
            </h2>
            <p className="text-[#4b5563] dark:text-slate-400 text-[15px] mb-8 font-medium">
              Focus on your business, while we manage the technology that drives it.
            </p>
            
            <div className="flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-orange-500 flex-shrink-0">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.17-6.85L18.26 7.72 16.85 6.3 10.83 12.3l-3.3-3.3-1.42 1.42 4.72 4.73z" fill="currentColor"/>
                </svg>
                <div className="text-[13px] text-[#4b5563] dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                  Public/Private
                  {/* GitHub icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 dark:text-slate-300"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  Custom Development
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-orange-500 flex-shrink-0">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.17-6.85L18.26 7.72 16.85 6.3 10.83 12.3l-3.3-3.3-1.42 1.42 4.72 4.73z" fill="currentColor"/>
                </svg>
                <div className="text-[13px] text-[#4b5563] dark:text-slate-400">
                  Cloud Architecture
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-orange-500 flex-shrink-0">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.17-6.85L18.26 7.72 16.85 6.3 10.83 12.3l-3.3-3.3-1.42 1.42 4.72 4.73z" fill="currentColor"/>
                </svg>
                <div className="text-[13px] text-[#4b5563] dark:text-slate-400 flex items-center gap-1.5 flex-wrap">
                  Enterprise Integration
                </div>
              </div>
            </div>
          </div>
          
          {/* Graphic Right */}
          <div className="relative h-[240px] flex items-center justify-center">
            {/* Grid background */}
            <div className="absolute inset-0 max-w-[340px] mx-auto opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            {/* Container with shadow and logos */}
            <div className="relative z-10 flex items-center justify-center gap-4">
              {/* Logo 1: Gatsby-like Purple G */}
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-transparent dark:border-slate-800 flex items-center justify-center flex-shrink-0 relative">
                <div className="w-9 h-9 rounded-full bg-[#663399] flex items-center justify-center text-white font-serif font-bold italic text-xl leading-none">
                  G
                </div>
                <div className="absolute -bottom-6 w-12 h-2 bg-black/5 dark:bg-black/20 blur-sm rounded-full"></div>
              </div>
              
              <div className="text-orange-500 font-bold text-xl">+</div>
              
              {/* Logo 2: Image/Seal */}
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-transparent dark:border-slate-800 flex items-center justify-center flex-shrink-0 relative">
                <span className="text-2xl">🦭</span>
                <div className="absolute -bottom-6 w-12 h-2 bg-black/5 dark:bg-black/20 blur-sm rounded-full"></div>
              </div>
            </div>
            
            {/* Subtle glow underneath */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-indigo-50/50 dark:bg-indigo-900/10 blur-3xl -z-10"></div>
          </div>
        </div>

        {/* ROW 2: Save the trouble */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Graphic Left */}
          <div className="flex flex-col gap-3.5 md:pr-12 relative items-center md:items-start pl-0 md:pl-16">
            <div className="absolute top-0 bottom-0 left-12 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-slate-800 to-transparent hidden md:block"></div>
            
            {["24/7 Cybersecurity Monitoring", "Compliance and IT audits", "Network infrastructure setup", "Cloud migration strategies", "Disaster recovery planning"].map((text, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-[8px] px-5 py-3 text-[13px] font-medium text-gray-500 dark:text-slate-400 shadow-[0_6px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_6px_16px_rgba(0,0,0,0.2)] w-max max-w-full relative z-10"
              >
                {text}
              </div>
            ))}
          </div>

          {/* Text Right */}
          <div className="flex flex-col items-center text-center md:pl-12">
            <div className="inline-block border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 text-orange-600 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-widest uppercase mb-6">
              MANAGED IT
            </div>
            <h2 className="text-[42px] leading-[1.1] font-light tracking-[-1.5px] text-[#1a1f36] dark:text-slate-100 mb-5">
              Save the trouble
            </h2>
            <p className="text-[#4b5563] dark:text-slate-400 text-[14px] leading-[1.7] max-w-[320px]">
              Say goodbye to technology-induced insomnia. Leave the heavy IT lifting to us, that's our job.
            </p>
          </div>
        </div>

        {/* ROW 3: Innovate without restrictions */}
        <div className="flex flex-col gap-12 pt-8">
          
          {/* Header */}
          <div className="flex flex-col items-start max-w-[580px]">
            <div className="inline-block border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 text-orange-600 px-2 py-0.5 rounded-[4px] text-[10px] font-bold tracking-widest uppercase mb-6">
              LEDGERCART ERP
            </div>
            <h2 className="text-[42px] leading-[1.1] font-light tracking-[-1.5px] text-[#1a1f36] dark:text-slate-100 mb-5">
              Scale without restrictions
            </h2>
            <p className="text-[#4b5563] dark:text-slate-400 text-[14px] leading-[1.7]">
              LedgerCart ERP means true freedom — no module restrictions, no hidden feature gates. Tailored specifically for your operational needs. Manage your enterprise without boundaries!
            </p>
          </div>

          {/* 5-Column Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            
            {/* Feature 1 */}
            <div className="flex flex-col">
              <div className="w-[38px] h-[38px] rounded-[10px] border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h4 className="text-[13px] font-extrabold text-[#1a1f36] dark:text-slate-200 mb-2">Unlimited users</h4>
              <p className="text-[12px] text-[#6b7280] dark:text-slate-500 leading-[1.6]">
                Scale your enterprise without per-seat licensing costs: add all your employees and let them collaborate under customized access controls.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <div className="w-[38px] h-[38px] rounded-[10px] border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h4 className="text-[13px] font-extrabold text-[#1a1f36] dark:text-slate-200 mb-2">Unified Operations</h4>
              <p className="text-[12px] text-[#6b7280] dark:text-slate-500 leading-[1.6]">
                Break down silos by bringing HR, Finance, and Supply Chain into one unified ecosystem with real-time data flow.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col">
              <div className="w-[38px] h-[38px] rounded-[10px] border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.3 16.9L16.6 12l2.7-4.9"></path><path d="M4.7 16.9L7.4 12 4.7 7.1"></path><path d="M14.1 6.3L12 2.7 9.9 6.3"></path><path d="M14.1 17.7l-2.1 3.6-2.1-3.6"></path></svg>
              </div>
              <h4 className="text-[13px] font-extrabold text-[#1a1f36] dark:text-slate-200 mb-2">Data Intelligence</h4>
              <p className="text-[12px] text-[#6b7280] dark:text-slate-500 leading-[1.6]">
                Leverage built-in analytics and AI-powered forecasting to make informed decisions faster without manual data mining.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col">
              <div className="w-[38px] h-[38px] rounded-[10px] border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path></svg>
              </div>
              <h4 className="text-[13px] font-extrabold text-[#1a1f36] dark:text-slate-200 mb-2">Seamless Integrations</h4>
              <p className="text-[12px] text-[#6b7280] dark:text-slate-500 leading-[1.6]">
                Connect LedgerCart ERP with your existing tools, payment gateways, and partner APIs with secure and scalable integrations.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col">
              <div className="w-[38px] h-[38px] rounded-[10px] border border-orange-200 dark:border-orange-900/40 bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-orange-500 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              </div>
              <h4 className="text-[13px] font-extrabold text-[#1a1f36] dark:text-slate-200 mb-2">Automated Workflows</h4>
              <p className="text-[12px] text-[#6b7280] dark:text-slate-500 leading-[1.6]">
                Reduce manual entry and human error by setting up intelligent rules that trigger automated tasks across all departments.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

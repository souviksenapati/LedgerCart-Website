import { Link } from 'react-router-dom'

/* ── LedgerCart Logo (small, for dashboard preview) ── */
const LogoSmall = () => (
  <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill="#ea580c" />
    <rect x="10" y="8" width="16" height="4" rx="1" fill="white" />
    <rect x="10" y="8" width="4" height="10" rx="1" fill="white" />
    <rect x="10" y="16" width="16" height="4" rx="1" fill="white" />
    <rect x="22" y="18" width="4" height="10" rx="1" fill="white" />
    <rect x="10" y="24" width="16" height="4" rx="1" fill="white" />
  </svg>
)

const SIDEBAR_ITEMS = [
  { icon: '⊙', label: 'Overview' },
  { icon: '🚀', label: 'Modules' },
  { icon: '≡', label: 'Activity' },
  { icon: '📊', label: 'Reports' },
  { icon: '{}', label: 'System settings' },
  { icon: '▣', label: 'Workflows', active: true },
  { icon: '💿', label: 'Storage' },
  { icon: '🌐', label: 'Integrations' },
  { icon: '⬡', label: 'API access' },
  { icon: '⬛', label: 'Developer console' },
  { icon: '👥', label: 'Access Management' },
  { icon: '⚙', label: 'Settings' },
]

/* ── LedgerCart App Dashboard Preview ─────────────────────── */
const DashboardPreview = () => (
  <div className="w-full max-w-[900px] mx-auto">
    <div
      className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden transition-colors duration-300"
      style={{
        boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.09), 0 28px 56px rgba(0,0,0,0.07)',
        border: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      {/* Title bar */}
      <div className="flex items-center h-10 bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 px-4 gap-3">
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 dark:text-slate-500 flex-1">
          <LogoSmall />
          <span className="ml-1 font-semibold text-gray-700 dark:text-slate-300">LedgerCart</span>
          <span className="text-gray-300 dark:text-slate-700">›</span>
          <span>LedgerCart</span>
          <span className="text-gray-300 dark:text-slate-700">›</span>
          <span>Finance module</span>
          <span className="text-gray-300 dark:text-slate-700">›</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            <span className="text-gray-600 dark:text-slate-400 font-semibold">erp-finance-v2</span>
          </span>
          <span className="text-gray-400 dark:text-slate-600 text-[9px] ml-0.5">✎</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300 dark:text-slate-700 text-xs">⊙ ⋯</div>
      </div>

      {/* App body */}
      <div className="flex" style={{ height: 360 }}>
        {/* Sidebar */}
        <div className="w-[196px] flex-shrink-0 border-r border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col text-[11.5px]">
          {/* Workspace switcher */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-slate-800">
            <div className="w-5 h-5 rounded bg-gray-800 dark:bg-slate-700 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">A</div>
            <span className="font-semibold text-gray-700 dark:text-slate-300 text-xs flex-1 truncate">LedgerCart</span>
            <span className="text-gray-400 dark:text-slate-600 text-[10px]">⌄</span>
          </div>

          {/* Nav items */}
          <div className="flex flex-col flex-1 px-2 py-2 gap-[2px] overflow-hidden">
            {SIDEBAR_ITEMS.map((it) => (
              <div
                key={it.label}
                className={`flex items-center gap-2 px-2 py-[5px] rounded-lg cursor-pointer transition-colors ${it.active
                  ? 'bg-orange-50 dark:bg-orange-950/40 text-orange-600 font-semibold'
                  : 'text-gray-500 dark:text-slate-500 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-800 dark:hover:text-slate-200'
                  }`}
              >
                <span className="text-[10px] w-3 text-center flex-shrink-0 leading-none">{it.icon}</span>
                <span className="truncate text-[11px]">{it.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom: help + status + user */}
          <div className="border-t border-gray-100 dark:border-slate-800 px-2 py-2 flex flex-col gap-[2px]">
            <div className="flex items-center gap-2 px-2 py-[4px] text-gray-400 dark:text-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md cursor-pointer">
              <span className="text-[10px]">?</span>
              <span className="text-[11px]">Help</span>
              <span className="text-[10px] ml-auto">›</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-[4px] rounded-md bg-green-50 dark:bg-green-900/10">
              <span className="text-green-500 text-[9px]">●</span>
              <span className="text-[11px] text-green-600 dark:text-green-500/80 font-medium">All systems operational</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-[5px] mt-0.5 rounded-md hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">J</div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-gray-700 dark:text-slate-300 truncate">John Doe</div>
                <div className="text-[9px] text-gray-400 dark:text-slate-600 truncate">info@ledgercart.in</div>
              </div>
              <span className="text-gray-300 dark:text-slate-700 text-[10px]">⋯</span>
            </div>
          </div>
        </div>

        {/* Main content: Processes view */}
        <div className="flex-1 bg-[#fafafa] dark:bg-slate-950 overflow-hidden flex flex-col">
          {/* Content header */}
          <div className="flex items-center justify-between px-5 py-3 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
            <div>
              <h3 className="text-[13px] font-semibold text-gray-900 dark:text-slate-200">Workflows</h3>
              <p className="text-[11px] text-gray-400 dark:text-slate-600">Manage your enterprise workflows</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[11px] font-semibold rounded-lg border-none cursor-pointer hover:bg-gray-800 dark:hover:bg-white">
              + Create new workflow
            </button>
          </div>

          {/* Search */}
          <div className="px-5 py-2 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-lg">
              <span className="text-gray-400 dark:text-slate-600 text-[11px]">🔍</span>
              <span className="text-[11px] text-gray-400 dark:text-slate-600">Search workflows...</span>
            </div>
          </div>

          {/* Process card */}
          <div className="px-5 py-3 flex-1 overflow-hidden">
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 dark:text-slate-600">⬡</span>
                  <span className="text-[12px] font-semibold text-gray-800 dark:text-slate-300">Automated Payroll</span>
                </div>
                <span className="text-gray-400 dark:text-slate-600 text-[12px]">⋯</span>
              </div>
              <div className="px-4 py-3 grid grid-cols-3 gap-4 text-[11px]">
                <div>
                  <div className="text-gray-400 dark:text-slate-600 mb-1 font-medium">Trigger Event</div>
                  <div className="text-gray-500 dark:text-slate-500 flex items-center gap-1">
                    <span className="text-[9px]">⬡</span> Scheduled monthly
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 dark:text-slate-600 mb-1 font-medium">Status</div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-slate-500">
                    <span className="text-amber-400 text-[9px]">○</span> Active
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 dark:text-slate-600 mb-1 font-medium">Process ID</div>
                  <div className="text-gray-500 dark:text-slate-500 truncate text-[10px]">
                    PRL-2026-04-1A... <span className="text-blue-400 cursor-pointer">⎘</span>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-3 grid grid-cols-3 gap-4 text-[11px]">
                <div>
                  <div className="text-gray-400 dark:text-slate-600 mb-1 font-medium">Allocated CPU</div>
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-slate-400">
                    <span className="px-1.5 py-0.5 bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-500/80 rounded text-[10px] font-medium border border-green-200 dark:border-green-900/30">⬡</span>
                    @ 0.3 core • 300 MS
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 dark:text-slate-600 mb-1 font-medium">Execution</div>
                  <div className="text-gray-500 dark:text-slate-500">⬡ Parallel</div>
                </div>
                <div />
              </div>
              <div className="px-4 py-2 border-t border-gray-50 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50">
                <button className="text-[11px] text-gray-400 dark:text-slate-600 hover:text-gray-600 dark:hover:text-slate-400 border-none bg-transparent cursor-pointer">
                  + Add disk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-6 pb-0 transition-colors duration-300 bg-white dark:bg-[#0a0f1a]"
    >
      <div className="max-w-[1280px] mx-auto px-6 text-center relative">


        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Welcome to LedgerCart
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(36px,5vw,56px)] font-light tracking-[-2px] leading-[1.06] text-gray-900 dark:text-slate-100 mb-5">
          Transform your business<br />with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">intelligent IT solutions</span>
        </h1>

        {/* Subtitle with LedgerCart badge */}
        <p className="text-[17px] text-gray-500 dark:text-slate-400 mx-auto mb-8 leading-[1.7]" style={{ maxWidth: 520 }}>
          <span className="inline-flex items-center px-2 py-0.5 bg-orange-50 dark:bg-orange-950/30 text-orange-600 font-semibold rounded-md border border-orange-200/60 dark:border-orange-900/20 text-[15px] mr-1">
            LedgerCart
          </span>
          is your trusted IT Service Provider.<br />
          Custom Software, Cybersecurity, and the LedgerCart ERP.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <Link to="/contact" className="px-6 py-2.5 text-[15px] font-semibold text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-orange-600/30 no-underline">
            Contact Us
          </Link>
          <Link to="/pricing" className="px-6 py-2.5 text-[15px] font-semibold text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl hover:border-gray-400 dark:hover:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all">
            Get Pricing Quote
          </Link>
        </div>

        {/* Dashboard preview */}
        <DashboardPreview />
      </div>
    </section>
  )
}

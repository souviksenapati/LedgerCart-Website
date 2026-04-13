import { useState } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div
      className="text-white text-[13px] font-medium px-6 py-[10px] flex items-center justify-center relative z-[100] tracking-[0.01em]"
      style={{ background: 'linear-gradient(90deg, #c2410c 0%, #ea580c 50%, #f97316 100%)' }}
    >
      <div className="flex items-center gap-2">
        {/* Robot icon SVG */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
          <rect x="5" y="8" width="14" height="10" rx="2" fill="white" opacity="0.9" />
          <rect x="9" y="11" width="2" height="2" rx="1" fill="#ea580c" />
          <rect x="13" y="11" width="2" height="2" rx="1" fill="#ea580c" />
          <rect x="9" y="14.5" width="6" height="1" rx="0.5" fill="#ea580c" />
          <rect x="11" y="5" width="2" height="3" rx="1" fill="white" opacity="0.9" />
          <circle cx="12" cy="5" r="1.5" fill="white" opacity="0.9" />
          <rect x="3" y="10" width="2" height="4" rx="1" fill="white" opacity="0.7" />
          <rect x="19" y="10" width="2" height="4" rx="1" fill="white" opacity="0.7" />
        </svg>
        Agentic hosting is here.{' '}
        <a href="#" className="text-white font-semibold underline hover:no-underline">
          Connect to our MCP now →
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-5 bg-transparent border-none text-white text-xl cursor-pointer opacity-80 hover:opacity-100 px-1 leading-none"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  )
}

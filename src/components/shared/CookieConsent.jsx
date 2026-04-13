import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay appearance slightly for better UX (like classic enterprise sites do)
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('ledgercart-cookie-consent')
      if (!consent) {
        setIsVisible(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('ledgercart-cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('ledgercart-cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 sm:bottom-6 left-0 sm:left-6 w-full sm:w-[380px] z-[9999] animate-[fadeInUp_0.4s_ease-out]">
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-gray-200 dark:border-slate-800 shadow-2xl p-6 sm:rounded-2xl flex flex-col gap-4">
        
        <div className="flex items-start gap-3">
          <div className="text-xl">🍪</div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-slate-100 mb-1">
              We value your privacy
            </h4>
            <p className="text-[13px] text-gray-600 dark:text-slate-400 leading-relaxed">
              We use strictly necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it. We won't set optional cookies unless you enable them.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={acceptCookies}
            className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
          >
            Accept All
          </button>
          <button 
            onClick={declineCookies}
            className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 text-xs font-bold rounded-xl transition-all"
          >
            Reject Optional
          </button>
        </div>
        
        <p className="text-[11px] text-center text-gray-400 dark:text-slate-500">
          Read more about this in our <Link to="/legal/cookies" className="text-orange-600 hover:underline">Cookie Policy</Link>.
        </p>

      </div>
    </div>
  )
}

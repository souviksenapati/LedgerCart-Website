import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import logoWebp from '../../../assets/logo.webp'
import logoDarkWebp from '../../../assets/logo_dark.webp'

export default function AdminLogin() {
  const { login } = useAuth()
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
    } catch {
      setError('Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[60vw] h-[60vw] bg-orange-100/50 dark:bg-orange-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-pulseRing" style={{ animationDuration: '8s' }} />
        <div className="absolute top-10 right-1/4 w-[50vw] h-[50vw] bg-rose-50/60 dark:bg-rose-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-pulseRing" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjUwLCAxMTUsIDIyLCAwLjA0KSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] dark:opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-[420px]">
        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <img src={logoDarkWebp} alt="LedgerCart" className="h-[48px] w-auto object-contain dark:hidden" height="48" />
          <img src={logoWebp} alt="LedgerCart" className="h-[48px] w-auto object-contain hidden dark:block" height="48" />
        </div>

        {/* Card */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur border border-gray-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Admin
            </div>
            <h1 className="text-[clamp(28px,4vw,36px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Secure</span> Portal
            </h1>
            <p className="text-gray-500 dark:text-slate-400 text-sm">Sign in with your admin credentials to continue.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ledgercart.in"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-xl text-red-600 dark:text-red-400 text-sm">
                <span>⚠</span> {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-xl font-bold text-white text-[15px] transition-all flex items-center justify-center gap-2 mt-2 ${
                loading ? 'bg-orange-500/60 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:-translate-y-px hover:shadow-orange-600/30'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Signing in…
                </>
              ) : 'Sign In →'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-500 dark:text-slate-600 text-xs mt-6">
          Restricted access — authorised personnel only.
        </p>
      </div>
    </div>
  )
}

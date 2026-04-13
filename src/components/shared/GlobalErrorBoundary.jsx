import React from 'react'

export class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("LedgerCart Error Caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#f8f9fb] dark:bg-[#0a0f1a] transition-colors duration-300">
          <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-xl">
            <div className="w-16 h-16 mx-auto bg-red-50 dark:bg-red-950/30 text-red-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-slate-100 mb-3 tracking-tight">Something went wrong.</h1>
            <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed">
              We encountered an unexpected error while loading this module. Our engineering team has been notified.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-sm"
            >
              Return Home
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

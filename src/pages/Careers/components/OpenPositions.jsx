import { useState } from 'react'
import { useCachedFetch } from '../../../hooks/useCachedFetch'

export default function OpenPositions() {
  const { data: rawJobs, loading, error } = useCachedFetch('jobs', '*', { column: 'created_at', ascending: false })
  const [expandedId, setExpandedId] = useState(null)

  // Filter out expired jobs
  const jobs = rawJobs.filter(job => {
    if (!job.expiration_date) return true
    const expDate = new Date(job.expiration_date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    expDate.setHours(0, 0, 0, 0)
    return expDate >= today
  })

  return (
    <section id="positions" className="py-32 bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <div className="max-w-[1024px] mx-auto px-6">
        <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-1px] text-gray-900 dark:text-slate-100 mb-12 text-center">Open positions</h2>
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-pulse">
                <div className="space-y-3">
                  <div className="h-5 w-48 bg-gray-200 dark:bg-slate-800 rounded-md"></div>
                  <div className="h-3 w-32 bg-gray-100 dark:bg-slate-800/50 rounded-md"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-6 w-20 bg-gray-100 dark:bg-slate-800 rounded-lg"></div>
                  <div className="h-8 w-24 bg-gray-200 dark:bg-slate-800 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-slate-400 p-12 border border-gray-100 dark:border-slate-800 rounded-2xl bg-gray-50 dark:bg-slate-900/50">
            <div className="text-4xl mb-4">🙌</div>
            <p className="font-semibold text-lg text-gray-900 dark:text-slate-100 mb-2">No open positions currently available</p>
            <p>We're not actively hiring right now, but we're always looking for great talent. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => {
              const isExpanded = expandedId === job.id;
              return (
                <div key={job.id} className={`rounded-2xl border ${isExpanded ? 'border-orange-500 shadow-xl shadow-orange-600/5' : 'border-gray-100 dark:border-slate-800'} transition-all bg-white dark:bg-slate-900 overflow-hidden`}>
                  {/* Job Header (Clickable) */}
                  <div 
                    onClick={() => setExpandedId(isExpanded ? null : job.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    <div>
                      <h3 className="text-[18px] font-bold text-gray-900 dark:text-slate-200 group-hover:text-orange-600 transition-colors mb-1">{job.title}</h3>
                      <div className="text-sm font-medium text-gray-500 dark:text-slate-400">{job.location} {job.salary ? `· ${job.salary}` : ''}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-[12px] font-bold rounded-lg tracking-wider uppercase">{job.type}</span>
                      <span className="text-slate-400 font-bold ml-2">{isExpanded ? '▲' : '▼'}</span>
                    </div>
                  </div>

                  {/* Expanded Description Area */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-50 dark:border-slate-800/50 animate-[fadeIn_0.2s_ease-out]">
                      <div className="space-y-6 text-sm text-gray-600 dark:text-slate-300">
                        {job.description && (
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-2 uppercase tracking-wide text-xs">Overview</h4>
                            <p className="whitespace-pre-wrap leading-relaxed">{job.description}</p>
                          </div>
                        )}
                        {job.responsibilities && (
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-2 uppercase tracking-wide text-xs">Responsibilities</h4>
                            <p className="whitespace-pre-wrap leading-relaxed">{job.responsibilities}</p>
                          </div>
                        )}
                        {job.requirements && (
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-slate-100 mb-2 uppercase tracking-wide text-xs">Requirements</h4>
                            <p className="whitespace-pre-wrap leading-relaxed">{job.requirements}</p>
                          </div>
                        )}
                        {!job.description && !job.responsibilities && !job.requirements && (
                          <p className="italic text-gray-400">No detailed job description provided.</p>
                        )}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
                        <a 
                          href="#apply"
                          onClick={() => setTimeout(() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }), 50)}
                          className="inline-flex px-8 py-3 rounded-xl bg-orange-600 text-white text-[13px] font-bold hover:bg-orange-700 transition-colors shadow-sm"
                        >
                          Fill Application Form ↓
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

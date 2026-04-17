import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { useAuth } from '../../../context/AuthContext'
import StatsCard from './StatsCard'

const STATUSES = ['new', 'reviewing', 'shortlisted', 'interview', 'offer', 'rejected']

const STATUS_CONFIG = {
  new:         { label: 'New',          color: 'bg-blue-100  dark:bg-blue-950/40  text-blue-600  dark:text-blue-400'  },
  reviewing:   { label: 'In Review',    color: 'bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400' },
  shortlisted: { label: 'Shortlisted', color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400' },
  interview:   { label: 'Interview',   color: 'bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400' },
  offer:       { label: 'Offer Made',  color: 'bg-green-100 dark:bg-green-950/40 text-green-600  dark:text-green-400'  },
  rejected:    { label: 'Rejected',    color: 'bg-red-100   dark:bg-red-950/40   text-red-600   dark:text-red-400'    },
}

function timeAgo(ts) {
  if (!ts) return '—'
  const d = new Date(ts)
  const diff = Math.floor((Date.now() - d) / 1000)
  if (diff < 60) return 'Just now'
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
  return `${Math.floor(diff / 86400)}d ago`
}

function ApplicationRow({ app, onUpdate }) {
  const [expanded, setExpanded] = useState(false)
  const [status,   setStatus]   = useState(app.status || 'new')
  const [notes,    setNotes]    = useState(app.notes  || '')
  const [saving,   setSaving]   = useState(false)

  const saveChanges = async () => {
    setSaving(true)
    try {
      await supabase.from('applications').update({
        status, notes
      }).eq('id', app.id)
      onUpdate(app.id, { status, notes })
    } catch (err) { console.error(err) }
    setSaving(false)
  }

  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.new

  return (
    <>
      <tr className="border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer" onClick={() => setExpanded(v => !v)}>
        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-slate-100 whitespace-nowrap">
          {app.full_name}
        </td>
        <td className="px-4 py-3 text-sm text-gray-600 dark:text-slate-300 whitespace-nowrap">{app.position}</td>
        <td className="px-4 py-3 text-sm text-gray-500 dark:text-slate-400 whitespace-nowrap">{app.experience}</td>
        <td className="px-4 py-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${cfg.color}`}>{cfg.label}</span>
        </td>
        <td className="px-4 py-3 text-xs text-gray-400 dark:text-slate-500 whitespace-nowrap">{timeAgo(app.submitted_at)}</td>
        <td className="px-4 py-3 text-xs text-gray-400 dark:text-slate-500 whitespace-nowrap">{app.availability}</td>
        <td className="px-4 py-3 text-right text-slate-400 text-sm">{expanded ? '▲' : '▼'}</td>
      </tr>

      {expanded && (
        <tr className="bg-gray-50 dark:bg-slate-800/30 border-b border-gray-100 dark:border-slate-800">
          <td colSpan={7} className="px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Contact + Links */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500">Contact</h4>
                <div className="space-y-1.5 text-sm">
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">Email:</span>
                    <a href={`mailto:${app.email}`} className="text-orange-600 hover:underline">{app.email}</a></div>
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">Phone:</span>
                    <span className="text-gray-700 dark:text-slate-300">{app.phone || '—'}</span></div>
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">LinkedIn:</span>
                    {app.linkedin ? <a href={app.linkedin} target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">View Profile ↗</a> : '—'}</div>
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">Portfolio:</span>
                    {app.portfolio ? <a href={app.portfolio} target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">View ↗</a> : '—'}</div>
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">CV:</span>
                    {app.cv_url
                      ? <a href={app.cv_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors no-underline">↓ Download CV</a>
                      : <span className="text-gray-400 dark:text-slate-500">Not uploaded</span>}</div>
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">Current:</span>
                    <span className="text-gray-700 dark:text-slate-300">{app.current_ctc || '—'}</span></div>
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">Expected:</span>
                    <span className="text-gray-700 dark:text-slate-300">{app.expected_ctc || '—'}</span></div>
                </div>

                {app.cover_letter && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Cover Letter</h4>
                    <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-4 whitespace-pre-wrap">{app.cover_letter}</p>
                  </div>
                )}
              </div>

              {/* Right: Status + Notes */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Update Status</h4>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  >
                    {STATUSES.map(s => (
                      <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Internal Notes</h4>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    rows={4}
                    placeholder="Add notes about this candidate..."
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-y placeholder-gray-400 dark:placeholder-slate-600"
                  />
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); saveChanges() }}
                  disabled={saving}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl transition-all disabled:opacity-60"
                >
                  {saving ? 'Saving…' : '✓ Save Changes'}
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default function HRDashboard() {
  const { userName: _userName, logout: _logout } = useAuth()
  const [applications, setApplications] = useState([])
  const [loading, setLoading]           = useState(true)
  const [search,  setSearch]            = useState('')
  const [filterPos, setFilterPos]       = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data, error } = await supabase.from('applications').select('*').order('submitted_at', { ascending: false })
        if (error) console.error(error)
        if (data) setApplications(data)
      } catch (err) { 
        console.error(err) 
      } finally {
        setLoading(false)
      }
    }
    fetchApplications()
  }, [])

  const handleUpdate = (id, changes) =>
    setApplications(prev => prev.map(a => a.id === id ? { ...a, ...changes } : a))

  // Unique positions for filter
  const positions = ['all', ...new Set(applications.map(a => a.position).filter(Boolean))]

  const filtered = applications.filter(a => {
    const q = search.toLowerCase()
    const matchSearch = !q || a.full_name?.toLowerCase().includes(q) || a.email?.toLowerCase().includes(q) || a.position?.toLowerCase().includes(q)
    const matchPos    = filterPos    === 'all' || a.position === filterPos
    const matchStatus = filterStatus === 'all' || a.status   === filterStatus
    return matchSearch && matchPos && matchStatus
  })

  // Stats
  const total       = applications.length
  const byStatus    = (s) => applications.filter(a => a.status === s).length

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-[#0a0f1a] transition-colors duration-300">

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            HR PORTAL
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Applications</span> Dashboard
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-[15px]">Manage and track all career applications in one place.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <StatsCard icon="📥" label="Total"       value={total}                color="slate"  />
          <StatsCard icon="🆕" label="New"         value={byStatus('new')}      color="blue"   />
          <StatsCard icon="🔍" label="In Review"   value={byStatus('reviewing')} color="orange" />
          <StatsCard icon="⭐" label="Shortlisted" value={byStatus('shortlisted')} color="purple" />
          <StatsCard icon="📅" label="Interview"   value={byStatus('interview')} color="orange" />
          <StatsCard icon="✅" label="Offer Made"  value={byStatus('offer')}    color="green"  />
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search by name, email, or position…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder-gray-400 dark:placeholder-slate-600"
            />
          </div>
          <select value={filterPos} onChange={(e) => setFilterPos(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 text-sm outline-none focus:border-orange-500 transition-all">
            {positions.map(p => <option key={p} value={p}>{p === 'all' ? 'All Positions' : p}</option>)}
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 text-sm outline-none focus:border-orange-500 transition-all">
            <option value="all">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
          </select>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="flex flex-col animate-pulse">
              {/* Header skeleton */}
              <div className="h-12 border-b border-gray-100 dark:border-slate-800 bg-gray-50/60 dark:bg-slate-800/40"></div>
              {/* Row skeletons */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-slate-800">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-4 w-16 bg-gray-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-4 w-20 bg-gray-100 dark:bg-slate-800/50 rounded"></div>
                  <div className="h-4 w-8 bg-gray-100 dark:bg-slate-800/50 rounded"></div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-slate-500">
              <div className="text-4xl mb-3">📭</div>
              <p className="font-semibold">No applications found</p>
              <p className="text-sm mt-1">{applications.length === 0 ? 'Applications will appear here once candidates submit.' : 'Try adjusting your search or filters.'}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-slate-800 bg-gray-50/60 dark:bg-slate-800/40">
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Applicant</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Position</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Experience</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Status</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Applied</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Availability</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(app => (
                    <ApplicationRow key={app.id} app={app} onUpdate={handleUpdate} />
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 border-t border-gray-100 dark:border-slate-800 text-xs text-gray-400 dark:text-slate-500">
                Showing {filtered.length} of {total} applications
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

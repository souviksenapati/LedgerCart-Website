import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { useAuth } from '../../../context/AuthContext'
import StatsCard from './StatsCard'

const STAGES = ['new', 'contacted', 'qualified', 'demo', 'proposal', 'won', 'lost']

const STAGE_CONFIG = {
  new:       { label: 'New Lead',      color: 'bg-blue-100  dark:bg-blue-950/40  text-blue-600  dark:text-blue-400'   },
  contacted: { label: 'Contacted',     color: 'bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400' },
  qualified: { label: 'Qualified',     color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400' },
  demo:      { label: 'Demo Booked',   color: 'bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400' },
  proposal:  { label: 'Proposal Sent', color: 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400' },
  won:       { label: 'Won ✓',         color: 'bg-green-100 dark:bg-green-950/40 text-green-600  dark:text-green-400'  },
  lost:      { label: 'Lost',          color: 'bg-red-100   dark:bg-red-950/40   text-red-600   dark:text-red-400'    },
}

const PRIORITY_CONFIG = {
  high:   { label: '🔴 High',   color: 'bg-red-100   dark:bg-red-950/30   text-red-600   dark:text-red-400'   },
  medium: { label: '🟡 Medium', color: 'bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-400' },
  low:    { label: '🟢 Low',    color: 'bg-green-100 dark:bg-green-950/30 text-green-600  dark:text-green-400' },
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

function EnquiryRow({ enq, onUpdate }) {
  const [expanded, setExpanded] = useState(false)
  const [stage,    setStage]    = useState(enq.status   || 'new')
  const [priority, setPriority] = useState(enq.priority || 'medium')
  const [value,    setValue]    = useState(enq.estimated_value || '')
  const [followUp, setFollowUp] = useState(enq.follow_up_date  || '')
  const [notes,    setNotes]    = useState(enq.notes    || '')
  const [saving,   setSaving]   = useState(false)

  const saveChanges = async () => {
    setSaving(true)
    try {
      await supabase.from('enquiries').update({
        status: stage, priority, estimated_value: value,
        follow_up_date: followUp, notes
      }).eq('id', enq.id)
      onUpdate(enq.id, { status: stage, priority, estimated_value: value, follow_up_date: followUp, notes })
    } catch (err) { console.error(err) }
    setSaving(false)
  }

  const stageCfg    = STAGE_CONFIG[stage]    || STAGE_CONFIG.new
  const priorityCfg = PRIORITY_CONFIG[priority] || PRIORITY_CONFIG.medium

  return (
    <>
      <tr className="border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer" onClick={() => setExpanded(v => !v)}>
        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-slate-100 whitespace-nowrap">{enq.full_name}</td>
        <td className="px-4 py-3 text-sm text-gray-600 dark:text-slate-300 whitespace-nowrap">{enq.company || '—'}</td>
        <td className="px-4 py-3 text-sm text-gray-500 dark:text-slate-400">{enq.service_interest}</td>
        <td className="px-4 py-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${stageCfg.color}`}>{stageCfg.label}</span>
        </td>
        <td className="px-4 py-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${priorityCfg.color}`}>{priorityCfg.label}</span>
        </td>
        <td className="px-4 py-3 text-sm font-semibold text-gray-700 dark:text-slate-300">{value || '—'}</td>
        <td className="px-4 py-3 text-xs text-gray-400 dark:text-slate-500 whitespace-nowrap">{timeAgo(enq.submitted_at)}</td>
        <td className="px-4 py-3 text-right text-slate-400 text-sm">{expanded ? '▲' : '▼'}</td>
      </tr>

      {expanded && (
        <tr className="bg-gray-50 dark:bg-slate-800/30 border-b border-gray-100 dark:border-slate-800">
          <td colSpan={8} className="px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500">Contact Info</h4>
                <div className="space-y-1.5 text-sm">
                  <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">Email:</span>
                    <a href={`mailto:${enq.email}`} className="text-orange-600 hover:underline">{enq.email}</a></div>
                  {enq.attachment_url && (
                    <div><span className="text-gray-400 dark:text-slate-500 w-20 inline-block">File:</span>
                      <a href={enq.attachment_url} target="_blank" rel="noreferrer" className="text-orange-600 hover:underline">View Attachment ↗</a></div>
                  )}
                </div>

                <div className="mt-4">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Project Details</h4>
                  <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-4 whitespace-pre-wrap">
                    {enq.project_details || 'No details provided.'}
                  </p>
                </div>
              </div>

              {/* Right: CRM Controls */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Lead Stage</h4>
                    <select value={stage} onChange={(e) => setStage(e.target.value)} onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all">
                      {STAGES.map(s => <option key={s} value={s}>{STAGE_CONFIG[s].label}</option>)}
                    </select>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Priority</h4>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)} onClick={(e) => e.stopPropagation()}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all">
                      <option value="high">🔴 High</option>
                      <option value="medium">🟡 Medium</option>
                      <option value="low">🟢 Low</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Est. Deal Value</h4>
                    <input value={value} onChange={(e) => setValue(e.target.value)} onClick={(e) => e.stopPropagation()}
                      placeholder="e.g. $25,000" type="text"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all placeholder-gray-400 dark:placeholder-slate-600"/>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Follow-up Date</h4>
                    <input value={followUp} onChange={(e) => setFollowUp(e.target.value)} onClick={(e) => e.stopPropagation()}
                      type="date"
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all"/>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-slate-500 mb-2">Sales Notes</h4>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} onClick={(e) => e.stopPropagation()}
                    rows={3} placeholder="Add CRM notes, call summaries, next steps…"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all resize-y placeholder-gray-400 dark:placeholder-slate-600"/>
                </div>

                <button onClick={(e) => { e.stopPropagation(); saveChanges() }} disabled={saving}
                  className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl transition-all disabled:opacity-60">
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

export default function SalesDashboard() {
  const { userName: _userName, logout: _logout } = useAuth()
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading]     = useState(true)
  const [search, setSearch]       = useState('')
  const [filterService, setFilterService] = useState('all')
  const [filterStage,   setFilterStage]   = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const { data, error } = await supabase.from('enquiries').select('*').order('submitted_at', { ascending: false }).limit(200)
        if (error) console.error(error)
        if (data) setEnquiries(data)
      } catch (err) { 
        console.error(err) 
      } finally {
        setLoading(false)
      }
    }
    fetchEnquiries()
  }, [])

  const handleUpdate = (id, changes) =>
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, ...changes } : e))

  const services = ['all', ...new Set(enquiries.map(e => e.service_interest).filter(Boolean))]

  const filtered = enquiries.filter(e => {
    const q = search.toLowerCase()
    const matchSearch  = !q || e.full_name?.toLowerCase().includes(q) || e.email?.toLowerCase().includes(q) || e.company?.toLowerCase().includes(q)
    const matchService = filterService  === 'all' || e.service_interest === filterService
    const matchStage   = filterStage    === 'all' || e.status   === filterStage
    const matchPriority= filterPriority === 'all' || e.priority === filterPriority
    return matchSearch && matchService && matchStage && matchPriority
  })

  const total  = enquiries.length
  const byStage = (s) => enquiries.filter(e => e.status === s).length
  const hot    = enquiries.filter(e => e.status === 'new' || e.priority === 'high').length

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-[#0a0f1a] transition-colors duration-300">

      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            SALES PORTAL
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Enquiries</span> & Leads
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-[15px]">Track and manage all incoming business enquiries.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <StatsCard icon="📥" label="Total"          value={total}                  color="slate"  />
          <StatsCard icon="🔥" label="Hot Leads"      value={hot}                    color="red"    />
          <StatsCard icon="💬" label="In Discussion"  value={byStage('qualified')}   color="purple" />
          <StatsCard icon="📄" label="Proposal Sent"  value={byStage('proposal')}    color="blue"   />
          <StatsCard icon="🏆" label="Won"            value={byStage('won')}         color="green"  />
          <StatsCard icon="❌" label="Lost"           value={byStage('lost')}        color="slate"  />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 text-sm">🔍</span>
            <input type="text" placeholder="Search by name, company, or email…" value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder-gray-400 dark:placeholder-slate-600" />
          </div>
          <select value={filterService} onChange={(e) => setFilterService(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 text-sm outline-none focus:border-orange-500 transition-all">
            {services.map(s => <option key={s} value={s}>{s === 'all' ? 'All Services' : s}</option>)}
          </select>
          <select value={filterStage} onChange={(e) => setFilterStage(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 text-sm outline-none focus:border-orange-500 transition-all">
            <option value="all">All Stages</option>
            {STAGES.map(s => <option key={s} value={s}>{STAGE_CONFIG[s].label}</option>)}
          </select>
          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 text-sm outline-none focus:border-orange-500 transition-all">
            <option value="all">All Priorities</option>
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="flex flex-col animate-pulse">
              <div className="h-12 border-b border-gray-100 dark:border-slate-800 bg-gray-50/60 dark:bg-slate-800/40"></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-slate-800">
                  <div className="h-4 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-4 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                  <div className="h-4 w-24 bg-gray-200 dark:bg-slate-800 rounded hidden md:block"></div>
                  <div className="h-4 w-20 bg-gray-100 dark:bg-slate-800/50 rounded"></div>
                  <div className="h-4 w-20 bg-gray-100 dark:bg-slate-800/50 rounded hidden sm:block"></div>
                  <div className="h-4 w-24 bg-gray-100 dark:bg-slate-800/50 rounded"></div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-slate-500">
              <div className="text-4xl mb-3">📭</div>
              <p className="font-semibold">No enquiries found</p>
              <p className="text-sm mt-1">{enquiries.length === 0 ? 'Enquiries will appear here once businesses submit the contact form.' : 'Try adjusting your search or filters.'}</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-slate-800 bg-gray-50/60 dark:bg-slate-800/40">
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Contact</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Company</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Service</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Stage</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Priority</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Est. Value</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase">Received</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-wider text-gray-400 dark:text-slate-500 uppercase"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(enq => (
                    <EnquiryRow key={enq.id} enq={enq} onUpdate={handleUpdate} />
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 border-t border-gray-100 dark:border-slate-800 text-xs text-gray-400 dark:text-slate-500">
                Showing {filtered.length} of {total} enquiries
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

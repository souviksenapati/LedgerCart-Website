import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { useAuth } from '../../../context/AuthContext'

export default function HRJobManagement() {
  const { role: _role, userName: _userName } = useAuth()
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  // Job Form State
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Full-time')
  const [salary, setSalary] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [description, setDescription] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [requirements, setRequirements] = useState('')
  
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false })
        
      if (!error && data) {
        setJobs(data)
      } else if (error) {
        console.error(error)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddJob = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')

    try {
      const newJob = {
        title,
        location,
        type,
        salary,
        description,
        responsibilities,
        requirements,
        expiration_date: expirationDate || null,
      }

      const { data, error: dbError } = await supabase
        .from('jobs')
        .insert([newJob])
        .select() // Return the created row so we get its assigned UUID

      if (dbError) throw dbError

      // Optimistic Update
      if (data && data.length > 0) {
        setJobs([data[0], ...jobs])
      }
      
      // Clear form
      setTitle('')
      setLocation('')
      setType('Full-time')
      setSalary('')
      setExpirationDate('')
      setDescription('')
      setResponsibilities('')
      setRequirements('')
      setMessage('Job posting created successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setError(err.message || 'Failed to create job posting.')
    }
    setSaving(false)
  }

  const handleDelete = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job posting? Candidates will no longer be able to see or apply to it.')) return
    
    try {
      const { error: dbError } = await supabase.from('jobs').delete().eq('id', jobId)
      if (dbError) throw dbError
      
      setJobs(jobs.filter(j => j.id !== jobId))
    } catch (err) {
      alert("Failed to delete job: " + err.message)
    }
  }

  const isExpired = (expDateStr) => {
    if (!expDateStr) return false
    return new Date(expDateStr) < new Date()
  }

  return (
    <div className="p-8 pb-32">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          RECRUITMENT
        </div>
        <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Job</span> Postings
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-[15px]">Create dynamic job openings that appear on the public careers page. Set auto-expiration timelines.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Create Job Form */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm sticky top-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-6 flex items-center gap-2"><span>✨</span> Post New Opening</h2>
            
            <form onSubmit={handleAddJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Job Title</label>
                <input type="text" required value={title} onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Senior ERP Platform Developer"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Location</label>
                  <input type="text" required value={location} onChange={e => setLocation(e.target.value)}
                    placeholder="e.g. Remote"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Type</label>
                  <select value={type} onChange={e => setType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all">
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Salary Range</label>
                  <input type="text" value={salary} onChange={e => setSalary(e.target.value)}
                    placeholder="e.g. £60k - £80k"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest mb-1.5 flex items-center gap-1 group relative">
                    Auto-Expire
                    {/* Tooltip trigger */}
                    <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] cursor-help">?</div>
                    <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bottom-full left-0 mb-2 w-48 bg-slate-800 text-white text-[10px] p-2 rounded-lg z-10 shadow-lg">
                      Job will auto-hide from public site at end of day selected. Leave empty to keep active indefinitely.
                    </div>
                  </label>
                  <input type="date" value={expirationDate} onChange={e => setExpirationDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Job Overview / Description</label>
                <textarea rows={3} value={description} onChange={e => setDescription(e.target.value)}
                  placeholder="Provide a brief overview of the role and team..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all resize-y" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Key Responsibilities</label>
                <textarea rows={4} value={responsibilities} onChange={e => setResponsibilities(e.target.value)}
                  placeholder="List daily tasks and responsibilities (use dashes for bullets)..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all resize-y" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">Requirements & Qualifications</label>
                <textarea rows={4} value={requirements} onChange={e => setRequirements(e.target.value)}
                  placeholder="List required skills, experience, and education (use dashes for bullets)..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all resize-y" />
              </div>


              {error && <div className="text-red-500 text-xs bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}
              {message && <div className="text-green-600 text-xs bg-green-50 p-3 rounded-lg border border-green-100">{message}</div>}

              <button type="submit" disabled={saving}
                className="w-full mt-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition-all disabled:opacity-50">
                {saving ? 'Publishing...' : 'Publish Job Opening'}
              </button>
            </form>
          </div>
        </div>

        {/* Existing Jobs List */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100">📋 All Job Postings</h2>
            </div>

            {loading ? (
              <div className="flex flex-col animate-pulse">
                <div className="h-12 border-b border-gray-100 dark:border-slate-800 bg-gray-50/60 dark:bg-slate-800/40"></div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-slate-800">
                    <div className="flex flex-col gap-2">
                      <div className="h-5 w-48 bg-gray-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-3 w-24 bg-gray-100 dark:bg-slate-800/50 rounded"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="h-4 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-3 w-20 bg-gray-100 dark:bg-slate-800/50 rounded"></div>
                    </div>
                    <div className="h-6 w-24 bg-green-100 dark:bg-green-900/20 rounded-lg"></div>
                    <div className="h-6 w-16 bg-gray-100 dark:bg-slate-800/50 rounded-lg"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 dark:bg-slate-800/40">
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest min-w-[200px]">Role</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Location / Type</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest whitespace-nowrap">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right whitespace-nowrap">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => {
                      const expired = isExpired(job.expiration_date)
                      return (
                        <tr key={job.id} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-semibold text-gray-900 dark:text-slate-100">{job.title}</div>
                            {job.salary && <div className="text-xs text-gray-500 dark:text-slate-400 mt-0.5">💰 {job.salary}</div>}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-700 dark:text-slate-300">{job.location}</div>
                            <div className="text-xs text-gray-400 dark:text-slate-500 mt-0.5">{job.type}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {expired ? (
                              <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700">Archived/Expired</span>
                            ) : (
                              <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-green-100 text-green-700">Active</span>
                            )}
                            {job.expiration_date && !expired && <div className="text-[10px] text-gray-400 mt-1">Exp: {new Date(job.expiration_date).toLocaleDateString()}</div>}
                          </td>
                          <td className="px-6 py-4 text-right whitespace-nowrap">
                            <button onClick={() => handleDelete(job.id)} className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors border border-transparent hover:border-red-100">
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                    {jobs.length === 0 && (
                      <tr className="border-t border-gray-100"><td colSpan={4} className="px-6 py-12 text-center text-gray-400">No job postings available. Create one to get started!</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

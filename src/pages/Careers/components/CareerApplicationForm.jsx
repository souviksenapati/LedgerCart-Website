import { useState, useRef, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { useCachedFetch } from '../../../hooks/useCachedFetch'

const EXPERIENCE_LEVELS = [
  '0–1 years (Junior)',
  '1–3 years (Mid-level)',
  '3–5 years (Senior)',
  '5–8 years (Lead)',
  '8+ years (Principal / Architect)',
]

const AVAILABILITY = [
  'Immediately',
  'Within 2 weeks',
  'Within 1 month',
  'Within 3 months',
  'Currently employed — open to offers',
]

const MAX_FILE_SIZE = 15 * 1024 * 1024 // 15MB

export default function CareerApplicationForm() {
  const [resume, setResume]               = useState(null)
  const [fileError, setFileError]         = useState('')
  const [isDragOver, setIsDragOver]       = useState(false)
  const [isUploading, setIsUploading]     = useState(false)
  const [isSubmitting, setIsSubmitting]   = useState(false)
  const [isSuccess, setIsSuccess]         = useState(false)
  const [submitError, setSubmitError]     = useState('')
  const [activeJobs, setActiveJobs]       = useState([])
  const fileInputRef = useRef(null)
  const formRef      = useRef(null)

  const [mountTime] = useState(Date.now())
  
  // Use our new ultra-fast cached fetch
  const { data: rawJobs } = useCachedFetch('jobs', 'title, expiration_date')

  useEffect(() => {
    if (rawJobs && rawJobs.length > 0) {
      const validJobs = rawJobs.filter(job => {
        if (!job.expiration_date) return true
        const expDate = new Date(job.expiration_date)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        expDate.setHours(0, 0, 0, 0)
        return expDate >= today
      })
      const uniqueTitles = [...new Set(validJobs.map(j => j.title))]
      setActiveJobs(uniqueTitles.sort())
    }
  }, [rawJobs])

  const handleFile = (f) => {
    setFileError('')
    if (!f) return
    const allowed = ['application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(f.type)) {
      setFileError('Only PDF, DOC, or DOCX files are accepted.')
      return
    }
    if (f.size > MAX_FILE_SIZE) {
      setFileError('File must be under 15 MB.')
      return
    }
    setResume(f)
  }

  const onDrop = (e) => {
    e.preventDefault(); setIsDragOver(false)
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0])
  }

  const uploadCV = async (file, applicationId) => {
    setIsUploading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `${applicationId}-${Math.random().toString(36).substring(2)}.${fileExt}`
    
    const { error: uploadError } = await supabase.storage.from('cvs').upload(fileName, file)
    
    setIsUploading(false)
    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase.storage.from('cvs').getPublicUrl(fileName)
    return { url: publicUrl, name: file.name }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    const formData = new FormData(e.target)

    // Security: Bots fill hidden fields
    const honeypot = formData.get('bot_field_honey')
    if (honeypot) {
      console.warn("Suspicious activity intercepted.")
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)
      setIsSubmitting(false)
      return
    }

    // Security: Time-based lock (bots fill forms in under 3 seconds)
    if (Date.now() - mountTime < 3000) {
      setSubmitError('You filled out the form too quickly. Please try again.')
      setIsSubmitting(false)
      return
    }

    try {
      // Step 1: Create application doc to get ID
      const { data, error: dbError } = await supabase.from('applications').insert([{
        full_name:    formData.get('fullName'),
        email:        formData.get('email'),
        phone:        formData.get('phone') || '',
        linkedin:     formData.get('linkedin') || '',
        position:     formData.get('position'),
        experience:   formData.get('experience'),
        availability: formData.get('availability'),
        portfolio:    formData.get('portfolio') || '',
        cover_letter: formData.get('coverLetter') || '',
        current_ctc:  formData.get('currentCTC') || '',
        expected_ctc: formData.get('expectedCTC') || '',
      }]).select()

      if (dbError) throw dbError
      const docId = data[0].id

      // Step 2: Upload CV if provided
      if (resume) {
        const { url, name: _name } = await uploadCV(resume, docId)
        await supabase.from('applications').update({
          cv_url: url,
          // cv_file_name if we added it to schema, omitting for now
        }).eq('id', docId)
      }

      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setResume(null)
        formRef.current?.reset()
      }, 5000)

    } catch (err) {
      console.error('Submission error:', err)
      setSubmitError('Something went wrong. Please check your network and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder-gray-400 dark:placeholder-slate-600 text-[15px]'
  const labelCls = 'block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2'

  return (
    <section id="apply" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-orange-600 mb-3">Apply Now</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-1px] text-gray-900 dark:text-slate-100 mb-4">
            Submit your application
          </h2>
          <p className="text-[15px] text-gray-500 dark:text-slate-400 max-w-[520px] mx-auto leading-[1.7]">
            Ready to join the team? Fill in the details below and attach your CV.
            We review every application carefully and will be in touch soon.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8 md:p-10 transition-colors duration-300 animate-[fadeInUp_0.4s_ease-out]">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
          
            {/* INVISIBLE SECURITY HONEYPOT */}
            <div className="opacity-0 absolute -z-50 h-0 w-0 overflow-hidden pointer-events-none" aria-hidden="true" tabIndex="-1">
              <label htmlFor="bot_field_honey">Please leave this field empty</label>
              <input type="text" name="bot_field_honey" id="bot_field_honey" autoComplete="off" tabIndex="-1" />
            </div>

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Full Name <span className="text-orange-500">*</span></label>
                <input required name="fullName" type="text" placeholder="Jane Smith" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Email Address <span className="text-orange-500">*</span></label>
                <input required name="email" type="email" placeholder="candidate@ledgercart.in" className={inputCls} />
              </div>
            </div>

            {/* Row 2: Phone + LinkedIn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Phone Number</label>
                <input name="phone" type="tel" placeholder="+1 555 000 0000" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>LinkedIn Profile</label>
                <input name="linkedin" type="url" placeholder="https://linkedin.com/in/yourname" className={inputCls} />
              </div>
            </div>

            {/* Row 3: Position + Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Position Applying For <span className="text-orange-500">*</span></label>
                <select required name="position" defaultValue="" className={inputCls}>
                  <option value="" disabled>Select a role</option>
                  {activeJobs.map(p => <option key={p} value={p}>{p}</option>)}
                  <option value="Other / Open Application">Other / Open Application</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Years of Experience <span className="text-orange-500">*</span></label>
                <select required name="experience" defaultValue="" className={inputCls}>
                  <option value="" disabled>Select level</option>
                  {EXPERIENCE_LEVELS.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
            </div>

            {/* Row 4: Availability + Portfolio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Availability <span className="text-orange-500">*</span></label>
                <select required name="availability" defaultValue="" className={inputCls}>
                  <option value="" disabled>When can you start?</option>
                  {AVAILABILITY.map(a => <option key={a}>{a}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Portfolio / GitHub URL</label>
                <input name="portfolio" type="url" placeholder="https://github.com/yourprofile" className={inputCls} />
              </div>
            </div>

            {/* CV Upload */}
            <div>
              <label className={labelCls}>
                CV / Resume
                <span className="text-gray-400 dark:text-slate-500 font-normal ml-1">(PDF, DOC, DOCX · max 15 MB)</span>
              </label>
              <div
                className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer select-none ${
                  isDragOver ? 'border-orange-500 bg-orange-50 dark:bg-orange-950/20'
                  : 'border-gray-300 dark:border-slate-700 hover:border-orange-400 bg-gray-50 dark:bg-slate-900/60'
                }`}
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
                onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false) }}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input type="file" className="hidden" ref={fileInputRef} accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFile(e.target.files?.[0])} />

                {!resume ? (
                  <>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${isDragOver ? 'bg-orange-100 dark:bg-orange-950/40' : 'bg-gray-100 dark:bg-slate-800'}`}>
                      <svg className={`w-6 h-6 transition-colors ${isDragOver ? 'text-orange-500' : 'text-gray-400 dark:text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Click to upload or drag & drop your CV</p>
                    <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">PDF, DOC, DOCX up to 15 MB</p>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">{resume.name}</p>
                    <p className="text-xs text-gray-400 dark:text-slate-500">{(resume.size / (1024 * 1024)).toFixed(2)} MB</p>
                    {isUploading && <p className="text-[10px] text-orange-500 animate-pulse font-bold mt-1">UPLOADING TO SECURE STORAGE...</p>}
                    <button type="button" onClick={(e) => { e.stopPropagation(); setResume(null) }}
                      className="text-xs text-red-500 hover:text-red-700 font-medium mt-1 transition-colors">
                      × Remove file
                    </button>
                  </div>
                )}
              </div>
              {fileError && <p className="text-xs text-red-500 mt-1.5">{fileError}</p>}
            </div>

            {/* Cover Letter */}
            <div>
              <label className={labelCls}>
                Cover Letter / Why LedgerCart?
                <span className="text-gray-400 dark:text-slate-500 font-normal ml-1">(Optional)</span>
              </label>
              <textarea name="coverLetter" rows="5"
                placeholder="Tell us about yourself, your motivation to join LedgerCart, and what makes you a great fit..."
                className={`${inputCls} resize-y`} />
            </div>

            {/* CTC */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Current CTC / Salary</label>
                <input name="currentCTC" type="text" placeholder="e.g. $80,000 / year or 12 LPA" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Expected CTC / Salary</label>
                <input name="expectedCTC" type="text" placeholder="e.g. $100,000 / year or 18 LPA" className={inputCls} />
              </div>
            </div>

            {/* Error message */}
            {submitError && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl text-sm text-red-600 dark:text-red-400">
                {submitError}
              </div>
            )}

            {/* Submit */}
            <div className="pt-1">
              <button type="submit" disabled={isSubmitting || isSuccess}
                className={`w-full py-4 min-h-[60px] text-[16px] rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2.5 outline-none ${
                  isSuccess ? 'bg-green-500 cursor-default'
                  : isSubmitting ? 'bg-orange-400 cursor-not-allowed'
                  : 'bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-px'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {isUploading ? `Uploading CV...` : 'Submitting Application…'}
                  </>
                ) : isSuccess ? (
                  <>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Application Received — We'll be in touch!
                  </>
                ) : 'Submit Application →'}
              </button>
              <p className="text-xs text-center text-gray-400 dark:text-slate-500 mt-4">
                Your application is private and securely stored in our system. We typically respond within 5–7 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

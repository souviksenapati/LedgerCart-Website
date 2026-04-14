import { useState, useRef } from 'react'
import { supabase } from '../../../lib/supabase'

const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB

export default function ContactForm({ isModal = false, onSuccess }) {
  const [file, setFile]             = useState(null)
  const [error, setError]           = useState('')
  const [isDragOver, setIsDragOver] = useState(false)
  const [isSubmitting, setIsSubmitting]   = useState(false)
  const [isSuccess, setIsSuccess]   = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [mountTime] = useState(Date.now())
  const fileInputRef = useRef(null)
  const formRef      = useRef(null)

  const handleFile = (selectedFile) => {
    setError('')
    if (!selectedFile) return
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('File is too large. Maximum size is 100MB.')
      setFile(null)
      return
    }
    setFile(selectedFile)
  }

  const uploadAttachment = async (f, enquiryId) => {
    setIsUploading(true)
    const fileExt = f.name.split('.').pop()
    const fileName = `${enquiryId}-${Math.random().toString(36).substring(2)}.${fileExt}`
    
    // Assumes you created an 'enquiry-attachments' bucket in Supabase Storage
    const { error: uploadError } = await supabase.storage.from('enquiry-attachments').upload(fileName, f)
    
    setIsUploading(false)
    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase.storage.from('enquiry-attachments').getPublicUrl(fileName)
    return { url: publicUrl, name: f.name }
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
      // Step 1: Insert to DB
      const { data, error: dbError } = await supabase.from('enquiries').insert([{
        full_name:        formData.get('fullName'),
        email:           formData.get('email'),
        company:         formData.get('company'),
        service_interest: formData.get('serviceInterest'),
        project_details:  formData.get('projectDetails'),
      }]).select()

      if (dbError) throw dbError
      const docId = data[0].id

      // Step 2: Handle Attachments
      if (file) {
        const { url } = await uploadAttachment(file, docId)
        await supabase.from('enquiries').update({
          attachment_url: url,
        }).eq('id', docId)
      }

      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setFile(null)
        formRef.current?.reset()
        if (onSuccess) onSuccess()
      }, 4000)

    } catch (err) {
      console.error('Contact form error:', err)
      setSubmitError('Something went wrong. Please check your network and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 w-full h-full justify-center transition-colors duration-300 animate-[fadeInUp_0.4s_ease-out]">
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 my-10 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-[16px] animate-[fadeIn_0.5s_ease-out]">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-2 mt-2 text-center">Message Sent</h3>
          <p className="text-gray-500 dark:text-slate-400 text-center font-medium text-[15px]">We will get back to you shortly.</p>
        </div>
      ) : (
        <>
          {!isModal && <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-2">Send us a message</h3>}
          {isModal && <h3 className="text-[28px] font-extrabold text-gray-900 dark:text-slate-100 tracking-tight leading-[1.2] mb-2 mt-2">Get a Free Consultation</h3>}
          
          {/* INVISIBLE SECURITY HONEYPOT */}
      <div className="opacity-0 absolute -z-50 h-0 w-0 overflow-hidden pointer-events-none" aria-hidden="true" tabIndex="-1">
        <label htmlFor="bot_field_honey">Please leave this field empty</label>
        <input type="text" name="bot_field_honey" id="bot_field_honey" autoComplete="off" tabIndex="-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-slate-300">Full Name</label>
          <input required name="fullName" type="text" placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder-gray-400 dark:placeholder-slate-600" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-slate-300">Work Email</label>
          <input required name="email" type="email" placeholder="info@ledgercart.in"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder-gray-400 dark:placeholder-slate-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-slate-300">Company Name</label>
          <input required name="company" type="text" placeholder="Your Company Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder-gray-400 dark:placeholder-slate-600" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 dark:text-slate-300">Service Interest</label>
          <select required name="serviceInterest" defaultValue=""
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-950">
            <option value="" disabled>Select a primary service</option>
            <option>Application Hosting</option>
            <option>Object Storage</option>
            <option>Database Hosting</option>
            <option>Static Site Hosting</option>
            <option>Artificial Intelligence</option>
            <option>Web Development</option>
            <option>Custom ERP</option>
            <option>Cybersecurity</option>
            <option>Other / Consulting</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 dark:text-slate-300">Project Details</label>
        <textarea required name="projectDetails" minLength="20" rows="4"
          placeholder="Tell us about your requirements, timeline, and goals..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder-gray-400 dark:placeholder-slate-600 resize-y" />
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-700 dark:text-slate-300">
            Attachments <span className="text-gray-400 dark:text-slate-500 font-normal">(Optional)</span>
          </label>
        </div>
        <div
          className={`w-full border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
            isDragOver ? 'border-orange-500 bg-orange-50/50 dark:bg-orange-950/20'
            : 'border-gray-300 dark:border-slate-700 hover:border-orange-400 bg-gray-50 dark:bg-slate-900/50'
          }`}
          onDragOver={(e) => { e.preventDefault(); setIsDragOver(true) }}
          onDragLeave={(e) => { e.preventDefault(); setIsDragOver(false) }}
          onDrop={(e) => { e.preventDefault(); setIsDragOver(false); if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]) }}
          onClick={() => fileInputRef.current?.click()}
        >
          <input type="file" className="hidden" ref={fileInputRef}
            onChange={(e) => handleFile(e.target.files[0])} />
          {!file ? (
            <>
              <svg className={`w-8 h-8 mb-3 transition-colors ${isDragOver ? 'text-orange-500' : 'text-gray-400 dark:text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm font-semibold text-gray-700 dark:text-slate-300">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-slate-500 mt-1">PDF, DOCX, ZIP, or images (Max 100MB)</p>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <svg className="w-8 h-8 mb-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-semibold text-gray-900 dark:text-slate-100">{file.name}</p>
              <p className="text-xs text-gray-500 dark:text-slate-500 mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
              {isUploading && <p className="text-[10px] text-orange-500 animate-pulse font-bold mt-1">UPLOADING ATTACHMENT...</p>}
              <button type="button" onClick={(e) => { e.stopPropagation(); setFile(null) }}
                className="text-xs text-red-500 hover:text-red-700 mt-2 font-medium">Remove file</button>
            </div>
          )}
        </div>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>

      {submitError && (
        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-lg text-sm text-red-600 dark:text-red-400">
          {submitError}
        </div>
      )}

      <div className="pt-2">
        <button type="submit" disabled={isSubmitting || isSuccess}
          className={`w-full py-4 min-h-[60px] text-[16px] shrink-0 rounded-xl font-bold text-white transition-all outline-none flex items-center justify-center gap-2 cursor-pointer ${
            isSuccess ? 'bg-green-500'
            : isSubmitting ? 'bg-orange-400 cursor-not-allowed'
            : 'bg-orange-600 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/30'
          }`}>
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isUploading ? `Uploading...` : 'Sending…'}
            </>
          ) : 'Send Message'}
        </button>
        <p className="text-xs text-center text-gray-400 dark:text-slate-500 mt-4">
          By submitting this form, you agree to our Privacy Policy. Your data is encrypted and secure.
        </p>
      </div>
        </>
      )}
    </form>
  )
}

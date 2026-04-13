import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ContactForm from '../../pages/Contact/components/ContactForm'

export default function ContactModal({ isOpen, onClose }) {
  // Prevent scrolling on html body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  // We use createPortal so the modal can be rendered at the root of the document, avoiding overflow hidden issues
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_0.2s_ease-out]">
      <div 
        className="absolute inset-0 z-0 transition-opacity bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
        title="Close modal"
      />
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 animate-[fadeInUp_0.3s_ease-out]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition-colors z-20 cursor-pointer border-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="pt-2">
          <ContactForm isModal={true} onSuccess={onClose} />
        </div>
      </div>
    </div>,
    document.body
  )
}

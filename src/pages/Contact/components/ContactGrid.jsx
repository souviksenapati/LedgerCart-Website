import ContactForm from './ContactForm'

export default function ContactGrid() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-12 transition-colors duration-300">
      
      {/* Left Column: Contact Information */}
      <div className="md:col-span-5 xl:col-span-4 bg-gray-50 dark:bg-slate-900/60 p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-200 dark:border-slate-800 flex flex-col justify-between">
        
        <div>
           <h3 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Contact Information</h3>
           <p className="text-gray-500 dark:text-slate-400 mb-4 leading-relaxed">
             Fill out the form and our team will get back to you within 24 hours. For technical support, please use the dedicated dashboard portal.
           </p>
           <div className="space-y-3 text-sm text-gray-600 dark:text-slate-300">
             <p><span className="font-semibold text-gray-900 dark:text-slate-100">Support:</span> support@ledgercart.in</p>
             <p><span className="font-semibold text-gray-900 dark:text-slate-100">Sales:</span> sales@ledgercart.in</p>
             <p><span className="font-semibold text-gray-900 dark:text-slate-100">Contact:</span> info@ledgercart.in</p>
             <p className="pt-1 leading-relaxed"><span className="font-semibold text-gray-900 dark:text-slate-100">Address:</span> Moni Bhander, Module C, WEBEL Bhawan, EP &amp; GP Block, Sector V, Salt Lake, Kolkata, West Bengal 700091, India</p>
           </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 bg-white dark:bg-slate-800/40 p-5 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
           <p className="italic text-gray-600 dark:text-slate-300 text-sm mb-3 relative z-10">
             "LedgerCart transformed our operations entirely. The team's responsiveness and engineering quality is unmatched."
           </p>
           <div className="flex items-center gap-3 relative z-10">
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 dark:from-slate-700 dark:to-slate-500"></div>
             <div>
               <p className="text-xs font-bold text-gray-900 dark:text-slate-200">Sarah Jenkins</p>
               <p className="text-xs text-gray-500 dark:text-slate-500">CTO, LedgerCart Client Partner</p>
             </div>
           </div>
        </div>

      </div>

      {/* Right Column: Form */}
      <div className="md:col-span-7 xl:col-span-8 p-8 lg:p-12 relative flex flex-col justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
         <ContactForm />
      </div>

    </div>
  )
}

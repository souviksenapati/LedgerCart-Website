export default function ObjectStorageVisual() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden group">
      {/* Container Bucket */}
      <div className="relative w-28 h-24 border-4 border-orange-200 rounded-b-3xl border-t-0 flex items-end justify-center pb-2 z-10 bg-white shadow-2xl overflow-visible mx-auto mt-10 transition-transform duration-500 group-hover:scale-105">
         {/* Particles flowing in */}
         {/* Top Left */}
         <div className="absolute -top-20 -left-10 w-6 h-6 bg-orange-500 rounded-md animate-floatFast" style={{ animationDelay: '0.1s' }}></div>
         {/* Top Right */}
         <div className="absolute -top-16 -right-12 w-4 h-4 bg-orange-400 rounded-sm animate-floatReverse" style={{ animationDelay: '0.4s' }}></div>
         {/* Top Center */}
         <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-5 h-5 bg-orange-300 rounded-md animate-floatFast" style={{ animationDelay: '0.8s' }}></div>

         {/* Stored Items */}
         <div className="w-20 h-10 bg-orange-50/50 rounded-xl flex flex-wrap gap-1 p-1 items-end justify-center overflow-hidden border border-orange-100">
             <div className="w-5 h-5 bg-orange-400 rounded-sm shadow-sm transition-all duration-300 hover:scale-110"></div>
             <div className="w-5 h-5 bg-orange-500 rounded-sm shadow-sm transition-all duration-300 hover:scale-110"></div>
             <div className="w-5 h-5 bg-orange-300 rounded-sm shadow-sm transition-all duration-300 hover:scale-110"></div>
         </div>
      </div>
      
      {/* Dashed data lines */}
      <svg className="absolute inset-0 w-full h-full -z-0 opacity-40 mix-blend-multiply pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 0 L50 40" stroke="#ffedd5" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        <path d="M0 20 L40 40" stroke="#ffedd5" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        <path d="M100 20 L60 40" stroke="#ffedd5" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
      </svg>
    </div>
  )
}

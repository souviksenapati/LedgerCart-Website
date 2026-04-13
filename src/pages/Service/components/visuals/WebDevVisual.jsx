export default function WebDevVisual() {
  return (
    <div className="w-full h-full bg-orange-50/50 flex items-center justify-center relative overflow-hidden group">
      {/* Browser Window Chrome */}
      <div className="w-[85%] h-[80%] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-700 group-hover:scale-[1.03]">
        {/* Tab Bar */}
        <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2 shrink-0">
           <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
           <div className="ml-4 h-4 bg-white rounded-md w-1/2 shadow-sm flex items-center px-2">
             <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
           </div>
        </div>
        
        {/* Animated Editor / App Content */}
        <div className="flex-1 p-4 flex flex-col gap-3 relative overflow-hidden bg-white">
           <div className="w-1/3 h-6 bg-orange-100 rounded-md animate-slideInRight1"></div>
           
           <div className="flex gap-4 flex-1 h-full">
              {/* Sidebar */}
              <div className="w-1/4 h-full bg-gray-50 rounded-lg border border-gray-100 flex flex-col p-3 gap-3 animate-slideInRight2">
                 <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                 <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                 <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                 <div className="w-1/2 h-2 bg-gray-200 rounded-full"></div>
              </div>
              
              {/* Main Feed */}
              <div className="flex-1 flex flex-col gap-3">
                 <div className="w-full h-20 bg-orange-50 rounded-lg border border-orange-100/50 animate-slideInRight3"></div>
                 <div className="flex gap-3">
                    <div className="w-1/2 h-16 bg-gray-50 rounded-lg border border-gray-100 animate-slideInRight1" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-1/2 h-16 bg-gray-50 rounded-lg border border-gray-100 animate-slideInRight2" style={{ animationDelay: '0.5s' }}></div>
                 </div>
              </div>
           </div>
           
           {/* Code typing overlay */}
           <div className="absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-t from-slate-900 to-slate-800 text-green-400 font-mono text-[11px] p-4 shadow-2xl transition-transform duration-700 translate-y-[90%] group-hover:translate-y-0 rounded-t-xl opacity-95">
             <p className="animate-pulse">{'>'} npm run build</p>
             <p className="text-gray-400 mt-2">✓ static pages generated</p>
             <p className="text-white mt-1">✓ CSS optimized</p>
             <p className="text-orange-400 mt-1">Ready in 2.3s</p>
           </div>
        </div>
      </div>
    </div>
  )
}

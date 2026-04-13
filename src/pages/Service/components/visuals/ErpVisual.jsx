export default function ErpVisual() {
  return (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center relative overflow-hidden">
      {/* Central Hub */}
      <div className="relative w-20 h-20 bg-white border-4 border-orange-500 rounded-2xl shadow-[0_0_20px_rgba(234,88,12,0.2)] flex items-center justify-center z-10 animate-float">
         <div className="w-8 h-8 bg-orange-100 rounded-lg animate-spinSlow"></div>
         <div className="absolute inset-0 flex items-center justify-center font-bold text-orange-600 text-xs">ERP</div>
      </div>
      
      {/* Connected Modules */}
      <div className="absolute inset-0 w-full h-full -z-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M50 50 L20 20 M50 50 L80 20 M50 50 L20 80 M50 50 L80 80" stroke="#fdba74" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        </svg>
      </div>

      <div className="absolute top-[15%] left-[15%] bg-white p-2.5 border border-gray-200 shadow-lg rounded-xl animate-float" style={{ animationDelay: '0s' }}>
          <div className="text-[10px] font-bold text-gray-500 mb-1">HR & Payroll</div>
          <div className="w-10 h-1.5 bg-green-400 rounded-full"></div>
      </div>
      
      <div className="absolute top-[15%] right-[15%] bg-white p-2.5 border border-gray-200 shadow-lg rounded-xl animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="text-[10px] font-bold text-gray-500 mb-1">Finance</div>
          <div className="w-10 h-1.5 bg-amber-400 rounded-full"></div>
      </div>

      <div className="absolute bottom-[15%] left-[15%] bg-white p-2.5 border border-gray-200 shadow-lg rounded-xl animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-[10px] font-bold text-gray-500 mb-1">Inventory</div>
          <div className="w-10 h-1.5 bg-purple-400 rounded-full"></div>
      </div>

      <div className="absolute bottom-[15%] right-[15%] bg-white p-2.5 border border-gray-200 shadow-lg rounded-xl animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="text-[10px] font-bold text-gray-500 mb-1">Sales CRM</div>
          <div className="w-10 h-1.5 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  )
}

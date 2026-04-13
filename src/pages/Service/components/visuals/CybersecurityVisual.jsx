export default function CybersecurityVisual() {
  return (
    <div className="w-full h-full bg-[#0f172a] rounded-xl flex items-center justify-center relative overflow-hidden shadow-inner group">
       {/* Pulse Effect */}
       <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>
       
       {/* Shield Icon SVG */}
       <div className="relative w-28 h-32 transform transition-transform duration-500 group-hover:scale-[1.05] z-10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-orange-500 drop-shadow-[0_0_20px_rgba(234,88,12,0.6)]">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          {/* Inner Lock */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-orange-500/10 p-3 rounded-full backdrop-blur-sm">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-orange-400 drop-shadow-md">
                   <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5zm3 8H9V6a3 3 0 1 1 6 0v3z"/>
                 </svg>
             </div>
          </div>
          
          {/* Scanning Laser Line */}
          <div className="absolute top-0 w-full h-[2px] bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)] animate-scan overflow-hidden rounded-full">
             <div className="w-full h-[30px] bg-gradient-to-b from-transparent to-green-400/30 -translate-y-[30px]"></div>
          </div>
       </div>

       {/* Threat Particles bouncing */}
       <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-red-500 rounded-full blur-[1px] animate-floatFast" style={{ animationDelay: '0.1s' }}></div>
       <div className="absolute bottom-[25%] left-[20%] w-2 h-2 bg-red-400 rounded-full blur-[1px] animate-floatReverse" style={{ animationDelay: '0.5s' }}></div>
       <div className="absolute top-[30%] left-[10%] w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1.2s', animationDuration: '3s' }}></div>
    </div>
  )
}

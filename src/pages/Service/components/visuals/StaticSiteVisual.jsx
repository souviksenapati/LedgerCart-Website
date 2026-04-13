export default function StaticSiteVisual() {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
      {/* Globe Wireframe */}
      <div className="relative w-48 h-48 border border-white/10 rounded-full animate-spinSlow flex items-center justify-center">
         <div className="absolute w-full h-1/3 border-y border-white/10 rounded-[100%]"></div>
         <div className="absolute h-full w-1/3 border-x border-white/10 rounded-[100%]"></div>
         <div className="absolute inset-2 border border-white/5 rounded-full"></div>
         
         {/* Glowing Edge Nodes */}
         <div className="absolute top-10 left-10 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.8)] animate-pulseDot"></div>
         <div className="absolute bottom-12 right-12 w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.8)] animate-pulseDot" style={{ animationDelay: '0.4s' }}></div>
         <div className="absolute top-1/2 left-4 w-2.5 h-2.5 bg-orange-400 rounded-full shadow-[0_0_12px_rgba(251,146,60,0.8)] animate-pulseDot" style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* Network Pulses going out */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-orange-500/20 rounded-full animate-pulseRing"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-orange-500/10 rounded-full animate-pulseRing" style={{ animationDelay: '1.2s' }}></div>
    </div>
  )
}

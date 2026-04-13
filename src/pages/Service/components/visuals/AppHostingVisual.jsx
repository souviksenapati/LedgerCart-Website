export default function AppHostingVisual() {
  return (
    <div className="w-full h-full bg-[#111827] rounded-xl flex items-center justify-center relative overflow-hidden p-8 shadow-inner">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(234, 88, 12, 0.4) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 100%, 20px 20px, 20px 20px' }}></div>
      
      {/* Server Stack */}
      <div className="relative z-10 w-full max-w-[220px] flex flex-col gap-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between px-4 backdrop-blur-sm shadow-xl animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
            {/* Server LEDs */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulseDot" style={{ animationDelay: `${i * 0.2}s` }}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulseDot" style={{ animationDelay: `${i * 0.5}s` }}></div>
              <div className="w-1 h-1 rounded-full bg-green-400"></div>
            </div>
            {/* Connecting Ports */}
            <div className="flex gap-1">
              <div className="w-5 h-2 bg-white/10 rounded-sm"></div>
              <div className="w-5 h-2 bg-white/30 rounded-sm"></div>
            </div>
          </div>
        ))}
        {/* Network Beam */}
        <div className="absolute top-0 bottom-0 left-5 w-[2px] bg-white/5 -z-10 flex flex-col items-center overflow-hidden">
           <div className="w-full h-10 bg-orange-500/80 blur-[1px] rounded-full animate-flowUp"></div>
           <div className="w-full h-6 bg-orange-300 rounded-full animate-flowUp" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  )
}

export default function AIVisual() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
       {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
      
      {/* Neural Network Nodes */}
      <div className="relative w-40 h-40 animate-float">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
           <path d="M50 50 L20 20 M50 50 L80 20 M50 50 L10 60 M50 50 L90 70 M50 50 L50 90 M20 20 L10 60 M80 20 L90 70" stroke="#fdba74" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
        </svg>
        
        {/* Center Node (Brain) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(234,88,12,0.3)] animate-pulseDot">
            <span className="text-2xl">🧠</span>
        </div>
        
        {/* Outer Nodes */}
        <div className="absolute top-[10%] left-[10%] w-6 h-6 bg-orange-100 border border-orange-300 rounded-full flex items-center justify-center animate-pulseDot" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-[10%] right-[10%] w-5 h-5 bg-orange-100 border border-orange-300 rounded-full animate-pulseDot" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-[30%] left-[0%] w-4 h-4 bg-orange-200 border border-orange-400 rounded-full animate-pulseDot" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-[20%] right-[0%] w-7 h-7 bg-orange-50 border border-orange-300 rounded-full flex items-center justify-center animate-pulseDot" style={{ animationDelay: '0.8s' }}>
           <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-orange-100 border border-orange-300 rounded-full animate-pulseDot" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  )
}

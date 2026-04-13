export default function DatabaseVisual() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative shadow-inner">
      <div className="relative z-10 w-32 flex flex-col items-center gap-2">
         {[0, 1, 2].map((i) => (
           <div key={i} className="relative w-full h-12 bg-gray-50 border-2 border-orange-200 rounded-full shadow-lg flex items-center justify-center animate-float overflow-hidden group hover:border-orange-400 transition-colors" style={{ animationDelay: `${i * 0.3}s` }}>
              {/* Spinning Scanner Ring */}
              <div className="absolute inset-0 border-t-2 border-orange-500 rounded-full animate-spinSlow opacity-30 group-hover:opacity-100 transition-opacity"></div>
              {/* Disc Lines */}
              <div className="w-20 h-1 bg-gray-200 rounded-full"></div>
              <div className="absolute right-4 w-2 h-2 rounded-full bg-orange-400 animate-pulseDot" style={{ animationDelay: `${i * 0.4}s` }}></div>
           </div>
         ))}
      </div>
      
      {/* Connecting Pipe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-48 bg-orange-50 -z-10 rounded-full border-x-2 border-orange-100/50">
        <div className="w-full h-1/4 bg-orange-300 blur-md animate-flowUp"></div>
      </div>
    </div>
  )
}

export default function StatsCard({ icon, label, value, color = 'orange', sub }) {
  const colors = {
    orange: 'bg-orange-50 dark:bg-orange-950/20 text-orange-600',
    blue:   'bg-blue-50  dark:bg-blue-950/20  text-blue-600',
    green:  'bg-green-50 dark:bg-green-950/20 text-green-600',
    red:    'bg-red-50   dark:bg-red-950/20   text-red-600',
    purple: 'bg-purple-50 dark:bg-purple-950/20 text-purple-600',
    slate:  'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400',
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4 transition-colors duration-300">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <div className="text-2xl font-extrabold text-gray-900 dark:text-slate-100 leading-none">{value}</div>
        <div className="text-sm font-medium text-gray-500 dark:text-slate-400 mt-0.5">{label}</div>
        {sub && <div className="text-xs text-gray-400 dark:text-slate-600 mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}

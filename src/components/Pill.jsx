export default function Pill({ text, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200">
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {text}
    </span>
  )
}

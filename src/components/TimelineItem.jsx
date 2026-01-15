import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function TimelineItem({ title, org, period, bullets, instagram, photos }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4 }}
      className="glassLight dark:glass rounded-2xl p-5 shadow-sm"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{org}</p>
        </div>
        <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300">
          {period}
        </span>
      </div>

      {instagram ? (
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
        >
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      ) : null}

      {bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      {photos?.length ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt={`${title} photo`}
              className="h-28 w-full rounded-lg object-contain border border-slate-200/60 bg-white dark:border-slate-800 dark:bg-slate-900/60"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </motion.div>
  )
}

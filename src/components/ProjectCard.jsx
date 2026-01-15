import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Pill from './Pill.jsx'

export default function ProjectCard({ project }) {
  if (!project) {
    return (
      <div className="rounded-2xl border border-slate-200/60 bg-white/50 p-5 text-slate-600 opacity-80 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-300">
        <p>Project data is missing.</p>
      </div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3 }}
      className="glassLight dark:glass rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{project.period}</p>
        </div>
        <div className="flex gap-2">
          {project.links?.github ? (
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          ) : null}
          {project.links?.demo ? (
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-200"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Demo"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{project.summary}</p>

      {project.highlights?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-200">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}

      {project.photos?.length ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {project.photos.map((src) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} preview`}
              className="h-28 w-full rounded-lg object-contain border border-slate-200/60 bg-white dark:border-slate-800 dark:bg-slate-900/60"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Pill key={s} text={s} />
        ))}
      </div>
    </motion.div>
  )
}

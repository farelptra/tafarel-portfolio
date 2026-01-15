import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children, icon: Icon }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:border-slate-700 dark:bg-slate-900/40">
              <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </div>
          ) : null}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p> : null}
          </div>
        </div>
        <div className="mt-4 under" />
      </motion.div>
      {children}
    </section>
  )
}

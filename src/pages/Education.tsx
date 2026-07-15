import { education } from '@/data/education'
import { profile } from '@/data/profile'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function EducationPage() {
  return (
    <section className="space-y-12">
      <Helmet>
        <title>Formations — {profile.name}</title>
        <meta
          name="description"
          content={`Socle académique de ${profile.name} en Informatique et Ingénierie.`}
        />
        <meta property="og:title" content={`Formations — ${profile.name}`} />
        <meta property="og:description" content="Diplômes et distinctions académiques." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Formations</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Mon socle académique dédié aux technologies modernes de pointe.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12"
      >
        {education.map((e: any, idx: number) => (
          <motion.div
            key={e.school + idx}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
            className="relative pl-8 md:pl-12 group transition-all"
          >
            <div className="absolute top-0 -left-[1px] w-0.5 h-full bg-border" />
            <div className="absolute top-1.5 -left-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />

            <div className="space-y-3">
              <h3 className="text-xl font-bold">
                {e.degree}{' '}
                {e.field && <span className="text-muted-foreground font-normal">in {e.field}</span>}
              </h3>
              <p className="text-lg font-medium text-foreground/80">
                {e.school}{' '}
                {e.location && (
                  <span className="text-sm text-muted-foreground ml-2">({e.location})</span>
                )}
              </p>

              {e.courses && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {e.courses.map((course: string) => (
                    <span
                      key={course}
                      className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}

              {e.highlights && (
                <ul className="mt-4 space-y-2">
                  {e.highlights.map((h: string) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

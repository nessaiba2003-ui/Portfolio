import { experiences } from '@/data/experience'
import { profile } from '@/data/profile'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

function fmtDate(s?: string) {
  if (!s) return 'Présent'
  const [y, m] = s.split('-')
  const months: Record<string, string> = {
    '01': 'Jan',
    '02': 'Fév',
    '03': 'Mar',
    '04': 'Avr',
    '05': 'Mai',
    '06': 'Juin',
    '07': 'Juil',
    '08': 'Août',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Déc',
  }
  return `${months[m] || m} ${y}`
}

export default function Experience() {
  return (
    <section className="space-y-12">
      <Helmet>
        <title>Parcours — {profile.name}</title>
        <meta
          name="description"
          content="Découvrez le parcours professionnel et l'expertise technique de NESSAIBA MESSAADIYENE."
        />
        <meta property="og:title" content={`Parcours — ${profile.name}`} />
        <meta
          property="og:description"
          content="Stages et expériences en recherche et ingénierie IA."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Expériences</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Mon parcours professionnel et mes stages en ingénierie et recherche de pointe.
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
        {experiences.map((exp: any) => (
          <motion.div
            key={exp.company + exp.start}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
            className="relative pl-8 md:pl-12 group transition-all"
          >
            <div className="absolute top-0 -left-[1px] w-0.5 h-full bg-border" />
            <div className="absolute top-1.5 -left-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm" />

            <div className="space-y-3">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {fmtDate(exp.start)} — {fmtDate(exp.end)}
              </span>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-lg font-medium text-foreground/80">
                {exp.company}{' '}
                {exp.location && (
                  <span className="text-sm text-muted-foreground ml-2">({exp.location})</span>
                )}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.description.map((desc: string, i: number) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

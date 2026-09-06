import { projects } from '@/data/projects'
import { profile } from '@/data/profile'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function Projects() {
  return (
    <section className="space-y-12">
      <Helmet>
        <title>Projets — {profile.name}</title>
        <meta
          name="description"
          content="Découvrez les projets innovants de NESSAIBA MESSAADIYENE en IA, SIG et ingénierie logicielle."
        />
        <meta property="og:title" content={`Projets — ${profile.name}`} />
        <meta
          property="og:description"
          content="Une vitrine technique de réalisations concrètes et innovantes."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projets Sélectionnés</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Une sélection de mes travaux récents mettant en avant mes compétences en ingénierie et
          intelligence artificielle.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((p: any) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 },
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative flex flex-col border border-primary/5 rounded-3xl p-6 bg-background/40 backdrop-blur-sm hover:bg-background/80 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-4 text-sm font-semibold">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  Demo <span>→</span>
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  Code <span>↗</span>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

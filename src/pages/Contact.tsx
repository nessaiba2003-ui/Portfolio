import { profile } from '@/data/profile'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <section className="py-12 space-y-16 max-w-4xl mx-auto">
      <Helmet>
        <title>Contact — {profile.name}</title>
        <meta
          name="description"
          content="Entrez en contact avec NESSAIBA MESSAADIYENE pour vos projets en IA et SIG."
        />
        <meta property="og:title" content={`Contact — ${profile.name}`} />
        <meta
          property="og:description"
          content="Disponible pour collaborations et opportunités innovantes."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-primary">
          On discute ?
        </h2>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          N'hésitez pas à me contacter pour une collaboration, une opportunité ou simplement pour
          échanger sur l'IA.
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
        className="grid gap-8"
      >
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          href={`mailto:${profile.email}`}
          className="group block p-10 rounded-[2rem] border border-primary/5 bg-background/40 backdrop-blur-sm hover:border-primary/20 hover:bg-background/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 text-center"
        >
          <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Email</span>
          <h3 className="mt-4 text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors">
            {profile.email}
          </h3>
        </motion.a>

        <div className="grid sm:grid-cols-2 gap-8">
          {profile.socials.map((social: any) => (
            <motion.a
              key={social.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[2rem] border border-primary/5 bg-background/40 backdrop-blur-sm hover:border-primary/20 hover:bg-background/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 text-center"
            >
              <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">
                {social.label}
              </span>
              <p className="mt-2 font-bold group-hover:text-primary transition-colors">
                Consulter profil ↗
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

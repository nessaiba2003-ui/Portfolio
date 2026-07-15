import { profile } from '@/data/profile'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="grid gap-12 md:grid-cols-2 items-center min-h-[70vh] py-12">
      <Helmet>
        <title>{profile.name} — Systèmes Répartis & DevOps</title>
        <meta
          name="description"
          content={`Portfolio de ${profile.name}. Étudiante en Systèmes Informatiques Répartis & DevOps, passionnée par l'IA et l'Astronomie.`}
        />
        <meta property="og:title" content={`${profile.name} — Portfolio`} />
        <meta
          property="og:description"
          content="Développement Web, DevOps et Analyse de données Astronomiques."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic">{profile.name}</h1>
        <p className="mt-4 text-2xl text-primary font-bold tracking-tight">{profile.role}</p>

        <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-xl">{profile.about}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            Explorer mes Projets
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-primary/20 bg-background/50 backdrop-blur-sm rounded-2xl font-bold hover:bg-accent transition-colors"
          >
            Me Contacter
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-3" aria-label="Expertises clés">
          {['DevOps', 'Distributed Systems', 'Astronomy Data', 'Java JEE'].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-widest rounded-lg"
            >
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative group aspect-[4/5] md:aspect-square"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
          <img 
            src="/images/profile.jpg" 
            alt={profile.name}
            className="h-full w-full object-cover brightness-[0.8] contrast-[1.2] grayscale-[0.1] transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8">
             <div className="p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-sm font-bold text-white uppercase tracking-tighter italic">Based in {profile.location}</p>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

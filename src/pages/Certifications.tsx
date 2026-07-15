import { certifications } from '@/data/certifications'
import { profile } from '@/data/profile'
import { useMemo, useState } from 'react'
import CertificationCard from '@/components/CertificationCard'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function CertificationsPage() {
  const [q, setQ] = useState('')
  const list = useMemo(
    () =>
      certifications
        .filter((c: any) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(' ')
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a: any, b: any) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  )

  return (
    <section className="space-y-12">
      <Helmet>
        <title>Certifications — {profile.name}</title>
        <meta
          name="description"
          content="Découvrez les certifications et expertises techniques de NESSAIBA MESSAADIYENE."
        />
        <meta property="og:title" content={`Certifications — ${profile.name}`} />
        <meta
          property="og:description"
          content="Badges et certifications professionnelles IA, Cloud et SIG."
        />
      </Helmet>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Mes certifications professionnelles et badges académiques validant mes expertises.
          </p>
        </motion.div>
        <div className="relative">
          <input
            placeholder="Filtrer (ex: AWS, Kubernetes)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full md:w-80 bg-background border border-border rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            aria-label="Filtrer les certifications"
          />
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {list.map((c: any) => (
          <motion.div
            key={c.title + c.issueDate}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <CertificationCard c={c} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

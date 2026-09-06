import type { Certification } from '../data/certifications'
import clsx from 'clsx'

function mmYYYY(s: string) {
  const [y, m] = s.split('-')
  return `${m}/${y}`
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === 'expired' || (c.expiryDate && c.expiryDate < c.issueDate)

  return (
    <article
      className={clsx(
        'group h-full border rounded-3xl p-6 transition-all hover:bg-muted/50 shadow-sm flex flex-col gap-4',
        isExpired && 'opacity-60'
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div className="flex items-start justify-between gap-4">
        {c.image && (
          <div className="w-16 h-16 shrink-0 bg-white rounded-xl border p-2 flex items-center justify-center">
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              width={64}
              height={64}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {c.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-foreground/70">{c.issuer}</p>
        </div>
      </div>

      <div className="space-y-3 flex-1">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="bg-secondary px-2 py-0.5 rounded text-secondary-foreground font-medium">
            {mmYYYY(c.issueDate)} {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ''}
          </span>
          {c.credentialId && <span>• ID: {c.credentialId}</span>}
        </p>

        {c.skills && c.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {c.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/80"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between">
        {c.credentialUrl && (
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-primary hover:underline underline-offset-4"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Vérifier le diplôme ↗
          </a>
        )}
        {isExpired && <span className="text-xs font-bold text-destructive">Expirée</span>}
        {c.status === 'revoked' && (
          <span className="text-xs font-bold text-destructive">Révoquée</span>
        )}
      </div>
    </article>
  )
}

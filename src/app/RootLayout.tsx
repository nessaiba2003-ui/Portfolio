import { Outlet, NavLink } from 'react-router-dom'
import { profile } from '@/data/profile'
import ThemeToggle from '@/components/ThemeToggle'

import { motion } from 'framer-motion'

export default function RootLayout() {
  return (
    <div className="min-h-dvh text-foreground selection:bg-primary/30 flex flex-col font-sans selection:text-primary-foreground relative overflow-x-hidden">
      <div className="aurora-container" aria-hidden="true">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 px-6 md:px-8">
          <NavLink
            to="/"
            className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2 uppercase italic text-primary"
          >
            {profile.name.split(' ')[0]}
          </NavLink>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {[
              { to: '/projects', label: 'Projets' },
              { to: '/experience', label: 'Parcours' },
              { to: '/education', label: 'Formations' },
              { to: '/certifications', label: 'Certifications' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-bold transition-all'
                    : 'hover:text-primary transition-colors text-muted-foreground'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 mx-auto w-full max-w-7xl p-6 px-6 md:px-8 py-12"
      >
        <Outlet />
      </motion.main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold">{profile.name}</p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} • Fait avec ❤️ et React
            </p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            {profile.socials.map((social: any) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

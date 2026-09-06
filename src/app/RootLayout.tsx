import { Outlet, NavLink } from 'react-router-dom'
import { profile } from '@/data/profile'
import ThemeToggle from '@/components/ThemeToggle'
import { useState } from 'react'

import { motion } from 'framer-motion'

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation = [
    { to: '/projects', label: 'Projets' },
    { to: '/experience', label: 'Parcours' },
    { to: '/education', label: 'Formations' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ]

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
            {navigation.map((link) => (
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 hover:bg-muted transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background/95 px-6 py-4 shadow-lg backdrop-blur-xl"
            aria-label="Navigation mobile"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navigation.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
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

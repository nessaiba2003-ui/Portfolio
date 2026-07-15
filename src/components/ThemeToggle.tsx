import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      className="relative w-14 h-7 rounded-full bg-muted border border-border p-1 flex items-center transition-colors hover:border-primary/50"
      onClick={() => setDark(!dark)}
      aria-label="Basculer le thème"
    >
      <motion.div
        animate={{ x: dark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px]"
      >
        {dark ? '🌙' : '☀️'}
      </motion.div>
    </button>
  )
}

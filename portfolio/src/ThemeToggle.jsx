"use client"

import { useTheme } from 'next-themes'
import { VscColorMode } from 'react-icons/vsc'

const ThemeToggle = ({ sidebar }) => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`w-28 dark:text-black ${sidebar ? 'flex' : 'hidden sm:flex'}`}
    >
      <VscColorMode />
    </button>
  )
}

export default ThemeToggle

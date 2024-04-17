import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

import { darkMode } from '../constants'

const DarkMode = () => {
  const [themeToggled, setThemeToggled] = useState(false)

  const toggleTheme = (e) => {
    if (e.target.checked) {
      document.body.classList.add('dark')
      localStorage.setItem('class', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('class', 'light')
    }
    setThemeToggled(!themeToggled)
  }

  useEffect(() => {
    const classTheme = localStorage.getItem('class')
    if (classTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])

  return (
    <div className='dark_mode flex h-7 list-none flex-row items-center gap-3 border-l border-slate-300 pl-4 dark:border-slate-700 sm:pl-8'>
      <input
        className='dark_mode_input hidden'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem('class') === 'dark'}
      />
      <label htmlFor='darkmode-toggle'>
        {darkMode.map((icon) => (
          <motion.li
            key={icon.id}
            className='cursor-pointer list-none text-2xl transition duration-75'
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -3 }}
            whileTap={{
              scale: 0.5,
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <Icon
              icon={icon.icon}
              color={icon.color}
              className={`${icon.class}`}
              key={`${icon.id}_${themeToggled}`}
            />
          </motion.li>
        ))}
      </label>
    </div>
  )
}

export default DarkMode

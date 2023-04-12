import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

import { styles } from '../styles'
import { navLinks, sosMed } from '../constants'
import Logo from '../assets/Logo'

const MotionLogo = motion(Link)

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <header
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-8`}
    >
      <nav className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <div className='flex items-center gap-10'>
          <MotionLogo
            to='/'
            className='flex'
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <Logo className='w-32' />
          </MotionLogo>

          <ul className='font- hidden list-none flex-row gap-8 sm:flex'>
            {navLinks.map((nav) => (
              <li key={nav.id} className='cursor-pointer text-lg font-medium'>
                <NavLink
                  to={`${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? styles.navActive : styles.navNotActive
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <ul className='hidden list-none flex-row gap-3 sm:flex'>
          {sosMed.map((icon) => (
            <motion.li
              key={icon.id}
              className='cursor-pointer text-2xl font-medium'
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to={`${icon.link}`} target='_blank'>
                <Icon icon={icon.icon} color={icon.color} />
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

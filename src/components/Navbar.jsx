import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { Icon } from '@iconify/react'

import QuickBall from './QuickBall'
import Darkmode from './DarkMode'

import { styles } from '../styles'
import { Logo } from '../assets'
import { darkMode, navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    <>
      <QuickBall />
      <header
        className={`${styles.paddingX} fixed z-10 flex h-20 w-full items-center justify-center overflow-hidden bg-slate-100 bg-transparent bg-opacity-10 shadow-sm backdrop-blur-sm`}
      >
        <nav className='flex w-full items-center justify-between'>
          <div className='flex items-center'>
            <Link
              to='/'
              className='flex'
              onClick={() => {
                setActive('')
                window.scrollTo(0, 0)
              }}
            >
              <Logo />
            </Link>
          </div>
          <div className={`hidden items-center md:flex`}>
            <ul className='flex items-center justify-between gap-x-8'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='cursor-pointer text-sm font-semibold leading-6'
                >
                  <NavLink to={nav.id} className='navlink group'>
                    <div className='w-fit text-xl group-hover:after:w-full'>
                      {nav.title}
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
            <Darkmode />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar

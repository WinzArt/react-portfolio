import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import QuickBall from './QuickBall'
import Darkmode from './DarkMode'

import { Logo } from '../assets'
import { styles } from '../styles'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <>
      <QuickBall />
      <header
        className={`${styles.paddingX} fixed z-10 flex h-20 w-full items-center justify-center overflow-hidden bg-slate-400 bg-transparent bg-opacity-10 shadow-md backdrop-blur-sm`}
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
          <div className={`items-center md:flex`}>
            <ul className='hidden items-center justify-between gap-x-8 sm:flex'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className='cursor-pointer text-sm font-semibold leading-6'
                >
                  <NavLink to={nav.to} className='navlink group'>
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

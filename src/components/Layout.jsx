import React from 'react'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './index'
import { styles } from '../styles'

import { staggerContainer } from '../utils/motion'

const Layout = (Component, idName) => {
  return (
    <motion.div
      className='overflow-x-hidden bg-slate-200 dark:bg-slate-800 dark:text-light'
      variants={staggerContainer()}
      initial='hidden'
      animate='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <Navbar />
      <motion.div className={`${styles.paddingL} min-h-screen  `}>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Outlet />
      </motion.div>
      <Footer />
    </motion.div>
  )
}

export default Layout

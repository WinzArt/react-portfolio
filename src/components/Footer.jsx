import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg font-medium'>
      <Layout className='flex items-center justify-between py-0'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with<span className='px-1 text-2xl text-primary'>&#9825;</span>
          by&nbsp;
          <Link to='/' className='underline underline-offset-2'>
            winzArt
          </Link>
        </div>
        <Link to='/' target='_blank' className='underline underline-offset-2'>
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer

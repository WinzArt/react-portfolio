import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-slate-100 bg-transparent bg-opacity-10 pb-2 text-center shadow-sm backdrop-blur-sm'>
      <hr className='mb-2 h-1 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50 dark:opacity-100' />
      <div className='flex items-center justify-center'>
        Built with&nbsp;
        <Icon icon='uil:heart-alt' className='text-2xl text-primary' />
        &nbsp;by winzArt
      </div>
    </footer>
  )
}

export default Footer

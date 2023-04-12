import React from 'react'
import { Icon } from '@iconify/react'

import CircularText from '../assets/CircularText'
import { Link } from 'react-router-dom'

const HireMe = () => {
  return (
    <div className='fixed bottom-8 left-8 flex items-center justify-center overflow-hidden'>
      <div className='relative flex h-auto w-40 items-center justify-center'>
        <CircularText className={'animate-spin-slow fill-dark '} />
        <Link
          to='/'
          className='absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-solid border-dark bg-dark font-semibold text-green-500 shadow-md hover:bg-light'
        >
          <Icon icon='teenyicons:whatsapp-outline' className='text-4xl' />
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe

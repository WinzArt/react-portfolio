import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { Icon } from '@iconify/react'

import { hero } from './index'
import { sosMed } from '../constants'
import {
  zoomIn,
  fadeIn,
  textVariant,
  slideIn,
  staggerContainer,
} from '../utils/motion'

const Blob = (props) => {
  return (
    <div className='flex w-full flex-row items-center justify-center'>
      <div className='flex w-full items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='25 0 480 480'
          className='drop-shadow-[5px_5px_5px_#14b8a6]'
          {...props}
        >
          <path
            fill='#14b8a6'
            d='M384.5 333q-37.5 93-130 67.5t-150-93q-57.5-67.5 3-130t155-101Q357 38 389.5 139t-5 194Z'
          />
          <defs>
            <clipPath id='a'>
              <path
                fill='#14b8a6'
                d='M384 332q-39.5 93-130 67.5t-150-93q-57.5-67.5 3-130t155-101Q357 38 389.5 139t-5 194Z'
              />
            </clipPath>
          </defs>
          <image
            xlinkHref={hero}
            width='100%'
            height='100%'
            clipPath='url(#a)'
            preserveAspectRatio='xMidYMid slice'
            x='30'
            y='20'
            className='drop-shadow-2xl'
          />
        </svg>
      </div>
      <m.ul
        variants={fadeIn('left', 'spring', 0.1, 1)}
        className='flex list-none flex-col items-center gap-10'
      >
        {sosMed.map((icon) => (
          <m.li
            key={icon.id}
            className='cursor-pointer text-2xl md:text-3xl'
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <m.div>
              <Link
                to={`${icon.link}`}
                target='_blank'
                className='relative -top-6 right-16 md:-top-10 md:right-20'
              >
                <Icon
                  icon={icon.icon}
                  className={`${icon.margin} relative text-primary`}
                />
              </Link>
            </m.div>
          </m.li>
        ))}
      </m.ul>
    </div>
  )
}

export default Blob

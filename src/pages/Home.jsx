import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { Icon } from '@iconify/react'

import { zoomIn, fadeIn, textVariant, slideIn } from '../utils/motion'
import { Blob } from '../assets'

import { styles } from '../styles'
import TitleBar from '../constants'

const jobTitles = ['Technical Engineer', 'Web Developer', 'Web Designer']

const Home = (index, title) => {
  const [numLoops, setNumLoops] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = numLoops % jobTitles.length
    let fullText = jobTitles[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setNumLoops(numLoops + 1)
      setDelta(500)
    }
  }

  return (
    <>
      <TitleBar title='Home' />
      <main
        className={` ${styles.padding} relative flex w-full flex-col-reverse items-center justify-between overflow-x-hidden lg:flex-row`}
      >
        <div className='flex w-full flex-col lg:w-1/2'>
          <m.span
            variants={slideIn('left', 'spring', '0', '1')}
            className='text-xl font-semibold leading-6'
          >{`Hi! 👋 I'm`}</m.span>
          <m.h1
            variants={textVariant()}
            className='text-5xl font-bold sm:text-7xl'
          >
            Edi Winarno
          </m.h1>
          <h3 className='blinking-cursor text-xl font-semibold sm:text-2xl'>
            Student & <span className='text-primary'>{text}</span>
          </h3>
          <m.p className='py-5 text-base' variants={fadeIn('', '', 0.3, 1)}>
            <span className='font-medium text-slate-400'>{`I'm a 5th-semester `}</span>
            computer science student studying informatics engineering at
            <span className='font-medium text-primary'>{` Pamulang University `}</span>{' '}
            with a passion for technology.
          </m.p>
          <m.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className='relative z-10 mt-2 flex items-center gap-5 self-start'
          >
            <Link
              to='resume.pdf'
              target='_blank'
              className='myBtn flex items-center p-2.5 px-4 text-lg font-semibold text-light hover:text-dark'
            >
              Resume&nbsp;
              <Icon icon='uil:external-link-alt' className='text-xl' />
            </Link>
          </m.div>
        </div>
        <m.div
          variants={zoomIn('spring', 0.1, 0.5)}
          className='relative flex w-[115%] self-center lg:w-1/2'
        >
          <Blob />
        </m.div>
      </main>
    </>
  )
}

export default Home

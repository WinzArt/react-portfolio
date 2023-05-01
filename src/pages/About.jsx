import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  motion as m,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { Icon } from '@iconify/react'

import { profile } from '../assets'
import { Head, AnimatedText } from '../components'
import { zoomIn, fadeIn, textVariant, slideIn } from '../utils/motion'
import { styles } from '../styles'

const AnimatedNumb = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head title='About' />
      <section
        className={`${styles.padding} relative flex w-full flex-col items-center justify-center pt-20`}
      >
        <m.div className='text-center sm:pb-20' variants={textVariant()}>
          {/* <AnimatedText
            text='About Me'
            className='text-4xl font-semibold sm:mb-3'
          /> */}
          <h1 className='text-4xl font-semibold capitalize sm:mb-3'>
            About Me
          </h1>
          <p className='font-medium text-primary'>My Introduction</p>
        </m.div>
        <div className='flex flex-col items-center gap-y-10 py-10 sm:flex-row sm:gap-x-20'>
          <m.div
            className='flex w-full justify-center sm:w-1/2 sm:justify-end'
            variants={zoomIn('spring', 0.1, 0.5)}
          >
            <img
              src={profile}
              alt='Profile picture'
              className='max-w-[75%] rounded-xl drop-shadow-lg'
            />
          </m.div>

          <div className='flex flex-col justify-start sm:w-1/2'>
            <m.p
              className='max-w-xl text-justify text-base'
              variants={fadeIn('left', 'spring', 0.2, 1)}
            >
              I had worked for 5 years at a
              <span className='font-semibold text-primary'>
                {' Security Systems & Building Technologies '}
              </span>
              company before deciding to continue my education to the next
              level.
            </m.p>
            <m.div
              className='flex max-w-xl py-5 text-center sm:py-10'
              variants={fadeIn('', '', 0.5, 1)}
            >
              <div className='flex w-1/3 flex-col flex-wrap items-center'>
                <span className='inline-block py-2 text-2xl font-semibold'>
                  0<AnimatedNumb value={8} />+
                </span>
                <p className='w-28 text-sm'>Years experience</p>
              </div>
              <div className='flex w-1/3 flex-col flex-wrap items-center'>
                <span className='inline-block py-2 text-2xl font-semibold'>
                  <AnimatedNumb value={20} />+
                </span>
                <p className='w-28 text-sm'>Completed project</p>
              </div>
              <div className='flex w-1/3 flex-col flex-wrap items-center'>
                <span className='inline-block py-2 text-2xl font-semibold'>
                  0<AnimatedNumb value={5} />+
                </span>
                <p className='w-28 text-sm'>Companies worked</p>
              </div>
            </m.div>
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
        </div>
      </section>
    </>
  )
}

export default About

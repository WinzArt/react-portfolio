import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { profile, vector1 } from '../assets'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import HireMe from '../components/HireMe'

const Home = () => {
  return (
    <>
      <main className='flex min-h-screen w-full items-center text-dark'>
        <Layout className='pt-0'>
          <div className='flex w-full items-center justify-between'>
            <div className='w-1/2'>
              <img src={profile} alt='profile' className='w-full' />
            </div>
            <div className='flex w-1/2 flex-col items-center self-center'>
              <AnimatedText
                text='Menuju Tak Terbatas Dan Terus Melampauinya!'
                className='!text-left !text-6xl'
              />
              <p className='my-4 text-base font-medium'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                inventore, laborum explicabo sequi cum fuga quidem quod quo eum
                est?
              </p>
              <div className='mt-2 flex items-center gap-5 self-start'>
                <Link
                  to='resume.pdf'
                  target='_blank'
                  className='flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark'
                >
                  Resume&nbsp;
                  <Icon icon='mingcute:external-link-line' />
                </Link>
                <Link
                  to='mailto:edie.winz@gmail.com'
                  target='_blank'
                  className='flex items-center text-lg font-semibold capitalize text-dark underline underline-offset-2'
                >
                  Contact&nbsp;
                  <Icon icon='mingcute:mail-send-fill' />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute bottom-32 right-5 inline-block w-40'>
          <img src={vector1} alt='winzArt' className='h-auto w-full' />
        </div>
      </main>
    </>
  )
}

export default Home

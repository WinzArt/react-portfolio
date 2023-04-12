import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'

import { profile, vector1 } from '../assets'

const About = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center text-dark'>
        <Layout className=''>
          <AnimatedText text='Animatin Text Example' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start gap-4'>
              <h2 className='text-lg font-bold uppercase text-dark/75'>
                Biography
              </h2>
              <p className='font-medium'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, tenetur porro maxime cumque quasi voluptas possimus
                et aliquam facilis voluptate.
              </p>
              <p className='font-medium'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, tenetur porro maxime cumque quasi voluptas possimus
                et aliquam facilis voluptate.
              </p>
              <p className='font-medium'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, tenetur porro maxime cumque quasi voluptas possimus
                et aliquam facilis voluptate.
              </p>
            </div>
            <div className='relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute -right-3 top-0 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark' />
              <img src={profile} alt='' className='h-auto w-full rounded-2xl' />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default About

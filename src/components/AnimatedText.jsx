import React from 'react'
import { motion } from 'framer-motion'

import { quote, singleWord } from '../utils/motion'


const AnimatedText = ({ index, text, className = '' }) => {
  return (
    <div className='mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center'>
      <motion.h1
        variants={quote}
        initial='initial'
        animate='animate'
        className={`${className} inline-block w-full text-8xl font-bold capitalize text-dark`}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className='inline-block'
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText

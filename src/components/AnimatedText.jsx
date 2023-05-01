import React from 'react'
import { motion } from 'framer-motion'

import { quote, singleWord } from '../utils/motion'

const AnimatedText = ({ text, className = '' }) => {
  return (
    <motion.h1
      variants={quote}
      initial='initial'
      animate='animate'
      className={`${className} inline-block capitalize`}
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
  )
}

export default AnimatedText

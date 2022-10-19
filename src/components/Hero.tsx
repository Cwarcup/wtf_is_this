import React from 'react'
import randomItem from '../helpers/randomItem'
import Main from './Main'

const Hero = () => {
  return (
    <div className='max-w-3xl'>
      <h1 className='mb-6 text-center text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-7xl'>
        Find me a...{' '}
        <span className='my-1 inline-block font-serif font-bold text-white'>{randomItem}</span>
      </h1>
      <p className='text-center text-base text-gray-100'>
        Upload or take a photo of a {randomItem} and the AI will tell you how certain it is that it
        is a {randomItem}.
      </p>
    </div>
  )
}

export default Hero

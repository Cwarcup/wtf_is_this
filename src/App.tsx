import React from 'react'
import Main from './components/Main'
import Hero from './components/Hero'
import './index.css'
import { GiPlasticDuck } from 'react-icons/gi'

function App() {
  return (
    <div className='bg-gradient-to-r from-blue-600 to-indigo-500'>
      <div className='mx-auto h-screen px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28'>
        <div className='flex justify-between'>
          <GiPlasticDuck className='text-6xl text-white ' />
          <h1 className='text-4xl text-white font-bold'>What is this?</h1>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <div>
            <Hero />
            <Main />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

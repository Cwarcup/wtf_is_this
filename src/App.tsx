import React from 'react'
import Main from './components/Main'
import Hero from './components/Hero'
import './index.css'
import GhBtn from './components/GhBtn'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-eggshell to-deepChampagne">
      <div className="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
        <div className="sticky top-0 z-50">
          <GhBtn />
        </div>
        <div className="flex flex-col items-center justify-between">
          <Hero />
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import Main from './components/Main'
import Hero from './components/Hero'
import './index.css'
import { GiPlasticDuck } from 'react-icons/gi'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-eggshell to-deepChampagne">
      <div className="mx-auto px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
        <div className="flex justify-between">
          <GiPlasticDuck className="text-6xl text-darkBlue " />
          <h1 className="text-4xl text-darkBlue font-bold">What is this?</h1>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div>
            <Hero />
            <Main />
          </div>
          {/* <div className="relative mt-20 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-deepChampagne p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            <div
              className="w-fit mx-auto flex overflow-hidden rounded-3xl bg-deepChampagne"
              role="image-container"
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App

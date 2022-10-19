import { browser, div } from '@tensorflow/tfjs'
import { load, MobileNet } from '@tensorflow-models/mobilenet'
import React, { useEffect, useState } from 'react'
import getImageData from '../helpers/getImageData'

const Main = () => {
  const [image, setImage] = useState<string | null>('')
  const [item, setItem] = useState<string | null>(null)
  const [mobilenetModel, setMobilenetModel] = useState<MobileNet | null>(null)

  useEffect(() => {
    ;(async () => {
      setMobilenetModel(await load())
    })()
  }, [])

  // ran in to upload button
  const handleImageUpload = async ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (!mobilenetModel || !files || !files.length) {
      return
    }
    setItem(null)

    const imageUrl = URL.createObjectURL(files[0]) // create a url for the image
    setImage(imageUrl) // set the image url

    // get the image data
    const { imageElement } = await getImageData(imageUrl)
    const tensor: any = browser.fromPixels(imageElement)

    // get the predictions
    const predictions = await mobilenetModel.classify(tensor)
    console.log('predictions', predictions)

    const possibleItems = predictions.map(({ className }) => className)
    console.log('classes', possibleItems)

    const wtfIsThis = possibleItems[0]

    setItem(wtfIsThis)
  }

  return (
    <>
      <form
        method='POST'
        action='#'
        className='mx-auto mt-12 mb-2 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow'
      >
        <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
          <div className='relative text-gray-500 sm:w-7/12'>
            <label htmlFor='email' className='sr-only border-gray-300'></label>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  className=''
                ></path>
              </svg>
            </div>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter email address'
              className='w-full cursor-text rounded-xl border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring'
            />
          </div>

          <button
            type='submit'
            className='group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition'
          >
            <span className='group flex w-full items-center justify-center rounded text-center font-medium'>
              Free Trial
            </span>
            <svg
              className='shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              ></path>
            </svg>
          </button>
        </div>
      </form>
      <input type='file' name='file' onChange={handleImageUpload} />
      {item !== null && <div>Looks like a {item}</div>}
    </>
  )
}

export default Main

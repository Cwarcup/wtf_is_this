/* eslint-disable react/no-unescaped-entities */
import { browser, div } from '@tensorflow/tfjs'
import { load, MobileNet } from '@tensorflow-models/mobilenet'
import React, { ReactElement, useEffect, useState } from 'react'
import getImageData from '../helpers/getImageData'
import { AiFillCamera } from 'react-icons/ai'
import Image from './Image'
import Predictions from './Predictions'

type PredictionType = { className: string; probability: number }[]

const Main = () => {
  const [image, setImage] = useState<string | null>('')
  const [item, setItem] = useState<string | null>(null)
  const [predictionsArray, setPredictionsArray] = useState<PredictionType>([])
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

    setPredictionsArray(predictions)

    const wtfIsThis = predictions[0].className

    setItem(wtfIsThis)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <label className="flex flex-col items-center text-darkBlue bg-terraCotta rounded-md cursor-pointer text-6xl md:text-5xl pt-2 pb-4 px-4 font-bold hover:bg-terraCottaDark">
          <div className="flex justify-between items-center gap-3 mx-2">{'Upload a photo!'}</div>
          <input type="file" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>
      {item !== null && <Predictions predictionsArray={[...predictionsArray]} />}
      {image && <Image image={image} />}
    </>
  )
}

export default Main

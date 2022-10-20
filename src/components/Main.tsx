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
  const [image, setImage] = useState<string | null>(null)
  const [item, setItem] = useState<string | null>(null)
  const [bananaFound, setBananaFound] = useState<boolean>(false)
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
    setItem('')

    const imageUrl = URL.createObjectURL(files[0]) // create a url for the image
    setImage(imageUrl) // set the image url

    // get the image data
    const { imageElement } = await getImageData(imageUrl)
    const tensor: any = browser.fromPixels(imageElement)

    // get the predictions
    const predictions = await mobilenetModel.classify(tensor)

    setPredictionsArray(predictions)

    const classNamesFromPredictions = predictions.map(({ className }) => className)

    console.log('classNamesFromPredictions', classNamesFromPredictions)

    // use regex to find if any of the predictions contain the word banana
    const bananaRegex = /banana/gi
    const bananaPrediction = classNamesFromPredictions.find((className) =>
      className.match(bananaRegex),
    )

    // if bananaPrediction is not undefined, set the item to banana
    if (bananaPrediction) {
      setItem('banana')
      setBananaFound(true)
    }
  }

  console.log('item', item)
  console.log('image', image)

  return (
    <>
      <div className="flex flex-col items-center pb-16">
        <label className="flex flex-col items-center text-darkBlue bg-terraCotta rounded-md cursor-pointer text-4xl md:text-5xl pt-2 pb-4 px-4 font-bold hover:bg-terraCottaDark ">
          <div className="flex justify-between items-center gap-3 mx-2">{'Upload a photo!'}</div>
          <input type="file" onChange={handleImageUpload} className="hidden" />
        </label>
      </div>
      {item !== null && (
        <div className="flex flex-col items-center justify-center bg-deepChampagne font-bodyFont mx-20 my-4 py-6 rounded-md">
          <Predictions predictionsArray={[...predictionsArray]} bananaFound={bananaFound} />

          {image === null ? null : <Image image={image} />}
        </div>
      )}
    </>
  )
}

export default Main

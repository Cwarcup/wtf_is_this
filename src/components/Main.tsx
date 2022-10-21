/* eslint-disable react/no-unescaped-entities */
import { browser } from '@tensorflow/tfjs'
import { load, MobileNet } from '@tensorflow-models/mobilenet'
import React, { useEffect, useState } from 'react'
import getImageData from '../helpers/getImageData'
import Image from './Image'
import Predictions from './Predictions'
import { PredictionType } from '../types/types'

const Main = () => {
  const [image, setImage] = useState<string | null>(null)
  const [item, setItem] = useState<string | null>(null)
  const [bananaFound, setBananaFound] = useState<boolean>(false)
  const [predictionsArray, setPredictionsArray] = useState<PredictionType>([])
  const [mobilenetModel, setMobilenetModel] = useState<MobileNet | null>(null)

  useEffect(() => {
    // load the mobilenet model
    load().then((model) => {
      setMobilenetModel(model)
    })
  }, [])

  // function to handle the image upload
  const handleUpload = async ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    // if there is no file, return
    if (!mobilenetModel || !files || !files.length) {
      return
    }
    setItem('')

    const imageUrl = URL.createObjectURL(files[0]) // create a url for the image
    setImage(imageUrl) // set the image url

    // get the image data
    const imageData = await getImageData(imageUrl)

    // create a tf.Tensor from an image element
    const image: any = browser.fromPixels(imageData.imageElement)

    // Promise that resolves to an array of classes and probabilities
    const predictions = await mobilenetModel.classify(image)

    // all the predictions
    setPredictionsArray(predictions)

    // create an array of the class names from the predictions
    const classNamesFromPredictions = predictions.map(({ className }) => className)

    // find if any of the predictions contain the word banana
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

  return (
    <>
      <div className="flex flex-col items-center pb-16">
        <label className="min-w-max flex flex-col items-center text-darkBlue bg-terraCotta rounded-md cursor-pointer text-4xl md:text-5xl pt-2 pb-4 px-4 font-bold hover:bg-terraCottaDark ">
          <div className="flex justify-between items-center gap-3 mx-2">{'Upload a photo!'}</div>
          <input type="file" onChange={handleUpload} className="hidden" />
        </label>
      </div>
      {item !== null && (
        <div className="flex flex-col items-center justify-center bg-deepChampagne font-bodyFont sm:mx-20 my-4 py-6 rounded-md">
          <Predictions predictionsArray={[...predictionsArray]} bananaFound={bananaFound} />

          {image === null ? null : <Image image={image} />}
        </div>
      )}
    </>
  )
}

export default Main

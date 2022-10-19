import { useMediaQuery } from 'react-responsive'
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
      Upload a photo!
      <input type='file' name='file' onChange={handleImageUpload} />
      {item !== null && <div>Looks like a {item}</div>}
    </>
  )
}

export default Main

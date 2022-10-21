import { ImageData } from '../types/ImageDataInterface'

const getImageData = (imageUrl: string): Promise<ImageData> => {
  const imageElement = document.createElement('img')

  return new Promise((res) => {
    imageElement.onload = function () {
      const { height, width } = imageElement
      res({ height, width, imageElement })
    }

    imageElement.src = imageUrl
  })
}

export default getImageData

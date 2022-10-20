/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type PredictionType = { className: string; probability: number }[]

type Props = {
  predictionsArray: PredictionType
  bananaFound: boolean
}

const Predictions = (props: Props) => {
  // function to convert probability number to percentage
  const toPercentage = (num: number) => {
    return (num * 100).toFixed()
  }

  if (props.bananaFound === false) {
    // component to list all the predictions from predictionsArray
    const predictionsList = props.predictionsArray.map((prediction, index) => {
      return (
        <li key={index} className="text-center">
          <p className="text-2xl font-bold text-darkBlue">
            {prediction.className} - {toPercentage(prediction.probability)}%
          </p>
        </li>
      )
    })

    return (
      <div className="text-darkBlue text-center flex flex-col items-center">
        <div className="text-6xl mb-2">🙈</div>
        <p className="text-xl font-bold">Hmm, it looks like there's no banana.</p>
        <p className="text-xl">But I still have the top predictions:</p>
        <ul className="text-xl">{predictionsList}</ul>
      </div>
    )
  }

  return (
    <div className="text-darkBlue text-center">
      <h2 className="text-2xl font-bold">Yes!</h2>
      <p className="text-xl w-60">
        I'm {toPercentage(props.predictionsArray[0].probability)}% sure that there is a banana in
        that photo.
      </p>
    </div>
  )
}

export default Predictions

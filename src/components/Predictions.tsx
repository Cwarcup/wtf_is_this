import React from 'react'

type PredictionType = { className: string; probability: number }[]

type Props = {
  predictionsArray: PredictionType
}

const Predictions = (props: Props) => {
  // function to convert probability number to percentage
  const toPercentage = (num: number) => {
    return (num * 100).toFixed(2)
  }

  // if preduction.probability is less than 0.9, return all predictions
  const predictions = props.predictionsArray.filter((prediction) => prediction.probability > 0.9)
  {
    props.predictionsArray.map((prediction) => (
      <li key={prediction.className}>
        {prediction.className} - {toPercentage(prediction.probability)}%
      </li>
    ))
  }
  if (predictions.length === 0) {
    return (
      <section className=" py-10 leading-6 text-gray-100 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">
              {"I'm not sure what this is..."}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-3">
            {props.predictionsArray.map((prediction, index) => (
              <div
                key={index}
                className="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow"
              >
                <div className="px-6 py-10">
                  <div className="flex items-center">
                    <div className="flex flex-col ml-2 leading-none">
                      <p className="text-4xl">{toPercentage(prediction.probability)}% </p>
                      <p className="text-base self-end">{"sure it's a"}</p>
                    </div>
                    <span className="ml-3 text-2xl font-medium capitalize text-center">
                      {prediction.className.split(',')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // else return only the first prediction
  return (
    <div className="flex flex-col justify-center items-center">
      <p>
        {`I think this is a ${predictions[0].className} with a ${toPercentage(
          predictions[0].probability,
        )}% confidence`}
      </p>
    </div>
  )
}

export default Predictions

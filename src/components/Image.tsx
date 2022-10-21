import React, { FC } from 'react'

type ImageProp = {
  image: string
}

const Image: FC<ImageProp> = (props): JSX.Element => {
  return (
    <div className="flex justify-center my-5">
      <img className="w-4/5 max-w-xl mx-16 rounded-3xl shadow-sm" src={props.image} />
    </div>
  )
}

export default Image

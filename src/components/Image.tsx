import React, { FC } from 'react'

type ImageProp = {
  image: string
}

const Image: FC<ImageProp> = (props): JSX.Element => {
  return (
    <div className='flex justify-center my-5'>
      <img className='w-1/2 max-h-96 rounded-md shadow-sm' src={props.image} />
    </div>
  )
}

export default Image

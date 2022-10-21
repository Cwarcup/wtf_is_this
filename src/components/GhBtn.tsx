import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

const GhBtn = () => {
  // on click, link to the repo
  const handleClick = () => {
    window.open('https://github.com/Cwarcup/wtf_is_this', '_blank')
  }

  return <FaGithubSquare className="text-4xl text-darkBlue cursor-pointer" onClick={handleClick} />
}

export default GhBtn


import React from 'react'
import "./ButtonRectangleWide.css"

const ButtonRectangleWide = ({buttonMessage,buttonColor}) => {
  return (
    <div className='ButtonRectangleWide'> 
      <button className={buttonColor}>{buttonMessage}</button>
    </div>
  )
}

export default ButtonRectangleWide

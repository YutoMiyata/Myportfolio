import React from 'react'
import "./MainTitle.css"

const MainTitle = ({MainTitle , Icon}) => {
  return (
    <div className='MainTitle'> 
      {Icon}
      <h1>{MainTitle}</h1>
    </div>
  )
}

export default MainTitle

import React from 'react'
import "./SubTitle.css"

const SubTitle = ({name,subTitleColor}) => {
  return (
    <div className='SubTitle'>
      <h2 className={subTitleColor}>{name}</h2>
    </div>

  )
}

export default SubTitle

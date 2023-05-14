import React from 'react'
import "./ProgramingLearningEach.css"

const PrograingLearningEach = ({title , contents}) => {
  return (
    <div className='PrograingLearningEach'>
      <h3>{title}</h3>
      <div className='ProgramingLearningContent'>
        {contents.map((content) => {
                    return(<p>{content}</p>)
        })}
      </div>
    </div>
  )
}

export default PrograingLearningEach

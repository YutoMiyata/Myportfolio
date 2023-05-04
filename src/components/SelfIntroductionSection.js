import React from 'react'
import SelfIntroductionPhoto from './SelfIntroductionPhoto'
import SelfIntroductionContent from './SelfIntroductionContent'
import "./SelfIntroductionSection.css"

const SelfIntroductionSection = () => {
  return (
    <div className='SelfIntroductionSection'>
      <SelfIntroductionPhoto />
      <SelfIntroductionContent />
    </div>
  )
}

export default SelfIntroductionSection

import React from 'react'
import "./SelfIntroduction.css"
import SubTitle from './SubTitle'
import SelfIntroductionSection from './SelfIntroductionSection'

const SelfIntroduction = () => {
  return (
    <div className='self-introduction'>
      <SubTitle name="自己紹介"/>
      <SelfIntroductionSection />
    </div>
  )
}

export default SelfIntroduction

import React from 'react'
import "./ProfilePrograming.css";

const ProfilePrograming = () => {
    const frontEndLang = ['HTML','CSS','JavaScript','React','Redux']
    const backEndLang = ['Pyhon','Django','Django_restframework']
  return (
    <div className='profileProgramingBlock'>    
        <h2>プログラミング学習</h2>
        <div className='studyingBlock'>
            <div className='frontEndBlock'>
                <h3>フロントエンド</h3>
                {frontEndLang.map((front) => {
                    return(<p>{front}</p>)
                })}
            </div>
            <div className='backEndBlock'>
                <h3>バックエンド</h3>
                {backEndLang.map((back) => {
                    return(<p>{back}</p>)
                })}
            </div>
        </div>
    </div>
  )
}

export default ProfilePrograming

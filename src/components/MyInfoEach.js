import React from 'react'
import "./MyInfoEach.css"
import ButtonRectangleWide from "./ButtonRectangleWide" 
import { Link } from 'react-router-dom'

const MyInfoEach = () => {
  return (
    <>
        <div className='MyInfoEach profile'>
            <h2 className='MyInfoTitle'>Profile</h2>
            <p className='MyInfoParagraph'>私の経歴や使用経験のある技術スタックについて触れいています</p>
            <Link to='/profile'>
                <ButtonRectangleWide buttonColor="white" buttonMessage="NEXT"/>
            </Link>
        </div>
        <div className='MyInfoEach works'>
            <h2 className='MyInfoTitle'>Works</h2>
            <p className='MyInfoParagraph'>私が作成したアプリケーションを3つご紹介しています</p>
            <Link to='/works'>
                <ButtonRectangleWide buttonColor="white" buttonMessage="NEXT" />
            </Link>
        </div>
    </>
  )
}

export default MyInfoEach

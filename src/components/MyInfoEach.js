import React from 'react'
import "./MyInfoEach.css"
import ButtonRectangleWide from "./ButtonRectangleWide" 
import { Link } from 'react-router-dom'


const MyInfoEach = () => {
  return (
    <>
        <div className='MyInfoEach profile'>
            <h2 className='MyInfoTitle animate-text-to-right'>Profile</h2>
            <p className='MyInfoParagraph animate-text-to-right'>
                私の自己紹介ページです!<br/>
                私の経歴や使用経験のある技術スタックについて触れいています!
                </p>
            <Link to='/profile'>
                <ButtonRectangleWide  buttonColor="white" buttonMessage="NEXT"/>
            </Link>
        </div>
        <div className='MyInfoEach works'>
            <h2 className='MyInfoTitle animate-text-to-left'>Works</h2>
            <p className='MyInfoParagraph animate-text-to-left'>
                私が作成したアプリケーションを3つご紹介しています!<br/>
                React、Django、laravelとさまざまな技術を使用しています!
            </p>
            <Link to='/works'>
                <ButtonRectangleWide buttonColor="white" buttonMessage="NEXT" />
            </Link>
        </div>
    </>
  )
}

export default MyInfoEach

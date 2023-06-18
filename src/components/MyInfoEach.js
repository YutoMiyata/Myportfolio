import React from 'react'
import "./MyInfoEach.css"
import ButtonRectangleWide from "./ButtonRectangleWide" 
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'


const MyInfoEach = () => {
//  アニメーションの設定
const [animate, setAnimate] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    const scrollHeightProfile = window.pageYOffset || document.documentElement.scrollTop;
    // Profile用
    const triggerHeightProfile = 100; 
 

    if (scrollHeightProfile > triggerHeightProfile) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

    //Works用
    // const scrollHeightWorks = window.pageYOffset || document.documentElement.scrollTop;
    // const triggerHeightWorks = 500; 

    // if (scrollHeightWorks > triggerHeightWorks) {
    // setAnimateWorks(true);
    // } else {
    // setAnimateWorks(false);
    // }

  return (
    <>
        <div className='MyInfoEach profile'>
            <h2 className={`MyInfoTitle ${animate ? 'animate-text-to-right' : ''}`} >Profile</h2>
            <p className={`MyInfoParagraph ${animate ? 'animate-text-to-right' : ''}`}>
                私の自己紹介ページです!<br/>
                私の経歴や使用経験のある技術スタックについて触れいています!
                </p>
            <Link to='/profile'>
                <ButtonRectangleWide  buttonColor="white" buttonMessage="NEXT"/>
            </Link>
        </div>
        <div className='MyInfoEach works'>
            <h2 className={`MyInfoTitle ${animate ? 'animate-text-to-left' : ''}`}>Works</h2>
            <p className={`MyInfoParagraph ${animate ? 'animate-text-to-left' : ''}`}>
                私が作成したアプリケーションを3つご紹介しています!<br/>
                React、Django、Laravelとさまざまな技術を使用しています!
            </p>
            <Link to='/works'>
                <ButtonRectangleWide buttonColor="white" buttonMessage="NEXT" />
            </Link>
        </div>
    </>
  )
}

export default MyInfoEach

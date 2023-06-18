import React from 'react'
import "./MyInfoEach.css"
import ButtonRectangleWide from "./ButtonRectangleWide" 
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'


const MyInfoEach = () => {
//  アニメーションの設定
const [animate, setAnimate] = useState(false);
const [animateWorks, setAnimateWorks] = useState(false);
const [isMobile, setIsMobile] = useState(false);


//デバイスの検知
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // デバイスの幅に応じて切り替えるポイントを設定
  };

  handleResize(); // 初回レンダリング時に実行

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

//Profile用アニメーション
useEffect(() => {
  const handleScroll = () => {
    const scrollHeightProfile = window.pageYOffset || document.documentElement.scrollTop;
    let triggerHeightProfile = 200;

    if(isMobile) {
      triggerHeightProfile = 0;
    } 
   
    if (scrollHeightProfile > triggerHeightProfile) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [animate,isMobile]);


// Works用アニメーション
useEffect(() => {
  const handleScrollWorks = () => {
    const scrollHeightWorks = window.pageYOffset || document.documentElement.scrollTop;
    // WorscrollHeightWorks用
       let triggerHeightWorscrollHeightWorks = 1000;
       
       if(isMobile) {
        triggerHeightWorscrollHeightWorks = 200;
       } 

    if (scrollHeightWorks > triggerHeightWorscrollHeightWorks) {
      setAnimateWorks(true);
    } else {
      setAnimateWorks(false);
    }
  
  };

  window.addEventListener('scroll', handleScrollWorks);
  return () => window.removeEventListener('scroll', handleScrollWorks);
}, [animateWorks,isMobile]);


  return (
    <>
        <div className='MyInfoEach profile '>
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
            <h2 className={`MyInfoTitle ${animateWorks ? 'animate-text-to-left' : ''}`}>Works</h2>
            <p className={`MyInfoParagraph ${animateWorks ? 'animate-text-to-left' : ''}`}>
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

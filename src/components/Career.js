import React from 'react';
import "./Career.css";
import SubTitle from './SubTitle';
import { useState,useEffect } from 'react';

const Career = () => {

    //  アニメーションの設定
    const [animateCareer, setAnimateCareer] = useState(false);
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
        const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
        let triggerHeightProfile = 400;
    
        if(isMobile) {
            triggerHeightProfile = 170;
        } 
        
        if (scrollHeight > triggerHeightProfile) {
            setAnimateCareer(true);
        } else {
            setAnimateCareer(false);
        }
        
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animateCareer,isMobile]);

    const careers = [
        {
            year:'2016',
            month:'3',
            careerContent:'明治大学中野八王子中学校卒業',
        },
        {
            year:'2016',
            month:'4',
            careerContent:'明治大学中野八王子高等学校入学',
        },
        {
            year:'2019',
            month:'3',
            careerContent:'明治大学中野八王子高等学校卒業',
        },
        {
            year:'2019',
            month:'4',
            careerContent:'法政大学スポーツ健康学部スポーツ健康学科入学',
        },
        {
            year:'2023',
            month:'3',
            careerContent:'法政大学スポーツ健康学部スポーツ健康学科卒業',
        },

      ]


  return (
    <div className='career'>
        <div className='career-layout'>
            <SubTitle name="経歴" />
            <table className={`career-table ${animateCareer ? 'animate-career' : ''}`}>
                <tr>
                    <td className='year-and-month textCenter'>年・月</td>
                    <td className='career-content'>経歴</td>
                </tr>
                {careers.map((career) => {
                return (
                    <tr>
                        <td className='year-and-month textCenter'>{career.year}年{career.month}月</td>
                        <td className='career-content'>{career.careerContent}</td>
                    </tr>
                )
                })}
            </table>
        </div>

    </div>
  )
}

export default Career

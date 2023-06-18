import React from 'react';
import "./Career.css";
import SubTitle from './SubTitle';

const Career = () => {

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
        <SubTitle name="経歴"/>
            <table className='career-table'>
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

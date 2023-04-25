import React from 'react'
import "./WorksContent.css";
import homework_management from "../images_portfolio/homework_management_laravel.png";
import { Link } from 'react-router-dom';
import ButtonRectangle from './ButtonRectangle';
import SubTitle from './SubTitle';


const WorksContentLocal = () => {
  const works = [
    {imgUrl:homework_management,
      theme:'宿題管理システム',
      language:['laravel'],
      url:'https://github.com/YutoMiyata/homework_management_laravel',
      link:'/works/homework_management',
    },
  ]

  
  return (
    <div className='worksComponents'>
      <SubTitle name="開発(ローカル)環境"/>
      {works.map((work) => {
        return (
            <div className='worksBlock'>
              <div className='worksPhoto'>
                <img src={work.imgUrl} className = "workPhotoImg"/>
              </div>
              <div className='worksContent worksContentFlex'>
                    <table className='worksTable'>
                      <tr>
                        <th className='tableTitle'>テーマ</th>
                        <th className='tableContent'>{work.theme}</th>
                      </tr>
                      <tr>
                        <td className='tableTitle'>使用言語</td>
                        <td className='tableContent'>{work.language}</td>
                      </tr>      
                      <tr>
                        <td className='tableTitle'>その他</td>
                        <td className='tableContent'>
                          <div className='tableButtonBlock'>
                            <div className='tableButton'>
                              <Link to={work.url}><ButtonRectangle message="URL"/></Link> 
                            </div>
                            <div className='tableButton'>
                              <Link to={work.link}><ButtonRectangle message="詳細"/></Link>    
                            </div>
                          </div>
                        </td>
                      </tr>               
                    </table> 
              </div>
            </div>     
        )
      })}
    </div>

  )
}

export default WorksContentLocal;

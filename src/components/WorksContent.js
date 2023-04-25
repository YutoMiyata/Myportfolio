import React from 'react'
import "./WorksContent.css";
import cafe_to_do_react from "../images_portfolio/cafe-to-do-react.png";
import cafe_tasks_management from "../images_portfolio/cafe_tasks_management.png";
import { Link } from 'react-router-dom';
import ButtonRectangle from './ButtonRectangle';
import SubTitle from './SubTitle';


const WorksContent = () => {
  const works = [
    {imgUrl:cafe_tasks_management,
      theme:'タスク早見表',
      language:['react、','django_restframework'],
      url:'https://master.d3b7sjzflh5qmc.amplifyapp.com/',
      link:'/works/tasks_table',
    },
    {imgUrl:cafe_to_do_react,
      theme:'カフェTODOシステム',
      language:['react'],
      url:'https://master.d5fxi2qll26xm.amplifyapp.com/',
      link:'/works/cafe_to_do'
    },
  ]

  
  return (
    <div className='worksComponents'>
      <SubTitle name="本番環境"/>
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
                        <td className='tableTitle'>言語</td>
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

export default WorksContent

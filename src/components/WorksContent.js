import React from 'react'
import "./WorksContent.css";
import cafe_to_do_react from "../images_portfolio/cafe-to-do-react.png";
import cafe_tasks_management from "../images_portfolio/cafe_tasks_management.png";


const WorksContent = () => {
  const works = [
    {imgUrl:cafe_tasks_management,
      theme:'タスク早見表',
      language:['react、','django_restframework'],
      ingenuity:'restframeworkで独自のapiを作成。reactと連結。AWS使用。',
      url:'https://master.d3b7sjzflh5qmc.amplifyapp.com/',
    },
    {imgUrl:cafe_to_do_react,
      theme:'カフェTODOシステム',
      language:['react'],
      ingenuity:'useStateの使用と、UIにこだわった!',
      url:'https://master.d5fxi2qll26xm.amplifyapp.com/',
    },



  ]

  const goToUrl = (index) => {
    window.location.href = works[index].url;
  }
  return (
    <div className='worksComponents'>
      <h2>本番環境</h2>
      {works.map((work,index) => {
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
                        <td className='tableTitle'> 工夫点</td>
                        <td className='tableContent ingenuityContent' >{work.ingenuity}</td>
                      </tr>                     
                    </table> 
              </div>
              <div className='urlButton'>
                  <button onClick={() => {goToUrl(index)}}>URL</button>
              </div>
            </div>     
        )
      })}

    </div>

  )
}

export default WorksContent

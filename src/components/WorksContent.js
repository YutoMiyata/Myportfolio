import React from 'react'
import "./WorksContent.css";
import cafe_to_do_react from "../images_portfolio/cafe-to-do-react.png";
import board_blog from "../images_portfolio/board-blog.png";


const WorksContent = () => {
  const works = [
    {imgUrl:cafe_to_do_react,
    theme:'カフェTODOシステム',
    language:['react'],
    ingenuity:'useStateの使用と、UIにこだわった!',
    url:'https://master.d5fxi2qll26xm.amplifyapp.com/',
    },
    {imgUrl:board_blog,
      theme:'一行掲示板',
      language:['Django'],
      ingenuity:'CRUD、ログイン機能を実装',
      url:'http://3.114.224.232/blog/',
      },
  ]

  const goToUrl = (index) => {
    window.location.href = works[index].url;
  }
  return (
    <div className='worksComponents'>
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
                        <td className='tableTitle'>使用言語</td>
                        <td className='tableContent'>{work.language}</td>
                      </tr>
                      <tr>
                        <td className='tableTitle'> 工夫点</td>
                        <td className='tableContent'>{work.ingenuity}</td>
                      </tr>                     
                    </table> 
              </div>
              <div className='urlButton'>
                  <button onClick={() => {goToUrl(index)}}>url</button>
              </div>
            </div>     
        )
      })}

    </div>

  )
}

export default WorksContent

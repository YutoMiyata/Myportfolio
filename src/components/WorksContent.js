import React from 'react'
import "./WorksContent.css";
import cafe_to_do_react from "../images_portfolio/cafe-to-do-react.png";

const WorksContent = () => {
  const works = [
    {imgUrl:cafe_to_do_react,
    theme:'カフェTODOシステム',
    language:['react'],
    ingenuity:'useStateの使用と、UIにこだわった!',
    }
  ]
  return (
    <div className='worksComponents'>
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
                        <td className='tableTitle'> 工夫点</td>
                        <td className='tableContent'>{work.ingenuity}</td>
                      </tr>                     
                    </table>
                  
              </div>
            </div>     
        )
      })}
      <div className='urlButton'>
        <button><a href='https://master.d5fxi2qll26xm.amplifyapp.com/'>Url Button</a></button>
      </div>

    </div>

  )
}

export default WorksContent

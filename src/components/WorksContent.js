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
                  <div className='worksContentFlex_title'>
                    <h3>テーマ</h3>
                    <h3>使用言語</h3>
                    <h3>工夫点</h3>
                  </div>
                  <div className='worksContentFlex_content'>
                    <h3>{work.theme}</h3>
                    <h3>{work.language}</h3>
                    <h3>{work.ingenuity}</h3>
                  </div>
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

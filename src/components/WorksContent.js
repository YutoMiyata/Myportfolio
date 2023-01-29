import React from 'react'
import "./WorksContent.css";
import react_to_do_photo from "../images_portfolio/react_to_do_photo.png";

const WorksContent = () => {
  const works = [
    {imgUrl:react_to_do_photo,
    theme:'reactredux',
    language:['react,','redux'],
    ingenuity:'頑張った',
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
        <button><a href='https://master.d1ifpyx30908pf.amplifyapp.com'>Url Button</a></button>
      </div>

    </div>

  )
}

export default WorksContent

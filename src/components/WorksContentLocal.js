import React from 'react'
import "./WorksContent.css";
import homework_management from "../images_portfolio/homework_management_laravel.png";


const WorksContentLocal = () => {
  const works = [
    {imgUrl:homework_management,
      theme:'宿題管理システム',
      language:['laravel'],
      url:'https://github.com/YutoMiyata/homework_management_laravel',
    },
  ]

  const goToUrl = (index) => {
    window.location.href = works[index].url;
  }
  return (
    <div className='worksComponents'>
      <h2>開発(ローカル)環境</h2>
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
                        <td className='tableTitle'>その他</td>
                        <td className='tableContent'>
                          <div className='tableButtonBlock'>
                            <div className='tableButton'>
                              <button onClick={() => {goToUrl(index)}}>GitHub</button>
                            </div>
                            <div className='tableButton'>
                              <button>詳細</button>
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

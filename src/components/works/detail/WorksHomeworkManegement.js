import React from 'react'
import Footer from '../../Footer'
import Nav from '../../nav/Nav'
import "./WorksHomeworkManegement.css";
import homework_management_laravel_big from "../../../images_portfolio/homework_management_laravel_big.jpg";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-router-dom';

const WorksHomeworkManegement = () => {
  return (
    <div>
      <Nav />
        <h1>宿題管理システム</h1>
          <div className='homeworkManagementImgBlock'>
              <div className='homeworkManagementImg'>
                  <img src={homework_management_laravel_big}/>
              </div>
          </div>
          <div className='homeworkManagementtechniqueBlock'>
              <h2>使用技術</h2>
              <div className='homeworkManagementtechnique'>
                  <table className='homeworkManagementtechniqueTable'>
                      <tr>
                          <th>フロントエンド</th>
                          <td>blade、css</td>
                      </tr>
                      <tr>
                          <th>バックエンド</th>
                          <td>Laravel</td>
                      </tr>
                  </table>
              </div>
          </div>
          <div className='homeworkManagementFeaturesBlock'>
              <h2>特徴</h2>
              <div className='homeworkManagementFeaturesContent'>
                  <ul>
                      <li>Laravelを主軸として開発</li>
                      <li>認証機能はLaravelBreezeを使用</li>
                      <li>宿題管理の進捗状況を確認目的で作成</li>
                  </ul>
              </div>

          </div>

          <h2>その他</h2>
          <div className='worksTableOthersBlock othersRelative'>
              <div className='worksTableOthersFlex othersAbsolute'>
                  <div className='worksTableOthers'>
                      <p>GitHubのURLはこちら</p>
                      <p className='worksTableOthersArror'><ArrowCircleDownIcon /></p>
                      <Link to="https://github.com/YutoMiyata/homework_management_laravel">
                        <button>URL</button>
                      </Link>
                  </div>
              </div>
          </div>
      <Footer />
    </div>
  )
}

export default WorksHomeworkManegement

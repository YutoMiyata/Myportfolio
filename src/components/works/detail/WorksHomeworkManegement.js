import React from 'react'
import Footer from '../../Footer'
import Nav from '../../nav/Nav'
import "./WorksHomeworkManegement.css";
import homework_management_laravel_big from "../../../images_portfolio/homework_management_laravel_big.jpg";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-router-dom';
import ButtonRectangle from '../../ButtonRectangle';
import SubTitle from '../../SubTitle';

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
              <SubTitle name="使用言語" />
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
              <SubTitle name="特徴" />
              <div className='homeworkManagementFeaturesContent'>
                  <ul>
                      <li>Laravelを主軸として開発</li>
                      <li>認証機能はLaravelBreezeを使用</li>
                      <li>宿題管理の進捗状況を確認目的で作成</li>
                  </ul>
              </div>

          </div>

          <SubTitle name="その他" />
          <div className='worksTableOthersBlock othersRelative'>
              <div className='worksTableOthersFlex othersAbsolute'>
                  <div className='worksTableOthers'>
                      <p>GitHubのURLはこちら</p>
                      <p className='worksTableOthersArror'><ArrowCircleDownIcon /></p>
                      <Link to="https://github.com/YutoMiyata/homework_management_laravel">
                        <ButtonRectangle  message="URL" />
                      </Link>
                  </div>
              </div>
          </div>
      <Footer />
    </div>
  )
}

export default WorksHomeworkManegement

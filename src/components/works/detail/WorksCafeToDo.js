import React from 'react'
import Footer from '../../Footer'
import Nav from '../../nav/Nav'
import "./WorksCafeToDo.css";
import cafe_to_do_big from "../../../images_portfolio/cafe_to_do_big.jpg";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-router-dom';
import ButtonRectangle from '../../ButtonRectangle';
import SubTitle from '../../SubTitle';
import WorksTitle from './WorksTitle';


const WorksCafeToDo = () => {
  return (
    <div>
      <Nav />
      <WorksTitle titleName="カフェtodoシステム" />
        <div className='cafeToDoImgBlock'>
            <div className='cafeToDoImg'>
                <img src={cafe_to_do_big}/>
            </div>
        </div>
        <div className='cafeToDotechniqueBlock'>
            <SubTitle name="使用技術" />
            <div className='cafeToDotechnique'>
                <table className='cafeToDotechniqueTable'>
                    <tr>
                        <th>フロントエンド</th>
                        <td>React</td>
                    </tr>
                    <tr>
                        <th>バックエンド以降</th>
                        <td>AWS(Amplify)</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className='cafeToDoFeaturesBlock'>
            <SubTitle name="特徴" />
            <div className='cafeToDoFeaturesContent'>
                <ul>
                    <li>ReactのuseStateを使用し、フロントエンドのみを実装</li>
                    <li>バックエンド移行はAWSを使用</li>
                    <li>カフェの仕事の進捗状況を分類できる目的で作成</li>
                </ul>
            </div>

        </div>

        <SubTitle name="その他" />
        <div className='worksTableOthersBlock othersRelative'>
            <div className='worksTableOthersFlex othersAbsolute'>
                <div className='worksTableOthers'>
                    <p>本番環境はこちら</p>
                    <p className='worksTableOthersArror'><ArrowCircleDownIcon /></p>
                    <Link to="https://master.d5fxi2qll26xm.amplifyapp.com/">
                        <ButtonRectangle message="URL"/>
                    </Link>
                </div>
                <div className='worksTableOthers others_django_api'>
                    <p>GitHubはこちらから</p>
                    <p className='worksTableOthersArror'><ArrowCircleDownIcon /></p>
                    <Link to="https://github.com/YutoMiyata/cafe-to-do-react">
                        <ButtonRectangle message="URL"/>
                    </Link>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default WorksCafeToDo

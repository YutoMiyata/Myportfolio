import React from 'react'
import Footer from '../../Footer';
import Nav from '../../nav/Nav';
import cafe_tasks_management from "../../../images_portfolio/cafe_tasks_big.png";
import "./WorksTasksTable.css";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link } from 'react-router-dom';
import ButtonRectangle from '../../ButtonRectangle';
import SubTitle from '../../SubTitle';
import WorksTitle from './WorksTitle';


const WorksTasksTable = () => {
  return (
    <div>
      <Nav />
        <WorksTitle titleName="タスク早見表" />
        <div className='taskTableImgBlock'>
            <div className='taskTableImg'>
                <img src={cafe_tasks_management}/>
            </div>
        </div>
        <div className='taskTabletechniqueBlock'>
            <SubTitle name="使用技術"/>
            <div className='taskTabletechnique'>
                <table className='taskTabletechniqueTable'>
                    <tr>
                        <th>フロントエンド</th>
                        <td>React</td>
                    </tr>
                    <tr>
                        <th>バックエンド</th>
                        <td>Django_restframework</td>
                    </tr>                    <tr>
                        <th>データベース</th>
                        <td>PostgresSQL</td>
                    </tr>                    <tr>
                        <th>インフラ</th>
                        <td>AWS(EC2、RDS、Route53、CertificateManager)</td>
                    </tr>                    <tr>
                        <th>その他</th>
                        <td>axios(フロントとサーバーサイド連結)</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className='taskTableFeaturesBlock'>
            <SubTitle name="特徴"/>
            <div className='taskTableFeaturesContent'>
                <ul>
                    <li>Django_restframeworkで独自のAPIを作成</li>
                    <li>Axiosを使用し、フロントとサーバーサイドを連結</li>
                    <li>カフェの仕事内容や手順を簡単に見ることができることが目的で作成</li>
                </ul>
            </div>

        </div>

        <SubTitle name="その他"/>
        <div className='worksTableOthersBlock othersRelative'>
            <div className='worksTableOthersFlex othersAbsolute'>
                <div className='worksTableOthers'>
                    <p>本番環境はこちら</p>
                    <p className='worksTableOthersArror'><ArrowCircleDownIcon /></p>
                    <Link to="https://master.d3b7sjzflh5qmc.amplifyapp.com/">
                        <ButtonRectangle message="URL"/>
                    </Link>
                </div>
                <div className='worksTableOthers others_django_api'>
                    <p>DjangoRestFrameworkのAPIはこちら</p>
                    <p className='worksTableOthersArror'><ArrowCircleDownIcon /></p>
                    <Link to="https://cafe-tasks-boards.com/api/tasks/">
                        <ButtonRectangle message="URL"/>
                    </Link>
                </div>
            </div>

        </div>
      <Footer />
    </div>
  )
}

export default WorksTasksTable;

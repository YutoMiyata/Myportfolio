import React from 'react'
import "./ProfilePrograming.css";
import SubTitle from './SubTitle';

const ProfilePrograming = () => {
    const frontEndLang = ['HTML5','CSS3','JavaScript','React','Redux'];
    const backEndLang = ['Python','Django','Django_restframework','PHP','Laeravel'];
    const awsItems = ['EC2','RDS','Route53','VPC'];
    const others = ['DB(Postgres)','バージョン管理(Git、Github)','Linux(Ubuntu)'];
  return (
    <div className='profileProgramingBlock'>    
        <SubTitle name="プログラミング学習" />
        <div className='studyingBlock'>
            <div className='frontEndBlock studyingBlockDetail'>
                <h3>フロントエンド</h3>
                {frontEndLang.map((front) => {
                    return(<p>{front}</p>)
                })}
            </div>
            <div className='backEndBlock studyingBlockDetail'>
                <h3>バックエンド</h3>
                {backEndLang.map((back) => {
                    return(<p>{back}</p>)
                })}
            </div>
            <div className='awsBlock studyingBlockDetail'>
                <h3>AWS</h3>
                {awsItems.map((awsItem) => {
                    return(<p>{awsItem}</p>)
                })}
            </div>
            <div className='othersBlock studyingBlockDetail'>
                <h3>その他</h3>
                {others.map((other) => {
                    return(<p>{other}</p>)
                })}
            </div>
        </div>
    </div>
  )
}

export default ProfilePrograming

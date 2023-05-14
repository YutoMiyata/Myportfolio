import React from 'react'
import PrograingLearningEach from './ProgramingLearningEach'
import "./ProgramingLearning.css"
import SubTitle from './SubTitle'

const ProgramingLearning = () => {
    const frontEndLang = ['HTML5','CSS3','JavaScript','React','Redux'];
    const backEndLang = ['Python','Django','Django_restframework','PHP','Laeravel'];
    const awsItems = ['EC2','RDS','Route53','VPC'];
    const others = ['DB(Postgres)','バージョン管理(Git、Github)','Linux(Ubuntu)'];

  return (
    <div className='ProgramingLearning'>
        <SubTitle name="プログラミング学習"/>
        <div className='ProgramingLearningAll'>
            <PrograingLearningEach title="フロントエンド"  contents={frontEndLang}/>
            <PrograingLearningEach title="バックエンド" contents={backEndLang}/>
            <PrograingLearningEach title="インフラ(AWS)" contents={awsItems}/>
            <PrograingLearningEach title="その他" contents={others}/>
        </div>
    </div>

  )
}

export default ProgramingLearning

import React from 'react'
import "./SelfIntroductionContent.css"

const SelfIntroductionContent = () => {
  return (
    <div className='SelfIntroductionContent'>
        <table className='SelfIntroductionTable'>
            <tr>
                <th className='SelfIntroductionTitle'>名前</th>
                <th className='SelfIntroductionSentence'>宮田優人</th>
            </tr>
            <tr>
                <td className='SelfIntroductionTitle'>フリガナ</td>
                <td className='SelfIntroductionSentence'>ミヤタ ユウト</td>
            </tr>
            <tr>
                <td className='SelfIntroductionTitle'>年齢</td>
                <td className='SelfIntroductionSentence'>23歳</td>
            </tr>
            <tr>
                <td className='SelfIntroductionTitle'>出身大学</td>
                <td className='SelfIntroductionSentence'> 法政大学</td>
            </tr>
    </table>
    </div>
  )
}

export default SelfIntroductionContent

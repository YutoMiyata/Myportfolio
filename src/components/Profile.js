import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Myface from '../images/Myface.jpg'
import "./Profile.css";
import Footer from './Footer';
import ProfilePrograming from './ProfilePrograming';


const Profile = () => {

  return (
    <div>
        <div className='titleBlock'>
            <PersonIcon sx={{ fontSize: 70 }}/>
            <h1>profile</h1>
        </div>
        
        <div className='myprofileBlock'>
            <div className='myprofileImg'>
                <img src = {Myface} />
            </div>
    
            <div className = 'myProfileContent'>
                <h2>自己紹介</h2>
                <table className='profileTable'>
                    <tr>
                        <th className='profileTitle'>名前</th>
                        <th className='profileContent'>宮田優人</th>
                    </tr>
                    <tr>
                        <td className='profileTitle'>フリガナ</td>
                        <td className='profileContent'>ミヤタ ユウト</td>
                    </tr>
                    <tr>
                        <td className='profileTitle'>年齢</td>
                        <td className='profileContent'>22</td>
                    </tr>
                    <tr>
                        <td className='profileTitle'>大学名</td>
                        <td className='profileContent'> 法政大学スポーツ健康学部</td>
                    </tr>
                </table>
            </div>
        </div>

        <ProfilePrograming />
        <Footer />
    </div>
  )
}

export default Profile

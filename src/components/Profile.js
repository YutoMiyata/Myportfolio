import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import "./Profile.css";
import Footer from './Footer';
import ProfilePrograming from './ProfilePrograming';
import Nav from './nav/Nav';
import myface from '../images/yutomiyata_face.png';


const Profile = () => {

  return (
    <div>
        <Nav />
        <div className='titleBlock'>
            <PersonIcon sx={{ fontSize: 70 }}/>
            <h1>PROFILE</h1>
        </div>
        
        <div className='myprofileBlock'>
            <div className='myprofileImg'>
                <img src = {myface} />
            </div>
            
            <div className='myProfileContentBlock'>
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
                                    <td className='profileContent'>22歳</td>
                                </tr>
                                <tr>
                                    <td className='profileTitle'>大学名</td>
                                    <td className='profileContent'> 法政大学スポーツ健康学部</td>
                                </tr>
                        </table>
                    </div>
            </div>

        </div>

        <ProfilePrograming />
        <Footer />
    </div>
  )
}

export default Profile

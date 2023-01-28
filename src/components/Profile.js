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
                <div className='myProfileContentFlex'>
                    <div className='myProfileItem'>
                        <p>名前:</p>
                        <p>フリガナ:</p>
                        <p>年齢:</p>
                        <p>大学名:</p>
                    </div>
                    <div className='myProfileContent'>
                        <p>宮田 優人</p>
                        <p>ミヤタ ユウト</p>
                        <p>22歳</p>
                        <p>法政大学スポーツ健康学部スポーツ健康学科</p>
                    </div>
                </div>
            </div>
        </div>

        <ProfilePrograming />
        <Footer />
    </div>
  )
}

export default Profile

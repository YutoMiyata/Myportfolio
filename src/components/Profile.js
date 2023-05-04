import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Footer from './Footer';
import ProfilePrograming from './ProfilePrograming';
import Nav from './nav/Nav';
import MainTitle from './MainTitle';
import SelfIntroduction from './SelfIntroduction';



const Profile = () => {

  return (
    <div>
        <Nav />
        <MainTitle  MainTitle="PROFILE"  Icon={<PersonIcon sx={{ fontSize: 70 }} />}/>
        <SelfIntroduction />
        <ProfilePrograming />
        <Footer />
    </div>
  )
}

export default Profile

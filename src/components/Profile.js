import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import Footer from './Footer';
import Nav from './nav/Nav';
import MainTitle from './MainTitle';
import SelfIntroduction from './SelfIntroduction';
import ProgramingLearning from './ProgramingLearning';
import Career from './Career';




const Profile = () => {

  return (
    <div>
        <Nav />
        <MainTitle  MainTitle="PROFILE"  Icon={<PersonIcon sx={{ fontSize: 70 }} />}/>
        <SelfIntroduction />
        <Career />
        <ProgramingLearning />
        <Footer />
    </div>
  )
}

export default Profile

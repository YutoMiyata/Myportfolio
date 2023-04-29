import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorksContent from './WorksContent';
import "./Works.css";
import Footer from './Footer';
import WorksContentLocal from './WorksContentLocal';
import Nav from './nav/Nav';
import MainTitle from './MainTitle';

const Works = () => {
  return (
    <div>
      <Nav />
      <MainTitle  MainTitle="WORKS"  Icon={<LightbulbIcon sx={{ fontSize: 70 }}/>} />
      <WorksContent />
      <WorksContentLocal />
      <Footer />
    </div>
  )
}

export default Works

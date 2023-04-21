import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorksContent from './WorksContent';
import "./Works.css";
import Footer from './Footer';
import WorksContentLocal from './WorksContentLocal';
import Nav from './nav/Nav';

const Works = () => {
  return (
    <div>
      <Nav />
      <div className='titleBlock'>
        <LightbulbIcon sx={{ fontSize: 70 }}/>
        <h1>Works</h1>
      </div>
      <WorksContent />
      <WorksContentLocal />
      <Footer />
    </div>
  )
}

export default Works

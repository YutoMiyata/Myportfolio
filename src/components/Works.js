import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorksContent from './WorksContent';
import "./Works.css";
import Footer from './Footer';
import WorksContentLocal from './WorksContentLocal';

const Works = () => {
  return (
    <div>
      <div className='titleBlock'>
        <LightbulbIcon sx={{ fontSize: 70 }}/>
        <h1>WORKS</h1>
      </div>
      <WorksContent />
      <WorksContentLocal />
      <Footer />
    </div>
  )
}

export default Works

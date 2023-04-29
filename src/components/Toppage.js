import React from 'react'
import Helmet from 'react-helmet'
import myProfilephoto from "../images/MyPortfolio.jpg"
import "./Toppage.css"
import Footer from './Footer'
import MyInfoEach from './MyInfoEach'
import Nav from './nav/Nav'
import MainTitle from './MainTitle'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const Toppage = () => {
  return (
    <div>
        <Helmet>
          <title>yuto portfolio</title>
        </Helmet>
        <Nav/>
        <img src={myProfilephoto} className='baseImg' />
        <MainTitle  MainTitle="My Info"  Icon={<ThumbUpAltIcon sx={{ fontSize: 70 }} />}/>
        <MyInfoEach />
        <Footer />
    </div>
  )
}

export default Toppage;

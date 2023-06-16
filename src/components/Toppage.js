import React from 'react'
import Helmet from 'react-helmet'
import myProfilephoto from "../images/main_photo.jpg"
import "./Toppage.css"
import Footer from './Footer'
import MyInfoEach from './MyInfoEach'
import Nav from './nav/Nav'



const Toppage = () => {
  return (
    <div>
        <Helmet>
          <title>yuto portfolio</title>
        </Helmet>
        <Nav/>
        <div className='topPagePhoto'>
          <img src={myProfilephoto} className='baseImg' alt='shasinn'/>
        </div>
        <MyInfoEach />
        <Footer />
    </div>
  )
}

export default Toppage;

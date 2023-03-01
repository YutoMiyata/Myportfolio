import React from 'react'
import Helmet from 'react-helmet'
import myProfilephoto from "../images/MyPortfolio.jpg"
import "./Base.css"
import Footer from './Footer'
import Nav from './nav/Nav'
import TableOfContents from './TableOfContents'


const Base = () => {
  return (
    <div>
        <Helmet>
          <title>yuto portfolio</title>
        </Helmet>
        <Nav />
        <img src={myProfilephoto} className='baseImg' />
        <TableOfContents />
        <Footer />
    </div>
  )
}

export default Base

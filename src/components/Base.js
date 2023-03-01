import React from 'react'
import myProfilephoto from "../images/MyPortfolio.jpg"
import "./Base.css"
import Footer from './Footer'
import Nav from './nav/Nav'
import TableOfContents from './TableOfContents'


const Base = () => {
  return (
    <div>
        <Nav />
        <img src={myProfilephoto} className='baseImg' />
        <TableOfContents />
        <Footer />
    </div>
  )
}

export default Base
